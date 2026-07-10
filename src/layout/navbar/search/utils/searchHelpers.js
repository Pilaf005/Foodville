import { products } from "@/data/products";

export function getMatchingProducts(query) {
  if (!query || !query.trim()) return [];
  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);
}
