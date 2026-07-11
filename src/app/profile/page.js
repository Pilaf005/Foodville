"use client";

import { useState } from "react";
import Link from "next/link";
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

import { useProfile, useUpdateProfile, useAddresses } from "@/features/profile/hooks/useProfile";
import { useOrders } from "@/features/orders/hooks/useOrders";
import { useWishlist } from "@/context/WishlistContext";

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

/** Our order status set → the labels OrderCard already knows how to badge. */
const STATUS_TO_CARD = {
  pending: "pending",
  confirmed: "processing",
  packed: "processing",
  shipped: "shipped",
  out_for_delivery: "shipped",
  delivered: "delivered",
  cancelled: "cancelled",
};

/** API order → the shape OrderCard renders. */
const toOrderCard = (o) => ({
  id: o.orderId,
  restaurantName: "Foodville",
  restaurantImage: o.items?.[0]?.image || "",
  date: o.placedAt ? new Date(o.placedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "",
  items: (o.items || []).map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
  totalAmount: o.amounts?.total ?? 0,
  status: STATUS_TO_CARD[o.status] || "pending",
});

/** Wishlist products → the shape the profile's WishlistCard renders. */
const toWishlistCard = (p) => ({
  id: p.id,
  name: p.name,
  image: p.image,
  rating: p.rating,
  deliveryTime: p.unit || "",
  cuisine: p.category || "",
});

// ─── Section content renderer ──────────────────────────────────────────────
function ProfileContent({ activeSection, profile, onProfileSave, orders, ordersLoading, addresses, wishlist, onWishlistRemove }) {
  switch (activeSection) {
    case "personal":
      return <PersonalInfoForm profile={profile} onSave={onProfileSave} />;

    case "addresses":
      return <AddressList addresses={addresses} />;

    case "orders":
      return (
        <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-cardline flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-ink uppercase tracking-tight">My Orders</h2>
              <p className="text-xs text-muted mt-0.5">
                {ordersLoading ? "Loading…" : `${orders.length} order${orders.length === 1 ? "" : "s"} placed`}
              </p>
            </div>
            <Link href="/orders" className="text-xs font-bold text-olive transition hover:underline">
              Track orders →
            </Link>
          </div>
          <div className="p-5 space-y-4">
            {ordersLoading ? (
              <ContentSkeleton />
            ) : orders.length === 0 ? (
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
              orders.map((order) => (
                <Link key={order.id} href={`/orders/${order.id}`} className="card-hover block rounded-2xl transition">
                  <OrderCard order={order} />
                </Link>
              ))
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
                <p className="text-xs text-muted">Save your favourite items here.</p>
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
      // Cards/UPI are held by Razorpay, never by us — nothing sensitive is stored.
      return <PaymentMethods savedCards={[]} upiAccounts={[]} />;

    case "rewards":
      return <RewardsCard rewards={profile?.rewards ?? { points: 0, walletBalance: 0, referralEarnings: 0, referralCode: "", tier: "bronze", coupons: [] }} />;

    case "preferences":
      return <PreferencesSection preferences={profile?.preferences ?? {}} />;

    case "notifications":
      return <NotificationSettings settings={profile?.notifications ?? {}} />;

    case "security":
      return <SecuritySection />;

    default:
      return <ContentSkeleton />;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("personal");

  const { profile, isPending } = useProfile();
  const updateProfile = useUpdateProfile();
  const { orders, isPending: ordersLoading } = useOrders();
  const { addresses } = useAddresses();
  const { wishlist, removeFromWishlist } = useWishlist();

  if (isPending || !profile) {
    return (
      <div className="pb-12 space-y-6">
        <div className="border-b border-cardline pb-4">
          <h1 className="text-xl font-black text-ink uppercase tracking-tight">My Profile</h1>
        </div>
        <ContentSkeleton />
      </div>
    );
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
      <ProfileHeader profile={profile} onEditClick={() => setActiveSection("personal")} />

      {/* Admins are ordinary users with extra powers — they keep every customer
          route, and additionally get this door into the dashboard. Customers
          never see it, and /admin is blocked for them at the edge anyway. */}
      {profile.role === "admin" && (
        <Link
          href="/admin"
          className="card-hover animate-fade-in flex items-center justify-between gap-4 rounded-3xl border border-olive/30 bg-olive/5 p-5 transition"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-olive text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-ink">Admin Dashboard</p>
              <p className="mt-0.5 text-xs text-muted">Manage products, orders and customers.</p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-bold text-olive">Open →</span>
        </Link>
      )}

      {/* Mobile tab bar */}
      <div className="lg:hidden">
        <ProfileMobileTabs activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left sidebar — desktop only */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24">
          <ProfileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <ProfileContent
            activeSection={activeSection}
            profile={profile}
            onProfileSave={(data) => updateProfile.mutate(data)}
            orders={orders.map(toOrderCard)}
            ordersLoading={ordersLoading}
            addresses={addresses}
            wishlist={wishlist.map(toWishlistCard)}
            onWishlistRemove={removeFromWishlist}
          />
        </div>
      </div>
    </div>
  );
}
