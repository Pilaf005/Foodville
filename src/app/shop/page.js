"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductGrid from "@/features/products/components/ProductGrid";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductGridSkeleton } from "@/components/feedback/Skeleton";

// ─── Constants ────────────────────────────────────────────────────────────
const SHOP_TABS = [
  {
    key: "bestsellers",
    label: "Bestsellers",
    thumb: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=80&q=60",
    description: "Our highest-rated products loved by customers.",
  },
  {
    key: "newly-in",
    label: "Newly In",
    thumb: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=80&q=60",
    description: "The latest additions to our store.",
  },
  {
    key: "value-buys",
    label: "Value Buys",
    thumb: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=80&q=60",
    description: "Best deals with the highest savings.",
  },
  {
    key: "trending",
    label: "Trending",
    thumb: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=80&q=60",
    description: "Top-selling bestsellers and superfoods everyone is talking about.",
  },
];

const VALID_TAB_KEYS = SHOP_TABS.map((t) => t.key);
const DEFAULT_TAB    = "bestsellers";

// ─── ShopContent ─────────────────────────────────────────────────────────
function ShopContent() {
  const searchParams = useSearchParams();
  const initialTab   = searchParams.get("tab") ?? DEFAULT_TAB;
  const [activeTab, setActiveTab] = useState(
    VALID_TAB_KEYS.includes(initialTab) ? initialTab : DEFAULT_TAB
  );

  // Keep tab in sync if URL param changes (e.g. back/forward)
  useEffect(() => {
    const t = searchParams.get("tab");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (t && VALID_TAB_KEYS.includes(t)) setActiveTab(t);
  }, [searchParams]);

  const { products, meta, isPending } = useProducts({ tab: activeTab, limit: 60 });
  const activeMeta = SHOP_TABS.find((t) => t.key === activeTab);
  const count = meta?.total ?? products.length;

  return (
    <div className="-mt-3.5 sm:-mt-8 space-y-3.5 sm:space-y-6 pb-[20px] sm:pb-8">
      {/* Grid Header & Breadcrumbs */}
      <div className="sticky top-[57px] sm:relative z-20 bg-cream/95 backdrop-blur px-4 sm:px-0 -mx-4 sm:mx-0 py-3 sm:pt-2 sm:pb-3 flex items-center justify-between border-b border-cardline">
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
          <span className="text-ink font-black truncate max-w-[200px]">{activeMeta?.label}</span>
        </div>

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

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-muted">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
