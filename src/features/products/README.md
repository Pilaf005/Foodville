# Products Feature

## Purpose
All product display logic: cards, grids, detail page sections, gallery, reviews, unit selection, and ribbons.

## Structure
```
features/products/
├── components/
│   ├── ProductCard.jsx        — Thumbnail card with cart/wishlist actions
│   ├── ProductGrid.jsx        — Responsive grid of ProductCards
│   ├── ProductGallery.jsx     — Zoomable image gallery with thumbnails
│   ├── ProductInfo.jsx        — Price, unit selector, trust badges
│   ├── ProductDescription.jsx — Expandable product description
│   ├── ProductHighlights.jsx  — Key attributes + combo list
│   ├── ProductReviews.jsx     — Review list + submit form
│   ├── ProductRibbon.jsx      — Top-left badge overlay (bestseller, new, etc.)
│   ├── SimilarProducts.jsx    — Products from the same category
│   ├── TopSellers.jsx         — Top-selling products strip
│   ├── UnitSelector.jsx       — Weight/size variant picker with cart/wishlist
│   ├── ComboIncludesList.jsx  — What's included in combo packs
│   ├── StarRating.jsx         — Interactive/display star rating
│   ├── QtyStepper.jsx         — +/- quantity control
│   ├── WhyShopWithUs.jsx      — Trust/quality selling points section
│   └── index.js
├── constants/
│   └── index.js               — PRODUCT_RIBBONS, PRODUCT_TRUST_BADGES, fallback images, etc.
└── services/
    └── product.service.js     — API stubs for product endpoints
```

## Dependencies
- `@/context/CartContext` — add/update cart items
- `@/context/WishlistContext` — toggle wishlist
- `@/data/products` — static product data (backend-ready)

## Public API
```js
import ProductCard from "@/features/products/components/ProductCard";
import ProductGrid from "@/features/products/components/ProductGrid";
import { PRODUCT_TRUST_BADGES } from "@/features/products/constants";
```

## Future Work
- Replace `@/data/products` with TanStack Query + `product.service.js`
- Add `useProductDetail` hook for the detail page
- Add `useProductList` hook for paginated grids
