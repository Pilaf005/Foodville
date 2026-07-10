import Category from "@/server/models/Category";
import { serializeCategories } from "@/server/utils/serialize";

export async function listCategories() {
  const docs = await Category.find({ isActive: true }).sort({ order: 1, name: 1 }).lean();
  return serializeCategories(docs);
}
