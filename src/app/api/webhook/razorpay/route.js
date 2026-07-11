import { NextResponse } from "next/server";
import { connectDB } from "@/server/db/mongoose";
import { handleWebhook } from "@/server/controllers/payment.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/webhook/razorpay
 *
 * Razorpay calls this server-to-server. It is deliberately NOT behind auth
 * (Razorpay has no cookie) — instead it is authenticated by the
 * X-Razorpay-Signature HMAC over the RAW body.
 *
 * We read the body as text and hand the untouched bytes to the verifier:
 * parsing and re-serialising the JSON would alter it and break the signature.
 *
 * Always returns 200 on handled events so Razorpay stops retrying; a bad
 * signature returns 400.
 */
export async function POST(req) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    await connectDB();
    const result = await handleWebhook(rawBody, signature);

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    const status = err?.status === 400 ? 400 : 500;
    // eslint-disable-next-line no-console
    console.error("[razorpay-webhook]", err?.message);
    return NextResponse.json(
      { success: false, error: { code: err?.code || "WEBHOOK_ERROR", message: err?.message || "Webhook failed" } },
      { status }
    );
  }
}
