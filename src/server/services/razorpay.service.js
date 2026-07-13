/**
 * Razorpay integration.
 *
 * Flow (the standard, secure one):
 *   1. Server creates a Razorpay Order for the amount WE computed  → order_id
 *   2. Browser opens Razorpay Checkout with that order_id and pays
 *   3. Checkout hands back { order_id, payment_id, signature }
 *   4. Server recomputes HMAC_SHA256(order_id|payment_id, KEY_SECRET) and
 *      compares it to the signature. Only then is the order marked paid.
 *   5. A webhook repeats the confirmation server-to-server as a backstop.
 *
 * The amount is never taken from the client, and the signature can't be forged
 * without the key secret — so a tampered response can't mark an order paid.
 */
import crypto from "node:crypto";
import Razorpay from "razorpay";
import { env } from "@/server/config/env";
import { AppError } from "@/server/utils/apiError";

let client = null;

function razorpay() {
  if (client) return client;
  if (!env.razorpay.keyId || !env.razorpay.keySecret) {
    throw new AppError(
      "Payments are not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
      503,
      "PAYMENTS_NOT_CONFIGURED"
    );
  }
  client = new Razorpay({ key_id: env.razorpay.keyId, key_secret: env.razorpay.keySecret });
  return client;
}

/** Razorpay works in the smallest currency unit (paise). */
export const toPaise = (rupees) => Math.round(Number(rupees) * 100);

export async function createRazorpayOrder({ amount, receipt, notes }) {
  const order = await razorpay().orders.create({
    amount: toPaise(amount),
    currency: env.currency || "INR",
    receipt: String(receipt).slice(0, 40),
    notes: notes || {},
  });
  return order; // { id, amount, currency, status, ... }
}

/** Verify the signature Checkout returns to the browser. */
export function verifyCheckoutSignature({ razorpayOrderId, razorpayPaymentId, signature }) {
  const expected = crypto
    .createHmac("sha256", env.razorpay.keySecret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");
  return timingSafeEqual(expected, signature);
}

/** Verify the X-Razorpay-Signature header on a webhook (raw body, not parsed). */
export function verifyWebhookSignature(rawBody, signature) {
  if (!env.razorpay.webhookSecret) return false;
  const expected = crypto
    .createHmac("sha256", env.razorpay.webhookSecret)
    .update(rawBody)
    .digest("hex");
  return timingSafeEqual(expected, signature);
}

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(String(a || ""));
  const bufB = Buffer.from(String(b || ""));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export async function fetchPayment(paymentId) {
  return razorpay().payments.fetch(paymentId);
}

/** Refund a captured payment (full amount in rupees). */
export async function refundPayment(paymentId, amountRupees) {
  return razorpay().payments.refund(paymentId, {
    amount: toPaise(amountRupees),
    speed: "normal",
  });
}
