/**
 * Product business logic. Route handlers stay thin and call these.
 * All reads use `.lean()` for low latency and are re-shaped by serializers.
 */
import Product from "@/server/models/Product";
import { notFound } from "@/server/utils/apiError";
import { serializeProduct, serializeProducts } from "@/server/utils/serialize";

const SORT_MAP = {
  price_asc: { price: 1 },
  price_desc: { price: -1 },
  rating: { rating: -1 },
  newest: { createdAt: -1 },
  relevance: { rating: -1, numericId: 1 },
};

export async function listProducts(query) {
  const { category, shopBy, search, sort, topSellers, minPrice, maxPrice, page, limit } = query;

  const filter = { isActive: true };
  if (category) {
    filter.$or = [
      { category },
      { extraCategories: category }
    ];
  }
  if (shopBy) filter.shopBy = shopBy;
  if (topSellers) filter.rating = { $gte: 4.5 };
  if (minPrice != null || maxPrice != null) {
    filter.price = {
      ...(minPrice != null ? { $gte: minPrice } : {}),
      ...(maxPrice != null ? { $lte: maxPrice } : {}),
    };
  }
  if (search) {
    const rx = new RegExp(escapeRegex(search), "i");
    filter.$or = [{ name: rx }, { description: rx }, { tags: rx }];
  }

  const sortSpec = SORT_MAP[sort] || SORT_MAP.relevance;
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Product.find(filter).sort(sortSpec).skip(skip).limit(limit).lean(),
    Product.countDocuments(filter),
  ]);

  return {
    items: serializeProducts(items),
    meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
  };
}

export async function getProductBySlug(slug) {
  const doc = await Product.findOne({ slug: String(slug).toLowerCase(), isActive: true }).lean();
  if (!doc) throw notFound("Product not found");
  return serializeProduct(doc);
}

export async function getSimilarProducts(key, limit = 8) {
  // `key` may be a numericId ("1") or a slug ("red-onion-powder").
  const isNumeric = /^\d+$/.test(String(key));
  const baseQuery = isNumeric ? { numericId: Number(key) } : { slug: String(key).toLowerCase() };
  const base = await Product.findOne(baseQuery).select("category numericId").lean();
  if (!base) return [];
  const docs = await Product.find({
    category: base.category,
    numericId: { $ne: base.numericId },
    isActive: true,
  })
    .sort({ rating: -1 })
    .limit(limit)
    .lean();
  return serializeProducts(docs);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
