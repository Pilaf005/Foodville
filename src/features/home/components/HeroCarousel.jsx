"use client";

import { HERO_IMAGES, HERO_HEIGHT } from "../constants/heroImages";
import { useHeroCarousel } from "../hooks/useHeroCarousel";

export function HeroCarousel() {
  const { currentSlide, setCurrentSlide } = useHeroCarousel(true);

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px]">
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
      <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-12 pointer-events-none z-10">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md max-w-xs sm:max-w-md">
          Pure, Natural &amp; Fresh —<br />Straight to Your Kitchen
        </h1>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-white/80 max-w-[200px] sm:max-w-sm drop-shadow hidden xs:block sm:block">
          Spice powders, seeds, dry fruits and herbal wellness products — sourced and packed with care.
        </p>
      </div>

      {/* Carousel Slide Indicators / Dots */}
      <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 flex gap-1.5 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            style={{ minWidth: "8px", minHeight: "8px", padding: "6px", margin: "-6px" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
