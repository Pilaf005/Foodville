"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReviewDeliveryPin = dynamic(() => import("./ReviewDeliveryPin"), { ssr: false });

const ADDRESS_LABELS = [
  { id: "Home",  icon: <HomeIcon /> },
  { id: "Work",  icon: <BriefcaseIcon /> },
  { id: "Hotel", icon: <BuildingIcon /> },
  { id: "Other", icon: <BookmarkIcon /> },
];

/**
 * Props:
 *  draft        – { city, area, coords }
 *  editTarget   – full address object if editing, else null
 *  initialStep  – 2 or 3
 *  onBack       – () => void   (go back to step 1)
 *  onCityChange – () => void   (Change city button)
 *  onSaved      – (addr) => void
 */
export default function AddAddressForm({ draft, editTarget, initialStep = 2, onBack, onCityChange, onSaved }) {
  const [step, setStep] = useState(initialStep);

  // Form state
  const [city, setCity] = useState(draft?.city || editTarget?.city || "");
  const [area, setArea] = useState(draft?.area || editTarget?.area || "");
  const [completeAddress, setCompleteAddress] = useState(editTarget?.completeAddress || "");
  const [contactType, setContactType] = useState("myself");
  const [name, setName] = useState(editTarget?.name || "");
  const [phone, setPhone] = useState(editTarget?.phone || "");
  const [selectedLabel, setSelectedLabel] = useState(editTarget?.label || "Home");
  const [addrError, setAddrError] = useState("");
  const [coords, setCoords] = useState(draft?.coords || editTarget?.coordinates || null);

  function handleNext() {
    if (!completeAddress.trim()) {
      setAddrError("Please enter your complete address.");
      return;
    }
    if (!name.trim()) {
      setAddrError("Please enter a name.");
      return;
    }
    setAddrError("");
    setStep(3);
  }

  if (step === 3) {
    return (
      <ReviewDeliveryPin
        city={city}
        area={area}
        completeAddress={completeAddress}
        name={name}
        phone={phone}
        label={selectedLabel}
        coords={coords}
        editTargetId={editTarget?.id || null}
        onBack={() => setStep(2)}
        onSaved={onSaved}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
    >
      <div
        className="w-full max-w-[500px] bg-gray-50 rounded-3xl flex flex-col shadow-2xl overflow-hidden relative"
        style={{ maxHeight: "85vh" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shrink-0">
          <button
            onClick={onBack}
            className="p-2 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600"
          >
            <ArrowLeftIcon />
          </button>
          <h1 className="text-base font-bold text-gray-900">Add address details</h1>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-4">

          {/* ── Address Details card ────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900">Address details</p>
            </div>

            {/* City row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-50 grid place-items-center shrink-0">
                <BuildingIcon color="#D97706" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">City</p>
                <p className="text-sm font-bold text-gray-900 truncate">{city || "—"}</p>
              </div>
              <button
                onClick={onCityChange}
                className="text-xs font-semibold text-[#6B7F59] border border-[#6B7F59]/40 rounded-lg px-3 py-1.5 hover:bg-[#6B7F59]/5 transition shrink-0"
              >
                Change
              </button>
            </div>

            {/* Area row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-blue-50 grid place-items-center shrink-0">
                <PinIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">Area, street</p>
                <p className="text-sm font-bold text-gray-900 leading-snug">{area || "—"}</p>
              </div>
              <button
                onClick={() => {
                  const val = window.prompt("Enter area / street:", area);
                  if (val !== null) setArea(val);
                }}
                className="text-xs font-semibold text-[#6B7F59] border border-[#6B7F59]/40 rounded-lg px-3 py-1.5 hover:bg-[#6B7F59]/5 transition shrink-0"
              >
                Change
              </button>
            </div>

            {/* Complete address input */}
            <div className="px-4 py-3">
              <input
                type="text"
                value={completeAddress}
                onChange={(e) => { setCompleteAddress(e.target.value); setAddrError(""); }}
                placeholder="Enter complete address*"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/40 focus:border-[#6B7F59] transition"
              />
              <p className="text-[11px] text-gray-400 mt-1.5 ml-1">
                Example: Plot No. 112, Shree Vihar Colony, Jagatpura
              </p>
            </div>
          </div>

          {/* ── Contact Details card ─────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900">Contact details</p>
            </div>
            <div className="px-4 py-4 space-y-4">
              {/* Radio */}
              <div className="flex items-center gap-6">
                {["myself", "someone_else"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <div
                      onClick={() => setContactType(type)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition ${
                        contactType === type
                          ? "border-[#6B7F59] bg-[#6B7F59]"
                          : "border-gray-300"
                      }`}
                    >
                      {contactType === type && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {type === "myself" ? "Myself" : "Someone else"}
                    </span>
                  </label>
                ))}
              </div>

              {/* Name */}
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setAddrError(""); }}
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/40 focus:border-[#6B7F59] transition"
              />

              {/* Phone */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#6B7F59]/40 focus-within:border-[#6B7F59] transition">
                <span className="px-3 py-3 text-sm font-semibold text-gray-700 bg-gray-50 border-r border-gray-200 shrink-0">
                  +91
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Phone number"
                  className="flex-1 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none bg-white"
                />
              </div>

              {/* Save address as */}
              <div>
                <p className="text-xs text-gray-500 mb-2">Save address as</p>
                <div className="flex flex-wrap gap-2">
                  {ADDRESS_LABELS.map(({ id, icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedLabel(id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold transition ${
                        selectedLabel === id
                          ? "border-[#6B7F59] text-[#6B7F59] bg-[#6B7F59]/5"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {icon} {id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {addrError && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <span>⚠</span> {addrError}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal-aligned bottom NEXT button panel */}
        <div className="bg-white border-t border-gray-100 px-4 py-4 shrink-0">
          <button
            onClick={handleNext}
            className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white font-bold text-sm py-4 rounded-2xl transition shadow-md"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────────────
function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function BuildingIcon({ color = "#6B7F59" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
