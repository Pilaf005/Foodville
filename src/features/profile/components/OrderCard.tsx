"use client";

import type { Order, OrderStatus } from "../types/profile.types";

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string; dot: string }> = {
  delivered:  { label: "Delivered",  bg: "bg-green-50",  text: "text-green-700",  dot: "bg-green-500"  },
  processing: { label: "Processing", bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-500"  },
  shipped:    { label: "Shipped",    bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500"   },
  cancelled:  { label: "Cancelled",  bg: "bg-red-50",    text: "text-red-600",    dot: "bg-red-500"    },
  pending:    { label: "Pending",    bg: "bg-gray-50",   text: "text-gray-600",   dot: "bg-gray-400"   },
};

interface OrderCardProps {
  order: Order;
}

function StatusBadge({ status }: { status: OrderStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-current/20 ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} ${status === "processing" ? "animate-pulse" : ""}`} />
      {config.label}
    </span>
  );
}

export default function OrderCard({ order }: OrderCardProps) {
  const itemSummary = order.items
    .map((i) => `${i.name} × ${i.qty}`)
    .join(", ");

  return (
    <div className="rounded-3xl border border-cardline bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Restaurant image */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-cardline bg-cream shrink-0">
          <img
            src={order.restaurantImage}
            alt={order.restaurantName}
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              t.onerror = null;
              t.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%23F5F5F4' rx='12'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='11' fill='%23A8A29E'>Store</text></svg>";
            }}
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-sm font-bold text-ink leading-tight">{order.restaurantName}</h3>
              <p className="text-[11px] text-muted mt-0.5">Order #{order.id}</p>
            </div>
            <StatusBadge status={order.status} />
          </div>

          <p className="text-xs text-muted mt-2 line-clamp-2">{itemSummary}</p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-cardline/60">
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider">Total</p>
              <p className="text-sm font-black text-ink">₹{order.totalAmount}</p>
            </div>
            <p className="text-[11px] text-muted">{order.date}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4 pt-4 border-t border-cardline/60">
        <button className="flex-1 text-xs font-bold text-olive border border-olive/50 rounded-xl py-2.5 hover:bg-olive/5 transition active:scale-[0.98]">
          View Details
        </button>
        {order.status === "delivered" && (
          <button className="flex-1 text-xs font-bold text-white bg-olive hover:bg-olive-dark rounded-xl py-2.5 transition shadow-sm shadow-olive/20 active:scale-[0.98]">
            Reorder
          </button>
        )}
      </div>
    </div>
  );
}
