"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

import { ActionBadge } from "./ActionBadge";

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
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
