# Wishlist Feature

## Purpose
Wishlist item card with cart/wishlist actions and navigation to the product detail page.

## Structure
```
features/wishlist/
├── components/
│   ├── WishlistCard.jsx  — Product card with add-to-cart and remove-from-wishlist
│   └── index.js
└── services/
    └── wishlist.service.js — API stubs for wishlist toggle endpoint
```

## Dependencies
- `@/context/CartContext` — add to cart
- `@/context/WishlistContext` — remove from wishlist
- `@/features/products/constants` — PRODUCT_FALLBACK_IMAGE
- `next/navigation` — router.push to product detail

## Public API
```js
import WishlistCard from "@/features/wishlist/components/WishlistCard";
```

## Future Work
- Wire `wishlist.service.js` to live API via TanStack Query
- Add `useWishlist` hook to decouple context access from components
