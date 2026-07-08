"use client";

import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

export default function SimilarProducts({ category, currentProductId }) {
  // Get all products from same category, then filter out current product, limit to 4
  const similarList = getProductsByCategory(category)
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (similarList.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
        Similar Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {similarList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
