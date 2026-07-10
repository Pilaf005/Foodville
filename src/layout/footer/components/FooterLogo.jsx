import React from "react";
import Link from "next/link";
import QualityBadge from "./QualityBadge";
import { COMPANY_INFO } from "../constants";

export const FooterLogo = () => {
  return (
    <div className="col-span-1 md:col-span-4 space-y-4">
      <Link
        href="/"
        className="flex items-center group hover:opacity-90 transition max-w-max"
      >
        <img
          src="/foodville-logo.png"
          alt="Foodville Logo"
          width={155}
          height={48}
          className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
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
