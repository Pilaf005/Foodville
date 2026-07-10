"use client";

import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { PRODUCT_FALLBACK_IMAGE } from "@/features/products/constants";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  // Find original product to retrieve the brand
  const baseProductId = String(item.id).split("-")[0];
  const origProduct = products.find((p) => String(p.id) === String(baseProductId));
  const brandName = origProduct?.brand || "Foodville";

  const mrp = item.mrp || item.price;
  const saving = Math.max(0, mrp - item.price);
  const totalSaving = saving * item.qty;

  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Left side: Image & Info */}
      <div className="flex gap-3">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PRODUCT_FALLBACK_IMAGE; }}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
            {brandName}
          </span>
          <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
            {item.name}
          </h3>
          <p className="text-[11px] text-gray-400 font-medium mt-0.5">{item.unit}</p>

          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-sm font-extrabold text-gray-900">₹{item.price}</span>
            {mrp > item.price && (
              <span className="text-xs text-gray-400 line-through">₹{mrp}</span>
            )}
          </div>

          {totalSaving > 0 && (
            <span className="text-xs font-bold text-green-600 mt-1">
              Saving ₹{totalSaving}
            </span>
          )}
        </div>
      </div>

      {/* Right side: Controller & Remove */}
      <div className="flex flex-col items-end justify-between self-stretch min-h-[80px]">
        {/* Quantity controller */}
        <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl p-1">
          <button
            onClick={() => updateQty(item.id, item.qty - 1)}
            className="w-9 h-9 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition text-base"
          >
            −
          </button>
          <span className="text-sm font-bold text-gray-800 min-w-[20px] text-center">
            {item.qty}
          </span>
          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
            className="w-9 h-9 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition text-base"
          >
            +
          </button>
        </div>

        {/* Trash button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2.5 rounded-xl text-red-500 hover:bg-red-50 transition"
          aria-label="Remove item"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
