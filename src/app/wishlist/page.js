"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/features/products/components/ProductCard";

function WishlistHeader({ count }) {
  return (
    <div className="mb-8 border-b border-cardline pb-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">My Wishlist</h1>
        <p className="text-xs sm:text-sm text-muted mt-1">
          {count} {count === 1 ? "item" : "items"} saved for later
        </p>
      </div>
      <Link
        href="/"
        className="text-xs sm:text-sm font-bold text-olive hover:underline flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px] inline-flex items-center"
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}

function WishlistEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 rounded-3xl border border-cardline bg-white/50 p-6">
      <div className="h-16 w-16 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-ink">Your Wishlist is Empty</h2>
      <p className="text-sm text-muted max-w-sm">
        Save items that you like to your wishlist so you can buy them later easily.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-olive px-6 py-3 text-sm font-bold text-white hover:bg-olive-dark transition shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px] inline-flex items-center justify-center"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="mx-auto max-w-6xl px-4 pt-4 pb-[20px] sm:px-6 sm:py-6">
      <WishlistHeader count={wishlist.length} />

      {wishlist.length === 0 ? (
        <WishlistEmptyState />
      ) : (
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
