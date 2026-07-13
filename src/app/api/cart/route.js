import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getCart, addToCart, clearCart, replaceCart } from "@/server/controllers/cart.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/cart
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await getCart(userId));
});

// PUT /api/cart  { items: [{productId, qty, unit}] } — replace the whole cart
// (used just before checkout so the order matches the on-screen cart exactly)
export const PUT = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const { items = [] } = await req.json().catch(() => ({}));
  return ok(await replaceCart(userId, items));
});

// POST /api/cart  { productId, qty, unit }
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = await req.json().catch(() => ({}));
  return ok(await addToCart(userId, body));
});

// DELETE /api/cart — empty the cart
export const DELETE = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await clearCart(userId));
});
