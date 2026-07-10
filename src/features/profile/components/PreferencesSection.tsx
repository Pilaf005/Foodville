"use client";

import { useState } from "react";
import type { Preferences, SpiceLevel, DietaryPreference, Language, PackagingSize, ShoppingFrequency } from "../types/profile.types";

// ─── Static config data ────────────────────────────────────────────────────

const PRODUCT_CATEGORIES: { id: string; label: string; icon: React.ReactNode; description: string }[] = [
  {
    id: "powders",
    label: "Spice Powders",
    description: "Chilli, turmeric, coriander & more",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 5-5 11-5 11S7 12 7 7a5 5 0 0 1 5-5z"/>
        <circle cx="12" cy="7" r="2"/>
      </svg>
    ),
  },
  {
    id: "seasoning",
    label: "Seasoning & Herbs",
    description: "Blends, herbs & ready mixes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22V12M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z"/>
        <path d="M8 22h8"/>
      </svg>
    ),
  },
  {
    id: "seeds",
    label: "Seeds",
    description: "Chia, flax, sabja, sunflower",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(-30 12 12)"/>
        <path d="M12 5C9 3 6 5 6 9"/>
      </svg>
    ),
  },
  {
    id: "dryfruits",
    label: "Dry Fruits & Nuts",
    description: "Almonds, cashews, raisins & more",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/>
      </svg>
    ),
  },
  {
    id: "wellness",
    label: "Herbal & Wellness",
    description: "Ayurvedic herbs & superfoods",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
      </svg>
    ),
  },
  {
    id: "combos",
    label: "Combo Packs",
    description: "Curated bundles & gift sets",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2M12 12v5M9.5 14.5h5"/>
      </svg>
    ),
  },
  {
    id: "bulk",
    label: "Bulk Products",
    description: "Economy packs & bulk savings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
        <path d="M16.5 9.4 7.55 4.24M3.29 7 12 12l8.71-5M12 22V12"/>
        <circle cx="19" cy="19" r="3"/><path d="M22 22l-1.5-1.5"/>
      </svg>
    ),
  },
];

const HEALTH_GOALS: { id: string; label: string; emoji: string }[] = [
  { id: "weight_management",  label: "Weight Management",  emoji: "⚖️" },
  { id: "immunity_boost",     label: "Immunity Boost",     emoji: "🛡️" },
  { id: "gut_health",         label: "Gut Health",         emoji: "🌿" },
  { id: "energy_fitness",     label: "Energy & Fitness",   emoji: "💪" },
  { id: "heart_health",       label: "Heart Health",       emoji: "❤️" },
  { id: "skin_hair",          label: "Skin & Hair Care",   emoji: "✨" },
  { id: "diabetes_friendly",  label: "Diabetes Friendly",  emoji: "🩺" },
  { id: "bone_strength",      label: "Bone Strength",      emoji: "🦴" },
];

const SPICE_LEVELS: { value: SpiceLevel; label: string; emoji: string; hint: string }[] = [
  { value: "mild",        label: "Mild",        emoji: "🟢", hint: "Light flavour, low heat" },
  { value: "medium",      label: "Medium",      emoji: "🟡", hint: "Balanced & aromatic"    },
  { value: "spicy",       label: "Spicy",       emoji: "🔴", hint: "Rich heat, bold taste"  },
  { value: "extra_spicy", label: "Extra Spicy", emoji: "🌶️", hint: "Maximum heat & punch"   },
];

const DIETARY_OPTIONS: { value: DietaryPreference; label: string; icon: string; hint: string }[] = [
  { value: "vegetarian",     label: "Vegetarian",    icon: "🥦", hint: "No meat products"          },
  { value: "vegan",          label: "Vegan",         icon: "🌱", hint: "No animal products at all" },
  { value: "eggetarian",     label: "Eggetarian",    icon: "🥚", hint: "Vegetarian + eggs"          },
  { value: "non_vegetarian", label: "Non-Veg",       icon: "🍗", hint: "All products included"     },
];

const PACKAGING_SIZES: { value: PackagingSize; label: string; hint: string }[] = [
  { value: "small",  label: "Small",  hint: "50g – 100g"  },
  { value: "medium", label: "Medium", hint: "150g – 300g" },
  { value: "large",  label: "Large",  hint: "400g – 750g" },
  { value: "bulk",   label: "Bulk",   hint: "1kg+"        },
];

const SHOPPING_FREQUENCIES: { value: ShoppingFrequency; label: string; icon: React.ReactNode }[] = [
  {
    value: "weekly",
    label: "Weekly",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  },
  {
    value: "fortnightly",
    label: "Every 2 weeks",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    value: "monthly",
    label: "Monthly",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>,
  },
  {
    value: "occasionally",
    label: "Occasionally",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  },
];

const LANGUAGE_OPTIONS: Language[] = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"];

