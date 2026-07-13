"use client";

import React from "react";
import ProductCard from "@/features/products/components/ProductCard";
import SectionHeader from "./SectionHeader";
import { SHOP_BY_TABS, SHOP_BY_PREVIEW_COUNT } from "../constants/shopByTabs";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductCardSkeleton } from "@/components/feedback/Skeleton";

function ProductRowSection({ tab }) {
  // The API maps the kebab tab key ("newly-in") to the product's shopBy value.
  const { products, isPending } = useProducts({
    tab: tab.key,
    limit: SHOP_BY_PREVIEW_COUNT,
    sort: "rating",
  });

  return (
    <div className="border-0 sm:border border-cardline bg-transparent sm:bg-white rounded-none sm:rounded-2xl overflow-visible sm:overflow-hidden">
      <SectionHeader title={tab.label} viewAllHref={`/shop?tab=${tab.key}`} />

      <div className="px-0 sm:px-4 pb-4">
        {isPending ? (
          <div className="flex md:grid gap-3.5 md:gap-3 md:grid-cols-4 lg:grid-cols-5 overflow-x-auto md:overflow-x-visible no-scrollbar mobile-bleed-scroll">
            {Array.from({ length: SHOP_BY_PREVIEW_COUNT }).map((_, i) => (
              <div key={i} className="w-[165px] min-w-[165px] md:w-auto md:min-w-0 shrink-0 md:shrink">
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-sm text-muted py-6 text-center">No products found.</p>
        ) : (
          <div className="flex md:grid gap-3.5 md:gap-3 md:grid-cols-4 lg:grid-cols-5 overflow-x-auto md:overflow-x-visible no-scrollbar mobile-bleed-scroll snap-x snap-mandatory">
            {products.map((product) => (
              <div key={product.id} className="w-[165px] min-w-[165px] md:w-auto md:min-w-0 shrink-0 md:shrink snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopBy() {
  return (
    <div className="space-y-2 sm:space-y-4">
      {SHOP_BY_TABS.map((tab) => (
        <ProductRowSection key={tab.key} tab={tab} />
      ))}
    </div>
  );
}
