"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { HERO_IMAGES } from "../constants/heroImages";

const Carousel_005 = ({
  images,
  className,
  showPagination = true,
  showNavigation = false,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}) => {
  return (
    <div className={cn("relative w-full max-w-6xl mx-auto px-2 sm:px-4", className)}>
      <div className="w-full aspect-[16/9] sm:h-[380px] overflow-hidden rounded-lg sm:rounded-3xl relative bg-stone-150">
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="creative"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_005 h-full w-full"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-3xl">
                <Image
                  className="rounded-lg sm:rounded-3xl object-cover"
                  src={image.src}
                  alt={image.alt || `Foodville hero slide ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 95vw, 1152px"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export function HeroCarousel() {
  const images = HERO_IMAGES && HERO_IMAGES.length > 0 ? HERO_IMAGES : [
    { src: "/images/x.com/13.jpeg", alt: "Illustrations" }
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden py-2">
      <Carousel_005 className="" images={images} autoplay showPagination loop />
    </div>
  );
}

export { Carousel_005 };
export default HeroCarousel;
