# Navbar

The `Navbar` is a sticky, responsive navigation bar supporting desktop and mobile layouts. It handles location selection, product search with live suggestions and typewriter animation, wishlist/cart badges, and profile access.

---

## Folder Structure

```
src/layout/navbar/
├── Navbar.jsx              — Composition only. Manages location/toast state.
├── index.js                — Public barrel export
├── README.md               — This file
│
├── logo/
│   ├── Logo.jsx            — Brand logo with smooth-scroll home link
│   └── index.js
│
├── navigation/
│   ├── DesktopNavigation.jsx — Desktop layout: Logo + Location + Search + Actions
│   ├── MobileNavigation.jsx  — Mobile layout: Logo + Location + Actions + Search row
│   ├── NavigationLinks.jsx   — Navigation links (currently unused, reserved for future nav items)
│   ├── NavbarActions.jsx     — Composes WishlistButton, CartButton, ProfileButton
│   ├── config/
│   │   ├── navigationLinks.js — NAVIGATION_LINKS array (currently empty)
│   │   └── index.js
│   └── index.js
│
├── search/
│   ├── SearchBar.jsx         — Search container: coordinates input, suggestions, hooks
│   ├── SearchInput.jsx       — Controlled text input with typewriter placeholder
│   ├── SearchSuggestions.jsx — Dropdown list of matching product suggestions
│   ├── hooks/
│   │   ├── useNavbarSearch.js — Query state, outside-click detection, router navigation
│   │   ├── useTypewriter.js   — Animated typewriter effect for placeholder text
│   │   └── index.js
│   ├── utils/
│   │   ├── searchHelpers.js   — getMatchingProducts() filters products by query
│   │   └── index.js
│   ├── constants/
│   │   ├── searchSuggestions.js — SEARCH_SUGGESTIONS string array
│   │   └── index.js
│   └── index.js
│
├── location/
│   ├── LocationSelector.jsx  — Location trigger button with address display
│   └── index.js
│
├── actions/
│   ├── CartButton.jsx        — Cart icon link with count badge
│   ├── WishlistButton.jsx    — Wishlist icon link with count badge
│   ├── ProfileButton.jsx     — Profile icon (placeholder)
│   ├── ActionBadge.jsx       — Shared absolute-positioned count badge
│   └── index.js
│
└── mobile/
    ├── MobileDrawer.jsx      — Mobile drawer (placeholder for future slide-out menu)
    └── index.js
```

---

## Public Exports

```js
import { Navbar } from "@/layout/navbar";
import { Logo } from "@/layout/navbar/logo";
import { DesktopNavigation, MobileNavigation } from "@/layout/navbar/navigation";
import { SearchBar } from "@/layout/navbar/search";
import { LocationSelector } from "@/layout/navbar/location";
import { CartButton, WishlistButton, ProfileButton, ActionBadge } from "@/layout/navbar/actions";
```

---

## Dependencies

| Dependency | Purpose |
|---|---|
| `@/context/CartContext` | Cart item count |
| `@/context/WishlistContext` | Wishlist item count |
| `@/data/products` | Product search matching |
| `@/features/checkout/components/location/LocationModal` | Location picker modal |
| `next/navigation` (useRouter, usePathname) | Client-side routing |

---

## Future Improvements

- Populate `NavigationLinks.jsx` with actual nav routes when category pages are available.
- Implement `MobileDrawer.jsx` as a slide-out navigation panel for mobile users.
- Populate `ProfileButton.jsx` once authentication is integrated.
- Replace `NAVIGATION_LINKS = []` in `config/navigationLinks.js` with real route definitions.
