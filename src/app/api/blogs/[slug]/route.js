import { ok, withRoute } from "@/server/utils/apiResponse";
import { getBlogBySlug } from "@/server/controllers/blog.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/blogs/:slug — single article.
export const GET = withRoute(async (_req, { params }) => {
  const { slug } = await params;
  const blog = await cached(`blog:${slug}`, 10 * 60_000, () => getBlogBySlug(slug));
  return ok(blog, { headers: publicCacheHeaders(600, 3600) });
});
