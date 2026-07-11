"use client";

import ProductCard from "./ProductCard";
import { useTopSellers } from "@/features/products/hooks/useProducts";
import { ProductCardSkeleton } from "@/components/feedback/Skeleton";

export default function TopSellers() {
  const { products, isPending } = useTopSellers(4);

  if (!isPending && products.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider">
        Top Sellers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {isPending
          ? Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
