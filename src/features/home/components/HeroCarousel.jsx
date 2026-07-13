"use client";

import { HERO_IMAGES, HERO_HEIGHT } from "../constants/heroImages";
import { useHeroCarousel } from "../hooks/useHeroCarousel";

export function HeroCarousel() {
  const { currentSlide, setCurrentSlide } = useHeroCarousel(true);

  return (
  <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[16/9] md:aspect-auto md:h-[340px] lg:h-[380px]">
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

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(46,42,38,0.85) 0%, rgba(46,42,38,0.4) 60%, rgba(46,42,38,0.1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center px-5 pb-0 sm:px-8 md:px-12 pointer-events-none z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md max-w-xs sm:max-w-md">
          Pure, Natural &amp; Fresh —<br />Straight to Your Kitchen
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-white/80 max-w-[240px] sm:max-w-sm drop-shadow">
          Spice powders, seeds, dry fruits and herbal wellness products — sourced and packed with care.
        </p>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 md:bottom-4 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
