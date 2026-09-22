"use client";

import Link from "next/link";
import {
  ShoppingBag,
  MapPin,
  ExternalLink,
  Sparkles,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO } from "@/layout/footer/constants";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function EventFooterBanner() {
  const instagramHandle = CONTACT_INFO.instagram.value; // "@foodville15"
  const instagramUrl = CONTACT_INFO.instagram.href;

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 md:py-24 bg-[#56684A] text-white border-t border-[#3F5034]/40">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,0,0,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-7">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-white/20 text-[#FAF7F2] text-[11px] sm:text-sm font-bold tracking-wider uppercase shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-[#FBD535]" />
          <span>Foodville at UPITS 2026 • India Expo Centre</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
          Let&apos;s Create <br />
          <span className="font-serif italic text-[#FAF7F2]">
            a Tastier Tomorrow{" "}
            <span className="text-[#B91C1C] not-italic inline-block transition-transform hover:scale-125">
              ♡
            </span>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-[#FAF7F2]/90 max-w-2xl mx-auto font-light leading-relaxed">
          For the food creators, culinary pioneers, and home cooks who make the world a more flavorful place.
        </p>

        {/* Brand Tagline Pill */}
        <div>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-serif italic text-[#FAF7F2] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/15 border border-white/20">
            <span>Same Spices. Real People. Bigger Stories.</span>
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#B91C1C] text-[#B91C1C]" />
          </span>
        </div>

        {/* Micro Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-white/90 pt-1">
          <span className="inline-flex items-center gap-1.5 bg-black/15 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
            100% Pure Spices
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/15 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
            Creator Hampers
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/15 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
            Sensory Tasting
          </span>
        </div>

        {/* Action Buttons: Primary CTA + Balanced Secondary Buttons on Mobile, Row on Desktop */}
        <div className="max-w-md sm:max-w-none mx-auto w-full pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
          {/* Primary Instagram CTA */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#B91C1C] to-[#963514] hover:from-[#963514] hover:to-[#B91C1C] text-white text-xs sm:text-base font-bold shadow-lg shadow-black/25 transition-all transform hover:-translate-y-0.5 min-h-[46px] group"
          >
            <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Follow {instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>

          {/* Secondary Action Buttons (50/50 Grid on Mobile, Flex on Desktop) */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3.5 w-full sm:w-auto">
            <Link
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1E2519] text-xs sm:text-base font-bold shadow-md transition-all transform hover:-translate-y-0.5 min-h-[46px] text-center"
            >
              <ShoppingBag className="w-4 h-4 text-[#56684A] shrink-0" />
              <span>Online Store</span>
            </Link>

            <a
              href="https://maps.google.com/?q=India+Expo+Centre+%26+Mart+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-base font-bold backdrop-blur-xs transition-all transform hover:-translate-y-0.5 min-h-[46px] text-center"
            >
              <MapPin className="w-4 h-4 text-[#E6C987] shrink-0" />
              <span>Venue Map</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
