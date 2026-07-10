import type {
  CustomerProfile,
  SavedAddress,
  Order,
  WishlistRestaurant,
  SavedCard,
  UPIAccount,
  Rewards,
  Preferences,
  NotificationSettings,
} from "../types/profile.types";

// ─── Customer Profile ────────────────────────────────────────────────────────

export const mockProfile: CustomerProfile = {
  id: "cust_001",
  fullName: "Arjun Sharma",
  email: "arjun.sharma@gmail.com",
  phone: "+91 98765 43210",
  gender: "male",
  dateOfBirth: "1995-04-12",
  language: "Hindi",
  avatarUrl:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  memberSince: "January 2023",
  isVerified: true,
};

// ─── Addresses ───────────────────────────────────────────────────────────────

export const mockAddresses: SavedAddress[] = [
  {
    id: "addr_001",
    label: "Home",
    receiverName: "Arjun Sharma",
    phone: "9876543210",
    houseFlat: "Flat 4B, Green Valley Apartments",
    apartment: "Sector 62",
    landmark: "Near Metro Station",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201309",
    deliveryInstructions: "Ring the bell twice",
    isDefault: true,
  },
  {
    id: "addr_002",
    label: "Work",
    receiverName: "Arjun Sharma",
    phone: "9876543210",
    houseFlat: "Tower B, 3rd Floor",
    apartment: "Cyber Hub, DLF Phase 2",
    landmark: "Opposite Starbucks",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    deliveryInstructions: "Call on arrival, reception will guide",
    isDefault: false,
  },
];

// ─── Orders ──────────────────────────────────────────────────────────────────

export const mockOrders: Order[] = [
  {
    id: "ORD8892341560",
    restaurantName: "Foodville Fresh",
    restaurantImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=70",
    date: "12 Jul 2025",
    items: [
      { name: "Kashmiri Red Chilli Powder 200g", qty: 2, price: 149 },
      { name: "Roasted Flax Seeds 500g", qty: 1, price: 199 },
    ],
    totalAmount: 497,
    status: "delivered",
  },
  {
    id: "ORD7741289034",
    restaurantName: "Foodville Fresh",
    restaurantImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=70",
    date: "28 Jun 2025",
    items: [
      { name: "Premium Cashew Nuts 250g", qty: 1, price: 349 },
      { name: "Turmeric Powder 200g", qty: 2, price: 129 },
      { name: "Sabja Seeds 200g", qty: 1, price: 149 },
    ],
    totalAmount: 756,
    status: "delivered",
  },
  {
    id: "ORD6634512901",
    restaurantName: "Foodville Fresh",
    restaurantImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=70",
    date: "15 Jun 2025",
    items: [{ name: "Combo Pack — Masala Collection", qty: 1, price: 599 }],
    totalAmount: 599,
    status: "delivered",
  },
  {
    id: "ORD5523400192",
    restaurantName: "Foodville Fresh",
    restaurantImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=70",
    date: "02 Jun 2025",
    items: [
      { name: "Organic Chia Seeds 300g", qty: 2, price: 249 },
    ],
    totalAmount: 498,
    status: "cancelled",
  },
  {
    id: "ORD4412300578",
    restaurantName: "Foodville Fresh",
    restaurantImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=70",
    date: "18 May 2025",
    items: [
      { name: "Dry Rose Petals 100g", qty: 1, price: 299 },
      { name: "Almond 500g", qty: 1, price: 649 },
    ],
    totalAmount: 988,
    status: "delivered",
  },
];

// ─── Wishlist Restaurants ─────────────────────────────────────────────────────

export const mockWishlist: WishlistRestaurant[] = [
  {
    id: "wl_001",
    name: "Foodville Fresh Store",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=70",
    rating: 4.8,
    deliveryTime: "30–45 min",
    cuisine: "Spices & Dry Fruits",
  },
  {
    id: "wl_002",
    name: "Herbal Wellness Hub",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=70",
    rating: 4.6,
    deliveryTime: "40–55 min",
    cuisine: "Wellness & Seeds",
  },
  {
    id: "wl_003",
    name: "Organic Bulk Bazaar",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=70",
    rating: 4.5,
    deliveryTime: "45–60 min",
    cuisine: "Bulk Dry Goods",
  },
  {
    id: "wl_004",
    name: "Spice Garden",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=400&q=70",
    rating: 4.7,
    deliveryTime: "35–50 min",
    cuisine: "Premium Spices",
  },
];

// ─── Saved Cards ──────────────────────────────────────────────────────────────

export const mockSavedCards: SavedCard[] = [
  {
    id: "card_001",
    type: "credit",
    last4: "4242",
    network: "visa",
    holderName: "ARJUN SHARMA",
    expiryMonth: "08",
    expiryYear: "2027",
  },
  {
    id: "card_002",
    type: "debit",
    last4: "1234",
    network: "mastercard",
    holderName: "ARJUN SHARMA",
    expiryMonth: "03",
    expiryYear: "2026",
  },
];

export const mockUPIAccounts: UPIAccount[] = [
  { id: "upi_001", vpa: "arjun@okaxis", app: "gpay" },
  { id: "upi_002", vpa: "arjun.sharma@ybl", app: "phonepe" },
];

// ─── Rewards ─────────────────────────────────────────────────────────────────

export const mockRewards: Rewards = {
  points: 2340,
  walletBalance: 180,
  referralEarnings: 450,
  referralCode: "ARJUN100",
  tier: "silver",
  coupons: [
    {
      id: "coup_001",
      code: "FRESH20",
      discount: "20% OFF",
      description: "Get 20% off on orders above ₹500",
      expiresAt: "31 Aug 2025",
      isUsed: false,
    },
    {
      id: "coup_002",
      code: "SPICE50",
      discount: "₹50 OFF",
      description: "Flat ₹50 off on spice powders",
      expiresAt: "15 Aug 2025",
      isUsed: false,
    },
    {
      id: "coup_003",
      code: "WELCOME15",
      discount: "15% OFF",
      description: "Welcome discount for new customers",
      expiresAt: "01 Jan 2024",
      isUsed: true,
    },
  ],
};

// ─── Preferences ─────────────────────────────────────────────────────────────

export const mockPreferences: Preferences = {
  interestedCategories: ["powders", "seeds", "dryfruits"],
  healthGoals: ["weight_management", "immunity_boost"],
  spiceIntensity: "medium",
  dietaryPreference: "vegetarian",
  preferredPackaging: "medium",
  shoppingFrequency: "monthly",
  language: "Hindi",
  inStockOnly: false,
  prioritiseOffers: true,
};

// ─── Notifications ────────────────────────────────────────────────────────────

export const mockNotifications: NotificationSettings = {
  orderUpdates: true,
  offers: true,
  emailNotifications: false,
  sms: true,
  pushNotifications: true,
  newsletter: false,
};
