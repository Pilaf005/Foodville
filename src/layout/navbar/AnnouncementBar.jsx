"use client";

import React, { useState, useEffect } from "react";
import { DELIVERY_THRESHOLD, DELIVERY_CHARGE } from "@/features/cart/constants";
import { DEFAULT_COUPONS } from "@/features/cart/utils/pricingUtils";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dynamically generated from codebase single source of truth (excluding secret/hidden coupons)
  const announcements = [
    {
      icon: "🚚",
      text: `FREE Shipping on Orders Above ₹${DELIVERY_THRESHOLD}`,
      highlight: "PAN India Delivery across 24,000+ PIN Codes",
    },
    ...DEFAULT_COUPONS.filter((c) => c.showInCards !== false).map((c) => ({
      icon: c.firstOrderOnly ? "🎁" : "🏷️",
      text: `${c.title}`,
      highlight: `Use Code: ${c.code}`,
    })),
  ];

  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length, isMounted]);

  if (isDismissed) return null;

  return (
    <div suppressHydrationWarning className="bg-olive text-white text-[11px] sm:text-xs font-medium border-b border-olive-dark/30 py-2 px-4 transition-all duration-300">
      <div suppressHydrationWarning className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        {/* Dynamic Codebase Ticker Slider */}
        <div suppressHydrationWarning className="flex-1 overflow-hidden relative h-5 flex items-center justify-center sm:justify-start">
          {announcements.map((item, i) => (
            <div
              key={i}
              suppressHydrationWarning
              className={`absolute inset-0 flex items-center justify-center sm:justify-start gap-2 transition-all duration-500 transform ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-white/90 font-semibold truncate">
                {item.text}
              </span>
              <span className="hidden md:inline-block text-[#C9A86C] font-bold border-l border-white/20 pl-2">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Ticker Indicator Dots */}
        <div suppressHydrationWarning className="hidden sm:flex items-center gap-1.5 shrink-0">
          {announcements.map((_, i) => (
            <button
              key={i}
              type="button"
              suppressHydrationWarning
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-[#C9A86C]" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Announcement ${i + 1}`}
            />
          ))}
        </div>

        {/* Close Button */}
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setIsDismissed(true)}
          className="text-white/60 hover:text-white transition p-0.5 rounded shrink-0 ml-2 focus:outline-none"
          aria-label="Dismiss announcement"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
