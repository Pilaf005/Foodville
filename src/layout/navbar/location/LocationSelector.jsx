import React from "react";

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="shrink-0">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export const LocationSelector = ({ onClick, activeAddress }) => {
  const locationLabel = activeAddress
    ? `Deliver to ${activeAddress.label || "Home"}`
    : "Deliver to Home";
  const locationSub = activeAddress
    ? [
        activeAddress.houseFlat || activeAddress.completeAddress,
        activeAddress.apartment || activeAddress.area || activeAddress.landmark,
        activeAddress.city
      ].filter(Boolean).join(", ")
    : "Select location";

  return (
    <button
      onClick={onClick}
      suppressHydrationWarning
      className="flex items-center gap-2 shrink-0 md:border-none md:bg-transparent md:px-0 md:py-0 rounded-xl border border-cardline bg-white/70 px-3 py-2 min-h-[44px] text-left transition md:hover:bg-transparent hover:bg-white hover:border-olive group focus:outline-none cursor-pointer"
    >
      <span className="text-olive transition-transform duration-200 group-hover:scale-110 md:hidden">
        <MapPinIcon />
      </span>
      <div className="hidden md:block leading-tight max-w-[200px]">
        <div className="text-sm font-black text-ink">{locationLabel}</div>
        <div className="flex items-center gap-0.5 text-[11px] font-bold text-muted mt-0.5 max-w-[180px]">
          <span className="truncate">{locationSub}</span>
          <ChevronDownIcon />
        </div>
      </div>
      <div className="md:hidden flex items-center gap-0.5 text-xs font-bold text-ink">
        <span className="max-w-[80px] truncate">{locationLabel}</span>
        <ChevronDownIcon />
      </div>
    </button>
  );
};

export default LocationSelector;
