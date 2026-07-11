"use client";

import { useQuery } from "@tanstack/react-query";
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
