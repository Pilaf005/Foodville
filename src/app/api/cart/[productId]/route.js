import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { updateCartItem, removeFromCart } from "@/server/controllers/cart.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// PUT /api/cart/:productId  { qty, unit }
export const PUT = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  const { productId } = await params;
  const body = await req.json().catch(() => ({}));
  return ok(await updateCartItem(userId, productId, body));
});

// DELETE /api/cart/:productId
export const DELETE = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  const { productId } = await params;
  return ok(await removeFromCart(userId, productId));
});
