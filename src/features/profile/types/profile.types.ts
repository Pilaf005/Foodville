// ─── Profile Types ─────────────────────────────────────────────────────────

export type Gender = "male" | "female" | "other" | "prefer_not_to_say";
export type Language = "English" | "Hindi" | "Marathi" | "Tamil" | "Telugu" | "Bengali";
export type SpiceLevel = "mild" | "medium" | "spicy" | "extra_spicy";
export type DietaryPreference = "vegetarian" | "non_vegetarian" | "vegan" | "eggetarian";
export type AddressLabel = "Home" | "Work" | "Hotel" | "Other";
export type OrderStatus = "delivered" | "processing" | "shipped" | "cancelled" | "pending";
export type PaymentType = "upi" | "credit_card" | "debit_card" | "cod";
export type ProfileSection =
  | "personal"
  | "addresses"
  | "orders"
  | "wishlist"
  | "payments"
  | "rewards"
  | "preferences"
  | "notifications"
  | "security";

// ─── Customer Profile ───────────────────────────────────────────────────────

export interface CustomerProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: Gender;
  dateOfBirth: string;
  language: Language;
  avatarUrl: string;
  memberSince: string;
  isVerified: boolean;
}

// ─── Address ────────────────────────────────────────────────────────────────

export interface SavedAddress {
  id: string;
  label: AddressLabel;
  receiverName: string;
  phone: string;
  houseFlat: string;
  apartment: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  deliveryInstructions: string;
  isDefault: boolean;
}

// ─── Orders ────────────────────────────────────────────────────────────────

export interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

export interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  date: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
}

// ─── Wishlist ──────────────────────────────────────────────────────────────

export interface WishlistRestaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
}

// ─── Payment ──────────────────────────────────────────────────────────────

export interface SavedCard {
  id: string;
  type: "credit" | "debit";
  last4: string;
  network: "visa" | "mastercard" | "rupay";
  holderName: string;
  expiryMonth: string;
  expiryYear: string;
}

export interface UPIAccount {
  id: string;
  vpa: string;
  app: "gpay" | "phonepe" | "paytm" | "amazonpay";
}

// ─── Rewards ──────────────────────────────────────────────────────────────

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  description: string;
  expiresAt: string;
  isUsed: boolean;
}

export interface Rewards {
  points: number;
  walletBalance: number;
  referralEarnings: number;
  referralCode: string;
  tier: "bronze" | "silver" | "gold" | "platinum";
  coupons: Coupon[];
}

// ─── Preferences ──────────────────────────────────────────────────────────

export type PackagingSize = "small" | "medium" | "large" | "bulk";
export type ShoppingFrequency = "weekly" | "fortnightly" | "monthly" | "occasionally";

export interface Preferences {
  // Product category interests
  interestedCategories: string[];
  // Health & wellness goals
  healthGoals: string[];
  // Spice intensity for powders
  spiceIntensity: SpiceLevel;
  // Dietary lifestyle
  dietaryPreference: DietaryPreference;
  // Preferred packaging size
  preferredPackaging: PackagingSize;
  // Shopping frequency
  shoppingFrequency: ShoppingFrequency;
  // Language
  language: Language;
  // Whether to show only in-stock items
  inStockOnly: boolean;
  // Whether to show deals and offers first
  prioritiseOffers: boolean;
}

// ─── Notifications ────────────────────────────────────────────────────────

export interface NotificationSettings {
  orderUpdates: boolean;
  offers: boolean;
  emailNotifications: boolean;
  sms: boolean;
  pushNotifications: boolean;
  newsletter: boolean;
}
