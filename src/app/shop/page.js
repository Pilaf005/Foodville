"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const TABS = [
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

function getProducts(tab) {
  switch (tab) {
    case "bestsellers":
      return products.filter((p) => p.shopBy === "bestseller");
    case "newly-in":
      return products.filter((p) => p.shopBy === "newlyIn");
    case "value-buys":
      return products.filter((p) => p.shopBy === "valueBuys");
    case "trending":
      return products.filter((p) => p.shopBy === "trending");
    default:
      return products;
  }
}

function ShopContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") ?? "bestsellers";
  const validKeys = TABS.map((t) => t.key);
  const [activeTab, setActiveTab] = useState(
    validKeys.includes(initialTab) ? initialTab : "bestsellers"
  );

  // Keep tab in sync if URL param changes (e.g. back/forward)
  useEffect(() => {
    const t = searchParams.get("tab");
    if (t && validKeys.includes(t)) setActiveTab(t);
  }, [searchParams]);

  const filtered = useMemo(() => getProducts(activeTab), [activeTab]);
  const activeMeta = TABS.find((t) => t.key === activeTab);

  return (
    <div className="pb-12">
      {/* Page heading */}
      <div className="mb-5">
        <h1 className="text-xl font-black text-ink uppercase tracking-tight">Shop</h1>
        <p className="text-xs text-muted mt-0.5">{activeMeta?.description}</p>
      </div>

      {/* Two-column layout */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden flex min-h-[500px]">

        {/* LEFT: sidebar */}
        <aside className="w-[180px] shrink-0 border-r border-cardline bg-cream/40">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative w-full flex items-center gap-3 px-3 py-3.5 text-left transition-colors duration-150 border-b border-cardline/50 last:border-b-0 ${
                  isActive ? "bg-white" : "hover:bg-white/70"
                }`}
              >
                {/* Olive left-border on active */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-olive" />
                )}

                {/* Circular thumbnail */}
                <span className="shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-cardline bg-cream">
                  <img
                    src={tab.thumb}
                    alt={tab.label}
                    className="h-full w-full object-cover"
                  />
                </span>

                {/* Label */}
                <span
                  className={`text-xs font-bold leading-tight ${
                    isActive ? "text-olive" : "text-ink"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </aside>

        {/* RIGHT: product grid */}
        <div className="flex-1 p-4 overflow-auto">
          {/* Sub-header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-black text-ink uppercase tracking-tight">
              {activeMeta?.label}
            </h2>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">
              {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <span className="text-4xl">🛒</span>
              <p className="text-sm text-muted">No products found.</p>
            </div>
          ) : (
            <ProductGrid products={filtered} />
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
