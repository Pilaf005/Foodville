"use client";

import React from "react";
import { Logo } from "@/layout/navbar/logo";
import { LocationSelector } from "@/layout/navbar/location";
import { SearchBar } from "@/layout/navbar/search";
import NavbarActions from "./NavbarActions";

export const DesktopNavigation = ({ onLocationClick, activeAddress }) => {
  return (
    <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
      <Logo />
      <div className="h-6 w-px bg-gray-200/80 mx-2 hidden md:block shrink-0" />

      <LocationSelector
        onClick={onLocationClick}
        activeAddress={activeAddress}
      />

      <div className="flex-1 hidden sm:block">
        <SearchBar isMobile={false} />
      </div>

      <div className="shrink-0">
        <NavbarActions />
      </div>
    </div>
  );
};

export default DesktopNavigation;
