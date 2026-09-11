"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, Play, ShoppingBag } from "lucide-react";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useCart } from "@/context/CartContext";
import WatchAndShopModal from "./WatchAndShopModal";
import { toast } from "sonner";

function CartBucketIcon({ isFilled = false, className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={isFilled ? "1.6" : "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
      <circle cx="9" cy="21" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function WatchAndShop() {
  const [selectedReelIndex, setSelectedReelIndex] = useState(null);
  const scrollRef = useRef(null);
  const { cart = [], addToCart } = useCart();

  // Fetch products explicitly enabled for homepage reels (showInReels === true)
  const { products: reelProducts, isPending } = useProducts({
    showInReels: true,
    limit: 50,
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    const unit = product.unit || (product.units && product.units[0]?.unit) || "";
    addToCart(product, 1, unit);
    toast.success(`Added ${product.name} to cart!`);
  };

  if (!isPending && reelProducts.length === 0) {
    return null; // Don't show section if no videos available
  }

  return (
    <section className="border-0 sm:border border-cardline bg-transparent sm:bg-white rounded-none sm:rounded-2xl overflow-visible sm:overflow-hidden p-0 sm:p-5 space-y-4">
      {/* Title & Subtitle */}
      <div className="flex items-center justify-between px-0 sm:px-2 pt-1 sm:pt-2">
        <div>
          <h2 className="text-base sm:text-lg font-black text-ink tracking-tight leading-tight">
            Watch &amp; Shop
          </h2>
          <p className="text-[11px] sm:text-xs text-muted font-medium">
            Explore our pure products in action
          </p>
        </div>

        {reelProducts.length > 4 && (
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-cardline bg-white hover:bg-stone-50 text-ink shadow-xs transition active:scale-95 cursor-pointer"
              aria-label="Previous reels"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-cardline bg-white hover:bg-stone-50 text-ink shadow-xs transition active:scale-95 cursor-pointer"
              aria-label="Next reels"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Reel Cards Slider Container */}
      <div className="pt-1 pb-1 relative">
        {isPending ? (
          <div className="flex gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar mobile-bleed-scroll">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[220px] min-w-[220px] sm:w-[calc((100%-48px)/4)] sm:min-w-[calc((100%-48px)/4)] h-[380px] sm:h-[450px] lg:h-[470px] rounded-2xl bg-gray-200 animate-pulse shrink-0"
              />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar mobile-bleed-scroll snap-x snap-mandatory py-1"
          >
            {reelProducts.map((product, idx) => {
              const videoUrl = product.video || (product.videos && product.videos[0]) || "";
              const price = product.price || (product.units && product.units[0]?.price) || 0;
              const mrp = product.mrp || (product.units && product.units[0]?.mrp) || price;
              const isInCart = cart.some(
                (item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-")
              );

              return (
                <div
                  key={product.id || idx}
                  onClick={() => setSelectedReelIndex(idx)}
                  className="group relative w-[220px] min-w-[220px] sm:w-[calc((100%-48px)/4)] sm:min-w-[calc((100%-48px)/4)] h-[380px] sm:h-[450px] lg:h-[470px] rounded-2xl overflow-hidden shadow-md border border-cardline/80 cursor-pointer shrink-0 snap-start bg-black transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Reel Video or Image Poster */}
                  {videoUrl ? (
                    <video
                      src={videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      disableRemotePlayback
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                      style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    />
                  ) : (
                    <Image
                      src={product.image || "/images/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />

                  {/* Bottom Floating Product Bar (Tata Nutrikorner Style) */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 shadow-xl flex items-center gap-2.5">
                    {/* Thumbnail */}
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                      <Image
                        src={product.image || "/images/placeholder.png"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs sm:text-sm font-black text-gray-900">
                          ₹{price}
                        </span>
                        {mrp > price && (
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            ₹{mrp}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quick Add Button */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`p-2.5 rounded-full transition-all duration-300 active:scale-90 shrink-0 flex items-center justify-center cursor-pointer ${
                        isInCart
                          ? "bg-[#56684A] text-white shadow-md ring-2 ring-[#56684A]/30 scale-105"
                          : "bg-white border border-[#6B7F59]/40 text-[#56684A] hover:border-[#56684A] hover:bg-[#F0F4EC] shadow-xs"
                      }`}
                      aria-label={isInCart ? "Item in cart - click to add another" : "Add to cart"}
                      title={isInCart ? "In cart (Click to add +1)" : "Add to cart"}
                    >
                      <CartBucketIcon isFilled={isInCart} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Reel Player Fullscreen Modal */}
      {selectedReelIndex !== null && (
        <WatchAndShopModal
          products={reelProducts}
          initialIndex={selectedReelIndex}
          onClose={() => setSelectedReelIndex(null)}
        />
      )}
    </section>
  );
}
