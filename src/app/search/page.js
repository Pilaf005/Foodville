"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/features/products/components/ProductGrid";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductGridSkeleton } from "@/components/feedback/Skeleton";

function SearchContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  const debouncedQuery = searchQuery.trim();
  const hasQuery = debouncedQuery.length > 0;

  const { products, meta, isPending } = useProducts(
    { search: debouncedQuery, limit: 40 },
    { enabled: hasQuery }
  );

  const count = meta?.total ?? products.length;

  return (
    <div className="space-y-6 pb-[20px] pt-4">
      {/* Results */}
      {!hasQuery ? (
        <div className="space-y-3 rounded-3xl border border-cardline bg-white/50 py-20 text-center">
          <span className="text-4xl">🔍</span>
          <h3 className="font-bold text-ink">Type in the search bar above</h3>
          <p className="text-xs text-muted">Try &ldquo;onion powder&rdquo;, &ldquo;almonds&rdquo; or &ldquo;combo&rdquo;.</p>
        </div>
      ) : isPending ? (
        <ProductGridSkeleton count={10} />
      ) : products.length === 0 ? (
        <div className="space-y-3 rounded-3xl border border-cardline bg-white/50 py-20 text-center">
          <span className="text-4xl">🫙</span>
          <h3 className="font-bold text-ink">No results for &ldquo;{debouncedQuery}&rdquo;</h3>
          <p className="text-xs text-muted">Check the spelling or try a broader term.</p>
          <Link
            href="/shop"
            className="mt-2 inline-flex rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark"
          >
            Browse all products
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-tight text-ink">
              Results for &ldquo;{debouncedQuery}&rdquo;
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              {count} {count === 1 ? "Product" : "Products"}
            </span>
          </div>
          <ProductGrid products={products} />
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<ProductGridSkeleton count={10} />}>
      <SearchContent />
    </Suspense>
  );
}
