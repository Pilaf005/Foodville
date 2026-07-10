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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export const LocationSelector = ({ onClick, activeAddress }) => {
  const locationLabel = activeAddress
    ? activeAddress.label || activeAddress.city || "My Location"
    : "Select Location";
  const locationSub = activeAddress
    ? (activeAddress.city || activeAddress.area || "").slice(0, 22)
    : null;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 shrink-0 rounded-xl border border-cardline bg-white/70 px-3 py-2 min-h-[44px] text-left transition hover:bg-white hover:border-olive group focus:outline-none cursor-pointer"
    >
      <span className="text-olive transition-transform duration-200 group-hover:scale-110">
        <MapPinIcon />
      </span>
      <div className="hidden md:block leading-tight max-w-[160px]">
        <div className="text-[10px] text-muted font-medium">Deliver to</div>
        <div className="flex items-center gap-0.5 text-xs font-bold text-ink">
          <span className="truncate">{locationLabel}</span>
          <ChevronDownIcon />
        </div>
        {locationSub && (
          <div className="text-[10px] text-muted truncate">{locationSub}</div>
        )}
      </div>
      <div className="md:hidden flex items-center gap-0.5 text-xs font-bold text-ink">
        <span className="max-w-[80px] truncate">{locationLabel}</span>
        <ChevronDownIcon />
      </div>
    </button>
  );
};

export default LocationSelector;
