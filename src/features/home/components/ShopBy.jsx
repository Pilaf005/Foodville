"use client";

import React, { useState, useRef, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import { expandProductVariants } from "@/features/products/utils/variantUtils";
import { SHOP_BY_TABS, SHOP_BY_PREVIEW_COUNT } from "../constants/shopByTabs";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductCardSkeleton } from "@/components/feedback/Skeleton";

export default function ShopBy() {
  const [activeTabKey, setActiveTabKey] = useState(SHOP_BY_TABS[0].key);
  const scrollRef = useRef(null);

  const activeTab = SHOP_BY_TABS.find((t) => t.key === activeTabKey) || SHOP_BY_TABS[0];

  const { products, isPending } = useProducts({
    tab: activeTabKey,
    limit: SHOP_BY_PREVIEW_COUNT,
    sort: "rating",
  });

  const displayProducts = useMemo(() => expandProductVariants(products), [products]);

  return (
    <section className="border-0 sm:border border-cardline bg-transparent sm:bg-white rounded-none sm:rounded-2xl overflow-visible sm:overflow-hidden p-0 sm:p-5 space-y-4">
        {/* Title & View All in the exact same top row */}
        <div className="flex items-center justify-between px-0 sm:px-2 pt-1 sm:pt-2">
          <h2 className="text-base sm:text-lg font-black text-ink tracking-tight">
            Shop By Collection
          </h2>
          <Link
            href={`/shop?tab=${activeTabKey}`}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-olive-dark hover:underline underline-offset-2 transition shrink-0"
          >
            <span>View All</span>
            <span className="hidden sm:inline">{activeTab.label}</span>
            <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mobile-bleed-scroll border-b border-cardline/60 pb-2 pt-1">
          {SHOP_BY_TABS.map((tab) => {
            const isActive = tab.key === activeTabKey;
            return (
              <button
                key={tab.key}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveTabKey(tab.key)}
                className={`flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 min-h-[40px] shrink-0 ${
                  isActive
                    ? "bg-olive text-white shadow-sm ring-1 ring-olive/20 scale-[1.02]"
                    : "bg-surface-raised/80 hover:bg-cream text-ink/75 hover:text-ink border border-cardline/70"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Display Area — Single Row */}
        <div className="pt-2 pb-2">
          {isPending ? (
            <div className="flex gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar mobile-bleed-scroll">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-[165px] min-w-[165px] sm:w-[210px] sm:min-w-[210px] shrink-0">
                  <ProductCardSkeleton />
                </div>
              ))}
            </div>
          ) : displayProducts.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <span className="text-2xl">📦</span>
              <p className="text-xs sm:text-sm font-semibold text-muted">
                No products found in {activeTab.label}.
              </p>
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="flex gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar mobile-bleed-scroll snap-x snap-mandatory py-1"
            >
              {displayProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="w-[165px] min-w-[165px] sm:w-[210px] sm:min-w-[210px] shrink-0 snap-start h-full"
                >
                  <ProductCard product={product} priority={idx < 2} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
  );
}
