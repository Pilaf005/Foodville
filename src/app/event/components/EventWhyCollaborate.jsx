"use client";

import { useState } from "react";
import {
  Video,
  Gift,
  Users,
  Leaf,
  Heart,
  CheckCircle2,
  Award,
  ArrowRight,
} from "lucide-react";

export default function EventWhyCollaborate() {
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  const benefits = [
    {
      icon: Video,
      title: "Create Engaging Content",
      subtitle: "Shoot reels, reviews, recipes & more",
      description:
        "Level up your feed with vivid colors and real cooking hacks. From 1-minute crispy potato snacks to vibrant beetroot smoothies, your followers will love the authenticity.",
      badge: "High Engagement",
      color: "from-[#FFF4E5] to-[#FAF7F2] text-[#B45309]",
      borderColor: "border-[#B45309]/20",
    },
    {
      icon: Gift,
      title: "Complimentary Gift Hampers*",
      subtitle: "Take home a selection of our premium spices",
      description:
        "Every creator who features Foodville at the trade show receives a hand-picked VIP gift hamper box packed with our signature dehydrated vegetable powders & spice blends.",
      badge: "Special Perks",
      color: "from-[#FFF0F0] to-[#FAF7F2] text-[#B91C1C]",
      borderColor: "border-[#B91C1C]/20",
    },
    {
      icon: Users,
      title: "Be Part of a Growing Food Story",
      subtitle: "Join a brand that celebrates Indian flavours",
      description:
        "Foodville is redefining modern kitchen convenience while preserving traditional Indian farm purity. Grow alongside a fast-scaling brand with ongoing sponsorship opportunities.",
      badge: "Long-term Growth",
      color: "from-[#EBF5EA] to-[#FAF7F2] text-[#3F5034]",
      borderColor: "border-[#3F5034]/20",
    },
    {
      icon: Leaf,
      title: "Experience Authentic Products",
      subtitle: "Real spices. Real taste. Real stories.",
      description:
        "No hidden chemicals, no synthetic colors, and zero artificial preservatives. Products you can proudly recommend to your followers with 100% confidence.",
      badge: "100% Pure",
      color: "from-[#F5F0FF] to-[#FAF7F2] text-[#6B21A8]",
      borderColor: "border-[#6B21A8]/20",
    },
  ];

  const handleBenefitScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (benefits?.length || 4);
    if (cardWidth > 0) {
      const current = Math.min(
        (benefits?.length || 4) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeBenefitIndex) {
        setActiveBenefitIndex(current);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#56684A]/10 text-[#3F5034] text-xs sm:text-sm font-bold tracking-wide">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#56684A]" />
            <span>Creator Benefits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E2519] tracking-tight">
            Why Collaborate with Foodville?
          </h2>
          <p className="text-base sm:text-xl font-serif italic text-[#963514] flex items-center justify-center gap-1.5">
            <span>Good Food Creates Great Connections</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#963514] text-[#963514] inline" />
          </p>
          <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
            We believe creators are the heart of culinary storytelling. Here is what makes collaborating with
            Foodville rewarding, enjoyable, and delicious.
          </p>
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
          <span className="font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#56684A]" />
            <span>4 Creator Perks</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
            <span>Benefit {activeBenefitIndex + 1} of {benefits.length}</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* 4 Benefits Container: Horizontally Scrollable on Mobile, Responsive Grid on Desktop */}
        <div
          onScroll={handleBenefitScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 mb-4 md:mb-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`w-[84vw] max-w-[340px] sm:w-[360px] md:w-full md:max-w-none shrink-0 md:shrink snap-center p-5 sm:p-6 lg:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${b.color} border ${b.borderColor} shadow-2xs hover:shadow-md transition duration-300 flex flex-col justify-between group hover:-translate-y-0.5 h-full`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-2xs border border-[#E8DFC8]/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/80 px-2.5 sm:px-3 py-1 rounded-full border border-[#E8DFC8]">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#1E2519] mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#963514] mb-2 sm:mb-3">
                    {b.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 border-t border-[#E8DFC8]/60 flex items-center gap-2 text-xs font-bold text-[#1E2519]">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#059669]" />
                  <span>Creator Partner Perks</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pb-8 sm:pb-10">
          {benefits.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeBenefitIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
              }`}
            />
          ))}
        </div>

        {/* Creator Callout Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF7F2] border border-[#E8DFC8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-xl font-serif font-bold text-[#1E2519]">
              Are you attending the UP International Trade Show?
            </h4>
            <p className="text-xs sm:text-sm text-[#524C44]">
              Drop by between 3:00 PM – 8:00 PM to film your reels, meet our team, and grab your hamper box!
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <a
              href="#schedule"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#56684A] hover:bg-[#3F5034] text-white text-xs sm:text-sm font-bold shadow-xs transition min-h-[44px]"
            >
              <span>See Venue &amp; Hours</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
