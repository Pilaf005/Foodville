/**
 * Payments (Razorpay).
 *
 * initiate() creates a Razorpay order for the amount WE stored on our order.
 * verify()   checks the HMAC signature before marking anything paid.
 * handleWebhook() does the same server-to-server, so a customer closing their
 *            browser mid-payment can't leave a paid order stuck as "pending".
 */
import Order from "@/server/models/Order";
import Payment from "@/server/models/Payment";
import { env } from "@/server/config/env";
import { badRequest, notFound } from "@/server/utils/apiError";
import {
  createRazorpayOrder,
  verifyCheckoutSignature,
  verifyWebhookSignature,
} from "@/server/services/razorpay.service";
import { finaliseOrder } from "@/server/controllers/order.controller";

/** Step 1 — create the gateway order. Returns what Checkout needs. */
export async function initiatePayment(userId, orderId) {
  const order = await Order.findOne({ orderId, user: userId });
  if (!order) throw notFound("Order not found.");
  if (order.paymentMethod !== "razorpay") throw badRequest("This order is not an online payment.");
  if (order.paymentStatus === "paid") throw badRequest("This order is already paid.");

  // Reuse an existing gateway order if the user retries.
  let razorpayOrderId = order.razorpay?.orderId;
  if (!razorpayOrderId) {
    const rzpOrder = await createRazorpayOrder({
      amount: order.amounts.total, // OUR amount, not the client's
      receipt: order.orderId,
      notes: { orderId: order.orderId, userId: String(userId) },
    });
    razorpayOrderId = rzpOrder.id;
    order.razorpay = { ...(order.razorpay || {}), orderId: razorpayOrderId };
    await order.save();

    await Payment.create({
      order: order._id,
      orderId: order.orderId,
      user: userId,
      razorpayOrderId,
      amount: order.amounts.total,
      currency: env.currency,
      status: "created",
      source: "checkout",
      raw: rzpOrder,
    });
  }

  return {
    orderId: order.orderId,
    razorpayOrderId,
    amount: order.amounts.total,
    currency: env.currency,
    // The publishable key is served from the SERVER at request time (never a
    // NEXT_PUBLIC_* build-time constant). That's what makes going live a pure
    // env change: swap RAZORPAY_KEY_ID/SECRET to the rzp_live_ pair and restart
    // — no rebuild, no code edit, and the browser can't get a stale test key.
    keyId: env.razorpay.keyId,
    mode: env.razorpay.keyId.startsWith("rzp_live_") ? "live" : "test",
  };
}

/** Step 2 — verify the signature Checkout returned, then mark the order paid. */
export async function verifyPayment(userId, { razorpayOrderId, razorpayPaymentId, signature }) {
  const order = await Order.findOne({ "razorpay.orderId": razorpayOrderId, user: userId });
  if (!order) throw notFound("Order not found for this payment.");

  const valid = verifyCheckoutSignature({ razorpayOrderId, razorpayPaymentId, signature });

  if (!valid) {
    order.paymentStatus = "failed";
    order.timeline.push({ status: "pending", at: new Date(), note: "Payment verification failed" });
    await order.save();

    await Payment.create({
      order: order._id,
      orderId: order.orderId,
      user: userId,
      razorpayOrderId,
      razorpayPaymentId,
      amount: order.amounts.total,
      status: "failed",
      source: "checkout",
    });

    throw badRequest("Payment verification failed. If you were charged, it will be auto-refunded.");
  }

  await markPaid(order, { razorpayPaymentId, signature, source: "checkout" });
  return { orderId: order.orderId, paymentStatus: order.paymentStatus, status: order.status };
}

/** Idempotent: safe to call from both the browser callback and the webhook. */
async function markPaid(order, { razorpayPaymentId, signature, method, source }) {
  if (order.paymentStatus === "paid") return order;

  order.paymentStatus = "paid";
  order.status = "placed";
  order.razorpay = {
    ...(order.razorpay || {}),
    paymentId: razorpayPaymentId,
    ...(signature ? { signature } : {}),
  };
  order.timeline.push({ status: "placed", at: new Date(), note: "Payment received (Order Placed)" });
  await order.save();

  await Payment.create({
    order: order._id,
    orderId: order.orderId,
    user: order.user,
    razorpayOrderId: order.razorpay.orderId,
    razorpayPaymentId,
    razorpaySignature: signature,
    amount: order.amounts.total,
    method: method || "",
    status: "captured",
    source: source || "checkout",
  });

  await finaliseOrder(order);
  return order;
}

/**
 * Webhook backstop. `rawBody` MUST be the untouched request text — re-serialising
 * the JSON would change the bytes and break the signature.
 */
export async function handleWebhook(rawBody, signature) {
  if (!verifyWebhookSignature(rawBody, signature)) {
    throw badRequest("Invalid webhook signature.");
  }

  const event = JSON.parse(rawBody);
  const type = event?.event;

  const entity = event?.payload?.payment?.entity;
  if (!entity) return { ignored: true, event: type };

  const razorpayOrderId = entity.order_id;
  const order = await Order.findOne({ "razorpay.orderId": razorpayOrderId });
  if (!order) return { ignored: true, reason: "unknown order", event: type };

  if (type === "payment.captured" || type === "order.paid") {
    await markPaid(order, {
      razorpayPaymentId: entity.id,
      method: entity.method,
      source: "webhook",
    });
    return { handled: true, event: type, orderId: order.orderId };
  }

  if (type === "payment.failed" && order.paymentStatus !== "paid") {
    order.paymentStatus = "failed";
    await order.save();
    await Payment.create({
      order: order._id,
      orderId: order.orderId,
      user: order.user,
      razorpayOrderId,
      razorpayPaymentId: entity.id,
      amount: order.amounts.total,
      status: "failed",
      source: "webhook",
      raw: entity,
    });
    return { handled: true, event: type, orderId: order.orderId };
  }

  return { ignored: true, event: type };
}
