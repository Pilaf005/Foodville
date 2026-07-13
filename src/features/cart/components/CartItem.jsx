"use client";

import { useCart } from "@/context/CartContext";
import { PRODUCT_FALLBACK_IMAGE } from "@/features/products/constants";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  // Brand travels with the cart line (from the API) — no mock lookup.
  const brandName = item.brand || "Foodville";

  const mrp = item.mrp || item.price;
  const saving = Math.max(0, mrp - item.price);
  const totalSaving = saving * item.qty;

  return (
    <div className="py-4 border-b border-gray-100 last:border-0 flex items-center justify-between gap-3">
      {/* Left side: Image & Info */}
      <div className="flex gap-3 sm:gap-4 items-center flex-1 min-w-0">
        {/* Image wrapper */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white border border-gray-100 shrink-0 flex items-center justify-center p-1.5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PRODUCT_FALLBACK_IMAGE; }}
          />
        </div>

        {/* Product details */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-snug truncate">
            {item.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">{item.unit}</p>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-sm sm:text-base font-extrabold text-gray-900">₹{item.price}</span>
            {mrp > item.price && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">₹{mrp}</span>
            )}
          </div>
        </div>
      </div>

      {/* Right side: Solid green pill controller */}
      <div className="shrink-0 flex items-center">
        <div className="flex items-center justify-between w-[90px] sm:w-[100px] h-[34px] sm:h-[38px] bg-[#2E7D32] text-white rounded-lg px-2 select-none shadow-sm">
          <button
            onClick={() => item.qty === 1 ? removeFromCart(item.id) : updateQty(item.id, item.qty - 1)}
            className="w-6 h-6 flex items-center justify-center font-bold text-white/90 hover:text-white transition text-lg active:scale-95"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-sm font-bold text-white min-w-[16px] text-center">
            {item.qty}
          </span>
          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
            className="w-6 h-6 flex items-center justify-center font-bold text-white/90 hover:text-white transition text-lg active:scale-95"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
