"use client";

import { WHY_SHOP_POINTS } from "../constants";

export default function WhyShopWithUs() {
  return (
    <div className="rounded-3xl border border-cardline bg-cream/40 p-6 sm:p-8">
      <h3 className="text-base sm:text-lg font-bold text-ink uppercase tracking-wider mb-6 text-center sm:text-left">
        Why Shop From Foodville?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {WHY_SHOP_POINTS.map((pt, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-cardline/50 shadow-sm group hover:shadow transition-all duration-300"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full flex items-center justify-center border text-2xl sm:text-3xl shadow-inner transition-transform duration-300 group-hover:scale-105 ${pt.bgClass}`}
            >
              {pt.emoji}
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-ink leading-snug">{pt.title}</h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">{pt.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
