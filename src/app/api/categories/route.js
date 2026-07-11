import { ok, withRoute } from "@/server/utils/apiResponse";
import { listCategories } from "@/server/controllers/category.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/categories — all active categories (rarely changes; cached hard).
export const GET = withRoute(async () => {
  const data = await cached("categories:all", 10 * 60_000, listCategories);
  return ok(data, { headers: publicCacheHeaders(600, 3600) });
});
