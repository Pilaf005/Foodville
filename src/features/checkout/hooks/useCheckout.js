"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import orderService from "@/features/orders/services/order.service";
import paymentService from "@/features/checkout/services/payment.service";
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
 * Places an order, then (for online payments) runs the Razorpay flow:
 *   create order → open Checkout → verify signature server-side → confirmed.
 *
 * COD skips straight to the confirmation page.
 */
export function useCheckout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { clearCart, refreshCart } = useCart();
  const [isPlacing, setIsPlacing] = useState(false);

  const finish = useCallback(
    async (orderId) => {
      await Promise.allSettled([refreshCart?.()]);
      queryClient.invalidateQueries({ queryKey: queryKeys.orders.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
      router.push(`/order-confirmed?orderId=${encodeURIComponent(orderId)}`);
    },
    [queryClient, refreshCart, router]
  );

  const placeOrder = useCallback(
    async ({ addressId, address, paymentMethod, user }) => {
      setIsPlacing(true);
      try {
        // 1. Create the order. The server prices it from OUR catalog.
        const order = await orderService.create({ addressId, address, paymentMethod });

        // 2a. Cash on delivery — already confirmed.
        if (paymentMethod === "cod") {
          clearCart();
          toast.success("Order placed!");
          await finish(order.orderId);
          return order;
        }

        // 2b. Online — create the gateway order and open Checkout.
        const payment = await paymentService.initiate(order.orderId);
        const Razorpay = await loadRazorpay();

        await new Promise((resolve, reject) => {
          const rzp = new Razorpay({
            key: payment.keyId,
            amount: payment.amount * 100, // paise
            currency: payment.currency,
            name: "Foodville",
            description: `Order ${order.orderId}`,
            order_id: payment.razorpayOrderId,
            prefill: {
              name: address?.receiverName || user?.fullName || "",
              email: user?.email || "",
              contact: address?.phone || user?.phone || "",
            },
            theme: { color: "#6B7F59" },
            handler: async (response) => {
              try {
                // 3. Only the server can decide this was really paid.
                await paymentService.verify({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                });
                clearCart();
                toast.success("Payment successful!");
                await finish(order.orderId);
                resolve();
              } catch (err) {
                toast.error(err?.message || "We couldn't verify that payment.");
                reject(err);
              }
            },
            modal: {
              ondismiss: () => {
                toast.info("Payment cancelled. Your order is saved as pending.");
                reject(new Error("dismissed"));
              },
            },
          });

          rzp.on("payment.failed", (resp) => {
            toast.error(resp?.error?.description || "Payment failed.");
            reject(new Error("payment failed"));
          });

          rzp.open();
        });

        return order;
      } catch (err) {
        if (err?.message !== "dismissed" && err?.message !== "payment failed") {
          toast.error(err?.message || "Could not place your order.");
        }
        throw err;
      } finally {
        setIsPlacing(false);
      }
    },
    [clearCart, finish]
  );

  return { placeOrder, isPlacing };
}
