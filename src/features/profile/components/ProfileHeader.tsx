"use client";

import type { CustomerProfile } from "../types/profile.types";

interface ProfileHeaderProps {
  profile: CustomerProfile;
  onEditClick: () => void;
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-200 px-2.5 py-0.5 text-[10px] font-bold text-green-700 uppercase tracking-wider">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      Verified
    </span>
  );
}

export default function ProfileHeader({ profile, onEditClick }: ProfileHeaderProps) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden border border-cardline"
      style={{
        background: "linear-gradient(135deg, #f0f4eb 0%, #faf7f2 60%, #fef3ec 100%)",
      }}
    >
      {/* Subtle decorative blobs */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B7F59 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #B5651D 0%, transparent 70%)" }}
      />

      <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' fill='%236B7F59' rx='24'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='36' font-weight='700' fill='white'>A</text></svg>";
              }}
            />
          </div>
          {/* Online dot */}
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-xl sm:text-2xl font-black text-ink leading-tight">{profile.fullName}</h1>
            {profile.isVerified && <VerifiedBadge />}
          </div>

          <div className="space-y-1 mt-2">
            <div className="flex items-center gap-2 text-sm text-muted">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="truncate">{profile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span>Member since {profile.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={onEditClick}
          className="shrink-0 flex items-center gap-2 rounded-2xl border-2 border-olive bg-white/80 hover:bg-olive hover:text-white text-olive text-xs font-bold px-4 py-3 transition-all duration-200 active:scale-95 shadow-sm min-h-[44px]"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  );
}
