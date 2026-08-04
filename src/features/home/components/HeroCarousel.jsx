"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
  const css = `
  .Carousal_005 {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    padding-bottom: 35px !important;
  }
  
  @media (min-width: 640px) {
    .Carousal_005 {
      aspect-ratio: auto;
      height: 380px;
      padding-bottom: 40px !important;
    }
  }
  
  .Carousal_005 .swiper-slide {
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;
  }

  @media (min-width: 640px) {
    .Carousal_005 .swiper-slide {
      border-radius: 25px;
    }
  }

  .Carousal_005 .swiper-pagination-bullet {
    background-color: #6B7F59 !important;
  }
  .Carousal_005 .swiper-pagination-bullet-active {
    width: 24px !important;
    border-radius: 6px !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-6xl mx-auto px-2 sm:px-4", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
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
          className="Carousal_005"
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
            <SwiperSlide key={index} className="">
              <img
                className="h-full w-full rounded-lg sm:rounded-3xl object-cover"
                src={image.src}
                alt={image.alt || `Hero slide ${index + 1}`}
              />
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
      </motion.div>
    </motion.div>
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
