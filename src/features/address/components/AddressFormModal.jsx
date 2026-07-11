"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { INDIAN_STATES } from "@/features/address/constants/indianStates";
import { useAddressMutations } from "@/features/profile/hooks/useProfile";

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
  "w-full rounded-2xl border border-cardline bg-white px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20";

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
export default function AddressFormModal({ isOpen, onClose, editAddress = null, prefill, onSaved }) {
  const isEdit = !!editAddress?.id;
  const { create, update } = useAddressMutations();
  const [form, setForm] = useState(EMPTY);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const busy = create.isPending || update.isPending;

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
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="animate-slide-up max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-cardline bg-white p-5 shadow-2xl sm:animate-scale-in sm:rounded-3xl sm:p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-black uppercase tracking-tight text-ink">
            {isEdit ? "Edit address" : "Add a new address"}
          </h2>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-muted transition hover:bg-cream hover:text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

          {/* Saved address at — kept as requested */}
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

          <button
            type="submit"
            disabled={busy}
            className="mt-2 w-full rounded-2xl bg-olive px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
          >
            {busy ? "Saving…" : isEdit ? "Save changes" : "Save address"}
          </button>
        </form>
      </div>
    </div>
  );
}
