# Checkout Feature

## Purpose
Payment method selection modal, delivery address management, location picker, and all checkout sub-components.

## Structure
```
features/checkout/
├── components/
│   ├── PaymentModal.jsx          — Data-driven payment method selector modal
│   ├── index.js
│   └── location/
│       ├── LocationModal.jsx     — Full-screen address picker with Leaflet map
│       ├── AddAddressForm.jsx    — Form to add a new delivery address
│       ├── ReviewDeliveryPin.jsx — Map pin confirmation step
│       └── index.js
└── services/
    └── payment.service.js        — API stubs for payment initiation/verification
```

## Dependencies
- `@/components/ui/Modal` — reusable accessible modal shell
- `@/components/ui/icons/LocationIcons` — SVG icon set for map UI
- Leaflet (dynamic import in LocationModal for SSR safety)

## Public API
```js
import PaymentModal from "@/features/checkout/components/PaymentModal";
import LocationModal from "@/features/checkout/components/location/LocationModal";
import AddAddressForm from "@/features/checkout/components/location/AddAddressForm";
```

## Future Work
- Wire `payment.service.js` to Razorpay/Stripe via TanStack Query mutation
- Extract `useLeafletMap` hook from `order-confirmed/page.js` into `features/checkout/hooks/`
- Add `useAddressForm` hook with Zod validation via React Hook Form
