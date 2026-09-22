"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Building2,
  Users,
  Compass,
  Navigation,
  ExternalLink,
  Train,
  Car,
  Bus,
  CheckCircle2,
  CalendarPlus,
} from "lucide-react";

export default function EventSchedule() {
  // Google Calendar URL generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Foodville at UP International Trade Show 2026"
  )}&dates=20260925T053000Z/20260929T143000Z&details=${encodeURIComponent(
    "Join Foodville at the UP International Trade Show! Explore authentic spices, dehydrated powders, shoot reels, and collect your exclusive Creator Gift Hamper. Business Hours: 11 AM–3 PM | Public Hours: 3 PM–8 PM."
  )}&location=${encodeURIComponent(
    "India Expo Centre & Mart, Greater Noida, Uttar Pradesh 201306"
  )}`;

  return (
    <section id="schedule" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#56684A]/10 text-[#3F5034] text-xs sm:text-sm font-bold tracking-wide">
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#56684A]" />
            <span>Event Logistics &amp; Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E2519] tracking-tight">
            UP International Trade Show
          </h2>
          <p className="text-base sm:text-xl font-medium text-[#963514]">
            Explore. Taste. Create. Collaborate.
          </p>
          <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
            Planning your visit? Here are the official trade show timings, venue navigation details, and transit
            instructions to meet Team Foodville at the India Expo Centre.
          </p>
        </div>

        {/* Schedule & Venue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Visual Campaign Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8DFC8] bg-[#FAF7F2] h-full flex flex-col">
              <div className="relative aspect-16/10 sm:aspect-4/3 w-full overflow-hidden">
                <Image
                  src="/images/event/trade-show-schedule-venue.jpg"
                  alt="UP International Trade Show Dates and Hours"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FBD535] bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    Official Venue
                  </span>
                  <h3 className="text-base sm:text-xl font-bold mt-1 leading-snug">
                    India Expo Centre, Greater Noida
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4 grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#56684A]/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#56684A]" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold uppercase text-[#8C8275]">Dates</p>
                      <p className="text-sm sm:text-base font-extrabold text-[#1E2519]">25 – 29 September 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#963514]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#963514]" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold uppercase text-[#8C8275]">Address</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#1E2519] leading-snug">
                        India Expo Centre &amp; Mart, Knowledge Park II, Greater Noida, UP 201306
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=India+Expo+Centre+%26+Mart+Greater+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#963514] hover:bg-[#7D2C10] text-white text-xs sm:text-sm font-bold shadow-md transition min-h-[44px]"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-4 h-4 opacity-75" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timings Breakdown & Transit Guide */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 flex flex-col justify-between">
            {/* Split Timings Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
              {/* Business Hours Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] relative overflow-hidden shadow-2xs hover:shadow-md transition">
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#E5F3FF] text-[#0066CC] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    Business Hours
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#8C8275]">B2B &amp; Trade</span>
                </div>

                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-baseline gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066CC] shrink-0 translate-y-0.5" />
                    <div>
                      <p className="text-xl sm:text-2xl font-extrabold text-[#1E2519]">11:00 AM – 3:00 PM</p>
                      <p className="text-xs text-[#524C44] mt-0.5 font-medium">Daily during 25–29 Sept</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs text-[#524C44] border-t border-[#E8DFC8] pt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Dedicated slot for Distributors, Wholesalers &amp; Retail Partners.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>Company registration / business ID badge required.</span>
                  </div>
                </div>
              </div>

              {/* Public & Creator Hours Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF8F4] border-2 border-[#B91C1C]/25 relative overflow-hidden shadow-2xs hover:shadow-md transition">
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#B91C1C] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Users className="w-3.5 h-3.5" />
                    Public Hours
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#B91C1C]">Open for Everyone!</span>
                </div>

                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-baseline gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#B91C1C] shrink-0 translate-y-0.5" />
                    <div>
                      <p className="text-xl sm:text-2xl font-extrabold text-[#1E2519]">3:00 PM – 8:00 PM</p>
                      <p className="text-xs text-[#524C44] mt-0.5 font-medium">Daily during 25–29 Sept</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs text-[#524C44] border-t border-[#E8DFC8] pt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <span>Open to all visitors, food lovers, home chefs &amp; families.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <span>Creator reel shooting, taste tests &amp; gift hamper distribution!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transit & Commute Info Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-[#1E2519] uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#56684A]" />
                How to Reach India Expo Centre
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#524C44]">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFC8]/60">
                  <Train className="w-4 h-4 text-[#56684A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E2519] block font-bold">Via Delhi-NCR Metro:</strong>
                    Take the Noida Metro (Aqua Line) to{" "}
                    <strong className="text-[#1E2519]">Knowledge Park II Station</strong>. The Expo Centre entrance
                    is just a 2-minute walk.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFC8]/60">
                  <Car className="w-4 h-4 text-[#963514] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E2519] block font-bold">Via Expressway / Cab / Car:</strong>
                    Direct connectivity via Noida-Greater Noida Expressway. No general visitor parking at Expo Mart; park for{" "}
                    <strong className="text-[#1E2519]">Free at NASA Ground Parking</strong>.
                    <span className="mt-1 flex items-center gap-1 font-semibold text-[#56684A]">
                      <Bus className="w-3.5 h-3.5 shrink-0 text-[#56684A]" />
                      <span>Free AC Electric Shuttle buses run to Expo gates.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Schedule CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#56684A] hover:bg-[#3F5034] text-white text-xs sm:text-sm font-bold shadow-xs transition min-h-[44px]"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>Add to Google Calendar</span>
              </a>

              <div className="text-xs text-[#8C8275] flex items-center justify-center sm:justify-start gap-1.5 italic font-serif">
                <span>See You There! Let&apos;s Talk Spice! 🥢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
