"use client";

import { useEffect, useState } from "react";
import LocationModal from "@/components/location/LocationModal";

export default function BillDetails({ cart, onChangeAddress }) {
  const [activeAddress, setActiveAddress] = useState(null);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("activeAddress");
      if (raw) setActiveAddress(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const totalSellingPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalMrp = cart.reduce((sum, item) => sum + item.qty * (item.mrp || item.price), 0);
  const totalSavings = totalMrp - totalSellingPrice;

  const addressText = activeAddress
    ? `${activeAddress.completeAddress ? `${activeAddress.completeAddress}, ` : ""}${activeAddress.area ? `${activeAddress.area}, ` : ""}${activeAddress.city}`
    : "No delivery address selected";

  const addressLabel = activeAddress
    ? `Delivering to ${activeAddress.label || "Home"}`
    : "Delivery Location";

  function handleAddressSaved(addr) {
    setActiveAddress(addr);
    if (onChangeAddress) onChangeAddress(addr);
  }

  return (
    <div className="space-y-4">
      {/* Bill details card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 mb-3.5">Bill details</h3>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <div className="flex items-center gap-2">
            <span>Items total</span>
            {totalSavings > 0 && (
              <span className="bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Saved ₹{totalSavings}
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1.5">
            {totalSavings > 0 && (
              <span className="line-through text-gray-300">₹{totalMrp}</span>
            )}
            <span className="font-bold text-gray-800">₹{totalSellingPrice}</span>
          </div>
        </div>
      </div>

      {/* Delivery address banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex items-start justify-between gap-3">
        <div className="flex gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-rose-50 grid place-items-center text-rose-500 shrink-0 mt-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-900">{addressLabel}</p>
            <p className="text-xs text-gray-500 leading-snug mt-0.5 truncate max-w-[280px]">
              {addressText}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsLocationOpen(true)}
          className="text-xs font-bold text-rose-600 hover:text-rose-700 transition"
        >
          Change
        </button>

        <LocationModal
          isOpen={isLocationOpen}
          onClose={() => setIsLocationOpen(false)}
          onAddressSaved={handleAddressSaved}
        />
      </div>
    </div>
  );
}
