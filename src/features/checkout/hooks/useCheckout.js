"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import orderService from "@/features/orders/services/order.service";
import paymentService from "@/features/checkout/services/payment.service";
import cartService from "@/features/cart/services/cart.service";
import { useCart } from "@/context/CartContext";
import { queryKeys } from "@/lib/queryKeys";

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

/** Load Razorpay's Checkout script once, on demand. */
function loadRazorpay() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("no window"));
    if (window.Razorpay) return resolve(window.Razorpay);

    const existing = document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(window.Razorpay));
      existing.addEventListener("error", () => reject(new Error("Failed to load Razorpay")));
      return;
    }

    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.async = true;
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => reject(new Error("Failed to load the payment gateway."));
    document.body.appendChild(script);
  });
}

/**
 * Checkout + payment flows.
 *
 * placeOrder()      — create an order from the cart; COD confirms immediately,
 *                     online opens Razorpay and verifies the signature server-side.
 * payPendingOrder() — RECOVERY for the abandoned-payment case: if the customer
 *                     closed the Razorpay modal (or the tab) mid-payment, the
 *                     order sits as `pending`. The order page offers a
 *                     "Complete payment" button that reuses the same flow on
 *                     the SAME order — no duplicate order is created.
 */
export function useCheckout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { cart, refreshCart } = useCart();
  const [isPlacing, setIsPlacing] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const finish = useCallback(
    async (orderId) => {
      // The server already removed the ORDERED items from the cart (anything
      // added afterwards survives) — just re-sync and refresh queries.
      await Promise.allSettled([refreshCart?.()]);
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
      router.push(`/order-confirmed?orderId=${encodeURIComponent(orderId)}`);
    },
    [queryClient, refreshCart, router]
  );

  /** Open Razorpay Checkout for an order and verify the result server-side. */
  const runRazorpayFlow = useCallback(
    async ({ orderId, prefill }) => {
      const payment = await paymentService.initiate(orderId);
      const Razorpay = await loadRazorpay();

      await new Promise((resolve, reject) => {
        const rzp = new Razorpay({
          key: payment.keyId,
          amount: payment.amount * 100, // paise
          currency: payment.currency,
          name: "Foodville",
          description: `Order ${orderId}`,
          order_id: payment.razorpayOrderId,
          prefill,
          theme: { color: "#6B7F59" },
          handler: async (response) => {
            try {
              // Only the server can decide this was really paid.
              await paymentService.verify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              });
              toast.success("Payment successful!");
              await finish(orderId);
              resolve();
            } catch (err) {
              toast.error(err?.message || "We couldn't verify that payment.");
              reject(err);
            }
          },
          modal: {
            ondismiss: () => {
              toast.info(
                "Payment not completed. Your order is saved — you can finish paying from My Orders."
              );
              queryClient.invalidateQueries({ queryKey: queryKeys.orders.all });
              reject(new Error("dismissed"));
            },
          },
        });

        rzp.on("payment.failed", (resp) => {
          toast.error(resp?.error?.description || "Payment failed. You can retry from My Orders.");
          reject(new Error("payment failed"));
        });

        rzp.open();
      });
    },
    [finish, queryClient]
  );

  const placeOrder = useCallback(
    async ({ addressId, address, paymentMethod, user }) => {
      setIsPlacing(true);
      try {
        if (!cart.length) {
          toast.error("Your cart is empty.", { id: "checkout" });
          throw new Error("empty cart");
        }

        // 0. Sync the ON-SCREEN cart to the server first. This closes the gap
        //    where an earlier add-to-cart call failed silently and the server
        //    cart was empty — which used to abort checkout with a confusing
        //    "cart is empty" error before Razorpay could even open.
        await cartService.replace(
          cart.map((i) => ({ productId: i.id, qty: i.qty, unit: i.unit || "" }))
        );

        // 1. Create the order. The server prices it from OUR catalog.
        const order = await orderService.create({ addressId, address, paymentMethod });

        // 2a. Cash on delivery — already confirmed.
        if (paymentMethod === "cod") {
          toast.success("Order placed!");
          await finish(order.orderId);
          return order;
        }

        // 2b. Online — Razorpay Checkout on the fresh order.
        await runRazorpayFlow({
          orderId: order.orderId,
          prefill: {
            name: address?.receiverName || user?.fullName || "",
            email: user?.email || "",
            contact: address?.phone || user?.phone || "",
          },
        });

        return order;
      } catch (err) {
        if (!["dismissed", "payment failed", "empty cart"].includes(err?.message)) {
          toast.error(err?.message || "Could not place your order.", { id: "checkout" });
        }
        throw err;
      } finally {
        setIsPlacing(false);
      }
    },
    [cart, finish, runRazorpayFlow]
  );

  /** Resume payment on an existing pending online order (no new order). */
  const payPendingOrder = useCallback(
    async (order, user) => {
      setIsPaying(true);
      try {
        await runRazorpayFlow({
          orderId: order.orderId,
          prefill: {
            name: order.address?.receiverName || user?.fullName || "",
            email: user?.email || "",
            contact: order.address?.phone || user?.phone || "",
          },
        });
      } catch (err) {
        if (err?.message !== "dismissed" && err?.message !== "payment failed") {
          toast.error(err?.message || "Could not start the payment.");
        }
        throw err;
      } finally {
        setIsPaying(false);
      }
    },
    [runRazorpayFlow]
  );

  return { placeOrder, payPendingOrder, isPlacing, isPaying };
}
