"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

import { ActionBadge } from "./ActionBadge";

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
      <circle cx="9" cy="21" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const CartButton = () => {
  const { cartCount, cartTotal } = useCart();

  return (
    <Link href="/cart" className="relative transition flex items-center justify-center">
      {/* Mobile View */}
      <div className="md:hidden p-2.5 rounded-full text-ink hover:text-olive hover:bg-white/70 transition min-h-[44px] min-w-[44px] flex items-center justify-center relative">
        <CartIcon />
        <ActionBadge count={cartCount} className="bg-olive" />
      </div>

      {/* Desktop View */}
      <div className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl transition font-bold text-sm border ${
        cartCount > 0
          ? "bg-[#6B7F59] hover:bg-[#5a6b4a] text-white border-[#6B7F59] shadow-sm"
          : "bg-gray-100 hover:bg-gray-200 text-ink/85 border-gray-200"
      }`}>
        <CartIcon />
        <span className="whitespace-nowrap">{cartCount > 0 ? `${cartCount} Items • ₹${cartTotal}` : "My Cart"}</span>
      </div>
    </Link>
  );
};

export default CartButton;
