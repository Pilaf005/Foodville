"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const TABS = [
  { key: "bestsellers", label: "Bestsellers" },
  { key: "newly-in",    label: "Newly In"   },
  { key: "value-buys",  label: "Value Buys" },
  { key: "trending",    label: "Trending"   },
];

function getTabProducts(tab) {
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
      return [];
  }
}

export default function ShopBy() {
  const [activeTab, setActiveTab] = useState("bestsellers");

  const tabProducts = useMemo(() => getTabProducts(activeTab), [activeTab]);
  const preview = tabProducts.slice(0, 5);

  return (
    <section>
      {/* Outer bordered card */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <h2 className="text-base font-black text-ink tracking-tight">Shop By</h2>
          <Link
            href={`/shop?tab=${activeTab}`}
            className="text-xs font-semibold text-olive hover:underline underline-offset-2 transition"
          >
            View All
          </Link>
        </div>

        {/* Horizontal tab buttons */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
          {TABS.map((tab) => (
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
            <div className="grid grid-cols-5 gap-3">
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
