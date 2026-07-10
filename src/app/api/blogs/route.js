import { ok, withRoute } from "@/server/utils/apiResponse";
import { listBlogs } from "@/server/controllers/blog.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/blogs — all published articles.
export const GET = withRoute(async () => {
  return ok(await listBlogs());
});
