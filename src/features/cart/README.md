# Cart Feature

## Purpose
Cart item display, bill/pricing panel, and all cart-related sub-components used in the cart page.

## Structure
```
features/cart/
├── components/
│   ├── CartItem.jsx    — Single cart row with qty stepper and remove button
│   ├── BillDetails.jsx — Pricing breakdown panel + address + location modal trigger
│   └── index.js
└── services/
    └── cart.service.js — API stubs for cart CRUD endpoints
```

## Dependencies
- `@/context/CartContext` — cart state (items, updateQty, removeFromCart)
- `@/data/products` — product lookup for recommendations
- `@/features/products/constants` — PRODUCT_FALLBACK_IMAGE
- `@/features/checkout/components/location/LocationModal` — address picker

## Public API
```js
import CartItem from "@/features/cart/components/CartItem";
import BillDetails from "@/features/cart/components/BillDetails";
```

## Future Work
- Wire `cart.service.js` to live API via TanStack Query mutations
- Add `useCartBilling` hook to centralize pricing logic from `cart/page.js`
- Replace `@/data/products` lookup with server-side recommendations API
