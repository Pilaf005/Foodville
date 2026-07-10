"use client";

import { useState, useEffect } from "react";
import { HERO_IMAGES, HERO_SLIDE_INTERVAL_MS } from "../constants/heroImages";

export function useHeroCarousel(isActive = true) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isActive]);

  return { currentSlide, setCurrentSlide, totalSlides: HERO_IMAGES.length };
}

export default useHeroCarousel;
