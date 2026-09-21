"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Leaf,
  FlaskConicalOff,
  Globe2,
  ArrowRight,
} from "lucide-react";
import ProductCard from "@/features/products/components/ProductCard";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductCardSkeleton } from "@/components/feedback/Skeleton";

// Verified active Foodville products with real Cloudflare R2 primary images
const FALLBACK_ACTIVE_PRODUCTS = [
  {
    id: 6,
    numericId: 6,
    name: "Potato Flakes",
    slug: "potato-flakes",
    category: "seasoning",
    price: 99,
    mrp: 199,
    unit: "200g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/5c34a4aa-eff5-4f82-a246-afc38a8c5715.png",
    stock: 150,
    rating: 4.8,
    shopBy: "bestseller",
    isComingSoon: false,
  },
  {
    id: 7,
    numericId: 7,
    name: "Mint Powder",
    slug: "mint-powder",
    category: "powders",
    price: 80,
    mrp: 160,
    unit: "50g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/mint-powder/bccb9c9c-2d7b-43d3-8253-9a7f17be7f99.png",
    stock: 150,
    rating: 4.8,
    shopBy: "bestseller",
    isComingSoon: false,
  },
  {
    id: 13,
    numericId: 13,
    name: "Beetroot Powder",
    slug: "beetroot-powder",
    category: "powders",
    price: 110,
    mrp: 220,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/beetroot-powder/f470d092-a5b8-4c17-b681-fdefacd3055d.png",
    stock: 150,
    rating: 4.8,
    shopBy: "trending",
    isComingSoon: false,
  },
  {
    id: 3,
    numericId: 3,
    name: "Garlic Powder",
    slug: "garlic-powder",
    category: "powders",
    price: 90,
    mrp: 180,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/garlic-powder/76c43158-3201-4704-9ff0-38902a2fdbf5.png",
    stock: 150,
    rating: 4.8,
    shopBy: "bestseller",
    isComingSoon: false,
  },
  {
    id: 15,
    numericId: 15,
    name: "Peri-Peri Masala",
    slug: "peri-peri-masala",
    category: "seasoning",
    price: 99,
    mrp: 199,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/76d75845-e7eb-4bb3-9879-235505ee7dd7.png",
    stock: 150,
    rating: 4.8,
    shopBy: "trending",
    isComingSoon: false,
  },
  {
    id: 1,
    numericId: 1,
    name: "Red Onion Powder",
    slug: "red-onion-powder",
    category: "powders",
    price: 100,
    mrp: 200,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/red-onion-powder/581685d0-5eb9-4c9b-add5-cd1454dc5e7c.png",
    stock: 150,
    rating: 4.8,
    shopBy: "bestseller",
    isComingSoon: false,
  },
  {
    id: 5,
    numericId: 5,
    name: "Tomato Powder",
    slug: "tomato-powder",
    category: "powders",
    price: 95,
    mrp: 190,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/tomato-powder/9907b6e1-06df-41a2-b515-58b951ddf4a9.png",
    stock: 150,
    rating: 4.8,
    shopBy: "bestseller",
    isComingSoon: false,
  },
  {
    id: 12,
    numericId: 12,
    name: "Moringa Powder",
    slug: "moringa-powder",
    category: "powders",
    price: 99,
    mrp: 199,
    unit: "100g",
    image: "https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev/media/products/catalog/a9831af5-f1dd-4ee9-9f5e-c7738a949fe8.png",
    stock: 150,
    rating: 4.8,
    shopBy: "trending",
    isComingSoon: false,
  },
];

export default function EventProductShowcase() {
  const qualityBadges = [
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      desc: "Pure vegetable & spice extracts with zero adulteration",
    },
    {
      icon: FlaskConicalOff,
      title: "No Added Preservatives",
      desc: "Clean-label purity for healthy, everyday cooking",
    },
    {
      icon: Sparkles,
      title: "Authentic Indian Taste",
      desc: "Retains the true aroma, color, and culinary kick",
    },
    {
      icon: Globe2,
      title: "Sourced with Care",
      desc: "Ethically contracted directly from Indian farms",
    },
  ];

  // Fetch live active products from the website
  const { products, isPending } = useProducts({
    limit: 8,
    sort: "rating",
  });

  const displayProducts =
    products && products.length > 0
      ? products.slice(0, 8)
      : FALLBACK_ACTIVE_PRODUCTS;

  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const handleProductScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (displayProducts?.length || 8);
    if (cardWidth > 0) {
      const current = Math.min(
        (displayProducts?.length || 8) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeProductIndex) {
        setActiveProductIndex(current);
      }
    }
  };

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] relative overflow-hidden border-b border-[#E8DFC8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#56684A]/10 text-[#3F5034] text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#56684A]" />
            <span>Exhibition Catalogue</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E2519] tracking-tight">
            Authentic Indian Spices &amp; Powders
          </h2>
          <p className="text-base sm:text-xl font-medium text-[#963514]">
            Pure Ingredients. Rich Flavours. Real Stories.
          </p>
          <p className="text-xs sm:text-base text-[#524C44] leading-relaxed">
            Experience our full export-grade range at the UP International Trade Show booth. From instant dehydrated
            vegetable bases to culinary seasoning blends, each product is crafted for peak aroma and natural health.
          </p>
        </div>

        {/* 4 Trust Badges: Snug 2x2 on Mobile, 4-Col on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-14">
          {qualityBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#E8DFC8] shadow-2xs flex flex-col items-center text-center space-y-1.5 sm:space-y-2 hover:shadow-md transition"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#56684A]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#56684A]" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#1E2519] leading-snug">
                  {b.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#8C8275] leading-snug">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Poster Banner (16:9 Widescreen Showcase) */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-[#E8DFC8] mb-8 sm:mb-14 bg-white">
          <Image
            src="/images/event/authentic-spices-showcase-16-9.jpg"
            alt="Authentic Indian Spices Range by Foodville"
            width={2229}
            height={1254}
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="w-full h-auto block"
          />
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex md:hidden items-center justify-between pb-3 px-0.5 text-xs text-[#736B63]">
          <span className="font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#56684A]" />
            <span>Exhibition Highlights</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
            <span>Swipe Products ({activeProductIndex + 1}/{displayProducts.length})</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Active Products: Horizontally Scrollable on Mobile, 4-Col Grid on Desktop */}
        <div
          onScroll={handleProductScroll}
          style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          className="flex md:grid md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 pl-4 sm:pl-6 md:pl-0 pr-4 sm:pr-6 md:pr-0 -mx-4 sm:-mx-6 md:mx-0 scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-3 md:mb-12"
        >
          {isPending && (!products || products.length === 0)
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[168px] min-w-[168px] sm:w-[210px] sm:min-w-[210px] md:w-auto shrink-0 md:shrink snap-start"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : displayProducts.map((product) => (
                <div
                  key={product.id || product.slug}
                  className="w-[168px] min-w-[168px] sm:w-[210px] sm:min-w-[210px] md:w-auto shrink-0 md:shrink snap-start"
                >
                  <ProductCard product={product} />
                </div>
              ))}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pb-6">
          {displayProducts.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeProductIndex === i ? "w-5 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
              }`}
            />
          ))}
        </div>

        {/* Explore Store CTA */}
        <div className="text-center space-y-2 px-2">
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#56684A] hover:bg-[#3F5034] text-white text-xs sm:text-base font-bold shadow-md hover:shadow-lg transition min-h-[48px]"
          >
            <span>Explore All Pure Spices &amp; Blends</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs sm:text-sm text-[#8C8275]">
            Can&apos;t visit our stall? Order online for 100% farm-pure spices delivered to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}
