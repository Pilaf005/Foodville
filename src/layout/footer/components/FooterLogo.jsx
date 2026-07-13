import React from "react";
import Link from "next/link";
import QualityBadge from "./QualityBadge";
import { COMPANY_INFO } from "../constants";

export const FooterLogo = () => {
  return (
    <div className="col-span-2 md:col-span-4 space-y-4">
      <Link
        href="/"
        className="flex items-center group hover:opacity-90 transition max-w-max"
      >
        <div
          className="relative inline-flex transition-transform duration-300 group-hover:scale-105"
          style={{ willChange: "transform", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src="/foodville-logo.png"
            alt="Foodville Logo"
            width={155}
            height={48}
            className="h-12 w-auto object-contain"
            style={{ transform: "translateZ(0)", imageRendering: "auto" }}
          />
          {/* ® mark — circle bottom-left just touches the top-right corner of letter E */}
          <span
            className="absolute text-[13px] font-black leading-none select-none pointer-events-none"
            aria-label="Registered trademark"
            style={{ top: "1px", right: "-5px", lineHeight: -1 , color: "rgba(255,255,255,0.75)" }}
          >
            ®
          </span>
        </div>
      </Link>

      <div className="space-y-2 text-xs text-white/80 leading-relaxed">
        <p className="font-bold text-white text-sm">{COMPANY_INFO.name}</p>
        <p>
          H-112, 1st Floor, Patel Nagar-III,
          <br />
          Ghaziabad, U.P. 201001
        </p>
      </div>

      <QualityBadge />
    </div>
  );
};

export default FooterLogo;
