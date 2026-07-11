import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getCart, addToCart, clearCart } from "@/server/controllers/cart.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/cart
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await getCart(userId));
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
