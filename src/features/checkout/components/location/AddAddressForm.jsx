"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowLeftIcon,
  BuildingIcon,
  PinIcon,
  HomeIcon,
  BriefcaseIcon,
  BookmarkIcon
} from "@/components/ui/icons/LocationIcons";

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
  const [isEditingArea, setIsEditingArea] = useState(false);
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
            className="p-3 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className="text-xs font-semibold text-[#6B7F59] border border-[#6B7F59]/40 rounded-lg px-3 py-2.5 hover:bg-[#6B7F59]/5 transition shrink-0 min-h-[44px]"
              >
                Change
              </button>
            </div>

            {/* Area row — inline editable, no window.prompt */}
            <div className="px-4 py-3 border-b border-gray-100">
              {isEditingArea ? (
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Area, street</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      autoFocus
                      placeholder="e.g. Sector 62, MG Road"
                      className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/40 focus:border-[#6B7F59] transition"
                    />
                    <button
                      type="button"
                      onClick={() => setIsEditingArea(false)}
                      className="text-xs font-bold text-[#6B7F59] border border-[#6B7F59]/40 rounded-xl px-3 py-2.5 hover:bg-[#6B7F59]/5 transition min-h-[44px]"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 grid place-items-center shrink-0">
                    <PinIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Area, street</p>
                    <p className="text-sm font-bold text-gray-900 leading-snug">{area || "—"}</p>
                  </div>
                  <button
                    onClick={() => setIsEditingArea(true)}
                    className="text-xs font-semibold text-[#6B7F59] border border-[#6B7F59]/40 rounded-lg px-3 py-2.5 hover:bg-[#6B7F59]/5 transition shrink-0 min-h-[44px]"
                  >
                    Change
                  </button>
                </div>
              )}
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
              {/* Radio — card style for better touch */}
              <div className="flex gap-3">
                {["myself", "someone_else"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContactType(type)}
                    className={`flex-1 flex items-center gap-2.5 px-4 py-3 rounded-2xl border-2 text-sm font-semibold transition ${
                      contactType === type
                        ? "border-[#6B7F59] bg-[#6B7F59]/5 text-[#6B7F59]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition ${
                      contactType === type ? "border-[#6B7F59]" : "border-gray-300"
                    }`}>
                      {contactType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#6B7F59]" />}
                    </div>
                    {type === "myself" ? "Myself" : "Someone else"}
                  </button>
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
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-xs font-semibold transition min-h-[44px] ${
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
