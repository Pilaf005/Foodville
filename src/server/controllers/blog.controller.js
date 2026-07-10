import Blog from "@/server/models/Blog";
import { notFound } from "@/server/utils/apiError";
import { serializeBlog, serializeBlogs } from "@/server/utils/serialize";

export async function listBlogs() {
  const docs = await Blog.find({ isActive: true }).sort({ numericId: 1 }).lean();
  return serializeBlogs(docs);
}

export async function getBlogBySlug(slug) {
  const doc = await Blog.findOne({ slug: String(slug).toLowerCase(), isActive: true }).lean();
  if (!doc) throw notFound("Article not found");
  return serializeBlog(doc);
}
