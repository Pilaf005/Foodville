import { ok, withRoute } from "@/server/utils/apiResponse";
import { listBlogs } from "@/server/controllers/blog.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/blogs — all published articles.
export const GET = withRoute(async () => {
  const data = await cached("blogs:all", 10 * 60_000, listBlogs);
  return ok(data, { headers: publicCacheHeaders(600, 3600) });
});
