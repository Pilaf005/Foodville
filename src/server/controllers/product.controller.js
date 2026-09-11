/**
 * Product business logic. Route handlers stay thin and call these.
 * All reads use `.lean()` for low latency and are re-shaped by serializers.
 */
import Product from "@/server/models/Product";
import { notFound } from "@/server/utils/apiError";
import { serializeProduct, serializeProducts } from "@/server/utils/serialize";
import { findBestMatch, fuzzySearchProducts } from "@/server/utils/fuzzyMatch";

const SORT_MAP = {
  price_asc: { isComingSoon: 1, price: 1 },
  price_desc: { isComingSoon: 1, price: -1 },
  rating: { isComingSoon: 1, rating: -1 },
  newest: { isComingSoon: 1, createdAt: -1 },
  relevance: { isComingSoon: 1, rating: -1, numericId: 1 },
};

export async function listProducts(query) {
  const { category, shopBy, search, sort, topSellers, showInReels, minPrice, maxPrice, page, limit } = query;

  const filter = { isActive: true };
  if (showInReels) {
    filter.showInReels = true;
    filter.video = { $ne: "" };
  }
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

  let [items, total] = await Promise.all([
    Product.find(filter).sort(sortSpec).skip(skip).limit(limit).lean(),
    Product.countDocuments(filter),
  ]);

  let didYouMean = null;
  if (search && total === 0) {
    const activeProducts = await Product.find({ isActive: true }).select("name tags slug").lean();
    const candidates = Array.from(
      new Set(activeProducts.flatMap(p => [p.name, ...(p.tags || [])]))
    ).filter(Boolean);
    
    didYouMean = findBestMatch(search, candidates);
    
    if (didYouMean) {
      const rx = new RegExp(escapeRegex(didYouMean), "i");
      filter.$or = [{ name: rx }, { description: rx }, { tags: rx }];
      
      [items, total] = await Promise.all([
        Product.find(filter).sort(sortSpec).skip(skip).limit(limit).lean(),
        Product.countDocuments(filter),
      ]);
    }
  }

  const meta = { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) };
  if (didYouMean) meta.didYouMean = didYouMean;

  return {
    items: serializeProducts(items),
    meta,
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
    .sort({ isComingSoon: 1, rating: -1 })
    .limit(limit)
    .lean();
  return serializeProducts(docs);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function searchSuggestions(query) {
  if (!query) return { products: [], categories: [], didYouMean: null };

  const q = String(query).toLowerCase();
  const rx = new RegExp(escapeRegex(q), "i");
  let didYouMean = null;

  let products = await Product.find({
    isActive: true,
    $or: [{ name: rx }, { tags: rx }]
  })
    .sort({ isComingSoon: 1 })
    .limit(5)
    .lean();

  if (products.length === 0) {
    const allProducts = await Product.find({ isActive: true }).select("name tags slug price image category rating units isComingSoon").lean();
    const candidates = Array.from(
      new Set(allProducts.flatMap(p => [p.name, ...(p.tags || [])]))
    ).filter(Boolean);
    
    didYouMean = findBestMatch(q, candidates);
    const searchTarget = didYouMean || q;
    
    products = fuzzySearchProducts(searchTarget, allProducts, 5);
  }

  const ALL_CATEGORIES = ["powders", "seasoning", "seeds", "dryfruits", "wellness", "combos", "bulk"];
  const categories = ALL_CATEGORIES.filter(c => 
    c.toLowerCase().includes(q) || 
    (didYouMean && c.toLowerCase().includes(didYouMean.toLowerCase()))
  );

  return {
    products: serializeProducts(products),
    categories,
    didYouMean
  };
}
