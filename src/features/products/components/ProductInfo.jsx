"use client";

import Link from "next/link";
import UnitSelector from "./UnitSelector";
import ComboIncludesList from "./ComboIncludesList";
import { PRODUCT_TRUST_BADGES } from "../constants";

function DiscountBadges({ product, discount }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-semibold text-olive uppercase tracking-wider">
        {product.category}
      </span>
      {product.isComingSoon ? (
        <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wider">
          <span>⏳ Coming Soon</span>
        </span>
      ) : (
        <>
          {discount > 0 && (
            <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
              {discount}% OFF
            </span>
          )}
          {product.stock > 0 && product.stock <= 10 && (
            <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700">
              Only {product.stock} left!
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default function ProductInfo({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="flex flex-col gap-5">
      <DiscountBadges product={product} discount={discount} />

      {/* Product Name */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">{product.name}</h1>
        <p className="mt-1 text-sm text-muted">{product.unit} · {product.category}</p>
      </div>

      {/* Combo includes */}
      {product.comboIncludes && (
        <div className="rounded-2xl border border-cardline bg-cream/40 p-4">
          <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
            Combo Includes:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.comboIncludes.map((item, idx) => {
              const isObj = typeof item === "object";
              const label = isObj ? `${item.name} · ${item.qty}` : item;
              const isFree = isObj && item.isFree;
              return (
                <div key={idx} className="flex items-center justify-between gap-2 text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="text-olive">✓</span>
                    <span className={isFree ? "text-green-700" : "text-ink"}>{label}</span>
                  </div>
                  {isFree && (
                    <span className="rounded-full bg-green-500 px-1.5 py-0.5 text-[9px] font-black text-white leading-none">
                      FREE
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          {product.comboType === "buy2get1" && (
            <p className="mt-2.5 text-[11px] text-green-700 font-semibold bg-green-50 rounded-xl px-3 py-2 border border-green-100">
              🎁 Buy 2 Get 1 Free — the FREE item ships with your order at no extra cost.
            </p>
          )}
        </div>
      )}



      {/* Dynamic Unit Selector & Quantity controls */}
      <UnitSelector product={product} />

      <hr className="border-cardline" />

      {/* B2B Wholesale Bulk Query Banner */}
      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
            <span>📦</span> Need Wholesale Bulk Quantity (10kg+)?
          </h4>
          <p className="text-[11px] text-stone-500 mt-0.5">Get direct factory prices and GST tax invoice.</p>
        </div>
        <Link
          href={`/bulk-order?productName=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-1 bg-[#3D4A32] hover:bg-[#2d3725] text-white text-xs font-bold px-3.5 py-2 min-h-[44px] min-w-[44px] justify-center rounded-xl transition shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
        >
          <span>Get Quote →</span>
        </Link>
      </div>

      <hr className="border-cardline" />

      {/* Quick Info Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {PRODUCT_TRUST_BADGES.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 rounded-full bg-cream border border-cardline px-3 py-1 text-xs font-medium text-muted"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-olive">
              <path d="m5 12 5 5L20 7"/>
            </svg>
            {tag}
          </span>
        ))}
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-olive/8 px-3 py-1 text-xs font-medium text-olive border border-olive/20"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
