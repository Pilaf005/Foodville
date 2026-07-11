import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { initiatePayment } from "@/server/controllers/payment.controller";
import { initiatePaymentSchema } from "@/server/validators/commerce.validators";
import { rateLimit } from "@/server/utils/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/payments/initiate  { orderId } → Razorpay order for Checkout
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  rateLimit(req, { key: "pay-initiate", limit: 20, windowMs: 60_000 });

  const { orderId } = initiatePaymentSchema.parse(await req.json().catch(() => ({})));
  return ok(await initiatePayment(userId, orderId));
});
