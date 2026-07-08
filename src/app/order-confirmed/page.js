"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function OrderConfirmedPage() {
  const [order, setOrder] = useState(null);
  const [showBillDetails, setShowBillDetails] = useState(false);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Load order details
  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastOrder");
      if (raw) {
        setOrder(JSON.parse(raw));
      }
    } catch (_) {}
  }, []);

  // Init Leaflet map with a realistic routing path
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject leaflet css
    const linkId = "leaflet-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const initMap = async () => {
      const L = await import("leaflet");

      if (!mapContainerRef.current) return;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Coordinates
      const homeCoords = order?.address?.coordinates || { lat: 28.6139, lng: 77.209 };
      // Delivery partner starts slightly north-east
      const driverCoords = {
        lat: homeCoords.lat + 0.0045,
        lng: homeCoords.lng + 0.0045,
      };

      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView([homeCoords.lat + 0.0018, homeCoords.lng + 0.0018], 14);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        maxZoom: 20,
      }).addTo(map);

      // Custom Home Icon (Olive Green SVG)
      const homeIcon = L.divIcon({
        className: "bg-white p-2 rounded-full shadow-lg border-2 border-[#6B7F59] flex items-center justify-center",
        html: `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      // Custom Delivery Partner (Amber Truck SVG)
      const driverIcon = L.divIcon({
        className: "bg-white p-2 rounded-full shadow-lg border-2 border-amber-500 flex items-center justify-center",
        html: `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="10" x="2" y="6" rx="2"/>
            <path d="M16 8h4l2 3v5h-6"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="16.5" cy="18.5" r="2.5"/>
          </svg>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      // Add markers
      L.marker([homeCoords.lat, homeCoords.lng], { icon: homeIcon }).addTo(map)
        .bindPopup("<b>Your Home</b><br/>Delivery destination").openPopup();

      L.marker([driverCoords.lat, driverCoords.lng], { icon: driverIcon }).addTo(map)
        .bindPopup("<b>Delivery Agent</b><br/>On his way with fresh stock");

      // Draw a realistic multi-turn route line (not a straight line)
      const routePoints = [
        [driverCoords.lat, driverCoords.lng],
        [driverCoords.lat, homeCoords.lng + 0.002],
        [homeCoords.lat + 0.002, homeCoords.lng + 0.002],
        [homeCoords.lat + 0.002, homeCoords.lng],
        [homeCoords.lat, homeCoords.lng]
      ];

      L.polyline(routePoints, {
        color: "#6B7F59",
        weight: 5,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      mapInstanceRef.current = map;
    };

    const timer = setTimeout(() => {
      initMap();
    }, 450);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [order]);

  // Fallback order items
  const items = order?.items || [];
  const paymentMethod = order?.paymentMethod || "cod";
  const address = order?.address || {};
  const orderId = order?.orderId || "ORD3496849873";

  // Calculate pricing breakdown
  const itemsTotal = items.reduce((sum, item) => sum + item.qty * (item.mrp || item.price), 0);
  const sellingTotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const deliveryCharge = sellingTotal >= 500 ? 0 : 40;
  const payable = sellingTotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-200/60 pb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Link>
            <div>
              <span className="text-[10px] font-black text-[#6B7F59] uppercase tracking-widest leading-none">Order Confirmed</span>
              <h1 className="text-2xl font-black text-gray-900 mt-1">Thank you for your order!</h1>
            </div>
          </div>
          <Link
            href="/"
            className="hidden sm:flex items-center gap-2 bg-[#6B7F59] hover:bg-[#5a6b4a] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition"
          >
            <span>Back to Shopping</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Map Tracking & Status Steps */}
          <div className="lg:col-span-7 space-y-6">
            {/* Realistic Looking Map */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-3">
              <div className="h-[400px] w-full relative rounded-2xl overflow-hidden z-10">
                <div ref={mapContainerRef} className="w-full h-full bg-gray-100" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-gray-600 z-20 flex items-center gap-2 border border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6B7F59] animate-ping"></span>
                  <span>{address?.area || "Tracking live..."}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Feature: Order Status Timeline */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-sm font-black text-gray-900 mb-5 uppercase tracking-wider pl-1">Order Milestones</h3>
              <div className="relative border-l border-gray-100 ml-4 pl-6 space-y-6 text-sm">
                
                {/* Step 1: Placed */}
                <div className="relative">
                  <span className="absolute -left-[33px] bg-green-50 border-2 border-[#6B7F59] text-[#6B7F59] w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Order Placed Successfully</p>
                    <p className="text-xs text-gray-400 mt-0.5">We received your request</p>
                  </div>
                </div>

                {/* Step 2: Confirmed */}
                <div className="relative">
                  <span className="absolute -left-[33px] bg-green-50 border-2 border-[#6B7F59] text-[#6B7F59] w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Payment Confirmed</p>
                    <p className="text-xs text-gray-400 mt-0.5">Transaction completed via {paymentMethod === "cod" ? "COD" : "Prepaid"}</p>
                  </div>
                </div>

                {/* Step 3: Packing */}
                <div className="relative">
                  <span className="absolute -left-[33px] bg-white border-2 border-amber-500 text-amber-500 w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Packing items in store</p>
                    <p className="text-xs text-amber-600 mt-0.5 font-medium">Currently preparing your bag</p>
                  </div>
                </div>

                {/* Step 4: Dispatch */}
                <div className="relative opacity-40">
                  <span className="absolute -left-[33px] bg-white border-2 border-gray-300 w-6 h-6 rounded-full flex items-center justify-center"></span>
                  <div>
                    <p className="font-bold text-gray-700">Out for delivery</p>
                    <p className="text-xs text-gray-400 mt-0.5">Driver will deliver to your doorstep</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Order Details, Delivery Address & Help support */}
          <div className="lg:col-span-5 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-olive/10 flex items-center justify-center text-[#6B7F59]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-gray-900">Items Ordered</h2>
                    <p className="text-[10px] text-gray-400 font-bold">{orderId}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black text-[#6B7F59] bg-green-50 border border-green-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {paymentMethod === "cod" ? "COD" : paymentMethod.toUpperCase()}
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 max-h-[220px] overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-500">
                        <span>{item.qty}</span>
                      </div>
                      <span className="font-semibold text-gray-800 truncate max-w-[200px]">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-800">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Grand Total */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                  <span>{items.reduce((s, i) => s + i.qty, 0)} items • {paymentMethod === "cod" ? "Cash on Delivery" : paymentMethod.toUpperCase()}</span>
                  <span className="text-base">₹{payable}</span>
                </div>

                {/* Bill Details Toggle */}
                <button
                  onClick={() => setShowBillDetails(!showBillDetails)}
                  className="w-full mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 text-xs font-bold text-[#6B7F59] border border-gray-150 hover:bg-gray-100 transition"
                >
                  <span>{showBillDetails ? "Hide Bill Details" : "View Bill Details"}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transform transition-transform ${showBillDetails ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {showBillDetails && (
                  <div className="mt-3 bg-gray-50 rounded-xl p-4 border border-gray-150 text-xs space-y-2 text-gray-500">
                    <div className="flex justify-between">
                      <span>Items Total (MRP)</span>
                      <span>₹{itemsTotal}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-bold">
                      <span>Product Savings</span>
                      <span>− ₹{itemsTotal - sellingTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
                    </div>
                    <div className="border-t border-gray-200/60 pt-2 flex justify-between font-bold text-gray-850">
                      <span>Total Payable</span>
                      <span>₹{payable}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Delivery Details Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Delivery Address</p>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-[#6B7F59] shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Delivery Address</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    {address?.completeAddress ? `${address.completeAddress}, ` : ""}
                    {address?.area ? `${address.area}, ` : ""}
                    {address?.city || ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-gray-100 pt-3">
                <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-[#6B7F59] shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Contact</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {address?.name || "Mukul Sharma"} • {address?.phone || "+91 7082489845"}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Feature: Help & Support Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Need Assistance?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => alert("Live Chat starting...")}
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>Chat Support</span>
                </button>
                <a
                  href="tel:+917082489845"
                  className="flex-1 bg-[#6B7F59]/10 hover:bg-[#6B7F59]/20 text-[#6B7F59] font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Mobile Back to Home Button */}
            <div className="pt-2 sm:hidden">
              <Link
                href="/"
                className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] text-white text-center font-bold text-sm py-4 rounded-2xl block shadow-md transition"
              >
                Go to Homepage
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
