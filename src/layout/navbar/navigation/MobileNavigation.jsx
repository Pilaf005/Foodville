"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/layout/navbar/logo";
import { SearchBar } from "@/layout/navbar/search";
import { CartButton, ProfileButton } from "../actions";

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

const TRANSITION = "opacity 280ms ease, transform 280ms ease";
const COLLAPSE_TRANSITION = "max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 240ms cubic-bezier(0.4,0,0.2,1)";

export const MobileNavigation = ({ onLocationClick, activeAddress, onMenuClick, isScrolled }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const addressText = activeAddress
    ? `Delivering to ${activeAddress.city || activeAddress.label || "Home"} ${activeAddress.pincode || ""} - Update location`
    : "Deliver to Home - Update location";

  return (
    <div>
      {/* ── Main row: [Hamburger] [middle] [Cart] — always visible ── */}
      <div className="flex items-center gap-1 px-4 pt-1.5 pb-1.5">
        {/* Left: Hamburger — always fixed */}
        <button
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="-ml-2 p-2 rounded-full hover:bg-black/5 transition text-ink min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
        >
          <HamburgerIcon />
        </button>

        {/* Center: crossfade between Logo+Profile and SearchBar */}
        <div className="flex-1 min-w-0 relative" style={{ height: "36px" }}>
          {/* Logo + Profile layer — visible when expanded */}
          <div
            className="absolute inset-0 flex items-center"
            style={{
              opacity: isScrolled ? 0 : 1,
              transform: isScrolled ? "translateY(-8px)" : "translateY(0)",
              pointerEvents: isScrolled ? "none" : "auto",
              transition: TRANSITION,
            }}
          >
            <Logo />
            <div className="ml-auto">
              <ProfileButton />
            </div>
          </div>

          {/* SearchBar layer — visible when collapsed */}
          <div
            className="absolute inset-0 flex items-center"
            style={{
              opacity: isScrolled ? 1 : 0,
              transform: isScrolled ? "translateY(0)" : "translateY(8px)",
              pointerEvents: isScrolled ? "auto" : "none",
              transition: TRANSITION,
            }}
          >
            <div className="w-full">
              <SearchBar isMobile={true} />
            </div>
          </div>
        </div>

        {/* Right: Cart — always fixed */}
        <div className="shrink-0 -mr-1.5">
          <CartButton />
        </div>
      </div>

      {/* ── Search row below (collapses when scrolled) ── */}
      <div
        style={{
          maxHeight: isScrolled ? "0px" : "44px",
          opacity: isScrolled ? 0 : 1,
          overflow: "hidden",
          transition: COLLAPSE_TRANSITION,
        }}
      >
        <div className="px-4 pb-1.5">
          <SearchBar isMobile={true} />
        </div>
      </div>

      {/* ── Address strip (collapses with top section) ── */}
      {isHome && (
        <div
          style={{
            maxHeight: isScrolled ? "0px" : "40px",
            opacity: isScrolled ? 0 : 1,
            overflow: "hidden",
            transition: COLLAPSE_TRANSITION,
          }}
        >
          <button
            onClick={onLocationClick}
            suppressHydrationWarning
            className="w-full bg-gray-50/70 hover:bg-gray-100/70 border-y border-cardline/60 py-1.5 px-4 flex items-center gap-1.5 focus:outline-none transition text-left"
            aria-label="Change delivery location"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-ink/80 shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-[11px] font-bold text-ink/85 truncate flex-1">
              {addressText}
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-ink/80 shrink-0">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
