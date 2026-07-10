"use client";

import { useState } from "react";
import ProfileHeader from "@/features/profile/components/ProfileHeader";
import ProfileSidebar from "@/features/profile/components/ProfileSidebar";
import ProfileMobileTabs from "@/features/profile/components/ProfileMobileTabs";
import PersonalInfoForm from "@/features/profile/components/PersonalInfoForm";
import AddressList from "@/features/profile/components/AddressList";
import OrderCard from "@/features/profile/components/OrderCard";
import WishlistCard from "@/features/profile/components/WishlistCard";
import PaymentMethods from "@/features/profile/components/PaymentMethods";
import RewardsCard from "@/features/profile/components/RewardsCard";
import PreferencesSection from "@/features/profile/components/PreferencesSection";
import NotificationSettings from "@/features/profile/components/NotificationSettings";
import SecuritySection from "@/features/profile/components/SecuritySection";
import {
  mockProfile,
  mockAddresses,
  mockOrders,
  mockWishlist,
  mockSavedCards,
  mockUPIAccounts,
  mockRewards,
  mockPreferences,
  mockNotifications,
} from "@/features/profile/data/profile.mock";

// ─── Skeleton loader for content area ─────────────────────────────────────
function ContentSkeleton() {
  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden animate-shimmer">
      <div className="h-16 border-b border-cardline bg-cream/30" />
      <div className="p-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-14 rounded-2xl bg-cream/60" />
        ))}
      </div>
    </div>
  );
}

// ─── Section content renderer ──────────────────────────────────────────────
function ProfileContent({ activeSection, profile, onProfileSave, wishlist, onWishlistRemove }) {
  switch (activeSection) {
    case "personal":
      return <PersonalInfoForm profile={profile} onSave={onProfileSave} />;

    case "addresses":
      return <AddressList addresses={mockAddresses} />;

    case "orders":
      return (
        <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-cardline">
            <h2 className="text-base font-black text-ink uppercase tracking-tight">My Orders</h2>
            <p className="text-xs text-muted mt-0.5">{mockOrders.length} orders placed</p>
          </div>
          <div className="p-5 space-y-4">
            {mockOrders.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-olive/10 grid place-items-center text-olive">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-ink">No orders yet</p>
                <p className="text-xs text-muted">Start shopping to see your order history here.</p>
              </div>
            ) : (
              mockOrders.map((order) => <OrderCard key={order.id} order={order} />)
            )}
          </div>
        </div>
      );

    case "wishlist":
      return (
        <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-cardline">
            <h2 className="text-base font-black text-ink uppercase tracking-tight">Wishlist</h2>
            <p className="text-xs text-muted mt-0.5">{wishlist.length} saved items</p>
          </div>
          <div className="p-5">
            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-terracotta/10 grid place-items-center text-terracotta">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-ink">Your wishlist is empty</p>
                <p className="text-xs text-muted">Save your favourite stores and items here.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {wishlist.map((item) => (
                  <WishlistCard key={item.id} item={item} onRemove={onWishlistRemove} />
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "payments":
      return <PaymentMethods savedCards={mockSavedCards} upiAccounts={mockUPIAccounts} />;

    case "rewards":
      return <RewardsCard rewards={mockRewards} />;

    case "preferences":
      return <PreferencesSection preferences={mockPreferences} />;

    case "notifications":
      return <NotificationSettings settings={mockNotifications} />;

    case "security":
      return <SecuritySection />;

    default:
      return <ContentSkeleton />;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("personal");
  const [profile, setProfile] = useState(mockProfile);
  const [wishlistItems, setWishlistItems] = useState(mockWishlist);

  function handleWishlistRemove(id) {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="pb-12 space-y-6 animate-fade-in">
      {/* Page title */}
      <div className="border-b border-cardline pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-ink uppercase tracking-tight">My Profile</h1>
          <p className="text-xs text-muted mt-0.5">Manage your account and preferences</p>
        </div>
      </div>

      {/* Header */}
      <ProfileHeader
        profile={profile}
        onEditClick={() => setActiveSection("personal")}
      />

      {/* Mobile tab bar */}
      <div className="lg:hidden">
        <ProfileMobileTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left sidebar — desktop only */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24">
          <ProfileSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <ProfileContent
            activeSection={activeSection}
            profile={profile}
            onProfileSave={setProfile}
            wishlist={wishlistItems}
            onWishlistRemove={handleWishlistRemove}
          />
        </div>
      </div>
    </div>
  );
}
