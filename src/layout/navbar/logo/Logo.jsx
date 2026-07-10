"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0 });
        }
      }}
      className="flex items-center group hover:opacity-90 transition shrink-0 mr-2"
    >
      <img
        src="/foodville-logo.png"
        alt="Foodville"
        width={142}
        height={44}
        className="h-8 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default Logo;
