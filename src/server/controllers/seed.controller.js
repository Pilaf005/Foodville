/**
 * Seed logic — migrates the in-repo catalog (src/data/*) into MongoDB.
 * Runs inside the Next.js runtime (via /api/dev/seed) so the ESM data modules
 * import cleanly. Idempotent: wipes then re-inserts the catalog collections.
 */
import { products, categories as canonicalCategories } from "@/data/products";
import { blogs } from "@/data/blogs";
import { CATEGORIES as HOME_CATEGORIES } from "@/features/home/constants/categories";

import Product from "@/server/models/Product";
import Category from "@/server/models/Category";
import Blog from "@/server/models/Blog";
import { cacheClear } from "@/server/utils/cache";

const toProductDoc = ({ id, ...rest }) => ({ numericId: id, ...rest });
const toBlogDoc = ({ id, ...rest }) => ({ numericId: id, ...rest });
const toCategoryDoc = (c, index) => {
  const home = HOME_CATEGORIES.find((h) => h.id === c.id);
  return {
    slug: c.id,
    name: c.name,
    image: home?.image || "",
    bgColor: home?.bgColor || "bg-white",
    order: index,
  };
};

export async function seedCatalog() {
  const productDocs = products.map(toProductDoc);
  const categoryDocs = canonicalCategories.map(toCategoryDoc);
  const blogDocs = blogs.map(toBlogDoc);

  await Promise.all([Product.deleteMany({}), Category.deleteMany({}), Blog.deleteMany({})]);

  await Category.insertMany(categoryDocs, { ordered: false });
  await Product.insertMany(productDocs, { ordered: false });
  await Blog.insertMany(blogDocs, { ordered: false });

  cacheClear(); // catalog changed — drop any stale cached reads

  const [productCount, categoryCount, blogCount] = await Promise.all([
    Product.countDocuments(),
    Category.countDocuments(),
    Blog.countDocuments(),
  ]);

  const byCategory = await Product.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  return {
    products: productCount,
    categories: categoryCount,
    blogs: blogCount,
    byCategory: Object.fromEntries(byCategory.map((r) => [r._id, r.count])),
  };
}
