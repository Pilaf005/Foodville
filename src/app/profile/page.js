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

import { useProfile, useUpdateProfile } from "@/features/profile/hooks/useProfile";
import { useOrders } from "@/features/orders/hooks/useOrders";
import { useWishlist } from "@/context/WishlistContext";
import { useLogout } from "@/features/auth/hooks/useAuth";

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

// ─── Logout confirmation dialog ────────────────────────────────────────────
function LogoutDialog({ open, onCancel, onConfirm, isPending }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div className="animate-scale-in w-full max-w-sm rounded-3xl border border-cardline bg-white p-6 text-center shadow-2xl">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        <h3 className="text-base font-black uppercase tracking-tight text-ink">Log out?</h3>
        <p className="mt-1 text-xs text-muted">
          You&apos;ll need a new one-time code to sign back in.
        </p>
        <div className="mt-5 flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 rounded-2xl border border-cardline py-2.5 text-xs font-bold uppercase text-ink transition hover:border-olive"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isPending}
            className="flex-1 rounded-2xl bg-red-500 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-red-600 active:scale-[0.98] disabled:opacity-60"
          >
            {isPending ? "Logging out…" : "Log out"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section content renderer ──────────────────────────────────────────────
function ProfileContent({ activeSection, profile, onProfileSave, isSaving, orders, ordersLoading, wishlist, onWishlistRemove }) {
  switch (activeSection) {
    case "personal":
      return <PersonalInfoForm profile={profile} onSave={onProfileSave} isSaving={isSaving} />;

    case "addresses":
      return <AddressList prefill={{ receiverName: profile.fullName, phone: profile.phone }} />;

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

    default:
      return <ContentSkeleton />;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("personal");
  const [logoutOpen, setLogoutOpen] = useState(false);

  const { profile, isPending } = useProfile();
  const updateProfile = useUpdateProfile();
  const logout = useLogout();
  const { orders, isPending: ordersLoading } = useOrders();
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
      <ProfileHeader profile={profile} />

      {/* Admins are ordinary users with extra powers — they keep every customer
          route, and additionally get this door into the dashboard. */}
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
        <ProfileMobileTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={() => setLogoutOpen(true)}
        />
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left sidebar — desktop only */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24">
          <ProfileSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onLogout={() => setLogoutOpen(true)}
          />
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <ProfileContent
            activeSection={activeSection}
            profile={profile}
            onProfileSave={(data) => updateProfile.mutate(data)}
            isSaving={updateProfile.isPending}
            orders={orders.map(toOrderCard)}
            ordersLoading={ordersLoading}
            wishlist={wishlist.map(toWishlistCard)}
            onWishlistRemove={removeFromWishlist}
          />
        </div>
      </div>

      <LogoutDialog
        open={logoutOpen}
        onCancel={() => setLogoutOpen(false)}
        onConfirm={() => logout.mutate()}
        isPending={logout.isPending}
      />
    </div>
  );
}
