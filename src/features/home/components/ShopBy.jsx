"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/features/products/components/ProductCard";
import SectionHeader from "./SectionHeader";
import { SHOP_BY_TABS, SHOP_BY_PREVIEW_COUNT } from "../constants/shopByTabs";

const TAB_FILTER_MAP = {
  "bestsellers": "bestseller",
  "newly-in":    "newlyIn",
  "value-buys":  "valueBuys",
  "trending":    "trending",
};

function getTabProducts(tab) {
  const filterKey = TAB_FILTER_MAP[tab];
  return filterKey ? products.filter((p) => p.shopBy === filterKey) : [];
}

export default function ShopBy() {
  const [activeTab, setActiveTab] = useState("bestsellers");

  const tabProducts = useMemo(() => getTabProducts(activeTab), [activeTab]);
  const preview = tabProducts.slice(0, SHOP_BY_PREVIEW_COUNT);

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
          {preview.length === 0 ? (
            <p className="text-sm text-muted py-6 text-center">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {preview.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
