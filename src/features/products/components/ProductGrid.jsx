"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [mounted, setMounted] = useState(false);
  const [cols, setCols] = useState(5);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    function handleResize() {
      const w = window.innerWidth;
      if (w < 640) setCols(2);
      else if (w < 768) setCols(3);
      else if (w < 1024) setCols(4);
      else setCols(5);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-cardline bg-white p-10 text-center text-muted">
        No products found. Try a different search or category.
      </div>
    );
  }

  const comboProducts = products.filter((p) => p.comboIncludes && p.comboIncludes.length > 0);
  const regularProducts = products.filter((p) => !p.comboIncludes || p.comboIncludes.length === 0);

  if (comboProducts.length === 0 || regularProducts.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-4 sm:pt-12 pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-4 sm:pt-12 pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  const rows = [];
  let regIdx = 0;
  let comboIdx = 0;
  let step = 0; // 0 = 1 row regular, 1 = 1 row combo, 2 = 2 rows regular, 3 = 1 row combo

  while (regIdx < regularProducts.length || comboIdx < comboProducts.length) {
    if (step === 0) {
      const count = cols;
      const slice = regularProducts.slice(regIdx, regIdx + count);
      if (slice.length > 0) {
        rows.push(slice);
        regIdx += count;
      }
      step = 1;
    } else if (step === 1) {
      const count = cols;
      const slice = comboProducts.slice(comboIdx, comboIdx + count);
      if (slice.length > 0) {
        rows.push(slice);
        comboIdx += count;
      }
      step = 2;
    } else if (step === 2) {
      const count = cols * 2;
      const slice = regularProducts.slice(regIdx, regIdx + count);
      if (slice.length > 0) {
        rows.push(slice);
        regIdx += count;
      }
      step = 3;
    } else if (step === 3) {
      const count = cols;
      const slice = comboProducts.slice(comboIdx, comboIdx + count);
      if (slice.length > 0) {
        rows.push(slice);
        comboIdx += count;
      }
      step = 2;
    }
  }

  return (
    <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-12 pb-4">
      {rows.map((rowProducts, idx) => (
        <div
          key={idx}
          className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {rowProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ))}
    </div>
  );
}
