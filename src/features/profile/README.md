# Profile Feature

## Purpose
User profile management scaffold — address book, account settings, password updates.
**Not yet implemented.** Infrastructure is in place; UI and pages are pending.

## Structure
```
features/profile/
├── components/ — ProfileForm, AddressBook to be built here
└── types/      — Profile types
```

## Dependencies (planned)
- `@/lib/api` — axios instance
- `@/store/authStore` — for current user state
- `@/components/ui/Input` — for form fields

## Future Work
1. Implement profile editing forms
2. Add address management view (CRUD address book)
3. Create `src/app/profile/page.js` to render the user account dashboard
