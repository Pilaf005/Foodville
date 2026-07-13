"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useOrder, useCancelOrder } from "@/features/orders/hooks/useOrders";
import OrderTracker, { STATUS_BADGE } from "@/features/orders/components/OrderTracker";
import { Skeleton } from "@/components/feedback/Skeleton";
import { useCheckout } from "@/features/checkout/hooks/useCheckout";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Modal from "@/components/ui/Modal";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

// Amazon-style rule: cancellable any time before it ships.
const CANCELLABLE = ["pending", "confirmed", "packed"];

function CancelOrderButton({ order }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const cancel = useCancelOrder();

  if (!CANCELLABLE.includes(order.status)) return null;

  return (
    <>
      <button
        onClick={() => setConfirmOpen(true)}
        className="rounded-2xl border border-red-200 px-5 py-2.5 text-xs font-bold text-red-500 transition hover:bg-red-50 active:scale-[0.98]"
      >
        Cancel order
      </button>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Cancel this order?"
        subtitle={`Order ${order.orderId} · ${inr(order.amounts?.total)}`}
        maxWidth="max-w-sm"
      >
        <p className="text-xs leading-relaxed text-muted">
          {order.paymentStatus === "paid"
            ? "Your payment will be refunded to the original payment method (usually within 5–7 working days)."
            : "This order hasn't been paid, so there's nothing to refund."}
        </p>
        <div className="mt-5 flex gap-2">
          <button
            onClick={() => setConfirmOpen(false)}
            className="flex-1 rounded-2xl border border-cardline py-2.5 text-xs font-bold uppercase text-ink transition hover:border-olive"
          >
            Keep order
          </button>
          <button
            onClick={() => cancel.mutate(order.orderId, { onSettled: () => setConfirmOpen(false) })}
            disabled={cancel.isPending}
            className="flex-1 rounded-2xl bg-red-500 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-red-600 active:scale-[0.98] disabled:opacity-60"
          >
            {cancel.isPending ? "Cancelling…" : "Yes, cancel"}
          </button>
        </div>
      </Modal>
    </>
  );
}

/**
 * Shown when an online payment was started but never finished (customer closed
 * the Razorpay modal or the tab). Lets them pay the SAME order — no duplicate.
 */
function CompletePaymentCard({ order }) {
  const { user } = useAuth();
  const { payPendingOrder, isPaying } = useCheckout();

  return (
    <div className="animate-fade-in flex flex-col items-start justify-between gap-3 rounded-3xl border border-amber-300 bg-amber-50/70 p-5 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm font-black uppercase tracking-tight text-ink">Payment pending</p>
        <p className="mt-0.5 text-xs text-muted">
          This order isn&apos;t paid yet. Complete the payment of{" "}
          <span className="font-bold text-ink">{inr(order.amounts?.total)}</span> to confirm it.
        </p>
      </div>
      <button
        onClick={() => payPendingOrder(order, user).catch(() => {})}
        disabled={isPaying}
        className="shrink-0 rounded-2xl bg-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
      >
        {isPaying ? "Opening…" : "Complete payment"}
      </button>
    </div>
  );
}

