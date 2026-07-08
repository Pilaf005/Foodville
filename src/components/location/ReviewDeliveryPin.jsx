"use client";
import { useEffect, useRef, useState } from "react";

const DEFAULT_COORDS = { lat: 28.6139, lng: 77.2090 }; // New Delhi fallback

/**
 * Props:
 *  city, area, completeAddress, name, phone, label, coords, editTargetId
 *  onBack  – () => void
 *  onSaved – (addr) => void
 */
export default function ReviewDeliveryPin({
  city, area, completeAddress, name, phone, label, coords,
  editTargetId, onBack, onSaved,
}) {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);
  const [finalCoords, setFinalCoords] = useState(coords || DEFAULT_COORDS);

  // Live address states that update on map drag
  const [liveCity, setLiveCity] = useState(city);
  const [liveArea, setLiveArea] = useState(area);
  const [liveCompleteAddress, setLiveCompleteAddress] = useState(completeAddress);
  const [isGeocoding, setIsGeocoding] = useState(false);

  // ── Init Leaflet map ────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    // Inject Leaflet CSS once
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Dynamically import leaflet (client-only)
    import("leaflet").then((L) => {
      // Fix default icon paths
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const startCoords = coords || DEFAULT_COORDS;
      const map = L.map(mapRef.current, {
        center: [startCoords.lat, startCoords.lng],
        zoom: 16,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      leafletMapRef.current = map;

      // Update coords whenever map moves
      map.on("moveend", () => {
        const c = map.getCenter();
        setFinalCoords({ lat: c.lat, lng: c.lng });
      });
    });

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Reverse Geocoding Fetch on Coordinates Change ─────────────────────────
  useEffect(() => {
    // Avoid double fetching initial state coordinates
    if (coords && finalCoords.lat === coords.lat && finalCoords.lng === coords.lng) {
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsGeocoding(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${finalCoords.lat}&lon=${finalCoords.lng}&format=json&addressdetails=1`,
          { headers: { "Accept-Language": "en" } }
        );
        const data = await res.json();
        if (data && data.address) {
          const a = data.address;
          const detectedCity = a.city || a.town || a.county || a.state || city || "";
          const detectedArea = [a.suburb || a.neighbourhood, a.road]
            .filter(Boolean)
            .join(", ") || "Unknown Area";
          const detectedFullName = data.display_name || "";

          setLiveCity(detectedCity);
          setLiveArea(detectedArea);
          setLiveCompleteAddress(detectedFullName);
        }
      } catch (e) {
        console.error("Reverse geocoding fetch failed:", e);
      } finally {
        setIsGeocoding(false);
      }
    }, 500); // 500ms debounce to prevent spamming Nominatim API

    return () => clearTimeout(delayDebounce);
  }, [finalCoords, coords, city]);

  // ── Save address ───────────────────────────────────────────────────────
  function handleSave() {
    setIsSaving(true);
    const newAddr = {
      id: editTargetId || Date.now(),
      label,
      name,
      phone,
      completeAddress: liveCompleteAddress,
      area: liveArea,
      city: liveCity,
      coordinates: finalCoords,
    };

    // Save to localStorage
    try {
      const raw = localStorage.getItem("savedAddresses");
      const existing = raw ? JSON.parse(raw) : [];
      const idx = existing.findIndex((a) => a.id === newAddr.id);
      const updated = idx >= 0
        ? existing.map((a, i) => (i === idx ? newAddr : a))
        : [...existing, newAddr];
      localStorage.setItem("savedAddresses", JSON.stringify(updated));
      localStorage.setItem("activeAddress", JSON.stringify(newAddr));
    } catch (_) {}

    setIsSaving(false);
    onSaved(newAddr);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
    >
      <div
        className="w-full max-w-[500px] bg-white rounded-3xl flex flex-col shadow-2xl overflow-hidden relative"
        style={{ maxHeight: "85vh" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shrink-0 z-10">
          <button
            onClick={onBack}
            className="p-2 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600"
          >
            <ArrowLeftIcon />
          </button>
          <h1 className="text-base font-bold text-gray-900">Review your delivery pin</h1>
        </div>

        {/* Map container — centered modal height portion */}
        <div className="relative shrink-0" style={{ height: "260px" }}>
          <div ref={mapRef} className="w-full h-full" />

          {/* Fixed center pin */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 999 }}
          >
            <div className="relative -translate-y-[22px]">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none">
                <path d="M18 0C8.059 0 0 8.059 0 18c0 13.5 18 28 18 28S36 31.5 36 18C36 8.059 27.941 0 18 0z" fill="#E91E63"/>
                <circle cx="18" cy="18" r="7" fill="white"/>
                <circle cx="18" cy="18" r="4" fill="#E91E63"/>
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-2 bg-black/20 rounded-full blur-sm" />
            </div>
          </div>

          {/* Hint text */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[1000]">
            <div className="bg-white/95 backdrop-blur border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-md whitespace-nowrap">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
              </svg>
              <span className="text-xs text-gray-600 font-medium">Move the map to set your delivery location</span>
            </div>
          </div>
        </div>

        {/* Address details panel */}
        <div className="flex-1 overflow-y-auto pb-4 bg-gray-50">
          <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-gray-900">Your address details</p>
              {isGeocoding && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium animate-pulse">
                  <svg className="animate-spin h-3.5 w-3.5 text-[#6B7F59]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Updating…</span>
                </div>
              )}
            </div>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#6B7F59] border border-[#6B7F59]/40 rounded-lg px-3 py-1.5 hover:bg-[#6B7F59]/5 transition"
            >
              Edit
            </button>
          </div>

          <div className="px-5 py-4 space-y-3">
            {[
              { icon: <HouseIcon />,  label: "Address",  value: liveCompleteAddress || "—" },
              { icon: <PinIcon />,    label: "Area",     value: liveArea || "—" },
              { icon: <BuildingIcon />, label: "City",   value: liveCity || "—" },
              { icon: <PeopleIcon />, label: "Receiver", value: `${name}${phone ? `, ${phone}` : ""}` || "—" },
            ].map(({ icon, label: lbl, value }) => (
              <div key={lbl} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 grid place-items-center shrink-0 mt-0.5">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-400 font-medium">{lbl}</span>
                  <p className="text-sm text-gray-800 leading-snug font-medium break-words"> : {value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="bg-white border-t border-gray-100 px-4 py-4 shrink-0">
          <button
            onClick={handleSave}
            disabled={isSaving || isGeocoding}
            className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white font-bold text-sm py-4 rounded-2xl transition shadow-md disabled:opacity-60"
          >
            {isSaving ? "Saving…" : "Save Address"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Icons ────────────────────────────────────────────────────────────────────
function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function HouseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round">
      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
