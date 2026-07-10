"use client";

import { use } from "react";
import { getProductsByCategory, getCategoryName } from "@/data/products";
import ProductGrid from "@/features/products/components/ProductGrid";

// Category name overrides for IDs that getCategoryName returns "Other" for
const CATEGORY_NAME_MAP = {
  all:    "All Products",
  combos: "Combo Packs",
  bulk:   "Bulk Products",
};

function resolveCategoryName(id) {
  if (CATEGORY_NAME_MAP[id]) return CATEGORY_NAME_MAP[id];
  const name = getCategoryName(id);
  return name === "Other" ? id : name;
}

export default function CategoryPage({ params: paramsPromise }) {
  const { id } = use(paramsPromise);

  // Both functions are synchronous — no useEffect or loading state needed
  const categoryName = resolveCategoryName(id);
  const productsList = getProductsByCategory(id);

  return (
    <div className="space-y-6 pb-12">
      {/* Grid Header */}
      <div className="border-b border-cardline pb-3 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">
          {categoryName}
        </h2>
        <span className="text-xs font-bold text-muted uppercase tracking-wider">
          {productsList.length} {productsList.length === 1 ? "Product" : "Products"} found
        </span>
      </div>

      {/* Products Grid */}
      {productsList.length === 0 ? (
        <div className="text-center py-20 bg-white/50 border border-cardline rounded-3xl space-y-3">
          <span className="text-4xl">🛒</span>
          <h3 className="font-bold text-ink">No Products Available</h3>
          <p className="text-xs text-muted">More fresh stock coming soon!</p>
        </div>
      ) : (
        <ProductGrid products={productsList} />
      )}
    </div>
  );
}
