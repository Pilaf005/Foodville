"use client";

import { use } from "react";
import ProductGrid from "@/features/products/components/ProductGrid";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { ProductGridSkeleton } from "@/components/feedback/Skeleton";

export default function CategoryPage({ params: paramsPromise }) {
  const { id } = use(paramsPromise);

  const { categories } = useCategories();
  // "all" isn't a real category — omit the filter to list everything.
  const { products, meta, isPending } = useProducts({
    ...(id === "all" ? {} : { category: id }),
    limit: 60,
  });

  const categoryName = categories.find((c) => c.id === id)?.name ?? id;
  const count = meta?.total ?? products.length;

  return (
    <div className="space-y-6 pb-12">
      {/* Grid Header */}
      <div className="border-b border-cardline pb-3 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">
          {categoryName}
        </h2>
        <span className="text-xs font-bold text-muted uppercase tracking-wider">
          {isPending ? "…" : `${count} ${count === 1 ? "Product" : "Products"} found`}
        </span>
      </div>

      {/* Products Grid */}
      {isPending ? (
        <ProductGridSkeleton count={10} />
      ) : products.length === 0 ? (
        <div className="text-center py-20 bg-white/50 border border-cardline rounded-3xl space-y-3">
          <span className="text-4xl">🛒</span>
          <h3 className="font-bold text-ink">No Products Available</h3>
          <p className="text-xs text-muted">More fresh stock coming soon!</p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
