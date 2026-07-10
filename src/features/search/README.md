# Search Feature

## Purpose
Search auto-suggestions and suggestions formatting.
*Note: The primary search bar is located inside the navbar component in `layout/navbar/features/search`.*

## Structure
```
features/search/
├── components/ — SearchResultsGrid to be built here if search results page is customized
├── constants/  — Search tabs and result configurations
├── hooks/      — useSearchQuery hook
├── services/   — Search-specific API endpoints
├── types/      — Search suggestion types
└── utils/      — Matching filters, suggestion bolding helpers
```

## Dependencies
- `@/layout/navbar/features/search/SearchBar` — Primary user interface for search query input
- `@/layout/navbar/features/search/SearchSuggestions` — Suggestions dropdown panel

## Future Work
1. Extract search auto-suggestion logic from navbar into this feature folder
2. Create standalone `/search` page if advanced filters are required
