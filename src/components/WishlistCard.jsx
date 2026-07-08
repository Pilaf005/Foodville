"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistCard({ product }) {
  const router = useRouter();
  const { cart, addToCart, updateQty } = useCart();
  const { removeFromWishlist } = useWishlist();

  const cartItem = cart.find((item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-"));
  const currentQty = cartItem ? cart.filter((item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-")).reduce((sum, item) => sum + item.qty, 0) : 0;

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const isOutOfStock = product.stock === 0;

  return (
    <div className="relative flex flex-col rounded-2xl border border-cardline bg-white p-3 transition hover:shadow-md group">

      {/* Image — no heart button here */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="mb-3 aspect-square overflow-hidden rounded-xl bg-cream">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23F5F5F4'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='%23A8A29E'>No Image</text></svg>";
            }}
          />
        </div>

        {/* Discount badge */}
        {discount > 0 && (
          <span className="mb-2 inline-block rounded-full bg-terracotta/10 px-2 py-0.5 text-xs font-medium text-terracotta">
            {discount}% OFF
          </span>
        )}

        {product.category === "bulk" && (
          <span className="mb-2 ml-1.5 inline-block rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-semibold text-blue-700">
            Save More
          </span>
        )}

        {/* Name & unit */}
        <h3 className="line-clamp-1 text-sm font-bold text-ink">{product.name}</h3>
        <p className="mb-2 text-xs text-muted">{product.unit}</p>

        {product.comboIncludes && (
          <div className="mb-3 mt-1 rounded-xl bg-cream/60 p-2.5 border border-cardline/60">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">Combo Includes:</span>
            <ul className="text-[10px] text-ink font-medium list-disc list-inside space-y-0.5 mt-1">
              {product.comboIncludes.map((item, idx) => (
                <li key={idx} className="line-clamp-1 text-ink">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Link>

      {/* Price */}
      <div className="mb-3 flex items-baseline gap-2">
        <span className="text-base font-semibold text-gold">₹{product.price}</span>
        {product.mrp > product.price && (
          <span className="text-xs text-muted line-through">₹{product.mrp}</span>
        )}
      </div>

      {/* ── Bottom action row ── */}
      {currentQty === 0 ? (
        /* Not in cart yet: [Add to Cart] [🗑] */
        <div className="mt-auto flex items-center gap-2">
          <button
            onClick={() => addToCart(product, 1)}
            disabled={isOutOfStock}
            className="flex-1 rounded-full bg-olive py-2 text-xs font-semibold text-white transition hover:bg-olive-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-muted"
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>

          {/* Trash button */}
          <button
            onClick={() => removeFromWishlist(product.id)}
            aria-label="Remove from wishlist"
            title="Remove from wishlist"
            className="h-9 w-9 shrink-0 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 hover:text-red-700 hover:scale-105 active:scale-95 transition"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
          </button>
        </div>
      ) : (
        /* In cart: [View Cart] [🗑] */
        <div className="mt-auto flex items-center gap-2">
          <button
            onClick={() => router.push("/cart")}
            className="flex-1 rounded-full border-2 border-olive bg-transparent hover:bg-olive/10 text-olive py-2 text-xs font-bold text-center transition active:scale-[0.98]"
          >
            View Cart
          </button>

          {/* Trash button */}
          <button
            onClick={() => removeFromWishlist(product.id)}
            aria-label="Remove from wishlist"
            title="Remove from wishlist"
            className="h-9 w-9 shrink-0 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 hover:text-red-700 hover:scale-105 active:scale-95 transition"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
