"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ProductGrid from "@/features/products/components/ProductGrid";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductGridSkeleton } from "@/components/feedback/Skeleton";
import { useDebounce } from "@/hooks/useDebounce";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query.trim(), 300);

  // Keep the URL in step with what's actually being searched (shareable links).
  useEffect(() => {
    const current = searchParams.get("q") ?? "";
    if (debouncedQuery === current) return;
    router.replace(debouncedQuery ? `/search?q=${encodeURIComponent(debouncedQuery)}` : "/search", {
      scroll: false,
    });
  }, [debouncedQuery, router, searchParams]);

  const hasQuery = debouncedQuery.length > 0;
  const { products, meta, isPending } = useProducts(
    { search: debouncedQuery, limit: 40 },
    { enabled: hasQuery }
  );

  const count = meta?.total ?? products.length;

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-cardline pb-3">
        <h1 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">Search</h1>
        <p className="text-xs text-muted mt-0.5">
          Find spice powders, seeds, dry fruits, wellness blends and combos.
        </p>
      </div>

      {/* Search input */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
        </svg>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products…"
          className="w-full rounded-2xl border border-cardline bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none
                     transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
      </div>

      {/* Results */}
      {!hasQuery ? (
        <div className="space-y-3 rounded-3xl border border-cardline bg-white/50 py-20 text-center">
          <span className="text-4xl">🔍</span>
          <h3 className="font-bold text-ink">Start typing to search</h3>
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
