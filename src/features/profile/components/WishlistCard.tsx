"use client";

import Link from "next/link";
import type { WishlistRestaurant } from "../types/profile.types";

interface WishlistCardProps {
  item: WishlistRestaurant;
  onRemove: (id: string) => void;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill={filled ? "#C9A86C" : "none"}
      stroke="#C9A86C"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function WishlistCard({ item, onRemove }: WishlistCardProps) {
  const fullStars = Math.floor(item.rating);

  return (
    <div className="group rounded-3xl border border-cardline bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-36 overflow-hidden bg-cream">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition group-hover:scale-105 duration-300"
          onError={(e) => {
            const t = e.currentTarget;
            t.onerror = null;
            t.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='144'><rect width='400' height='144' fill='%23FAF7F2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='%23A8A29E'>No Image</text></svg>";
          }}
        />
        {/* Remove button */}
        <button
          onClick={() => onRemove(item.id)}
          aria-label="Remove from wishlist"
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50 hover:scale-105 active:scale-95 transition shadow-sm"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-bold text-ink line-clamp-1">{item.name}</h3>
        <p className="text-xs text-muted">{item.cuisine}</p>

        <div className="flex items-center gap-3">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} filled={i < fullStars} />
              ))}
            </div>
            <span className="text-[11px] font-bold text-gold">{item.rating}</span>
          </div>

          {/* Delivery time */}
          <div className="flex items-center gap-1 text-[11px] text-muted">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {item.deliveryTime}
          </div>
        </div>

        <Link
          href="/"
          className="block w-full mt-3 text-center text-xs font-bold text-olive border border-olive/50 rounded-2xl py-2.5 hover:bg-olive hover:text-white transition active:scale-[0.98]"
        >
          View
        </Link>
      </div>
    </div>
  );
}
