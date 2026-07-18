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
    limit: 200,
  });

  const categoryName = categories.find((c) => c.id === id)?.name ?? id;
  const count = meta?.total ?? products.length;

  return (
    <div className="pb-[20px] sm:pb-8">
      {/* Categories horizontal list */}
      <CategoryFilter active={id} />

      {/* Bulk Wholesale Banner */}
      {id === "bulk" && (
        <div
          className="mt-4 sm:mt-6 mb-6 rounded-3xl p-5 sm:p-7 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-[#6B7F59]/30 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bulk_wholesale_banner.png')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
          <div className="space-y-2 max-w-2xl z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-amber-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>
              Direct B2B Factory Supply & Bulk Wholesale Pricing
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Order Commercial Packs (25kg - 500kg+) Direct
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
              Wholesale pricing for distributors, commercial kitchens, food manufacturers & retail chains. Verified GST Invoices & fast nationwide Shiprocket dispatch.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-semibold text-stone-200">
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Freight Logistics Included
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                Lab Tested Batch Certificates
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto shrink-0 z-10">
            <Link
              href="/bulk-order"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#2C3624] font-extrabold text-xs sm:text-sm shadow-lg hover:bg-stone-100 transition"
            >
              Request Custom B2B Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      )}

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
