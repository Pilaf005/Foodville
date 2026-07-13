"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { INDIAN_STATES } from "@/features/address/constants/indianStates";
import { useAddressMutations } from "@/features/profile/hooks/useProfile";
import Modal from "@/components/ui/Modal";

/**
 * Add / edit a delivery address — Amazon-style form, India only.
 * Used from the profile "Saved Addresses" section AND from checkout.
 * Saves to /api/addresses; the map/pin-drop flow was removed on purpose.
 */
const LABELS = ["Home", "Work", "Hotel", "Other"];

const EMPTY = {
  label: "Home",
  receiverName: "",
  phone: "",
  pincode: "",
  houseFlat: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
  isDefault: false,
};

const inputCls =
  "w-full rounded-2xl border border-cardline bg-white px-4 py-3 text-base md:text-sm text-ink placeholder:text-muted outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20";

function Field({ label, hint, children, required }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted">
        {label}
        {required && <span className="ml-0.5 text-terracotta">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-muted">{hint}</p>}
    </div>
  );
}

/**
 * @param {{
 *   isOpen: boolean,
 *   onClose: () => void,
 *   editAddress?: object|null,      // existing address -> edit mode
 *   prefill?: { receiverName?: string, phone?: string }, // from the user's profile
 *   onSaved?: (address) => void,    // called with the saved address
 * }} props
 */
