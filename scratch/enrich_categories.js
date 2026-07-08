const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\mukul sharma\\Project\\Online Mart\\src\\data\\products.js';
const fileContent = fs.readFileSync(filePath, 'utf8');

const vm = require('vm');
const sandbox = { module: {}, exports: {} };
let jsCode = fileContent
  .replace(/export const categories/g, 'const categories')
  .replace(/export const products/g, 'const products')
  .replace(/export function/g, 'function');
jsCode += '\nexports.categories = categories;\nexports.products = products;';

try {
  vm.runInNewContext(jsCode, sandbox);
} catch (e) {
  console.error("Evaluation error:", e);
  process.exit(1);
}

const originalProducts = sandbox.exports.products;
let categories = sandbox.exports.categories;

// Add 7th and 8th categories
if (!categories.some(c => c.id === 'combos')) {
  categories.push({ id: "combos", name: "Combo Packs" });
}
if (!categories.some(c => c.id === 'bulk')) {
  categories.push({ id: "bulk", name: "Bulk Products" });
}

// Check if combos already exist to avoid duplicates
const hasCombos = originalProducts.some(p => p.category === 'combos');

const combosList = [
  {
    id: 101,
    slug: "spice-powders-combo",
    name: "Spice Powders Combo (Onion, Garlic & Ginger)",
    category: "combos",
    unit: "3 Packets x 100g",
    price: 349,
    mrp: 429,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
    description: "Essential kitchen spice bundle containing Onion, Garlic, and Ginger powders.",
    details: "This kitchen starter spice pack contains our premium organic Red Onion Powder, Garlic Powder, and Ginger Powder. Sourced directly from trusted growers and ground naturally to preserve all core aromatic oils. Perfect for curries, marinades, rubs, and everyday gourmet recipes.",
    stock: 25,
    rating: 4.8,
    tags: ["spice", "combo", "powders"],
    comboIncludes: ["Red Onion Powder 100g", "Garlic Powder 100g", "Ginger Powder 100g"],
    units: [
      { unit: "3 Packets x 100g", price: 349, mrp: 429 },
      { unit: "3 Packets x 250g", price: 799, mrp: 999 }
    ],
    highlights: {
      shelfLife: "9 Months from Packaging",
      storage: "Store in a cool, dry place. Keep packets tightly sealed.",
      origin: "100% Indian Farm Sourced",
      form: "Kitchen Spices Combo Pack",
      ingredients: "Dehydrated Red Onion, Garlic, Ginger",
      netWeight: "300g Total",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Suresh K.", rating: 5, comment: "Amazing value pack! The ginger powder smells absolutely fresh.", date: "2026-06-28" }
    ]
  },
  {
    id: 102,
    slug: "superfood-seeds-combo",
    name: "Superfood Seeds Combo (Chia, Flax & Pumpkin)",
    category: "combos",
    unit: "3 Packets x 200g",
    price: 429,
    mrp: 549,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    description: "High-fiber nutrition seed blend including Chia, Flax, and Pumpkin seeds.",
    details: "A premium nutritional health package of raw Chia Seeds, Flax Seeds, and roasted Pumpkin Seeds. Loaded with high dietary fiber, omega-3 fatty acids, plant protein, and core minerals to power your morning routine. Blend into yogurts, oatmeal, smoothies, or bake into nutritious breads.",
    stock: 20,
    rating: 4.7,
    tags: ["seeds", "combo", "superfood"],
    comboIncludes: ["Chia Seeds 200g", "Flax Seeds 200g", "Pumpkin Seeds 200g"],
    units: [
      { unit: "3 Packets x 200g", price: 429, mrp: 549 },
      { unit: "3 Packets x 500g", price: 949, mrp: 1199 }
    ],
    highlights: {
      shelfLife: "12 Months from Packaging",
      storage: "Airtight containment in a cool, dry place.",
      origin: "Organic Indian Origin",
      form: "Whole Raw Seeds Bundle",
      ingredients: "Organic Chia Seeds, Raw Flax Seeds, Roasted Pumpkin Seeds",
      netWeight: "600g Total",
      foodType: "100% Vegetarian & Vegan Friendly",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Priyanka S.", rating: 5, comment: "High quality seeds, clean and crisp packaging.", date: "2026-06-25" }
    ]
  },
  {
    id: 103,
    slug: "dry-fruits-premium-combo",
    name: "Dry Fruits Premium Combo (Almonds, Cashews & Walnuts)",
    category: "combos",
    unit: "3 Packets x 250g",
    price: 949,
    mrp: 1149,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    description: "Assorted premium nuts containing whole Almonds, Cashews, and Walnuts.",
    details: "A nutritious, high-energy gourmet blend of California almonds, crunchy whole cashews, and rich walnut kernels. Loaded with trace minerals, healthy fats, and plant-based protein. The perfect choice for healthy snacks, morning brain food, or as a garnish for traditional sweet preparations.",
    stock: 30,
    rating: 4.9,
    tags: ["nuts", "combo", "dryfruits"],
    comboIncludes: ["California Almonds 250g", "Premium Cashews 250g", "Walnut Kernels 250g"],
    units: [
      { unit: "3 Packets x 250g", price: 949, mrp: 1149 },
      { unit: "3 Packets x 500g", price: 1799, mrp: 2199 }
    ],
    highlights: {
      shelfLife: "12 Months from Packaging",
      storage: "Store in a cool place or refrigerate to maintain crunchiness.",
      origin: "Premium International Sourced",
      form: "Whole Dried Nuts Combo",
      ingredients: "California Almonds, Whole Cashews, Walnut Kernels",
      netWeight: "750g Total",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Arjun M.", rating: 5, comment: "Excellent quality, particularly the walnuts. No bitter taste at all.", date: "2026-06-20" }
    ]
  },
  {
    id: 104,
    slug: "wellness-herbal-combo",
    name: "Wellness Herbal Combo (Ashwagandha, Amla & Giloy)",
    category: "combos",
    unit: "3 Packets x 100g",
    price: 549,
    mrp: 699,
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=500&q=80",
    description: "Ayurvedic immunity and stress relief herbal powder bundle.",
    details: "A traditional wellness trio comprising our pure root Ashwagandha powder, Vitamin-C rich Amla powder, and Giloy stem powder. Hand-formulated to support daily vigor, skin health, natural detoxification, and overall stress resilience. Mix into warm water or milk daily.",
    stock: 15,
    rating: 4.8,
    tags: ["wellness", "combo", "herbal"],
    comboIncludes: ["Ashwagandha Powder 100g", "Amla Powder 100g", "Giloy Powder 100g"],
    units: [
      { unit: "3 Packets x 100g", price: 549, mrp: 699 }
    ],
    highlights: {
      shelfLife: "9 Months from Packaging",
      storage: "Keep in a dark place. Close container tightly to keep moisture away.",
      origin: "Ayurvedic India Origin",
      form: "Pure Herbal Powders Trio",
      ingredients: "Organic Ashwagandha, Dehydrated Amla, Pure Giloy",
      netWeight: "300g Total",
      foodType: "100% Vegetarian Friendly",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Rajesh S.", rating: 5, comment: "Extremely pure and genuine taste. Solves all my wellness shopping in one go.", date: "2026-06-15" }
    ]
  },
  {
    id: 105,
    slug: "kitchen-starter-combo",
    name: "Kitchen Starter Combo (Turmeric, Oregano & Sesame)",
    category: "combos",
    unit: "3 Packets",
    price: 269,
    mrp: 329,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=500&q=80",
    description: "A mixed bundle containing high-curcumin Turmeric, Italian Oregano, and Sesame seeds.",
    details: "This unique starter pack combines the essential kitchen basics. Features our best-selling daily cooking Turmeric Powder, aromatic Italian Oregano seasoning, and raw nutty Sesame Seeds. Ground and packed to order to deliver the highest taste and quality in your cooking.",
    stock: 25,
    rating: 4.6,
    tags: ["mixed", "combo", "kitchen"],
    comboIncludes: ["Turmeric Powder 100g", "Oregano 50g", "Sesame Seeds 200g"],
    units: [
      { unit: "3 Packets", price: 269, mrp: 329 }
    ],
    highlights: {
      shelfLife: "9 Months from Packaging",
      storage: "Keep packets dry and away from direct sunlight.",
      origin: "100% Indian Farm Sourced",
      form: "Mixed Pantry Combo",
      ingredients: "Stone-ground Turmeric, Dried Oregano Leaves, Sesame Seeds",
      netWeight: "350g Total",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Neeta V.", rating: 4.5, comment: "Ideal for student kitchens! The mix is very handy.", date: "2026-06-10" }
    ]
  }
];

