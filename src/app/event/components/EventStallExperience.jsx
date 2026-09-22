"use client";

import { useState } from "react";
import {
  Store,
  Gift,
  Sparkles,
  Heart,
  Camera,
  PackageCheck,
  Leaf,
  ChefHat,
  Box,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/layout/footer/constants";

function InstagramIcon({ className = "w-5 h-5" }) {
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

export default function EventStallExperience() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeHamperIndex, setActiveHamperIndex] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Visit Our Stall",
      subtitle: "Explore our products & get inspired",
      description:
        "Step inside the Foodville sensory booth. Experience the authentic aroma of pure sun-dried spices, sample dehydrated powders, and feel the natural purity firsthand.",
      icon: Store,
      color: "bg-[#EBF5EA] text-[#3F5034] border-[#3F5034]/20",
      badge: "The Sensory Booth",
    },
    {
      number: "2",
      title: "Create & Share",
      subtitle: "Make a reel, story or video & tag us",
      description:
        `Capture the culinary magic! Record an honest reaction, tasting reel, or recipe concept right at the stall. Post on Instagram tagging ${CONTACT_INFO.instagram.value} & #FoodvilleAtUPITS.`,
      icon: Camera,
      color: "bg-[#FFF4E5] text-[#B45309] border-[#B45309]/20",
      badge: "The Creator Zone",
    },
    {
      number: "3",
      title: "Get Your Gift Hamper*",
      subtitle: "Take home a special selection of Foodville products",
      description:
        "Show your posted story or reel to our on-ground team and collect an exclusive Foodville Gift Hamper box packed with chef-grade powders, seasonings & spices!",
      icon: Gift,
      color: "bg-[#FFF0F0] text-[#B91C1C] border-[#B91C1C]/20",
      badge: "VIP Hamper Desk",
    },
  ];

  const hamperFeatures = [
    {
      icon: Box,
      title: "Assorted Surprise Selection",
      desc: "A hand-curated variety of Foodville favorites — from signature sprinkler seasonings to pure spices and dehydrated vegetable essentials (selection varies daily).",
      badge: "Curated Mix",
    },
    {
      icon: Leaf,
      title: "100% Pure & Clean-Label",
      desc: "Every item in your gift box is crafted from natural, farm-sourced produce with zero chemical preservatives, adulteration, or artificial colors.",
      badge: "Farm Purity",
    },
    {
      icon: ChefHat,
      title: "Chef & Creator Ready",
      desc: "High-grade culinary essentials formulated for effortless recipe testing, creative food reels, kitchen experimentation, and everyday cooking delight.",
      badge: "Kitchen Grade",
    },
    {
      icon: PackageCheck,
      title: "Artisanal Kraft Packaging",
      desc: "Elegantly packed in an eco-conscious kraft gift box finished with Foodville's signature ribbon — ready for aesthetic unboxing stories.",
      badge: "Eco Gift Box",
    },
  ];

  const handleStepScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (steps?.length || 3);
    if (cardWidth > 0) {
      const current = Math.min(
        (steps?.length || 3) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeStepIndex) {
        setActiveStepIndex(current);
      }
    }
  };

  const handleHamperScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (hamperFeatures?.length || 4);
    if (cardWidth > 0) {
      const current = Math.min(
        (hamperFeatures?.length || 4) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeHamperIndex) {
        setActiveHamperIndex(current);
      }
    }
  };

  return (
    <section id="stall-experience" className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] relative overflow-hidden border-b border-[#E8DFC8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-xs sm:text-sm font-bold tracking-wide">
            <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B91C1C]" />
            <span>Visitor &amp; Creator Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E2519] tracking-tight">
            How It Works?
          </h2>
          <p className="text-base sm:text-xl font-serif italic text-[#963514] flex items-center justify-center gap-1.5">
            <span>Good Food Brings People Together</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#963514] text-[#963514] inline" />
          </p>
          <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
            Whether you&apos;re an Instagram creator, YouTube food reviewer, home cook, or curious trade visitor, here is the
            simple 3-step path to experiencing Foodville and claiming your complimentary gift hamper.
          </p>
        </div>

        {/* Mobile Swipe Guidance Bar for Steps */}
        <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
          <span className="font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#56684A]" />
            <span>3 Simple Steps</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
            <span>Step {activeStepIndex + 1} of {steps.length}</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* 3 Step Process: Horizontally Scrollable on Mobile, 3-Col Grid on Desktop */}
        <div
          onScroll={handleStepScroll}
          className="flex items-stretch md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 md:mb-16 relative overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="w-[85vw] max-w-[340px] sm:w-[360px] md:w-full md:max-w-none shrink-0 md:shrink snap-center p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E8DFC8] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 self-stretch"
              >
                <div className="flex-1 flex flex-col">
                  {/* Step Pill */}
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                    <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg sm:text-xl border ${step.color}`}>
                      {step.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8C8275] bg-[#FAF7F2] px-2.5 sm:px-3 py-1 rounded-full border border-[#E8DFC8]">
                      {step.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#1E2519]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#963514]">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed pt-1.5 flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#E8DFC8]/60 flex items-center gap-2 text-xs font-bold text-[#56684A]">
                  <Icon className="w-4 h-4" />
                  <span>Step {step.number} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots for Steps */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pb-8 sm:pb-10">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStepIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
              }`}
            />
          ))}
        </div>

        {/* Curated Hamper Showcase Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E8DFC8] shadow-lg sm:shadow-xl overflow-hidden p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#B91C1C]/10 text-[#B91C1C] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Trade Show Perk • 100% Complimentary</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1E2519]">
              The Curated Foodville Gift Hamper
            </h3>
            <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
              A hand-picked surprise assortment of our signature seasonings, pure spices, and dehydrated culinary powders — packaged especially for visiting creators and culinary enthusiasts who drop by our booth.
            </p>
          </div>

          {/* Mobile Swipe Guidance Bar for Hamper Pillars */}
          <div className="flex md:hidden items-center justify-between pb-1 px-1 text-xs text-[#736B63]">
            <span className="font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B91C1C]" />
              <span>Hamper Features</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[#B91C1C] font-bold text-[11px] bg-[#FFF0F0] px-2.5 py-0.5 rounded-full border border-[#B91C1C]/20">
              <span>Feature {activeHamperIndex + 1} of {hamperFeatures.length}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* 4 Feature Pillars: Scrollable on Mobile, Responsive Grid on Desktop */}
          <div
            onScroll={handleHamperScroll}
            className="flex items-stretch md:grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 pt-1 px-4 sm:px-0 -mx-4 sm:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {hamperFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="w-[75vw] max-w-[280px] sm:w-auto md:w-full md:max-w-none shrink-0 md:shrink snap-center p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8]/70 hover:border-[#56684A]/40 transition-all duration-300 flex flex-col justify-between group hover:bg-white hover:shadow-md self-stretch"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-center text-[#56684A] group-hover:bg-[#56684A] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#963514] bg-[#FFF4E5] px-2 py-0.5 rounded-full border border-[#B45309]/20">
                        {feat.badge}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#1E2519] mb-1.5 sm:mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed flex-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Indicator Dots for Hamper Features */}
          <div className="flex md:hidden items-center justify-center gap-1.5 pt-1 pb-1">
            {hamperFeatures.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeHamperIndex === i ? "w-6 bg-[#B91C1C]" : "w-1.5 bg-[#D5CCBE]"
                }`}
              />
            ))}
          </div>

          {/* Creator Claim Banner & Tagging Guide */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF8F4] border border-[#B91C1C]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#B91C1C]/10 border border-[#B91C1C]/20 flex items-center justify-center text-[#B91C1C] shrink-0 mt-0.5 sm:mt-0">
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-[#1E2519]">
                  How to Claim Your Hamper at Stall
                </h4>
                <p className="text-xs sm:text-sm text-[#524C44] leading-relaxed">
                  Publish a reel, story, or video shot at our booth tagging{" "}
                  <span className="font-bold text-[#B91C1C]">{CONTACT_INFO.instagram.value}</span> with hashtag{" "}
                  <span className="font-bold text-[#1E2519]">#FoodvilleAtUPITS</span>. Show your published post to our on-ground team to receive your gift box immediately!
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#B91C1C] hover:bg-[#963514] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all min-h-[44px]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow {CONTACT_INFO.instagram.value}</span>
              </a>
            </div>
          </div>

          {/* Disclaimer note */}
          <p className="text-[11px] sm:text-xs text-[#8C8275] italic text-center sm:text-left leading-relaxed">
            *Gift hampers are complimentary for verified food creators, bloggers, and culinary enthusiasts creating on-site content, while daily event supplies last. Product assortment in each hamper varies daily based on exhibition inventory.
          </p>
        </div>
      </div>
    </section>
  );
}
