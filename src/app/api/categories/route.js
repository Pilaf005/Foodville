import { ok, withRoute } from "@/server/utils/apiResponse";
import { listCategories } from "@/server/controllers/category.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";

export const GET = withRoute(async () => {
  const data = await cached("categories:all", 300_000, () => listCategories());
  return ok(data, {
    headers: publicCacheHeaders(300, 86400),
  });
});
