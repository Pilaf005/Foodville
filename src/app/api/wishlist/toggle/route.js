import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { toggleWishlist } from "@/server/controllers/wishlist.controller";
import { badRequest } from "@/server/utils/apiError";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/wishlist/toggle  { productId }
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const { productId } = await req.json().catch(() => ({}));
  if (!productId) throw badRequest("A productId is required.");
  return ok(await toggleWishlist(userId, productId));
});
