"use client";

import React from "react";
import { Logo } from "@/layout/navbar/logo";
import { LocationSelector } from "@/layout/navbar/location";
import { SearchBar } from "@/layout/navbar/search";
import NavbarActions from "./NavbarActions";

export const DesktopNavigation = ({ onLocationClick, activeAddress }) => {
  return (
    <div className="mx-auto flex max-w-[96%] items-center gap-3.5 px-4 py-3 sm:px-6 lg:px-8">
      <Logo />
      <div className="h-6 w-px bg-gray-200/80 mx-2 hidden md:block" />

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
