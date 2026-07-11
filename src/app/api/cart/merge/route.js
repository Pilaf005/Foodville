import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { mergeGuestCart } from "@/server/controllers/cart.controller";
import { mergeGuestWishlist } from "@/server/controllers/wishlist.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/cart/merge  { items: [{productId, qty, unit}], wishlist: [productId] }
 * Called once, right after sign-in, to fold the guest's localStorage cart and
 * wishlist into their account.
 */
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const { items = [], wishlist = [] } = await req.json().catch(() => ({}));

  const cart = await mergeGuestCart(userId, items);
  const wishlistProducts = await mergeGuestWishlist(userId, wishlist);

  return ok({ cart, wishlist: wishlistProducts });
});
