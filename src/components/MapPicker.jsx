"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Leaflet CSS is loaded dynamically so it doesn't break SSR
let leafletLoaded = false;

export default function MapPicker({ onAddressChange }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [address, setAddress] = useState("Drag the map to set your location...");
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  // Reverse geocode using OpenStreetMap Nominatim — free, no API key
  const reverseGeocode = useCallback(async (lat, lng) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
        { headers: { "Accept-Language": "en" } }
      );
      const data = await res.json();
      const a = data.address || {};
      const label =
        a.suburb || a.neighbourhood || a.town || a.city_district || a.county || a.city || "Selected Area";
      const fullAddress =
        [a.road, a.suburb || a.neighbourhood, a.city || a.town, a.state, a.postcode]
          .filter(Boolean)
          .join(", ") || data.display_name?.split(",").slice(0, 3).join(",") || "Unknown location";
      const result = { label, address: fullAddress, lat, lng };
      setAddress(fullAddress);
      onAddressChange(result);
    } catch (e) {
      const result = { label: "Custom Location", address: `${lat.toFixed(4)}, ${lng.toFixed(4)}`, lat, lng };
      setAddress(result.address);
      onAddressChange(result);
    } finally {
      setLoading(false);
    }
  }, [onAddressChange]);

  useEffect(() => {
    if (mapRef.current) return; // already initialized

    // Dynamically load Leaflet CSS
    if (!leafletLoaded) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
      leafletLoaded = true;
    }

    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      if (!mapContainerRef.current || mapRef.current) return;

      // Default center: New Delhi, India
      const defaultLat = 28.6139;
      const defaultLng = 77.2090;

      const map = L.map(mapContainerRef.current, {
        center: [defaultLat, defaultLng],
        zoom: 15,
        zoomControl: true,
        attributionControl: true,
      });

      // Google Maps road map tiles — loads fast, looks exactly like Google Maps
      L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        attribution: '© Google Maps',
        maxZoom: 20,
      }).addTo(map);

      mapRef.current = map;

      // Initial reverse geocode
      reverseGeocode(defaultLat, defaultLng);

      // On every map move, debounce reverse geocode at the center
      map.on("move", () => {
        const center = map.getCenter();
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          reverseGeocode(center.lat, center.lng);
        }, 500);
      });

      // Fix Leaflet marker icon paths broken by webpack
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [reverseGeocode]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-cardline" style={{ height: 240 }}>
      {/* Real Leaflet Map */}
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      {/* Stationary center pin — absolutely centered, never moves */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1000]"
        style={{ paddingBottom: 28 }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Custom SVG pin */}
          <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <filter id="pin-shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00000040" />
            </filter>
            <path
              d="M17 2C10.373 2 5 7.373 5 14c0 9 12 28 12 28s12-19 12-28c0-6.627-5.373-12-12-12z"
              fill="#5b8a5a"
              filter="url(#pin-shadow)"
            />
            <circle cx="17" cy="14" r="6" fill="white" />
            <circle cx="17" cy="14" r="3" fill="#5b8a5a" />
          </svg>
          {/* Pin shadow on map */}
          <div style={{
            width: 12,
            height: 5,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.22)",
            marginTop: -2,
          }} />
        </div>
      </div>

      {/* Live address pill */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-center pointer-events-none z-[1001]">
        <div className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur border border-cardline shadow text-xs text-center max-w-full">
          {loading ? (
            <span className="text-muted flex items-center gap-1.5 justify-center">
              <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Fetching address…
            </span>
          ) : (
            <span className="text-ink font-medium">{address}</span>
          )}
        </div>
      </div>
    </div>
  );
}
