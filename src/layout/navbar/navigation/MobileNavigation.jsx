"use client";

import React, { useState } from "react";
import { Logo } from "@/layout/navbar/logo";
import { LocationSelector } from "@/layout/navbar/location";
import { SearchBar } from "@/layout/navbar/search";
import NavbarActions from "./NavbarActions";
import { MobileDrawer } from "@/layout/navbar/mobile/MobileDrawer";

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export const MobileNavigation = ({ onLocationClick, activeAddress }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Row 1 — logo, location, actions, hamburger */}
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:px-6">
        {/* Hamburger */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open navigation menu"
          className="p-2.5 rounded-full hover:bg-white/70 transition text-ink min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
        >
          <HamburgerIcon />
        </button>

        <Logo />

        {/* Location selector — compact on mobile */}
        <div className="flex-1 min-w-0">
          <LocationSelector
            onClick={onLocationClick}
            activeAddress={activeAddress}
          />
        </div>

        <NavbarActions />
      </div>

      {/* Row 2 — search bar */}
      <div className="px-3 pb-2.5 sm:px-6">
        <SearchBar isMobile={true} />
      </div>

      {/* Slide-out drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default MobileNavigation;
