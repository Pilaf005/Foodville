"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function UnitSelector({ product }) {
  const router = useRouter();
  const units = product.units || [
    { unit: product.unit, price: product.price, mrp: product.mrp }
  ];

  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [qty, setQty] = useState(1);

  const { cart, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);
  const isOutOfStock = product.stock === 0;
  const isPackBased = product.category === "bulk" || product.category === "combos";
  const isInCart = cart.some((item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-"));

  function handleAddToCart() {
    const cartProduct = {
      ...product,
      id: `${product.id}-${selectedUnit.unit}`,
      unit: selectedUnit.unit,
      price: selectedUnit.price,
      mrp: selectedUnit.mrp,
    };
    addToCart(cartProduct, qty);
  }

  // Shared action buttons used in both layouts
  const ActionButtons = () => (
    <div className="flex gap-3">
      {isInCart ? (
        <button
          onClick={() => router.push("/cart")}
          className="flex-1 rounded-2xl border-2 border-olive text-olive hover:bg-olive/10 bg-transparent py-4 text-sm font-bold active:scale-[0.98] transition shadow-md"
        >
          View Cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className="flex-1 rounded-2xl bg-olive py-4 text-sm font-bold text-white hover:bg-olive-dark active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-olive/20"
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      )}
      <button
        onClick={() => toggleWishlist(product)}
        className={`h-14 w-14 shrink-0 rounded-2xl border-2 flex items-center justify-center transition active:scale-95 ${
          inWishlist
            ? "border-terracotta bg-terracotta/10 text-terracotta"
            : "border-cardline bg-white text-muted hover:border-terracotta hover:text-terracotta"
        }`}
        aria-label="Toggle wishlist"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
        </svg>
      </button>
    </div>
  );

  // ─── PACK-BASED layout (bulk + combos) ──────────────────────────────────
  if (isPackBased) {
    return (
      <div className="flex flex-col gap-6">

        {/* Combo includes summary on detail page */}
        {product.category === "combos" && product.comboIncludes?.length > 0 && (
          <div className="rounded-2xl border border-cardline/60 bg-cream/40 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black text-muted uppercase tracking-wider">What's Included</span>
              {product.comboType === "buy2get1" && (
                <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white leading-none">
                  🎁 Get 1 FREE
                </span>
              )}
            </div>
            <ul className="space-y-1.5">
              {product.comboIncludes.map((item, i) => {
                const isObj = typeof item === "object";
                const name = isObj ? item.name : item;
                const qty_ = isObj ? item.qty : "";
                const free = isObj && item.isFree;
                return (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-olive shrink-0" />
                      <span className={`font-semibold ${free ? "text-green-700" : "text-ink"}`}>{name}</span>
                      {qty_ && <span className="text-xs text-muted">· {qty_}</span>}
                    </div>
                    {free
                      ? <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white">FREE</span>
                      : <span className="text-[10px] text-muted font-medium">Included</span>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Pack selector */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-muted uppercase tracking-wider block">
            {product.category === "combos" ? "Select Pack Quantity" : "Select Pack Size"}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {units.map((u, i) => {
              const isSelected = selectedUnit.unit === u.unit;
              const discPct = Math.round(((u.mrp - u.price) / u.mrp) * 100);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setSelectedUnit(u); setQty(1); }}
                  className={`flex flex-col items-start p-3 rounded-2xl border-2 text-left transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? "border-olive bg-olive/5 shadow-sm"
                      : "border-cardline bg-white hover:border-olive/40"
                  }`}
                >
                  {/* Pack label */}
                  <span className={`text-sm font-extrabold leading-tight ${isSelected ? "text-olive" : "text-ink"}`}>
                    {u.unit}
                  </span>

                  {/* Total price */}
                  <div className="flex items-baseline gap-1 mt-1.5">
                    <span className="text-sm font-black text-gold">₹{u.price}</span>
                    {u.mrp > u.price && (
                      <span className="text-[10px] text-muted line-through">₹{u.mrp}</span>
                    )}
                  </div>

                  {/* Per unit price */}
                  {u.perUnit && (
                    <span className="text-[10px] text-muted mt-0.5">₹{u.perUnit}/set</span>
                  )}

                  {/* Badges */}
                  {discPct > 0 && (
                    <span className="mt-1.5 rounded-md bg-terracotta/10 px-1.5 py-0.5 text-[10px] font-bold text-terracotta leading-none">
                      {discPct}% OFF
                    </span>
                  )}
                  {u.savings > 0 && (
                    <span className="mt-0.5 text-[10px] font-semibold text-olive">Save ₹{u.savings}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary + qty stepper */}
        <div className="rounded-2xl bg-cream/30 p-4 border border-cardline/60 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-muted uppercase tracking-wider block">Total Price</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-gold">₹{selectedUnit.price * qty}</span>
              {selectedUnit.mrp > selectedUnit.price && (
                <span className="text-sm text-muted line-through font-medium">₹{selectedUnit.mrp * qty}</span>
              )}
            </div>
            <span className="text-xs text-muted font-medium mt-0.5 block">
              {selectedUnit.unit} × {qty} {qty > 1 ? "orders" : "order"} · ₹{selectedUnit.price}/order
            </span>
            {selectedUnit.savings > 0 && (
              <span className="text-xs font-bold text-olive mt-0.5 block">
                You save ₹{selectedUnit.savings * qty} on this order
              </span>
            )}
          </div>

          {/* Qty stepper */}
          <div className="flex items-center rounded-xl border border-cardline bg-white overflow-hidden h-10 shadow-sm shrink-0">
            <button onClick={() => setQty(q => Math.max(1, q - 1))}
              className="h-full w-9 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
              aria-label="Decrease">−</button>
            <span className="h-full w-9 flex items-center justify-center text-xs font-bold text-ink border-x border-cardline">{qty}</span>
            <button onClick={() => setQty(q => Math.min(product.stock || 99, q + 1))}
              className="h-full w-9 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
              aria-label="Increase">+</button>
          </div>
        </div>

        <ActionButtons />
      </div>
    );
  }

  // ─── REGULAR weight-based layout ─────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        <span className="text-xs font-bold text-muted uppercase tracking-wider block">Select Unit Size</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {units.map((u, i) => {
            const isSelected = selectedUnit.unit === u.unit;
            const unitDiscount = Math.round(((u.mrp - u.price) / u.mrp) * 100);
            return (
              <button key={i} type="button"
                onClick={() => { setSelectedUnit(u); setQty(1); }}
                className={`flex flex-col items-start p-3.5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer focus:outline-none ${
                  isSelected ? "border-olive bg-olive/5 shadow-sm" : "border-cardline bg-white hover:border-olive/30 hover:bg-cream/20"
                }`}
              >
                {unitDiscount > 0 && (
                  <span className="mb-1.5 self-end rounded-md bg-terracotta/10 px-1.5 py-0.5 text-[10px] font-bold text-terracotta leading-none">
                    {unitDiscount}% OFF
                  </span>
                )}
                <span className={`text-sm font-extrabold ${isSelected ? "text-olive" : "text-ink"}`}>{u.unit}</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-sm font-black text-gold">₹{u.price}</span>
                  {u.mrp > u.price && <span className="text-xs text-muted line-through font-medium">₹{u.mrp}</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-cream/30 p-4 border border-cardline/60 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-muted uppercase tracking-wider block">Selected Price</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-gold">₹{selectedUnit.price * qty}</span>
            {selectedUnit.mrp > selectedUnit.price && (
              <span className="text-sm text-muted line-through font-medium">₹{selectedUnit.mrp * qty}</span>
            )}
          </div>
          <span className="text-xs text-muted/90 font-bold mt-1 block">₹{selectedUnit.price} per packet ({selectedUnit.unit})</span>
          <span className="text-[10px] text-muted font-medium mt-0.5 block">Inclusive of all taxes · Qty: {qty}</span>
        </div>
        <div className="flex items-center rounded-xl border border-cardline bg-white overflow-hidden h-10 shadow-sm">
          <button onClick={() => setQty(q => Math.max(1, q - 1))}
            className="h-full w-9 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
            aria-label="Decrease">−</button>
          <span className="h-full w-9 flex items-center justify-center text-xs font-bold text-ink border-x border-cardline">{qty}</span>
          <button onClick={() => setQty(q => Math.min(product.stock || 99, q + 1))}
            className="h-full w-9 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
            aria-label="Increase">+</button>
        </div>
      </div>

      <ActionButtons />
    </div>
  );
}
