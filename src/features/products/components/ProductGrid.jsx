"use client";
 
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
 
// Fisher-Yates Shuffle Algorithm to randomly order products
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
 
export default function ProductGrid({ products }) {
  const [displayProducts, setDisplayProducts] = useState(products || []);
 
  useEffect(() => {
    if (products && products.length > 0) {
      setDisplayProducts(shuffleArray(products));
    } else {
      setDisplayProducts([]);
    }
  }, [products]);
 
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-cardline bg-white p-10 text-center text-muted">
        No products found. Try a different search or category.
      </div>
    );
  }
 
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-4 sm:pt-12 pb-4">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
