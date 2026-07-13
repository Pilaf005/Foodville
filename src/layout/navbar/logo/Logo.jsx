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
      className="flex items-center group hover:opacity-90 transition shrink-0"
    >
      {/* Wrapper scales as one unit on hover — ® moves with the logo */}
      <div
        className="relative inline-flex shrink-0 mr-2 transition-transform duration-300 group-hover:scale-105"
        style={{ willChange: "transform", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
      >
        <img
          src="/foodville-logo.png"
          alt="Foodville"
          width={142}
          height={44}
          className="h-8 sm:h-11 w-auto object-contain"
          style={{ transform: "translateZ(0)", imageRendering: "auto" }}
        />
        {/* ® mark — circle bottom-left just touches the top-right corner of letter E */}
        <span
          className="absolute text-[11px] sm:text-[14px] font-black text-ink/75 leading-none select-none pointer-events-none"
          aria-label="Registered trademark"
          style={{ top: "1px", right: "-5px", lineHeight: -1 }}
        >
          ®
        </span>
      </div>
    </Link>
  );
};

export default Logo;
