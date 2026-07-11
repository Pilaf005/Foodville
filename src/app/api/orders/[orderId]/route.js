import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getOrder } from "@/server/controllers/order.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/orders/:orderId — scoped to the signed-in user
export const GET = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  const { orderId } = await params;
  return ok(await getOrder(userId, orderId));
});
