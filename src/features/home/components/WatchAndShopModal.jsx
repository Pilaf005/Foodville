"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  ShoppingBag,
  Star,
  Check,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

function CartBucketIcon({ isFilled = false, className = "w-5 h-5" }) {
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

export default function WatchAndShopModal({ products = [], initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMuted, setIsMuted] = useState(true);
  const [added, setAdded] = useState(false);
  const videoRef = useRef(null);
  const { cart = [], addToCart } = useCart();

  const product = products[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, products.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    setAdded(false);
  }, [currentIndex]);

  if (!product) return null;

  const videoUrl = product.video || (product.videos && product.videos[0]) || "";
  const unit = product.unit || (product.units && product.units[0]?.unit) || "";
  const price = product.price || (product.units && product.units[0]?.price) || 0;
  const mrp = product.mrp || (product.units && product.units[0]?.mrp) || price;
  const hasDiscount = mrp > price;
  const discountPct = hasDiscount ? Math.round(((mrp - price) / mrp) * 100) : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1, unit);
    setAdded(true);
    toast.success(`Added ${product.name} to cart!`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Reel Player Box */}
      <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] h-[85vh] sm:h-[88vh] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border border-white/10">
        {/* Video Player */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          {videoUrl ? (
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full relative">
              <Image
                src={product.image || "/images/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
            </div>
          )}

          {/* Gradient Overlay for Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
        </div>

        {/* Top Controls Header */}
        <div className="relative z-10 flex items-center justify-between p-4 text-white">
          <div className="flex items-center gap-2">
            <span className="bg-[#6B7F59] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-black">
              Watch & Shop
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 transition"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side Navigation Arrows (if multiple products) */}
        {products.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition focus:outline-none"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition focus:outline-none"
              aria-label="Next reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Floating Product Card (Tata Nutrikorner Style) */}
        <div className="relative z-10 p-3 sm:p-4 m-3 sm:m-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl">
          <div className="flex items-center gap-3">
            {/* Product Thumbnail */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
              <Image
                src={product.image || "/images/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {hasDiscount && (
                <span className="absolute top-0.5 left-0.5 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                  {discountPct}% OFF
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 leading-snug">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-black text-gray-900">
                  ₹{price}
                </span>
                {hasDiscount && (
                  <span className="text-xs text-gray-400 line-through">
                    ₹{mrp}
                  </span>
                )}
                {unit && (
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-semibold">
                    {unit}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Action */}
            {(() => {
              const isInCart = cart.some(
                (item) => String(item.id) === String(product.id) || String(item.id).startsWith(String(product.id) + "-")
              );
              return (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`p-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer ${
                    added || isInCart
                      ? "bg-[#56684A] text-white shadow-lg ring-2 ring-[#56684A]/30 scale-105"
                      : "bg-[#F0F4EC] border border-[#6B7F59]/40 text-[#56684A] hover:border-[#56684A] hover:bg-[#E6EFE0] shadow-sm active:scale-95"
                  }`}
                  aria-label={isInCart ? "In cart (click to add more)" : "Add to cart"}
                >
                  {added ? <Check className="w-5 h-5 animate-scale-in" /> : <CartBucketIcon isFilled={isInCart} className="w-5 h-5" />}
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
