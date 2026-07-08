"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/components/CategoryFilter";
import ShopBy from "@/components/ShopBy";
import NewReads from "@/components/NewReads";

// Verified Unsplash food photos — spices, seeds, dry fruits, nuts
const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=80", alt: "Spice powders" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80", alt: "Seeds" },
  { src: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Turmeric spice" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=80", alt: "Colorful food" },
  { src: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=700&q=80", alt: "Almonds" },
  { src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80", alt: "Dry fruits assortment" },
  { src: "https://plus.unsplash.com/premium_photo-1774416430699-ca015984fa4f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Moringa powder" },
  { src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=700&q=80", alt: "Pistachios" },
];


function HomeContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow effect
  useEffect(() => {
    if (searchQuery) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      {/* Hero — Automatic Cross-Fading Photo Carousel */}
      {!searchQuery && (
        <section className="relative overflow-hidden rounded-3xl" style={{ height: 280 }}>
          {/* Images container */}
          <div className="absolute inset-0 bg-cream">
            {HERO_IMAGES.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: currentSlide === i ? 1 : 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(46,42,38,0.85) 0%, rgba(46,42,38,0.4) 60%, rgba(46,42,38,0.1) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Hero Text — left-aligned on top */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 pointer-events-none z-10">
            <h1 className="text-2xl sm:text-3.5xl font-bold text-white leading-tight drop-shadow-md max-w-md">
              Pure, Natural &amp; Fresh —<br />Straight to Your Kitchen
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/80 max-w-sm drop-shadow">
              Spice powders, seeds, dry fruits and herbal wellness products — sourced and packed with care.
            </p>
          </div>

          {/* Carousel Slide Indicators / Dots */}
          <div className="absolute bottom-4 right-6 flex gap-1.5 z-10">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      {!searchQuery && <CategoryFilter active="all" />}
      {!searchQuery && <ShopBy />}
      {!searchQuery && <NewReads />}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-muted">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

