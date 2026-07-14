"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductRibbon from "./ProductRibbon";
import { PRODUCT_FALLBACK_IMAGE } from "../constants";

function getCartQty(cart, productId) {
  return cart
    .filter((item) => String(item.id) === String(productId) || String(item.id).startsWith(String(productId) + "-"))
    .reduce((sum, item) => sum + item.qty, 0);
}

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQty } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);
  const discount   = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const cartItem   = cart.find((item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-"));
  const currentQty = getCartQty(cart, product.id);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-cardline/60 bg-white p-2 sm:p-3.5 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.025)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.065)] hover:border-olive/20 active:scale-[0.99] sm:active:scale-100 hover:z-30 hover:relative">
      {/* Wishlist heart */}
      <button
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
        className="absolute right-3 top-3 z-10 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-white/95 text-terracotta shadow-sm transition hover:scale-105 active:scale-90"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Image + link to detail page */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="mb-2 aspect-square overflow-hidden rounded-xl bg-cream relative">
          <ProductRibbon shopBy={product.shopBy} />
          {discount > 0 && (
            <div
              className="absolute left-0 top-0 z-10 bg-[#E05C3A] text-white font-black text-[9px] sm:text-[10px] leading-none px-2 pt-1.5 pb-2.5 flex flex-col items-center justify-center text-center select-none"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                minWidth: "34px"
              }}
            >
              <span>{discount}%</span>
              <span className="text-[7px] font-bold opacity-90 tracking-wide mt-0.5">OFF</span>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PRODUCT_FALLBACK_IMAGE; }}
          />
        </div>

        <h3 className="line-clamp-2 text-sm sm:text-base font-semibold text-ink leading-tight tracking-tight">{product.name}</h3>
        <p className="mt-0.5 mb-1.5 text-[11px] sm:text-xs font-normal text-muted leading-none">{product.unit}</p>

        {product.comboIncludes && (
          <div className="mb-2 mt-1 rounded-lg bg-cream/60 p-2 border border-cardline/60">
            {product.comboType === "buy2get1" && (
              <span className="inline-block mb-1 rounded-full bg-green-500 px-2 py-0.5 text-[8px] sm:text-[9px] font-black text-white leading-none">
                🎁 Get 1 FREE
              </span>
            )}
            <span className="text-[8px] sm:text-[9px] font-bold text-muted uppercase tracking-wider block">Combo Includes:</span>
            <ul className="text-[8px] sm:text-[9px] text-ink font-semibold list-none space-y-0.5 mt-1">
              {product.comboIncludes.map((item, idx) => {
                const isObj  = typeof item === "object";
                const label  = isObj ? `${item.name} ${item.qty}` : item;
                const isFree = isObj && item.isFree;
                return (
                  <li key={idx} className="flex items-center gap-1 line-clamp-1">
                    <span className="text-olive">•</span>
                    <span className={isFree ? "text-green-600 font-black" : "text-ink"}>{label}</span>
                    {isFree && <span className="rounded-full bg-green-100 text-green-700 px-1 text-[8px] font-black leading-none">FREE</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Link>

      {/* Price and action row */}
      <div className="mt-auto flex items-center justify-between gap-1.5 pt-2 border-t border-cardline/20">
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-bold text-ink leading-none">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-[9px] sm:text-[11px] font-normal text-muted line-through mt-0.5">₹{product.mrp}</span>
          )}
        </div>

        {currentQty === 0 ? (
          <button
            onClick={() => addToCart(product, 1)}
            disabled={product.stock === 0}
            className="border-2 border-olive text-olive bg-olive/5 hover:bg-olive/10 transition font-bold uppercase text-sm sm:text-base rounded-xl h-10 sm:h-11 px-5 sm:px-7 flex items-center justify-center tracking-widest active:scale-95 shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            {product.stock === 0 ? "OUT" : "ADD"}
          </button>
        ) : (
          <div className="flex items-center justify-between border-2 border-olive bg-white rounded-xl h-10 sm:h-11 px-1.5 w-[100px] sm:w-[112px] shadow-sm">
            <button
              onClick={() => updateQty(cartItem.id, currentQty - 1)}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl text-olive text-lg font-extrabold hover:bg-olive/10 flex items-center justify-center transition active:scale-90"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="text-sm sm:text-base font-bold text-ink">{currentQty}</span>
            <button
              onClick={() => updateQty(cartItem.id, currentQty + 1)}
              disabled={product.stock > 0 && currentQty >= product.stock}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl text-olive text-lg font-extrabold hover:bg-olive/10 flex items-center justify-center transition active:scale-90 disabled:opacity-40"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
