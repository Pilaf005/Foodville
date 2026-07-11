import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getWishlist } from "@/server/controllers/wishlist.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/wishlist — full product objects
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await getWishlist(userId));
});