const bulkList = [
  {
    id: 201,
    slug: "turmeric-powder-1kg-bulk",
    name: "Turmeric Powder 1kg Bulk Pack",
    category: "bulk",
    unit: "1kg",
    price: 699,
    mrp: 899,
    image: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?auto=format&fit=crop&w=500&q=80",
    description: "Family savings pack of high-curcumin organic Turmeric powder.",
    details: "Our premium stone-ground Turmeric Powder is now available in a cost-effective 1kg bulk bag. Loaded with active curcumin, this organic cooking essential provides a pure taste, vibrant natural color, and health properties for your daily recipes. Saves you up to 22% compared to buying smaller packets.",
    stock: 45,
    rating: 4.7,
    tags: ["bulk", "savings", "turmeric", "powder"],
    bulkDays: 120,
    bulkBestFor: "Families, Restaurants, Monthly Stock",
    units: [
      { unit: "1kg", price: 699, mrp: 899 },
      { unit: "2kg", price: 1299, mrp: 1799 }
    ],
    highlights: {
      shelfLife: "9 Months from Packaging",
      storage: "Store in a cool, dark place. Transfer to a clean airtight jar.",
      origin: "100% Indian Origin",
      form: "High Curcumin Spice Powder",
      ingredients: "Organic Turmeric Root",
      netWeight: "1kg Bulk Pack",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Manish R.", rating: 5, comment: "Excellent bulk value. The spice is very strong and aromatic.", date: "2026-06-12" }
    ]
  },
  {
    id: 202,
    slug: "california-almonds-1kg-bulk",
    name: "California Almonds 1kg Bulk Pack",
    category: "bulk",
    unit: "1kg",
    price: 999,
    mrp: 1299,
    image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&w=500&q=80",
    description: "Premium California whole almonds in bulk bag, offering deep savings.",
    details: "Premium whole California almonds packed in a high-grade moisture-proof 1kg bulk pack. Rich in healthy monounsaturated fats, vitamin E, antioxidants, and trace minerals. An ideal choice for regular health snacking, baking, oatmeal toppings, or cooking.",
    stock: 50,
    rating: 4.8,
    tags: ["bulk", "savings", "almonds", "nuts"],
    bulkDays: 90,
    bulkBestFor: "Daily Healthy Snackers, Large Families",
    units: [
      { unit: "1kg", price: 999, mrp: 1299 },
      { unit: "2kg", price: 1899, mrp: 2599 }
    ],
    highlights: {
      shelfLife: "12 Months from Packaging",
      storage: "Keep in a cool, dry place. Seal tightly or refrigerate to preserve crunch.",
      origin: "California Imported Grade",
      form: "Whole Dried Nuts",
      ingredients: "Premium Whole Almonds",
      netWeight: "1kg Bulk Pack",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Karan J.", rating: 5, comment: "Saves a lot of money compared to weekly packs. High quality almonds.", date: "2026-06-08" }
    ]
  },
  {
    id: 203,
    slug: "organic-chia-seeds-500g-bulk",
    name: "Organic Chia Seeds 500g Bulk Pack",
    category: "bulk",
    unit: "500g",
    price: 399,
    mrp: 499,
    image: "https://i.pinimg.com/736x/7c/5d/18/7c5d18a8086fb13cbd8f233151700681.jpg",
    description: "Omega-3 rich raw chia seeds in a cost-effective 500g bulk pack.",
    details: "Organic raw black chia seeds, carefully harvested and clean-packaged in a 500g bulk bag. Rich in omega-3 acids, plant protein, dietary fiber, and healthy energy. Excellent for fitness enthusiasts, weight managers, smoothies, baking, or morning seed puddings.",
    stock: 35,
    rating: 4.7,
    tags: ["bulk", "savings", "chia", "seeds"],
    bulkDays: 100,
    bulkBestFor: "Smoothie Lovers, Keto Dieters, Fitness Enthusiasts",
    units: [
      { unit: "500g", price: 399, mrp: 499 },
      { unit: "1kg", price: 749, mrp: 999 }
    ],
    highlights: {
      shelfLife: "12 Months from Packaging",
      storage: "Store in a cool dry area. Seal packet securely.",
      origin: "Organic India Sourced",
      form: "Whole Raw Seeds",
      ingredients: "Organic Chia Seeds",
      netWeight: "500g Bulk Pack",
      foodType: "100% Vegetarian / Vegan Sourced",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Swati P.", rating: 4.5, comment: "Seeds soak up water nicely, very clean with no pebbles.", date: "2026-06-05" }
    ]
  },
  {
    id: 204,
    slug: "premium-cashews-1kg-bulk",
    name: "Premium Cashews 1kg Bulk Pack",
    category: "bulk",
    unit: "1kg",
    price: 1299,
    mrp: 1699,
    image: "https://i.pinimg.com/736x/37/d4/73/37d47378cfe8efc4f8c64aa50a832c18.jpg",
    description: "Premium white whole W240 cashews in a 1kg budget-friendly bulk pack.",
    details: "Premium whole W240 grade cashews packed in a 1kg bulk bag. Known for their sweet, buttery flavor and rich texture. Saves you money compared to purchasing smaller snack cups, making it great for baking, festive cooking, or direct daily snacking.",
    stock: 40,
    rating: 4.8,
    tags: ["bulk", "savings", "cashews", "nuts"],
    bulkDays: 90,
    bulkBestFor: "Sweet Prep, Festive Gifting, Kitchen Pantries",
    units: [
      { unit: "1kg", price: 1299, mrp: 1699 },
      { unit: "2kg", price: 2499, mrp: 3299 }
    ],
    highlights: {
      shelfLife: "12 Months from Packaging",
      storage: "Refrigerate or keep dry to preserve authentic texture.",
      origin: "100% India Sourced",
      form: "Whole Raw Cashew Nuts",
      ingredients: "Selected Cashews",
      netWeight: "1kg Bulk Pack",
      foodType: "100% Vegetarian / Vegan",
      manufacturedBy: "Online Mart Foods Pvt. Ltd., India"
    },
    reviews: [
      { name: "Tarun S.", rating: 5, comment: "Big whole nuts, no broken pieces. Absolutely value for money.", date: "2026-06-01" }
    ]
  }
];

let finalProducts = [...originalProducts];

if (!hasCombos) {
  finalProducts = [...finalProducts, ...combosList, ...bulkList];
}

// Re-write the products.js file
const fileContentTemplate = `// products.js
// 🔹 SINGLE FILE for all product data.

// ---------- 1. CATEGORIES ----------
export const categories = ${JSON.stringify(categories, null, 2)};

// ---------- 2. PRODUCTS ----------
export const products = ${JSON.stringify(finalProducts, null, 2)};

// ---------- 3. HELPER FUNCTIONS ----------
export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  );
}

export function getCategoryName(categoryId) {
  return categories.find((c) => c.id === categoryId)?.name || "Other";
}

export function getTopSellers() {
  return products.filter((p) => p.rating >= 4.5);
}
`;

fs.writeFileSync(filePath, fileContentTemplate, 'utf8');
console.log("SUCCESSFULLY UPDATED CATEGORIES AND ADDED COMBO/BULK PRODUCTS");
