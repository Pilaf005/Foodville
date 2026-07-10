# Home Feature

## Purpose
Renders the homepage hero carousel, shop-by-category tabs, and new blog reads section.

## Structure
```
features/home/
├── components/
│   ├── HeroCarousel.jsx   — Auto-advancing image slider
│   ├── SectionHeader.jsx  — Reusable section title + subtitle
│   ├── ShopBy.jsx         — Tabbed product grid (bestsellers, seasonal, etc.)
│   ├── NewReads.jsx       — Blog preview strip
│   └── index.js
├── constants/
│   ├── heroImages.js      — Slide images and timing constants
│   ├── shopByTabs.js      — Tab labels and preview count
│   ├── categories.js      — Category list (shared with CategoryFilter)
│   └── index.js
└── hooks/
    ├── useHeroCarousel.js — Slide index + auto-advance timer
    └── index.js
```

## Dependencies
- `@/data/products` — product list for ShopBy tabs
- `@/data/blogs` — blog list for NewReads
- `@/features/products/components/ProductCard` — renders products in ShopBy
- `@/components/common/BlogCard` — renders blog previews in NewReads
- `@/features/home/constants/categories` — consumed by CategoryFilter too

## Public API
```js
import HeroCarousel from "@/features/home/components/HeroCarousel";
import ShopBy from "@/features/home/components/ShopBy";
import NewReads from "@/features/home/components/NewReads";
import { useHeroCarousel } from "@/features/home/hooks";
```

## Future Work
- Connect ShopBy tabs to real API via TanStack Query
- Add skeleton loaders for HeroCarousel and ShopBy
- Move categories constant to `features/categories/constants/`
