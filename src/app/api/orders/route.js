import { ok, created, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { listOrders, createOrder } from "@/server/controllers/order.controller";
import { createOrderSchema } from "@/server/validators/commerce.validators";
import { rateLimit } from "@/server/utils/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/orders — the signed-in user's order history
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await listOrders(userId));
});

// POST /api/orders — place an order from the server-side cart
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  rateLimit(req, { key: "order-create", limit: 10, windowMs: 60_000 });

  const body = createOrderSchema.parse(await req.json().catch(() => ({})));
  return created(await createOrder(userId, body));
});
