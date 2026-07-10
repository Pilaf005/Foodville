"use client";

import { useState } from "react";
import type { CustomerProfile, Gender, Language } from "../types/profile.types";

const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
];

const LANGUAGE_OPTIONS: Language[] = [
  "English",
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Bengali",
];

interface PersonalInfoFormProps {
  profile: CustomerProfile;
  onSave: (updated: CustomerProfile) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  gender: Gender;
  dateOfBirth: string;
  language: Language;
}

function AvatarUpload({ profile }: { profile: CustomerProfile }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-cardline">
      <div className="relative shrink-0">
        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cardline shadow-sm">
          <img
            src={profile.avatarUrl}
            alt={profile.fullName}
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              t.onerror = null;
              t.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' fill='%236B7F59' rx='16'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='28' font-weight='700' fill='white'>A</text></svg>";
            }}
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-ink mb-1">Profile Picture</p>
        <p className="text-xs text-muted mb-3">JPG, PNG or WEBP. Max 2MB.</p>
        <button
          type="button"
          className="text-xs font-bold text-olive border border-olive/50 rounded-xl px-4 py-2 hover:bg-olive/5 transition active:scale-95"
        >
          Upload Photo
        </button>
      </div>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] font-bold text-muted uppercase tracking-widest">
        {label}
        {required && <span className="text-terracotta ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function PersonalInfoForm({ profile, onSave }: PersonalInfoFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    gender: profile.gender,
    dateOfBirth: profile.dateOfBirth,
    language: profile.language,
  });

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    onSave({ ...profile, ...form });
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const inputClass =
    "w-full rounded-2xl border border-cardline bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition";
  const disabledClass =
    "w-full rounded-2xl border border-cardline bg-white/50 px-4 py-3 text-sm text-ink cursor-not-allowed";

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-cardline">
        <div>
          <h2 className="text-base font-black text-ink uppercase tracking-tight">Personal Information</h2>
          <p className="text-xs text-muted mt-0.5">Manage your personal details</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-olive border border-olive/50 rounded-xl px-3 py-2 hover:bg-olive/5 transition active:scale-95"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
            Edit
          </button>
        )}
      </div>

      {/* Saved toast */}
      {saved && (
        <div className="mx-6 mt-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-2.5 text-xs font-semibold text-green-700 animate-fade-in">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Profile updated successfully!
        </div>
      )}

      <div className="p-6 space-y-6">
        <AvatarUpload profile={profile} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Full Name" required>
            {isEditing ? (
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={inputClass}
                placeholder="Your full name"
              />
            ) : (
              <p className={disabledClass}>{form.fullName}</p>
            )}
          </FormField>

          <FormField label="Email Address" required>
            {isEditing ? (
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
                placeholder="your@email.com"
              />
            ) : (
              <p className={disabledClass}>{form.email}</p>
            )}
          </FormField>

          <FormField label="Phone Number" required>
            {isEditing ? (
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
                placeholder="+91 XXXXX XXXXX"
              />
            ) : (
              <p className={disabledClass}>{form.phone}</p>
            )}
          </FormField>

          <FormField label="Gender">
            {isEditing ? (
              <select
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value as Gender)}
                className={inputClass}
              >
                {GENDER_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : (
              <p className={disabledClass}>
                {GENDER_OPTIONS.find((o) => o.value === form.gender)?.label ?? "—"}
              </p>
            )}
          </FormField>

          <FormField label="Date of Birth">
            {isEditing ? (
              <input
                type="date"
                value={form.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                className={inputClass}
              />
            ) : (
              <p className={disabledClass}>
                {form.dateOfBirth
                  ? new Date(form.dateOfBirth).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "—"}
              </p>
            )}
          </FormField>

          <FormField label="Preferred Language">
            {isEditing ? (
              <select
                value={form.language}
                onChange={(e) => handleChange("language", e.target.value as Language)}
                className={inputClass}
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            ) : (
              <p className={disabledClass}>{form.language}</p>
            )}
          </FormField>
        </div>

        {/* Action buttons */}
        {isEditing && (
          <div className="flex gap-3 pt-2 border-t border-cardline">
            <button
              onClick={handleSave}
              className="flex-1 sm:flex-none bg-olive hover:bg-olive-dark active:scale-[0.98] text-white text-sm font-bold px-8 py-3 rounded-2xl transition shadow-md shadow-olive/20"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                setForm({
                  fullName: profile.fullName,
                  email: profile.email,
                  phone: profile.phone,
                  gender: profile.gender,
                  dateOfBirth: profile.dateOfBirth,
                  language: profile.language,
                });
                setIsEditing(false);
              }}
              className="flex-1 sm:flex-none border-2 border-cardline text-muted hover:border-ink hover:text-ink text-sm font-bold px-6 py-3 rounded-2xl transition active:scale-[0.98]"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
