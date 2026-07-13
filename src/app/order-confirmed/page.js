"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useOrder } from "@/features/orders/hooks/useOrders";
import OrderTracker from "@/features/orders/components/OrderTracker";
import { Skeleton } from "@/components/feedback/Skeleton";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

function SuccessBanner({ order }) {
  const paid = order.paymentStatus === "paid";
  return (
    <div className="animate-scale-in rounded-3xl border border-olive/30 bg-olive/5 p-6 text-center sm:p-8">
      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-olive text-white shadow-lg shadow-olive/30">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 className="text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">
        Order placed!
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
        Thanks for shopping with Foodville. Your order{" "}
        <span className="font-bold text-ink">{order.orderId}</span>{" "}
        {paid
          ? "is confirmed and your payment was received."
          : order.paymentMethod === "cod"
            ? "is confirmed — pay in cash on delivery."
            : "has been created."}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/orders/${order.orderId}`}
          className="rounded-2xl bg-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98]"
        >
          Track order
        </Link>
        <Link
          href="/shop"
          className="rounded-2xl border-2 border-olive px-6 py-3 text-xs font-bold uppercase tracking-wide text-olive transition hover:bg-olive hover:text-white active:scale-[0.98]"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

function OrderConfirmedContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  // The order comes from the database (not localStorage), so this page
  // survives refreshes, works on any device, and can't be faked.
  const { order, isPending, isError } = useOrder(orderId);

  if (isPending) {
    return (
      <div className="mx-auto max-w-3xl space-y-6 pb-[20px]">
        <Skeleton className="h-56 w-full rounded-3xl" />
        <Skeleton className="h-40 w-full rounded-3xl" />
        <Skeleton className="h-64 w-full rounded-3xl" />
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 text-center">
        <span className="text-5xl">📦</span>
        <h2 className="text-xl font-bold text-ink">Order not found</h2>
        <p className="max-w-sm text-sm text-muted">
          We couldn&apos;t load that order. Your order history has the latest status.
        </p>
        <Link
          href="/orders"
          className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark"
        >
          View my orders
        </Link>
      </div>
    );
  }

  const a = order.address || {};
  const addressLine = [a.houseFlat, a.area || a.apartment, a.landmark, a.city, a.state, a.pincode]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-[20px]">
      <SuccessBanner order={order} />

      <OrderTracker order={order} />

      {/* Items + bill */}
      <div className="animate-fade-in overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm">
        <div className="border-b border-cardline px-5 py-3">
          <h2 className="text-sm font-black uppercase tracking-tight text-ink">
            Order summary ({order.items?.length ?? 0} {order.items?.length === 1 ? "item" : "items"})
          </h2>
        </div>

        <div className="divide-y divide-cardline/60">
          {(order.items || []).map((item) => (
            <div key={`${item.productId}-${item.unit}`} className="flex items-center gap-3 p-4">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-cardline bg-cream">
                {item.image && <img src={item.image} alt="" className="h-full w-full object-cover" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">{item.name}</p>
                <p className="mt-0.5 text-[11px] text-muted">{item.unit} · Qty {item.qty}</p>
              </div>
              <p className="shrink-0 text-sm font-black text-ink">{inr(item.price * item.qty)}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-cardline bg-cream/30 px-5 py-4 text-xs">
          <div className="flex justify-between text-muted">
            <span>Items total</span>
            <span className="font-bold text-ink">{inr(order.amounts?.subtotal)}</span>
          </div>
          {order.amounts?.savings > 0 && (
            <div className="flex justify-between font-bold text-green-600">
              <span>Savings</span>
              <span>− {inr(order.amounts.savings)}</span>
            </div>
          )}
          <div className="flex justify-between text-muted">
            <span>Delivery</span>
            <span className={order.amounts?.deliveryCharge === 0 ? "font-bold text-green-600" : "font-bold text-ink"}>
              {order.amounts?.deliveryCharge === 0 ? "Free" : inr(order.amounts?.deliveryCharge)}
            </span>
          </div>
          <div className="flex justify-between border-t border-cardline pt-2 text-sm">
            <span className="font-bold text-ink">Total {order.paymentMethod === "cod" ? "payable" : "paid"}</span>
            <span className="font-black text-ink">{inr(order.amounts?.total)}</span>
          </div>
        </div>
      </div>

      {/* Delivery address */}
      <div className="animate-fade-in rounded-3xl border border-cardline bg-white p-5 shadow-sm">
        <h2 className="mb-2 text-sm font-black uppercase tracking-tight text-ink">Delivering to</h2>
        <p className="text-xs font-bold text-ink">
          {a.receiverName} {a.label ? <span className="ml-1 rounded-full bg-cream px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">{a.label}</span> : null}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted">{addressLine}</p>
        {a.phone && <p className="mt-1 text-xs text-muted">📞 {a.phone}</p>}
      </div>
    </div>
  );
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl pb-[20px]"><Skeleton className="h-56 w-full rounded-3xl" /></div>}>
      <OrderConfirmedContent />
    </Suspense>
  );
}
