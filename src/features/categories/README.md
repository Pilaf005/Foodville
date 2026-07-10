# Categories Feature

## Purpose
Renders the category filter bar used on the home page and category listing pages.

## Structure
```
features/categories/
├── components/
│   ├── CategoryFilter.jsx  — Horizontal pill filter (All, Spices, Seeds, etc.)
│   └── index.js
└── services/
    └── category.service.js — API stub for category list endpoint
```

## Dependencies
- `@/features/home/constants/categories` — CATEGORIES array
- `next/navigation` — router.push for navigation

## Public API
```js
import CategoryFilter from "@/features/categories/components/CategoryFilter";
```

## Future Work
- Move CATEGORIES constant from `features/home/constants/` into `features/categories/constants/`
- Wire to `category.service.js` via TanStack Query
