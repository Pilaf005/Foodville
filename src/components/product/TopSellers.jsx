"use client";

import ProductCard from "@/components/ProductCard";
import { getTopSellers } from "@/data/products";

export default function TopSellers() {
  const topSellersList = getTopSellers().slice(0, 4);

  if (topSellersList.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
        Top Sellers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topSellersList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
