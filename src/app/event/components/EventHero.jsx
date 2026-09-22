"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Gift,
  ArrowDown,
  ExternalLink,
  Store,
  Navigation,
} from "lucide-react";

export default function EventHero() {
  // Target: 25 September 2026, 11:00 AM IST
  const targetDate = new Date("2026-09-25T11:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isLive: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 border-b border-[#E8DFC8]/60">
      {/* Subtle organic ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#56684A]/10 via-[#FAF7F2]/40 to-transparent rounded-full blur-3xl pointer-events-none -mt-32" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#B91C1C]/5 rounded-full blur-3xl pointer-events-none -mr-24 -mb-24" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#56684A]/10 border border-[#56684A]/25 text-[#3F5034] text-[11px] sm:text-sm font-bold tracking-wide shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B91C1C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B91C1C]"></span>
            </span>
            <span>UP International Trade Show 2026</span>
          </div>

          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#B91C1C]/10 border border-[#B91C1C]/20 text-[#B91C1C] text-[11px] sm:text-sm font-bold shadow-2xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B91C1C]" />
            <span>Foodville Booth</span>
          </div>
        </div>

        {/* Category Tagline */}
        <p className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#963514] mb-2 sm:mb-3">
          Exporting Pure Indian Spices &amp; Powders Worldwide
        </p>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E2519] leading-[1.2] tracking-tight max-w-4xl mx-auto mb-4 sm:mb-6 px-1">
          Hey Food Creators &amp; Food Lovers! <br />
          <span className="text-[#3F5034]">You&apos;re Invited to Experience</span>{" "}
          <span className="italic text-[#963514] font-serif block sm:inline">the Real Taste of India</span>
        </h1>

        {/* Subtitle / Invitation */}
        <p className="text-xs sm:text-base md:text-lg text-[#524C44] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 font-medium">
          Let&apos;s create something flavorful together! Join Foodville at the prestigious{" "}
          <strong className="text-[#1E2519] font-bold">UP International Trade Show (UPITS 2026)</strong> at India
          Expo Centre, Greater Noida. Explore farm-pure spices, shoot creative tasting reels, and collect your exclusive
          complimentary gift hamper! <span className="text-[#B91C1C] font-semibold">♡</span>
        </p>

        {/* Live Countdown Timer (Mobile-optimized responsive card) */}
        <div className="max-w-2xl mx-auto p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-[#E8DFC8] shadow-md mb-6 sm:mb-10">
          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 px-1">
            <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#56684A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880]" />
              {timeLeft.isLive ? "Trade Show is Live Now!" : "Countdown to Opening Day"}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#8C8275] bg-[#FAF7F2] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#E8DFC8]">
              Greater Noida
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8]/70">
              <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2519]">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#8C8275] mt-0.5 sm:mt-1 block">
                Days
              </span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8]/70">
              <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2519]">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#8C8275] mt-0.5 sm:mt-1 block">
                Hours
              </span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8]/70">
              <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2519]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#8C8275] mt-0.5 sm:mt-1 block">
                Minutes
              </span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFF5F5] border border-[#B91C1C]/25">
              <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#B91C1C]">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#B91C1C] mt-0.5 sm:mt-1 block">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* 4 Quick Highlights in a Balanced Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-10 text-left">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#56684A]/10 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#56684A]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8C8275] tracking-wider">Dates</p>
              <p className="text-xs sm:text-sm font-extrabold text-[#1E2519] truncate">25–29 Sept</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#963514]/10 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#963514]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8C8275] tracking-wider">Hours</p>
              <p className="text-xs sm:text-sm font-extrabold text-[#1E2519] truncate">11 AM – 8 PM</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#C5A880]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C6D37]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8C8275] tracking-wider">Venue</p>
              <p className="text-xs sm:text-sm font-extrabold text-[#1E2519] truncate">Greater Noida</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#B91C1C]/25 shadow-2xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#B91C1C]/10 flex items-center justify-center shrink-0">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#B91C1C]" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#B91C1C] tracking-wider">Creator Perk</p>
              <p className="text-xs sm:text-sm font-extrabold text-[#B91C1C] truncate">Free Hamper*</p>
            </div>
          </div>
        </div>

        {/* Action Navigation Buttons (Mobile-first balanced grid like /collaborate) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-3.5 pt-1 max-w-sm sm:max-w-none mx-auto w-full">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3.5 w-full sm:w-auto">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#56684A] hover:bg-[#3F5034] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-98 min-h-[44px] text-center"
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Timings &amp; Dates</span>
              <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80 shrink-0" />
            </a>

            <a
              href="#stall-experience"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-[#B91C1C]/10 hover:bg-[#B91C1C]/15 text-[#B91C1C] border border-[#B91C1C]/25 text-xs sm:text-sm font-bold transition active:scale-98 min-h-[44px] text-center"
            >
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Gift Hampers*</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3.5 w-full sm:w-auto">
            <a
              href="https://maps.google.com/?q=India+Expo+Centre+%26+Mart+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white hover:bg-[#F2EDE4] text-[#1E2519] border border-[#E8DFC8] text-xs sm:text-sm font-bold shadow-2xs transition active:scale-98 min-h-[44px] text-center"
            >
              <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#963514] shrink-0" />
              <span>Directions</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8C8275] shrink-0" />
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#524C44] border border-[#E8DFC8] text-xs sm:text-sm font-bold shadow-2xs transition active:scale-98 min-h-[44px] text-center"
            >
              <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#56684A] shrink-0" />
              <span>Catalogue</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
