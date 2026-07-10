"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import QtyStepper from "./QtyStepper";
import ComboIncludesList from "./ComboIncludesList";
import { DEFAULT_MAX_QTY } from "../constants";

// ─── Shared action buttons (Add to Cart / View Cart + Wishlist) ────────────
function ActionButtons({ product, isInCart, isOutOfStock, inWishlist, onAddToCart, onToggleWishlist }) {
  const router = useRouter();
  return (
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
          onClick={onAddToCart}
          disabled={isOutOfStock}
          className="flex-1 rounded-2xl bg-olive py-4 text-sm font-bold text-white hover:bg-olive-dark active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-olive/20"
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      )}
      <button
        onClick={onToggleWishlist}
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
}

// ─── Price summary block shared by both layouts ───────────────────────────
function PriceSummary({ selectedUnit, qty, label, perUnitLabel }) {
  return (
    <div>
      <span className="text-xs font-bold text-muted uppercase tracking-wider block">{label}</span>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-2xl font-black text-gold">₹{selectedUnit.price * qty}</span>
        {selectedUnit.mrp > selectedUnit.price && (
          <span className="text-sm text-muted line-through font-medium">₹{selectedUnit.mrp * qty}</span>
        )}
      </div>
      {perUnitLabel && (
        <span className="text-xs text-muted/90 font-bold mt-1 block">{perUnitLabel}</span>
      )}
    </div>
  );
}

// ─── PACK-BASED layout (bulk + combos) ────────────────────────────────────
function PackUnitSelector({ product, units, selectedUnit, qty, setSelectedUnit, setQty, actionButtonsProps }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Combo includes summary */}
      {product.category === "combos" && product.comboIncludes?.length > 0 && (
        <div className="rounded-2xl border border-cardline/60 bg-cream/40 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-muted uppercase tracking-wider">What&apos;s Included</span>
            {product.comboType === "buy2get1" && (
              <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white leading-none">
                🎁 Get 1 FREE
              </span>
            )}
          </div>
          <ComboIncludesList
            items={product.comboIncludes}
            showBuy2Get1Note={product.comboType === "buy2get1"}
          />
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
                  isSelected ? "border-olive bg-olive/5 shadow-sm" : "border-cardline bg-white hover:border-olive/40"
                }`}
              >
                <span className={`text-sm font-extrabold leading-tight ${isSelected ? "text-olive" : "text-ink"}`}>
                  {u.unit}
                </span>
                <div className="flex items-baseline gap-1 mt-1.5">
                  <span className="text-sm font-black text-gold">₹{u.price}</span>
                  {u.mrp > u.price && <span className="text-[10px] text-muted line-through">₹{u.mrp}</span>}
                </div>
                {u.perUnit && <span className="text-[10px] text-muted mt-0.5">₹{u.perUnit}/set</span>}
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
          <PriceSummary
            selectedUnit={selectedUnit}
            qty={qty}
            label="Total Price"
          />
          <span className="text-xs text-muted font-medium mt-0.5 block">
            {selectedUnit.unit} × {qty} {qty > 1 ? "orders" : "order"} · ₹{selectedUnit.price}/order
          </span>
          {selectedUnit.savings > 0 && (
            <span className="text-xs font-bold text-olive mt-0.5 block">
              You save ₹{selectedUnit.savings * qty} on this order
            </span>
          )}
        </div>
        <QtyStepper
          qty={qty}
          onDecrease={() => setQty(q => Math.max(1, q - 1))}
          onIncrease={() => setQty(q => Math.min(product.stock || DEFAULT_MAX_QTY, q + 1))}
        />
      </div>

      <ActionButtons {...actionButtonsProps} />
    </div>
  );
}

// ─── REGULAR weight-based layout ──────────────────────────────────────────
function WeightUnitSelector({ product, units, selectedUnit, qty, setSelectedUnit, setQty, actionButtonsProps }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        <span className="text-xs font-bold text-muted uppercase tracking-wider block">Select Unit Size</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {units.map((u, i) => {
            const isSelected = selectedUnit.unit === u.unit;
            const unitDiscount = Math.round(((u.mrp - u.price) / u.mrp) * 100);
            return (
              <button
                key={i}
                type="button"
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
          <PriceSummary
            selectedUnit={selectedUnit}
            qty={qty}
            label="Selected Price"
            perUnitLabel={`₹${selectedUnit.price} per packet (${selectedUnit.unit})`}
          />
          <span className="text-[10px] text-muted font-medium mt-0.5 block">
            Inclusive of all taxes · Qty: {qty}
          </span>
        </div>
        <QtyStepper
          qty={qty}
          onDecrease={() => setQty(q => Math.max(1, q - 1))}
          onIncrease={() => setQty(q => Math.min(product.stock || DEFAULT_MAX_QTY, q + 1))}
        />
      </div>

      <ActionButtons {...actionButtonsProps} />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────
export default function UnitSelector({ product }) {
  const units = product.units || [{ unit: product.unit, price: product.price, mrp: product.mrp }];

  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [qty, setQty] = useState(1);

  const { cart, addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist   = isInWishlist(product.id);
  const isOutOfStock = product.stock === 0;
  const isPackBased  = product.category === "bulk" || product.category === "combos";
  const isInCart     = cart.some(
    (item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-")
  );

  function handleAddToCart() {
    addToCart(
      { ...product, id: `${product.id}-${selectedUnit.unit}`, unit: selectedUnit.unit, price: selectedUnit.price, mrp: selectedUnit.mrp },
      qty
    );
  }

  const actionButtonsProps = {
    product,
    isInCart,
    isOutOfStock,
    inWishlist,
    onAddToCart: handleAddToCart,
    onToggleWishlist: () => toggleWishlist(product),
  };

  const selectorProps = { product, units, selectedUnit, qty, setSelectedUnit, setQty, actionButtonsProps };

  return isPackBased
    ? <PackUnitSelector {...selectorProps} />
    : <WeightUnitSelector {...selectorProps} />;
}
