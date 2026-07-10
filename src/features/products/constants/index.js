// Shared SVG fallback used when a product/blog image fails to load
export const PRODUCT_FALLBACK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23F5F5F4'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' font-weight='500' fill='%23A8A29E'>No Image</text></svg>";

export const GALLERY_FALLBACK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='400' height='400' fill='%23F5F5F4'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='18' fill='%23A8A29E'>No Image</text></svg>";

export const THUMBNAIL_FALLBACK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%23F5F5F4'/></svg>";

// Quick-info trust badges shown in ProductInfo
export const PRODUCT_TRUST_BADGES = [
  "100% Natural",
  "No Preservatives",
  "Fresh Sourced",
];

// Why shop with us section points — used in WhyShopWithUs component
export const WHY_SHOP_POINTS = [
  {
    emoji: "🚀",
    bgClass: "bg-amber-50 border-amber-200/70 text-amber-600",
    title: "Superfast Delivery",
    description: "Get your orders delivered to your doorstep in record time. Freshness guaranteed on arrival.",
  },
  {
    emoji: "🏷️",
    bgClass: "bg-emerald-50 border-emerald-200/70 text-emerald-600",
    title: "Best Prices & Offers",
    description: "Pocket-friendly direct-to-consumer farm pricing. Enjoy seasonal discounts and coupon savings.",
  },
  {
    emoji: "🌿",
    bgClass: "bg-lime-50 border-lime-200/70 text-lime-700",
    title: "100% Natural Products",
    description: "Fresh, healthy, and organic foods sourced straight from sustainable farm fields.",
  },
  {
    emoji: "🛡️",
    bgClass: "bg-blue-50 border-blue-200/70 text-blue-600",
    title: "100% Secure Payments",
    description: "Secure, encrypted transactions supporting all major UPI, Cards, Netbanking, and Wallet options.",
  },
];

// Highlight field configs for ProductHighlights component
export const DEFAULT_HIGHLIGHT_FIELDS = [
  { label: "Brand",                 key: "brand" },
  { label: "GTIN (Barcode)",        key: "gtin" },
  { label: "Net Content",           key: "netContent" },
  { label: "Packaging Type",        key: "packagingType" },
  { label: "Category",              key: "category" },
  { label: "Sub Category",          key: "subCategory" },
  { label: "Country of Origin",     key: "origin" },
  { label: "HS Code",               key: "hsCode" },
  { label: "IGST",                  key: "igst" },
  { label: "CGST",                  key: "cgst" },
  { label: "SGST",                  key: "sgst" },
  { label: "Company Name",          key: "companyName" },
  { label: "Shelf Life",            key: "shelfLife" },
  { label: "Storage Instructions",  key: "storage" },
  { label: "Product Form",          key: "form" },
  { label: "Ingredients",           key: "ingredients" },
  { label: "Food Type",             key: "foodType" },
  { label: "Manufactured By",       key: "manufacturedBy" },
];

export const COMBO_HIGHLIGHT_FIELDS = [
  { label: "Pack Type",          key: "packType",          altKey: "comboType" },
  { label: "Total Products",     key: "totalProducts",     altKey: "totalItems" },
  { label: "Recommended Size",   key: "recommendedSize",   altKey: "totalWeight" },
  { label: "Bulk Available",     key: "bulkAvailable" },
  { label: "Strategy",           key: "strategy" },
  { label: "Best For",           key: "bestFor" },
  { label: "Storage Instructions", key: "storage" },
  { label: "Food Type",          key: "foodType" },
];

// Max qty for stepper when stock is unknown
export const DEFAULT_MAX_QTY = 99;

// Product ribbon badge config keyed by shopBy value
export const PRODUCT_RIBBONS = {
  bestseller: { label: "★ Bestseller", className: "bg-amber-400" },
  trending:   { label: "↑ Trending",   className: "bg-olive" },
  newlyIn:    { label: "✦ New",        className: "bg-blue-500" },
  valueBuys:  { label: "% Value Buy",  className: "bg-terracotta" },
};
