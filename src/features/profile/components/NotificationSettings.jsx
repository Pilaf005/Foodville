"use client";

import { useState } from "react";
import { useUpdateNotifications } from "@/features/profile/hooks/useProfile";

/**
 * Email notification settings — three toggles, saved to
 * PUT /api/profile/notifications. (No OS-style push/SMS options: this is a
 * web store, and those channels don't exist here.)
 */
const OPTIONS = [
  {
    key: "orderUpdates",
    label: "Order updates",
    hint: "Emails when your order is confirmed, shipped and delivered.",
  },
  {
    key: "offers",
    label: "Offers & discounts",
    hint: "Occasional deals on spices, dry fruits and combos.",
  },
  {
    key: "newsletter",
    label: "Newsletter",
    hint: "Recipes and wellness reads from our kitchen.",
  },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        checked ? "bg-olive" : "bg-cardline"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

export default function NotificationSettings({ settings = {} }) {
  const save = useUpdateNotifications();
  const [form, setForm] = useState({
    orderUpdates: settings.orderUpdates ?? true,
    offers: settings.offers ?? true,
    newsletter: settings.newsletter ?? false,
  });

  function handleToggle(key, value) {
    const next = { ...form, [key]: value };
    setForm(next);
    save.mutate(next); // save immediately — no separate save button needed
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm">
      <div className="border-b border-cardline px-6 py-4">
        <h2 className="text-base font-black uppercase tracking-tight text-ink">Notifications</h2>
        <p className="mt-0.5 text-xs text-muted">Choose which emails you&apos;d like to receive.</p>
      </div>

      <div className="divide-y divide-cardline/60">
        {OPTIONS.map((o) => (
          <div key={o.key} className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="min-w-0">
              <p className="text-sm font-bold text-ink">{o.label}</p>
              <p className="mt-0.5 text-xs text-muted">{o.hint}</p>
            </div>
            <Toggle checked={form[o.key]} onChange={(v) => handleToggle(o.key, v)} />
          </div>
        ))}
      </div>
    </div>
  );
}