export default function OrderTrackingPage({ params: paramsPromise }) {
  const { orderId } = use(paramsPromise);
  const { order, isPending, isError } = useOrder(orderId);

  if (isPending) {
    return (
      <div className="space-y-6 pb-12">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-48 w-full rounded-3xl" />
        <div className="grid gap-6 lg:grid-cols-12">
          <Skeleton className="h-64 rounded-3xl lg:col-span-7" />
          <Skeleton className="h-64 rounded-3xl lg:col-span-5" />
        </div>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-24 text-center">
        <span className="text-5xl">📦</span>
        <h2 className="text-xl font-bold text-ink">Order not found</h2>
        <p className="max-w-sm text-sm text-muted">
          We couldn&apos;t find that order on your account.
        </p>
        <Link
          href="/orders"
          className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark"
        >
          Back to my orders
        </Link>
      </div>
    );
  }

  const badge = STATUS_BADGE[order.status] || { label: order.status, cls: "bg-cardline/60 text-ink" };
  const a = order.address || {};
  const addressLine = [a.houseFlat, a.apartment, a.landmark, a.city, a.state, a.pincode]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cardline pb-3">
        <div className="flex items-center gap-3">
          <Link
            href="/orders"
            aria-label="Back to orders"
            className="rounded-full p-2 text-muted transition hover:bg-cream hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-lg font-black uppercase tracking-tight text-ink sm:text-xl">
              Order {order.orderId}
            </h1>
            <p className="mt-0.5 text-xs text-muted">
              Placed {order.placedAt ? new Date(order.placedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }) : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CancelOrderButton order={order} />
          <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${badge.cls}`}>{badge.label}</span>
        </div>
      </div>

      {/* Abandoned-payment recovery */}
      {order.paymentMethod === "razorpay" &&
        order.paymentStatus === "pending" &&
        order.status !== "cancelled" && <CompletePaymentCard order={order} />}

      {/* Tracker */}
      <OrderTracker order={order} />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Items */}
        <div className="animate-fade-in overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm lg:col-span-7">
          <div className="border-b border-cardline px-5 py-3">
            <h2 className="text-sm font-black uppercase tracking-tight text-ink">
              Items ({order.items?.length ?? 0})
            </h2>
          </div>
          <div className="divide-y divide-cardline/60">
            {(order.items || []).map((item) => (
              <div key={`${item.productId}-${item.unit}`} className="flex items-center gap-3 p-4">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-cardline bg-cream">
                  {item.image && <img src={item.image} alt="" className="h-full w-full object-cover" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted">
                    {item.unit} · Qty {item.qty}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-black text-ink">{inr(item.price * item.qty)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bill + address */}
        <div className="space-y-6 lg:col-span-5">
          <div className="animate-fade-in rounded-3xl border border-cardline bg-white p-5 shadow-sm">
            <h2 className="mb-3 border-b border-cardline pb-2 text-sm font-black uppercase tracking-tight text-ink">
              Bill details
            </h2>
            <div className="space-y-2 text-xs">
              <Row label="Items total" value={inr(order.amounts?.subtotal)} />
              {order.amounts?.savings > 0 && (
                <Row label="Savings" value={`− ${inr(order.amounts.savings)}`} accent="text-green-600 font-bold" />
              )}
              <Row
                label="Delivery"
                value={order.amounts?.deliveryCharge === 0 ? "Free" : inr(order.amounts?.deliveryCharge)}
                accent={order.amounts?.deliveryCharge === 0 ? "text-green-600 font-bold" : ""}
              />
              <div className="flex items-center justify-between border-t border-cardline pt-2 text-sm">
                <span className="font-bold text-ink">Total</span>
                <span className="font-black text-ink">{inr(order.amounts?.total)}</span>
              </div>
              <p className="pt-1 text-[11px] text-muted">
                {order.paymentMethod === "cod" ? "Cash on Delivery" : "Paid online"}
                {" · "}
                <span className={order.paymentStatus === "paid" ? "font-bold text-green-600" : "text-amber-600"}>
                  {order.paymentStatus}
                </span>
              </p>
            </div>
          </div>

          <div className="animate-fade-in rounded-3xl border border-cardline bg-white p-5 shadow-sm">
            <h2 className="mb-3 border-b border-cardline pb-2 text-sm font-black uppercase tracking-tight text-ink">
              Delivery address
            </h2>
            <p className="text-xs font-bold text-ink">{a.receiverName}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-muted">{addressLine}</p>
            {a.phone && <p className="mt-1 text-[11px] text-muted">📞 {a.phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, accent = "" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className={accent || "font-bold text-ink"}>{value}</span>
    </div>
  );
}
