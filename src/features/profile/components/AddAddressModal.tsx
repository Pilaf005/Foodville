"use client";

import { useEffect, useState } from "react";
import type { SavedAddress, AddressLabel } from "../types/profile.types";

const ADDRESS_LABELS: { id: AddressLabel; icon: React.ReactNode }[] = [
  {
    id: "Home",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "Work",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "Hotel",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    id: "Other",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

interface FormState {
  label: AddressLabel;
  receiverName: string;
  phone: string;
  houseFlat: string;
  apartment: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  deliveryInstructions: string;
}

const EMPTY_FORM: FormState = {
  label: "Home",
  receiverName: "",
  phone: "",
  houseFlat: "",
  apartment: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  deliveryInstructions: "",
};

interface AddAddressModalProps {
  isOpen: boolean;
  editAddress: SavedAddress | null;
  onClose: () => void;
  onSave: (address: SavedAddress) => void;
}

export default function AddAddressModal({
  isOpen,
  editAddress,
  onClose,
  onSave,
}: AddAddressModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => {
    if (editAddress) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        label: editAddress.label,
        receiverName: editAddress.receiverName,
        phone: editAddress.phone,
        houseFlat: editAddress.houseFlat,
        apartment: editAddress.apartment,
        landmark: editAddress.landmark,
        city: editAddress.city,
        state: editAddress.state,
        pincode: editAddress.pincode,
        deliveryInstructions: editAddress.deliveryInstructions,
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setErrors({});
  }, [isOpen, editAddress]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.receiverName.trim()) newErrors.receiverName = "Name is required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Valid phone required";
    if (!form.houseFlat.trim()) newErrors.houseFlat = "House / Flat is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.pincode.trim() || form.pincode.replace(/\D/g, "").length < 6)
      newErrors.pincode = "Valid 6-digit pincode required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    onSave({
      id: editAddress?.id ?? `addr_${Date.now()}`,
      isDefault: editAddress?.isDefault ?? false,
      ...form,
    });
  }

  const inputClass =
    "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/30 focus:border-[#6B7F59] transition";
  const errorClass = "mt-1 text-[11px] text-red-500 flex items-center gap-1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-[520px] bg-gray-50 rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="p-2 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <h2 className="text-base font-bold text-gray-900">
            {editAddress ? "Edit Address" : "Add New Address"}
          </h2>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Address Label */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-3">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Save As
            </p>
            <div className="flex flex-wrap gap-2">
              {ADDRESS_LABELS.map(({ id, icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => set("label", id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold transition ${
                    form.label === id
                      ? "border-[#6B7F59] text-[#6B7F59] bg-[#6B7F59]/5"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {icon}
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Contact Details
            </p>
            <div>
              <input
                type="text"
                value={form.receiverName}
                onChange={(e) => set("receiverName", e.target.value)}
                placeholder="Receiver's full name *"
                className={inputClass}
              />
              {errors.receiverName && (
                <p className={errorClass}>⚠ {errors.receiverName}</p>
              )}
            </div>
            <div>
              <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#6B7F59]/30 focus-within:border-[#6B7F59] transition bg-white">
                <span className="px-3 py-3 text-sm font-semibold text-gray-700 bg-gray-50 border-r border-gray-200 shrink-0">
                  +91
                </span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="Phone number *"
                  className="flex-1 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
              </div>
              {errors.phone && <p className={errorClass}>⚠ {errors.phone}</p>}
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Address Details
            </p>
            <div>
              <input
                type="text"
                value={form.houseFlat}
                onChange={(e) => set("houseFlat", e.target.value)}
                placeholder="House / Flat / Block No. *"
                className={inputClass}
              />
              {errors.houseFlat && (
                <p className={errorClass}>⚠ {errors.houseFlat}</p>
              )}
            </div>
            <input
              type="text"
              value={form.apartment}
              onChange={(e) => set("apartment", e.target.value)}
              placeholder="Apartment / Society / Street"
              className={inputClass}
            />
            <input
              type="text"
              value={form.landmark}
              onChange={(e) => set("landmark", e.target.value)}
              placeholder="Landmark (optional)"
              className={inputClass}
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                  placeholder="City *"
                  className={inputClass}
                />
                {errors.city && (
                  <p className={errorClass}>⚠ {errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  value={form.state}
                  onChange={(e) => set("state", e.target.value)}
                  placeholder="State *"
                  className={inputClass}
                />
                {errors.state && (
                  <p className={errorClass}>⚠ {errors.state}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                value={form.pincode}
                onChange={(e) =>
                  set("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="Pincode *"
                className={inputClass}
                maxLength={6}
              />
              {errors.pincode && (
                <p className={errorClass}>⚠ {errors.pincode}</p>
              )}
            </div>
            <textarea
              value={form.deliveryInstructions}
              onChange={(e) => set("deliveryInstructions", e.target.value)}
              placeholder="Delivery instructions (optional)"
              rows={2}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-100 px-4 py-4 shrink-0">
          <button
            onClick={handleSave}
            className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white font-bold text-sm py-4 rounded-2xl transition shadow-md"
          >
            {editAddress ? "Update Address" : "Save Address"}
          </button>
        </div>
      </div>
    </div>
  );
}
