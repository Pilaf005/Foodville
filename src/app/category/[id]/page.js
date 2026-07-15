"use client";

import { use } from "react";
import Link from "next/link";
import ProductGrid from "@/features/products/components/ProductGrid";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { ProductGridSkeleton } from "@/components/feedback/Skeleton";
import CategoryFilter from "@/features/categories/components/CategoryFilter";

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
    <div className="pb-[20px] sm:pb-8">
      {/* Categories horizontal list */}
      <CategoryFilter active={id} />

      {/* Grid Header & Breadcrumbs */}
      <div className="sticky top-[57px] sm:relative z-20 bg-cream/95 backdrop-blur px-4 sm:px-0 -mx-4 sm:mx-0 -mt-1.5 sm:-mt-3.5 py-3 sm:pt-2 sm:pb-3 flex items-center justify-between border-b border-cardline shadow-sm sm:shadow-none">
        {/* Breadcrumb path back to home */}
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-muted uppercase tracking-wider select-none">
          <Link href="/" className="hover:text-olive flex items-center gap-1 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </Link>
          <span className="text-muted/40 font-bold">/</span>
          <span className="text-ink font-black truncate max-w-[200px]">{categoryName}</span>
        </div>

        <span className="text-xs font-bold text-muted uppercase tracking-wider">
          {isPending ? "…" : `${count} ${count === 1 ? "Product" : "Products"} found`}
        </span>
      </div>

      <div className="mt-4 sm:mt-6">
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
    </div>
  );
}
