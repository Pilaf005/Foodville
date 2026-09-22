"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function EventFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is entry free for the public and food creators?",
      a: "Yes! During Public Hours (3:00 PM – 8:00 PM daily between 25–29 September), the UP International Trade Show is open to all visitors, food enthusiasts, home cooks, food bloggers, and lifestyle creators.",
    },
    {
      q: "Do creators need prior registration or a ticket to claim the gift hamper?",
      a: "No advance online registration is needed! Simply visit our stall at the India Expo Centre during the trade show, record a quick reel, story, or tasting review featuring Foodville, tag @foodville15 with #FoodvilleAtUPITS, and show it to our on-ground team to collect your complimentary gift hamper (while daily supplies last).",
    },
    {
      q: "What are the Business Hours (11:00 AM – 3:00 PM) meant for?",
      a: "The morning window (11:00 AM – 3:00 PM) is dedicated to B2B meetings, distributor agreements, bulk wholesale purchasing, and global export partnerships. If you operate a retail chain, supermarket, or import-export business, this is the best time to connect with our founding directors.",
    },
    {
      q: "How do I reach the venue by Metro or car? Where is visitor parking?",
      a: "India Expo Centre & Mart is located in Knowledge Park II, Greater Noida. By Metro, take the Aqua Line to 'Knowledge Park II Station' (just a 2-minute walk from the gates). For personal vehicles, note that there is no general parking inside the Expo Mart; visitors can park free of charge at the designated NASA Ground Parking, where free AC electric shuttle buses operate continuously to take you directly to and from the Expo Mart gates.",
    },
    {
      q: "Can I buy spices and dehydrated powders at the stall?",
      a: "Yes! In addition to taste testing and free creator hampers, our stall will have exclusive trade show festival discounts, chef bundle packs, and limited-edition spice combos available for direct on-spot purchase.",
    },
    {
      q: "What products will be showcased at the Foodville booth?",
      a: "You'll experience our full line of 100% natural, dehydrated vegetables and culinary seasonings, including Potato Flakes, Beetroot Powder, Farm-Fresh Mint Powder, Roasted Garlic Powder, Peri-Peri Masala, Red Onion Powder, Tomato Umami Base, and Moringa Powder.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] relative overflow-hidden border-b border-[#E8DFC8]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#56684A]/10 text-[#3F5034] text-xs sm:text-sm font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#56684A]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E2519] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
            Everything you need to know about visiting Foodville at the UP International Trade Show 2026.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl sm:rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs overflow-hidden transition"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-serif font-bold text-[#1E2519] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#963514] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#524C44] leading-relaxed border-t border-[#E8DFC8]/60 pt-3 sm:pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
