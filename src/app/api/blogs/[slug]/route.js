import { ok, withRoute } from "@/server/utils/apiResponse";
import { getBlogBySlug } from "@/server/controllers/blog.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/blogs/:slug — single article.
export const GET = withRoute(async (_req, { params }) => {
  const { slug } = await params;
  return ok(await getBlogBySlug(slug));
});