export default function AddressFormModal({ isOpen, onClose, editAddress = null, prefill, onSaved, autoDetect = false }) {
  const isEdit = !!editAddress?.id;
  const { create, update } = useAddressMutations();
  const [form, setForm] = useState(EMPTY);
  const [detecting, setDetecting] = useState(false);
  const autoDetectedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      ...EMPTY,
      ...(prefill && !isEdit
        ? { receiverName: prefill.receiverName || "", phone: prefill.phone || "" }
        : {}),
      ...(editAddress || {}),
    });
  }, [isOpen, editAddress, prefill, isEdit]);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const busy = create.isPending || update.isPending;

  /**
   * "Use current location" — browser geolocation + OpenStreetMap reverse
   * geocoding to PRE-FILL area/city/state/PIN. The customer verifies and
   * completes the rest (no map — they stay in the form).
   *
   * Browser rule worth knowing: once someone clicks "Block" on the location
   * prompt, the browser remembers it permanently and sites cannot re-prompt;
   * only the user can re-allow it from the padlock icon. We surface that
   * exact instruction instead of a dead-end error.
   */
  function detectLocation() {
    if (!navigator.geolocation) {
      toast.error("Location isn't supported by this browser.", { id: "geo" });
      return;
    }
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&addressdetails=1&accept-language=en`,
            { headers: { Accept: "application/json" } }
          );
          const data = await res.json();
          const a = data?.address || {};
          const detectedState = INDIAN_STATES.find(
            (s) => s.toLowerCase() === String(a.state || "").toLowerCase()
          );
          setForm((f) => ({
            ...f,
            area: [a.road, a.suburb || a.neighbourhood || a.village].filter(Boolean).join(", ") || f.area,
            city: a.city || a.town || a.village || a.state_district || f.city,
            state: detectedState || f.state,
            pincode: String(a.postcode || "").replace(/\D/g, "").slice(0, 6) || f.pincode,
          }));
          toast.success("Location detected — please verify the details below.", { id: "geo" });
        } catch {
          toast.error("Couldn't look up that location. Please type the address.", { id: "geo" });
        } finally {
          setDetecting(false);
        }
      },
      (err) => {
        setDetecting(false);
        if (err.code === 1) {
          toast.error(
            "Location is blocked for this site. Click the padlock icon in the address bar → Site settings → allow Location, then try again.",
            { id: "geo", duration: 7000 }
          );
        } else {
          toast.error("Couldn't get your location. Please type the address.", { id: "geo" });
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }

  // Opened via the navbar's "Use current location" → start detecting at once.
  useEffect(() => {
    if (isOpen && autoDetect && !isEdit && !autoDetectedRef.current) {
      autoDetectedRef.current = true;
      detectLocation();
    }
    if (!isOpen) autoDetectedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, autoDetect, isEdit]);

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.receiverName.trim().length < 2) return toast.error("Enter the full name.");
    if (!/^\d{10}$/.test(form.phone.trim())) return toast.error("Enter a valid 10-digit mobile number.");
    if (!/^\d{6}$/.test(form.pincode.trim())) return toast.error("Enter a valid 6-digit PIN code.");
    if (!form.houseFlat.trim()) return toast.error("Flat / house no. / building is required.");
    if (!form.area.trim()) return toast.error("Area / street / sector / village is required.");
    if (!form.city.trim()) return toast.error("Town/City is required.");
    if (!form.state) return toast.error("Choose a state.");

    const payload = {
      label: form.label,
      receiverName: form.receiverName.trim(),
      phone: form.phone.trim(),
      pincode: form.pincode.trim(),
      houseFlat: form.houseFlat.trim(),
      area: form.area.trim(),
      landmark: form.landmark.trim(),
      city: form.city.trim(),
      state: form.state,
      isDefault: !!form.isDefault,
    };

    try {
      const saved = isEdit
        ? await update.mutateAsync({ id: editAddress.id, data: payload })
        : await create.mutateAsync(payload);
      onSaved?.(saved);
      onClose();
    } catch {
      /* the mutation already toasts the error */
    }
  }

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={isEdit ? "Edit address" : "Add a new address"}
      subtitle="Delivery within India"
      maxWidth="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col max-h-[48vh] md:max-h-[60vh]" noValidate>
        <div className="flex-1 overflow-y-auto pr-2.5 space-y-4 pb-2 no-scrollbar">
          {/* Geolocation prefill — replaces the old map, no pin-dropping */}
          <button
            type="button"
            onClick={detectLocation}
            disabled={detecting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-olive/50 bg-olive/5 px-4 py-3 text-xs font-bold text-olive transition hover:border-olive hover:bg-olive/10 active:scale-[0.99] disabled:opacity-60"
          >
            {detecting ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-olive/40 border-t-olive" />
                Detecting your location…
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Use my current location
              </>
            )}
          </button>

          <Field label="Full name (First and Last name)" required>
            <input
              value={form.receiverName}
              onChange={(e) => set("receiverName", e.target.value)}
              autoComplete="name"
              className={inputCls}
            />
          </Field>

          <Field label="Mobile number" hint="May be used to assist delivery" required>
            <input
              value={form.phone}
              onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10-digit mobile number"
              className={inputCls}
            />
          </Field>

          <Field label="Pincode" required>
            <input
              value={form.pincode}
              onChange={(e) => set("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="6 digits [0-9] PIN code"
              className={inputCls}
            />
          </Field>

          <Field label="Flat, House no., Building, Company, Apartment" required>
            <input
              value={form.houseFlat}
              onChange={(e) => set("houseFlat", e.target.value)}
              autoComplete="address-line1"
              className={inputCls}
            />
          </Field>

          <Field label="Area, Street, Sector, Village" required>
            <input
              value={form.area}
              onChange={(e) => set("area", e.target.value)}
              autoComplete="address-line2"
              className={inputCls}
            />
          </Field>

          <Field label="Landmark">
            <input
              value={form.landmark}
              onChange={(e) => set("landmark", e.target.value)}
              placeholder="E.g. near Apollo Hospital"
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Town/City" required>
              <input
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                autoComplete="address-level2"
                className={inputCls}
              />
            </Field>
            <Field label="State" required>
              <select
                value={form.state}
                onChange={(e) => set("state", e.target.value)}
                className={inputCls}
              >
                <option value="">Choose a state</option>
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Save address as">
            <div className="flex flex-wrap gap-2">
              {LABELS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => set("label", l)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-150 active:scale-95 ${
                    form.label === l
                      ? "border-olive bg-olive text-white shadow-sm"
                      : "border-cardline bg-white text-ink hover:border-olive/50 hover:text-olive"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </Field>

          <label className="flex cursor-pointer items-center gap-2.5 pt-1 text-sm text-ink">
            <input
              type="checkbox"
              checked={!!form.isDefault}
              onChange={(e) => set("isDefault", e.target.checked)}
              className="h-4 w-4 accent-[#6B7F59]"
            />
            Make this my default address
          </label>
        </div>

        <div className="border-t border-cardline pt-3 bg-white">
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-2xl bg-olive px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
          >
            {busy ? "Saving…" : isEdit ? "Save changes" : "Save address"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
