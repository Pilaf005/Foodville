"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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

// ─── ShopSidebar ─────────────────────────────────────────────────────────
function ShopSidebar({ activeTab, onTabChange }) {
  return (
    <aside className="hidden sm:block w-[180px] shrink-0 border-r border-cardline bg-cream/40">
      {SHOP_TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`relative w-full flex items-center gap-3 px-3 py-3.5 text-left transition-colors duration-150 border-b border-cardline/50 last:border-b-0 ${
              isActive ? "bg-white" : "hover:bg-white/70"
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-olive" />
            )}
            <span className="shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-cardline bg-cream">
              <img src={tab.thumb} alt={tab.label} className="h-full w-full object-cover" />
            </span>
            <span className={`text-xs font-bold leading-tight ${isActive ? "text-olive" : "text-ink"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}

// ─── MobileShopTabs ───────────────────────────────────────────────────────
function MobileShopTabs({ activeTab, onTabChange }) {
  return (
    <div className="sm:hidden flex gap-2 overflow-x-auto no-scrollbar px-4 py-3 border-b border-cardline bg-cream/40">
      {SHOP_TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold whitespace-nowrap transition-all duration-150 ${
              isActive
                ? "bg-olive text-white border-olive shadow-sm"
                : "bg-white text-ink border-cardline"
            }`}
          >
            <span className="h-5 w-5 rounded-full overflow-hidden border border-white/30 shrink-0">
              <img src={tab.thumb} alt="" className="h-full w-full object-cover" />
            </span>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

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
    <div className="pb-12">
      {/* Page heading */}
      <div className="mb-5">
        <h1 className="text-xl font-black text-ink uppercase tracking-tight">Shop</h1>
        <p className="text-xs text-muted mt-0.5">{activeMeta?.description}</p>
      </div>

      {/* Two-column layout */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden flex flex-col sm:flex-row min-h-[500px]">
        <MobileShopTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <ShopSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* RIGHT: product grid */}
        <div className="flex-1 p-3 sm:p-4 overflow-auto">
          {/* Sub-header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-black text-ink uppercase tracking-tight">
              {activeMeta?.label}
            </h2>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">
              {isPending ? "…" : `${count} ${count === 1 ? "Product" : "Products"}`}
            </span>
          </div>

          {isPending ? (
            <ProductGridSkeleton count={10} />
          ) : products.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <span className="text-4xl">🛒</span>
              <p className="text-sm text-muted">No products found.</p>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
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
