"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import api, { unwrap } from "@/lib/api";
import orderService from "@/features/orders/services/order.service";
import { queryKeys } from "@/lib/queryKeys";

export function useOrders() {
  const query = useQuery({
    queryKey: queryKeys.orders.all,
    queryFn: orderService.list,
    staleTime: 60 * 1000,
  });
  return { ...query, orders: query.data ?? [] };
}

export function useOrder(orderId) {
  const query = useQuery({
    queryKey: queryKeys.orders.detail(orderId),
    queryFn: () => orderService.getById(orderId),
    enabled: !!orderId,
    retry: false,
  });
  return { ...query, order: query.data ?? null };
}

/** Customer cancels their own order (allowed until it ships). */
export function useCancelOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (orderId) => unwrap(await api.post(`/orders/${orderId}/cancel`)),
    onSuccess: (order) => {
      qc.setQueryData(queryKeys.orders.detail(order.orderId), order);
      qc.invalidateQueries({ queryKey: queryKeys.orders.all });
      toast.success(
        order.paymentStatus === "refunded"
          ? "Order cancelled — your refund has been initiated."
          : "Order cancelled.",
        { id: "order-cancel" }
      );
    },
    onError: (err) => toast.error(err?.message || "Could not cancel the order.", { id: "order-cancel" }),
  });
}
