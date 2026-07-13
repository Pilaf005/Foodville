"use client";

import Link from "next/link";
import { useOrders } from "@/features/orders/hooks/useOrders";
import { STATUS_BADGE } from "@/features/orders/components/OrderTracker";
import { Skeleton } from "@/components/feedback/Skeleton";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

export default function OrdersPage() {
  const { orders, isPending } = useOrders();

  return (
    <div className="space-y-6 pb-[20px]">
      <div className="flex items-center justify-between border-b border-cardline pb-3">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">My Orders</h1>
          <p className="mt-0.5 text-xs text-muted">Track your orders and view past purchases.</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-muted">
          {isPending ? "…" : `${orders.length} ${orders.length === 1 ? "Order" : "Orders"}`}
        </span>
      </div>

      {isPending ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-3xl" />)}
        </div>
      ) : orders.length === 0 ? (
        <div className="animate-fade-in space-y-3 rounded-3xl border border-cardline bg-white/60 py-20 text-center">
          <span className="text-4xl">📦</span>
          <h3 className="font-bold text-ink">No orders yet</h3>
          <p className="text-xs text-muted">Your orders will appear here once you place one.</p>
          <Link
            href="/shop"
            className="mt-2 inline-flex rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark active:scale-[0.98]"
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => {
            const badge = STATUS_BADGE[order.status] || { label: order.status, cls: "bg-cardline/60 text-ink" };
            const preview = (order.items || []).map((i) => `${i.name} × ${i.qty}`).join(", ");

            return (
              <Link
                key={order.orderId}
                href={`/orders/${order.orderId}`}
                className="card-hover animate-fade-in block rounded-3xl border border-cardline bg-white p-4 shadow-sm transition sm:p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-cardline bg-cream">
                    {order.items?.[0]?.image && (
                      <img src={order.items[0].image} alt="" className="h-full w-full object-cover" />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-black text-ink">{order.orderId}</p>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs text-muted">{preview}</p>
                    <p className="mt-1 text-[11px] text-muted">
                      {order.placedAt ? new Date(order.placedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : ""}
                      {" · "}
                      {order.paymentMethod === "cod" ? "Cash on Delivery" : "Paid online"}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-sm font-black text-ink">{inr(order.amounts?.total)}</p>
                    <span className="mt-1 inline-block text-[11px] font-bold text-olive">Track →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
