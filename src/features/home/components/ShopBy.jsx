"use client";

import { useState } from "react";
import ProductCard from "@/features/products/components/ProductCard";
import SectionHeader from "./SectionHeader";
import { SHOP_BY_TABS, SHOP_BY_PREVIEW_COUNT } from "../constants/shopByTabs";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductCardSkeleton } from "@/components/feedback/Skeleton";

export default function ShopBy() {
  const [activeTab, setActiveTab] = useState("bestsellers");

  // The API maps the kebab tab key ("newly-in") to the product's shopBy value.
  const { products, isPending } = useProducts({
    tab: activeTab,
    limit: SHOP_BY_PREVIEW_COUNT,
    sort: "rating",
  });

  return (
    <section>
      {/* Outer bordered card */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden">

        <SectionHeader title="Shop By" viewAllHref={`/shop?tab=${activeTab}`} />

        {/* Horizontal tab buttons */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
          {SHOP_BY_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 border ${
                activeTab === tab.key
                  ? "bg-olive text-white border-olive shadow-sm"
                  : "bg-cream text-ink border-cardline hover:border-olive/50 hover:text-olive"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product cards — grid fills full width */}
        <div className="px-4 pb-4">
          {isPending ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {Array.from({ length: SHOP_BY_PREVIEW_COUNT }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <p className="text-sm text-muted py-6 text-center">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
