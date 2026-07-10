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
    <div className="group relative flex flex-col rounded-2xl border border-cardline bg-white p-3 transition hover:shadow-md">
      {/* Wishlist heart */}
      <button
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
        className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-terracotta shadow-sm transition hover:scale-105 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
        </svg>
      </button>

      {/* Image + link to detail page */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="mb-3 aspect-square overflow-hidden rounded-xl bg-cream relative">
          <ProductRibbon shopBy={product.shopBy} />
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition group-hover:scale-105"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PRODUCT_FALLBACK_IMAGE; }}
          />
        </div>

        {discount > 0 && (
          <span className="mb-2 inline-block rounded-full bg-terracotta/10 px-2 py-0.5 text-xs font-medium text-terracotta animate-pulse">
            {discount}% OFF
          </span>
        )}
        {product.category === "bulk" && (
          <span className="mb-2 ml-1.5 inline-block rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-semibold text-blue-700">
            Save More
          </span>
        )}

        <h3 className="line-clamp-1 text-sm font-bold text-ink">{product.name}</h3>
        <p className="mb-2 text-xs text-muted">{product.unit}</p>

        {product.comboIncludes && (
          <div className="mb-3 mt-1 rounded-xl bg-cream/60 p-2.5 border border-cardline/60">
            {product.comboType === "buy2get1" && (
              <span className="inline-block mb-1.5 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white leading-none">
                🎁 Get 1 FREE
              </span>
            )}
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">Combo Includes:</span>
            <ul className="text-[10px] text-ink font-medium list-none space-y-0.5 mt-1">
              {product.comboIncludes.map((item, idx) => {
                const isObj  = typeof item === "object";
                const label  = isObj ? `${item.name} ${item.qty}` : item;
                const isFree = isObj && item.isFree;
                return (
                  <li key={idx} className="flex items-center gap-1 line-clamp-1">
                    <span className="text-olive">•</span>
                    <span className={isFree ? "text-green-600 font-black" : "text-ink"}>{label}</span>
                    {isFree && <span className="rounded-full bg-green-100 text-green-700 px-1 text-[9px] font-black leading-none">FREE</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Link>

      {/* Price row */}
      <div className="mb-3 flex items-baseline gap-2">
        <span className="text-base font-semibold text-gold">₹{product.price}</span>
        {product.mrp > product.price && (
          <span className="text-xs text-muted line-through">₹{product.mrp}</span>
        )}
      </div>

      {currentQty === 0 ? (
        <button
          onClick={() => addToCart(product, 1)}
          disabled={product.stock === 0}
          className="mt-auto w-full rounded-full bg-olive px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-olive-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-muted min-h-[44px]"
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      ) : (
        <div className="mt-auto flex items-center justify-between w-full rounded-full border border-olive bg-white overflow-hidden h-11 px-1">
          <button
            onClick={() => updateQty(cartItem.id, currentQty - 1)}
            className="h-9 w-9 rounded-full bg-olive/10 flex items-center justify-center text-olive font-extrabold hover:bg-olive hover:text-white transition active:scale-90"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-sm font-bold text-ink">{currentQty}</span>
          <button
            onClick={() => updateQty(cartItem.id, currentQty + 1)}
            disabled={product.stock > 0 && currentQty >= product.stock}
            className="h-9 w-9 rounded-full bg-olive/10 flex items-center justify-center text-olive font-extrabold hover:bg-olive hover:text-white transition active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
