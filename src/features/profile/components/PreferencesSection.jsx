"use client";

import { useState } from "react";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useUpdatePreferences } from "@/features/profile/hooks/useProfile";

/**
 * Shopping preferences — kept intentionally small for a simple store:
 * favourite categories, dietary preference and spice level. Stored 1:1 on the
 * user and saved via PUT /api/profile/preferences.
 */
const DIETARY = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "eggetarian", label: "Eggetarian" },
  { value: "non_vegetarian", label: "Non-vegetarian" },
];

const SPICE = [
  { value: "mild", label: "Mild" },
  { value: "medium", label: "Medium" },
  { value: "spicy", label: "Spicy" },
  { value: "extra_spicy", label: "Extra spicy" },
];

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-150 active:scale-95 ${
        active
          ? "border-olive bg-olive text-white shadow-sm"
          : "border-cardline bg-white text-ink hover:border-olive/50 hover:text-olive"
      }`}
    >
      {children}
    </button>
  );
}

export default function PreferencesSection({ preferences = {} }) {
  const { categories } = useCategories();
  const save = useUpdatePreferences();

  const [form, setForm] = useState({
    interestedCategories: preferences.interestedCategories ?? [],
    dietaryPreference: preferences.dietaryPreference ?? "vegetarian",
    spiceIntensity: preferences.spiceIntensity ?? "medium",
  });

  const toggleCategory = (id) =>
    setForm((f) => ({
      ...f,
      interestedCategories: f.interestedCategories.includes(id)
        ? f.interestedCategories.filter((c) => c !== id)
        : [...f.interestedCategories, id],
    }));

  return (
    <div className="overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm">
      <div className="border-b border-cardline px-6 py-4">
        <h2 className="text-base font-black uppercase tracking-tight text-ink">Preferences</h2>
        <p className="mt-0.5 text-xs text-muted">Tell us what you like — we&apos;ll tailor what you see.</p>
      </div>

      <div className="space-y-6 p-6">
        <div className="space-y-2.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Favourite categories</p>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.id !== "all")
              .map((c) => (
                <Chip
                  key={c.id}
                  active={form.interestedCategories.includes(c.id)}
                  onClick={() => toggleCategory(c.id)}
                >
                  {c.name}
                </Chip>
              ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Dietary preference</p>
          <div className="flex flex-wrap gap-2">
            {DIETARY.map((d) => (
              <Chip
                key={d.value}
                active={form.dietaryPreference === d.value}
                onClick={() => setForm((f) => ({ ...f, dietaryPreference: d.value }))}
              >
                {d.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Spice level</p>
          <div className="flex flex-wrap gap-2">
            {SPICE.map((s) => (
              <Chip
                key={s.value}
                active={form.spiceIntensity === s.value}
                onClick={() => setForm((f) => ({ ...f, spiceIntensity: s.value }))}
              >
                {s.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="border-t border-cardline pt-4">
          <button
            onClick={() => save.mutate(form)}
            disabled={save.isPending}
            className="rounded-2xl bg-olive px-8 py-3 text-sm font-bold text-white shadow-md shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
          >
            {save.isPending ? "Saving…" : "Save Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}
