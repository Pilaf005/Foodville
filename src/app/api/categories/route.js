import { ok, withRoute } from "@/server/utils/apiResponse";
import { listCategories } from "@/server/controllers/category.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/categories — all active categories.
export const GET = withRoute(async () => {
  return ok(await listCategories());
});