// ─── Shared sub-components ─────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-3 pl-0.5">
      {children}
    </p>
  );
}

function Toggle({
  checked,
  onChange,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive/30 ${
        checked ? "bg-olive" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

// ─── Category interest card ────────────────────────────────────────────────

function CategoryCard({
  id, label, description, icon, selected, onToggle,
}: {
  id: string; label: string; description: string; icon: React.ReactNode;
  selected: boolean; onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      className={`relative flex flex-col gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-150 focus:outline-none active:scale-[0.98] ${
        selected
          ? "border-olive bg-olive/5 shadow-sm"
          : "border-cardline bg-white hover:border-olive/40 hover:bg-cream/40"
      }`}
    >
      {/* Checkmark */}
      <span
        className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
          selected ? "border-olive bg-olive" : "border-cardline bg-white"
        }`}
      >
        {selected && (
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>

      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl grid place-items-center transition-colors ${
        selected ? "bg-olive text-white" : "bg-cream text-muted"
      }`}>
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className={`text-sm font-bold leading-tight ${selected ? "text-olive" : "text-ink"}`}>
          {label}
        </p>
        <p className="text-[11px] text-muted mt-0.5 leading-snug">{description}</p>
      </div>
    </button>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

interface PreferencesSectionProps {
  preferences: Preferences;
}

export default function PreferencesSection({ preferences: initial }: PreferencesSectionProps) {
  const [prefs, setPrefs] = useState<Preferences>(initial);
  const [saved, setSaved] = useState(false);

  function update<K extends keyof Preferences>(key: K, value: Preferences[K]) {
    setPrefs((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCategory(id: string) {
    setPrefs((prev) => ({
      ...prev,
      interestedCategories: prev.interestedCategories.includes(id)
        ? prev.interestedCategories.filter((c) => c !== id)
        : [...prev.interestedCategories, id],
    }));
  }

  function toggleGoal(id: string) {
    setPrefs((prev) => ({
      ...prev,
      healthGoals: prev.healthGoals.includes(id)
        ? prev.healthGoals.filter((g) => g !== id)
        : [...prev.healthGoals, id],
    }));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3500);
  }

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-cardline">
        <h2 className="text-base font-black text-ink uppercase tracking-tight">Shopping Preferences</h2>
        <p className="text-xs text-muted mt-0.5">
          Help us personalise your Foodville experience
        </p>
      </div>

      {/* Save toast */}
      {saved && (
        <div className="mx-6 mt-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-2.5 text-xs font-semibold text-green-700 animate-fade-in">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Preferences saved successfully!
        </div>
      )}

      <div className="p-6 space-y-8">

        {/* ── 1. Product Category Interests ─────────────────────────────── */}
        <div>
          <SectionLabel>Categories you shop from</SectionLabel>
          <p className="text-xs text-muted mb-4 -mt-1">
            Select all that interest you — we&apos;ll prioritise these in recommendations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                label={cat.label}
                description={cat.description}
                icon={cat.icon}
                selected={prefs.interestedCategories.includes(cat.id)}
                onToggle={toggleCategory}
              />
            ))}
          </div>
          {prefs.interestedCategories.length === 0 && (
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mt-3">
              ⚠ Select at least one category to get personalised product recommendations.
            </p>
          )}
        </div>

        {/* ── 2. Health & Wellness Goals ─────────────────────────────────── */}
        <div>
          <SectionLabel>Health &amp; wellness goals</SectionLabel>
          <p className="text-xs text-muted mb-4 -mt-1">
            We&apos;ll highlight products that match your wellness priorities.
          </p>
          <div className="flex flex-wrap gap-2">
            {HEALTH_GOALS.map(({ id, label, emoji }) => {
              const active = prefs.healthGoals.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleGoal(id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all duration-150 active:scale-95 ${
                    active
                      ? "bg-olive text-white border-olive shadow-sm"
                      : "border-cardline text-ink bg-white hover:border-olive/50 hover:text-olive"
                  }`}
                >
                  <span>{emoji}</span>
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Spice Intensity ─────────────────────────────────────────── */}
        <div>
          <SectionLabel>Preferred spice intensity</SectionLabel>
          <p className="text-xs text-muted mb-4 -mt-1">
            We&apos;ll suggest powders and blends that match your heat preference.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SPICE_LEVELS.map(({ value, label, emoji, hint }) => {
              const isSelected = prefs.spiceIntensity === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("spiceIntensity", value)}
                  className={`flex flex-col items-start gap-2 p-4 rounded-2xl border-2 text-left transition-all duration-150 focus:outline-none active:scale-[0.98] ${
                    isSelected
                      ? "border-olive bg-olive/5 shadow-sm"
                      : "border-cardline bg-white hover:border-olive/40"
                  }`}
                >
                  <span className="text-xl leading-none">{emoji}</span>
                  <div>
                    <p className={`text-sm font-bold ${isSelected ? "text-olive" : "text-ink"}`}>{label}</p>
                    <p className="text-[11px] text-muted mt-0.5">{hint}</p>
                  </div>
                  {isSelected && (
                    <span className="self-end ml-auto text-[9px] font-black text-olive bg-olive/10 rounded-full px-2 py-0.5 uppercase tracking-wide">
                      Selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 4. Dietary Lifestyle ──────────────────────────────────────── */}
        <div>
          <SectionLabel>Dietary lifestyle</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DIETARY_OPTIONS.map(({ value, label, icon, hint }) => {
              const isSelected = prefs.dietaryPreference === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("dietaryPreference", value)}
                  className={`flex flex-col items-start gap-2 p-4 rounded-2xl border-2 text-left transition-all duration-150 focus:outline-none active:scale-[0.98] ${
                    isSelected
                      ? "border-olive bg-olive/5 shadow-sm"
                      : "border-cardline bg-white hover:border-olive/40"
                  }`}
                >
                  <span className="text-xl leading-none">{icon}</span>
                  <div>
                    <p className={`text-sm font-bold ${isSelected ? "text-olive" : "text-ink"}`}>{label}</p>
                    <p className="text-[11px] text-muted mt-0.5">{hint}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 5. Preferred Pack Size ─────────────────────────────────────── */}
        <div>
          <SectionLabel>Preferred pack size</SectionLabel>
          <p className="text-xs text-muted mb-4 -mt-1">
            We&apos;ll show the most relevant pack sizes first in listings.
          </p>
          <div className="flex flex-wrap gap-2">
            {PACKAGING_SIZES.map(({ value, label, hint }) => {
              const isSelected = prefs.preferredPackaging === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("preferredPackaging", value)}
                  className={`flex flex-col items-start px-5 py-3 rounded-2xl border-2 text-left transition-all duration-150 focus:outline-none active:scale-95 ${
                    isSelected
                      ? "border-olive bg-olive/5 shadow-sm"
                      : "border-cardline bg-white hover:border-olive/40"
                  }`}
                >
                  <span className={`text-sm font-bold ${isSelected ? "text-olive" : "text-ink"}`}>{label}</span>
                  <span className="text-[11px] text-muted">{hint}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 6. Shopping Frequency ─────────────────────────────────────── */}
        <div>
          <SectionLabel>How often do you shop?</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SHOPPING_FREQUENCIES.map(({ value, label, icon }) => {
              const isSelected = prefs.shoppingFrequency === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("shoppingFrequency", value)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border-2 text-sm font-semibold text-left transition-all duration-150 focus:outline-none active:scale-[0.98] ${
                    isSelected
                      ? "border-olive bg-olive/5 text-olive shadow-sm"
                      : "border-cardline bg-white text-ink hover:border-olive/40"
                  }`}
                >
                  <span className={isSelected ? "text-olive" : "text-muted"}>{icon}</span>
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 7. Quick toggles ──────────────────────────────────────────── */}
        <div className="rounded-2xl border border-cardline bg-cream/20 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cardline/60">
            <div>
              <p className="text-sm font-bold text-ink">Show in-stock items only</p>
              <p className="text-xs text-muted mt-0.5">Hide products that are currently out of stock</p>
            </div>
            <Toggle checked={prefs.inStockOnly} onChange={(v) => update("inStockOnly", v)} />
          </div>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm font-bold text-ink">Prioritise deals &amp; offers</p>
              <p className="text-xs text-muted mt-0.5">Show discounted products first in all listings</p>
            </div>
            <Toggle checked={prefs.prioritiseOffers} onChange={(v) => update("prioritiseOffers", v)} />
          </div>
        </div>

        {/* ── 8. Language ───────────────────────────────────────────────── */}
        <div>
          <SectionLabel>Preferred language</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {LANGUAGE_OPTIONS.map((lang) => {
              const isSelected = prefs.language === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => update("language", lang)}
                  className={`px-4 py-2 rounded-full border text-xs font-bold transition-all duration-150 active:scale-95 ${
                    isSelected
                      ? "bg-olive text-white border-olive shadow-sm"
                      : "border-cardline text-ink bg-white hover:border-olive/40 hover:text-olive"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Save ─────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 pt-2 border-t border-cardline">
          <button
            onClick={handleSave}
            className="bg-olive hover:bg-olive-dark active:scale-[0.98] text-white text-sm font-bold px-8 py-3 rounded-2xl transition shadow-md shadow-olive/20"
          >
            Save Preferences
          </button>
          <button
            onClick={() => setPrefs(initial)}
            className="border-2 border-cardline text-muted hover:border-gray-300 hover:text-ink text-sm font-bold px-6 py-3 rounded-2xl transition active:scale-[0.98]"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}
