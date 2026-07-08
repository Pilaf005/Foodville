"use client";

import { use, useState, useEffect } from "react";
import { getProductsByCategory, getCategoryName } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function CategoryPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { id } = params;

  const [categoryName, setCategoryName] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Resolve category name
    let name = "";
    if (id === "all") {
      name = "All Products";
    } else {
      name = getCategoryName(id);
      if (name === "Other") {
        if (id === "combos") name = "Combo Packs";
        else if (id === "bulk") name = "Bulk Products";
      }
    }
    setCategoryName(name);

    // Resolve products for this category
    const list = getProductsByCategory(id);
    setProductsList(list);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center text-muted">
        <svg className="animate-spin h-8 w-8 text-olive" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="ml-2 font-medium">Loading category products...</span>
      </div>
    );
  }

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
