import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { verifyPayment } from "@/server/controllers/payment.controller";
import { verifyPaymentSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/payments/verify  { razorpayOrderId, razorpayPaymentId, signature }
// The signature is recomputed server-side — this is what actually marks an
// order paid. A forged response can't pass it without the key secret.
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = verifyPaymentSchema.parse(await req.json().catch(() => ({})));
  return ok(await verifyPayment(userId, body));
});
