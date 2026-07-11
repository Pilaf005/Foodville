"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useImageUpload } from "@/features/profile/hooks/useProfile";

const DEFAULT_AVATAR = "/images/default-avatar.svg";

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
];

const LANGUAGE_OPTIONS = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"];

function FormField({ label, required, children }) {
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

function AvatarUpload({ profile, onUploaded }) {
  const upload = useImageUpload();

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const result = await upload.mutateAsync({
      file,
      folder: "users",
      // A previous CUSTOM photo is replaced in R2; the bundled default is local.
      replaceUrl: profile.avatarUrl?.startsWith("http") ? profile.avatarUrl : undefined,
    });
    if (result?.url) {
      onUploaded(result.url);
      toast.success("Profile photo updated");
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-cardline">
      <div className="relative shrink-0">
        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cardline shadow-sm bg-cream">
          <img
            src={profile.avatarUrl || DEFAULT_AVATAR}
            alt={profile.fullName || "Profile"}
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              t.onerror = null;
              t.src = DEFAULT_AVATAR;
            }}
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-ink mb-1">Profile Picture</p>
        <p className="text-xs text-muted mb-3">JPG, PNG, WebP or AVIF. Max 4MB.</p>
        <label className="inline-block cursor-pointer text-xs font-bold text-olive border border-olive/50 rounded-xl px-4 py-2 hover:bg-olive/5 transition active:scale-95">
          {upload.isPending ? "Uploading…" : "Upload Photo"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="hidden"
            disabled={upload.isPending}
            onChange={handleFile}
          />
        </label>
      </div>
    </div>
  );
}

/**
 * Personal information card. This carries the profile's single Edit button —
 * the banner above deliberately has none.
 */
export default function PersonalInfoForm({ profile, onSave, isSaving = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    fullName: profile.fullName || "",
    phone: profile.phone || "",
    gender: profile.gender || "prefer_not_to_say",
    dateOfBirth: profile.dateOfBirth || "",
    language: profile.language || "English",
  });

  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  function handleSaveClick() {
    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      toast.error("Enter a valid 10-digit mobile number.");
      return;
    }
    onSave(form);
    setIsEditing(false);
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

      <div className="p-6 space-y-6">
        <AvatarUpload profile={profile} onUploaded={(url) => onSave({ avatarUrl: url })} />

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
              <p className={disabledClass}>{form.fullName || "—"}</p>
            )}
          </FormField>

          {/* Email is the login identity (OTP goes there) — never editable. */}
          <FormField label="Email Address">
            <p className={disabledClass}>{profile.email}</p>
          </FormField>

          <FormField label="Phone Number" required>
            {isEditing ? (
              <input
                type="tel"
                inputMode="numeric"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                className={inputClass}
                placeholder="10-digit mobile number"
              />
            ) : (
              <p className={disabledClass}>{form.phone || "—"}</p>
            )}
          </FormField>

          <FormField label="Gender">
            {isEditing ? (
              <select
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className={inputClass}
              >
                {GENDER_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
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
                max={new Date().toISOString().slice(0, 10)}
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
                onChange={(e) => handleChange("language", e.target.value)}
                className={inputClass}
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
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
              onClick={handleSaveClick}
              disabled={isSaving}
              className="flex-1 sm:flex-none bg-olive hover:bg-olive-dark active:scale-[0.98] text-white text-sm font-bold px-8 py-3 rounded-2xl transition shadow-md shadow-olive/20 disabled:opacity-60"
            >
              {isSaving ? "Saving…" : "Save Changes"}
            </button>
            <button
              onClick={() => {
                setForm({
                  fullName: profile.fullName || "",
                  phone: profile.phone || "",
                  gender: profile.gender || "prefer_not_to_say",
                  dateOfBirth: profile.dateOfBirth || "",
                  language: profile.language || "English",
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
