"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

import { ActionBadge } from "./ActionBadge";

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export const WishlistButton = () => {
  const { wishlistCount } = useWishlist();

  return (
    <Link href="/wishlist" className="relative p-2.5 rounded-full text-ink hover:text-terracotta hover:bg-white/70 transition min-h-[44px] min-w-[44px] flex items-center justify-center">
      <HeartIcon />
      <ActionBadge count={wishlistCount} className="bg-terracotta" />
    </Link>
  );
};

export default WishlistButton;
