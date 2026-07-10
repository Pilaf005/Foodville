# Orders Feature

## Purpose
Order history, order status tracking, and order details.
**Not yet implemented.** Infrastructure is in place; UI and pages are pending.

## Structure
```
features/orders/
├── components/ — OrderHistoryList, OrderStatusTracker to be built here
├── constants/  — Order statuses, cancel reasons
├── hooks/      — useOrders, useOrderDetails hooks
├── services/
│   └── order.service.js — API stubs for orders endpoints
├── types/      — Order, OrderItem types
└── utils/      — Formatters for order dates, prices
```

## Dependencies (planned)
- `@/lib/api` — axios instance
- `@/constants/api` — API_ENDPOINTS.ORDERS

## Future Work
1. Implement order history list and individual order details view
2. Wire `order.service.js` to live API endpoints
3. Create `src/app/orders/page.js` for order history and status tracking
