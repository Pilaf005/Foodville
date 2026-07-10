"use client";
import { useState, useEffect, useRef } from "react";
import AddAddressForm from "./AddAddressForm";
import { BookmarkIcon } from "@/components/ui/icons/LocationIcons";

// ── Indian cities list ─────────────────────────────────────────────────────
const INDIAN_CITIES = [
  "Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad",
  "Mumbai", "Pune", "Nashik", "Nagpur", "Aurangabad",
  "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum",
  "Hyderabad", "Warangal", "Visakhapatnam", "Vijayawada",
  "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli",
  "Kolkata", "Howrah", "Durgapur", "Asansol",
  "Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar",
  "Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad", "Meerut",
  "Chandigarh", "Amritsar", "Ludhiana", "Jalandhar",
  "Indore", "Bhopal", "Gwalior", "Jabalpur",
  "Patna", "Gaya", "Muzaffarpur",
  "Bhubaneswar", "Cuttack",
  "Guwahati",
  "Dehradun",
  "Ranchi", "Jamshedpur",
  "Thiruvananthapuram", "Kochi", "Kozhikode",
  "Raipur",
  "Srinagar",
  "Shimla",
];

// ── Label color map ──────────────────────────────────────────────────────────
const LABEL_COLORS = {
  Home:  { bg: "bg-rose-50",   text: "text-rose-600",   border: "border-rose-200" },
  Work:  { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-200" },
  Hotel: { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-200" },
  Other: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
};
function getLabelColors(label = "") {
  const key = Object.keys(LABEL_COLORS).find(
    (k) => k.toLowerCase() === label.toLowerCase()
  );
  return LABEL_COLORS[key] || LABEL_COLORS.Other;
}

export default function LocationModal({ isOpen, onClose, onAddressSaved }) {
  const [citySearch, setCitySearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Step navigation: null = step1, { city, area, coords } = step2+
  const [addressDraft, setAddressDraft] = useState(null); // step 2 & 3 context
  const [step, setStep] = useState(1); // 1 | 2 | 3
  const [editTarget, setEditTarget] = useState(null); // address being edited
  const searchInputRef = useRef(null);

  // ── Load saved addresses from localStorage ──────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    try {
      const raw = localStorage.getItem("savedAddresses");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setSavedAddresses(JSON.parse(raw));
    } catch (_) {}
    // Reset state on open
    setCitySearch("");
    setShowDropdown(false);
    setStep(1);
    setAddressDraft(null);
    setLocationError("");
    setEditTarget(null);
  }, [isOpen]);

  // ── Body scroll lock ─────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ── City filtering ────────────────────────────────────────────────────────
  const filteredCities = citySearch.trim().length > 0
    ? INDIAN_CITIES.filter((c) =>
        c.toLowerCase().includes(citySearch.toLowerCase())
      ).slice(0, 8)
    : [];

  function handleCitySelect(city) {
    setCitySearch("");
    setShowDropdown(false);
    setAddressDraft({ city, area: "", coords: null });
    setStep(2);
  }

  // ── Current Location ──────────────────────────────────────────────────────
  async function handleCurrentLocation() {
    setLocationError("");
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json&addressdetails=1`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const a = data.address || {};
          const city = a.city || a.town || a.county || "Unknown City";
          const area = [a.suburb || a.neighbourhood, a.road]
            .filter(Boolean).join(", ") || "Current Area";
          setAddressDraft({
            city,
            area,
            coords: { lat: coords.latitude, lng: coords.longitude },
          });
          setStep(2);
        } catch (_) {
          setAddressDraft({
            city: "Current Location",
            area: `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`,
            coords: { lat: coords.latitude, lng: coords.longitude },
          });
          setStep(2);
        } finally {
          setIsLocating(false);
        }
      },
      (err) => {
        setIsLocating(false);
        if (err.code === 1) {
          setLocationError("Location permission denied. Please allow access in browser settings.");
        } else {
          setLocationError("Could not detect location. Please try again.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  // ── Delete address ────────────────────────────────────────────────────────
  function handleDelete(id, e) {
    e.stopPropagation();
    const updated = savedAddresses.filter((a) => a.id !== id);
    setSavedAddresses(updated);
    localStorage.setItem("savedAddresses", JSON.stringify(updated));
    // Clear active if it was deleted
    try {
      const active = JSON.parse(localStorage.getItem("activeAddress") || "null");
      if (active?.id === id) localStorage.removeItem("activeAddress");
    } catch (_) {}
  }

  // ── Deliver Here ──────────────────────────────────────────────────────────
  function handleDeliverHere(addr, e) {
    e.stopPropagation();
    localStorage.setItem("activeAddress", JSON.stringify(addr));
    onAddressSaved(addr);
    onClose();
  }

  // ── Edit address ──────────────────────────────────────────────────────────
  function handleEdit(addr, e) {
    e.stopPropagation();
    setEditTarget(addr);
    setAddressDraft({
      city: addr.city || "",
      area: addr.area || "",
      coords: addr.coordinates || null,
    });
    setStep(2);
  }

  // ── After step 3 saves ─────────────────────────────────────────────────────
  function handleAddressSaved(newAddr) {
    // Reload from localStorage
    try {
      const raw = localStorage.getItem("savedAddresses");
      if (raw) setSavedAddresses(JSON.parse(raw));
    } catch (_) {}
    onAddressSaved(newAddr);
    onClose();
  }

  if (!isOpen) return null;

  // ── STEP 2 & 3: delegate to AddAddressForm ─────────────────────────────
  if (step === 2 || step === 3) {
    return (
      <AddAddressForm
        draft={addressDraft}
        editTarget={editTarget}
        initialStep={step}
        onBack={() => { setStep(1); setEditTarget(null); setAddressDraft(null); }}
        onCityChange={() => { setStep(1); setEditTarget(null); setAddressDraft(null); }}
        onSaved={handleAddressSaved}
      />
    );
  }

  // ── STEP 1: centered dialog modal ────────────────────────────────────────
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-[480px] bg-white rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 shrink-0">
          <button
            onClick={onClose}
            className="p-2 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600"
          >
            <ArrowLeftIcon />
          </button>
          <h2 className="text-lg font-bold text-gray-900">Select Location</h2>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 pb-8 space-y-5">

          {/* City search bar */}
          <div className="relative">
            <div className="flex items-center gap-2 border border-gray-200 rounded-2xl bg-gray-50 px-4 py-3">
              <SearchIcon />
              <input
                ref={searchInputRef}
                type="text"
                value={citySearch}
                onChange={(e) => {
                  setCitySearch(e.target.value);
                  setShowDropdown(e.target.value.trim().length > 0);
                }}
                onFocus={() => setShowDropdown(citySearch.trim().length > 0)}
                placeholder="Search city..."
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
              {citySearch && (
                <button
                  onClick={() => { setCitySearch(""); setShowDropdown(false); }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XIcon />
                </button>
              )}
            </div>
            {/* Dropdown */}
            {showDropdown && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden">
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-[#6B7F59]/10 transition text-left border-b border-gray-50 last:border-0"
                  >
                    <span className="text-[#6B7F59]"><MapPinSmIcon /></span>
                    {city}
                  </button>
                ))}
              </div>
            )}
            {showDropdown && filteredCities.length === 0 && citySearch.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 px-4 py-3 text-sm text-gray-500">
                No cities found for &ldquo;{citySearch}&rdquo;
              </div>
            )}
          </div>

          {/* Use Current Location */}
          <div>
            <button
              onClick={handleCurrentLocation}
              disabled={isLocating}
              className="flex items-center gap-3 text-[#6B7F59] font-semibold text-sm disabled:opacity-60 hover:text-[#5a6b4a] transition py-2"
            >
              {isLocating ? (
                <svg className="animate-spin h-5 w-5 text-[#6B7F59]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <TargetIcon />
              )}
              {isLocating ? "Detecting location…" : "Use Current Location"}
            </button>
            {locationError && (
              <p className="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                <span>⚠</span> {locationError}
              </p>
            )}
          </div>

          {/* Saved Addresses */}
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Saved Addresses
            </p>

            {savedAddresses.length === 0 ? (
              <div className="py-10 flex flex-col items-center justify-center gap-2 text-center">
                <div className="w-14 h-14 rounded-full bg-[#6B7F59]/10 grid place-items-center">
                  <MapPinIcon />
                </div>
                <p className="text-sm text-gray-500 mt-1">No saved addresses yet</p>
                <p className="text-xs text-gray-400">Search for a city above to add your first address</p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedAddresses.map((addr) => {
                  const lc = getLabelColors(addr.label);
                  return (
                    <div
                      key={addr.id}
                      className="border border-gray-200 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      {/* Label badge */}
                      <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${lc.bg} ${lc.text} border ${lc.border}`}>
                        <BookmarkIcon size={10} fill="currentColor" stroke="none" />
                        {addr.label || "Home"}
                      </div>
                      {/* Name & Address */}
                      <p className="text-sm font-bold text-gray-900">{addr.name || addr.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {addr.completeAddress ? `${addr.completeAddress}, ` : ""}{addr.area ? `${addr.area}, ` : ""}{addr.city}
                      </p>
                      {/* Actions */}
                      <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100 flex-wrap">
                        <button
                          onClick={(e) => handleDeliverHere(addr, e)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 transition px-2 py-2 rounded-lg hover:bg-green-50"
                        >
                          <CartSmIcon />
                          Deliver Here
                        </button>
                        <button
                          onClick={(e) => handleEdit(addr, e)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition px-2 py-2 rounded-lg hover:bg-blue-50"
                        >
                          <PencilIcon />
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDelete(addr.id, e)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition px-2 py-2 rounded-lg hover:bg-red-50"
                        >
                          <TrashIcon />
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────
function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MapPinSmIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function CartSmIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
      <circle cx="9" cy="21" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
