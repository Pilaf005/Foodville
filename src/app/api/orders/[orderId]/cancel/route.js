import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { cancelOwnOrder } from "@/server/controllers/order.controller";
import { rateLimit } from "@/server/utils/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/orders/:orderId/cancel — customer cancels their own order
// (allowed until it ships; paid online orders are auto-refunded).
export const POST = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  rateLimit(req, { key: "order-cancel", limit: 10, windowMs: 60_000 });

  const { orderId } = await params;
  return ok(await cancelOwnOrder(userId, orderId));
});
