import { ok, withRoute } from "@/server/utils/apiResponse";
import { listCategories } from "@/server/controllers/category.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = withRoute(async () => {
  const data = await listCategories();
  return ok(data, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
});
