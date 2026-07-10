"use client";

import React from "react";
import { Logo } from "@/layout/navbar/logo";
import { LocationSelector } from "@/layout/navbar/location";
import { SearchBar } from "@/layout/navbar/search";
import NavbarActions from "./NavbarActions";

export const DesktopNavigation = ({ onLocationClick, activeAddress }) => {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
      <Logo />

      <LocationSelector
        onClick={onLocationClick}
        activeAddress={activeAddress}
      />

      <SearchBar isMobile={false} />

      <NavbarActions />
    </div>
  );
};

export default DesktopNavigation;
