"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import WishlistCard from "@/features/wishlist/components/WishlistCard";

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
        className="text-xs sm:text-sm font-bold text-olive hover:underline flex items-center gap-1"
      >
        ← Continue Shopping
      </Link>
    </div>
  );
}

function WishlistEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 rounded-3xl border border-cardline bg-white/50 p-6">
      <div className="h-16 w-16 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta text-2xl">
        ♥
      </div>
      <h2 className="text-xl font-bold text-ink">Your Wishlist is Empty</h2>
      <p className="text-sm text-muted max-w-sm">
        Save items that you like to your wishlist so you can buy them later easily.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-olive px-6 py-3 text-sm font-bold text-white hover:bg-olive-dark transition shadow"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <WishlistHeader count={wishlist.length} />

      {wishlist.length === 0 ? (
        <WishlistEmptyState />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
