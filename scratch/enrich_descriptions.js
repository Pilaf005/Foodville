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
const categories = sandbox.exports.categories;

// Map products to much richer details and highlights
const enrichedProducts = originalProducts.map((p) => {
  // Generate a long 3-4 sentence detailed description specific to the product
  let longDetails = "";
  if (p.category === "powders") {
    longDetails = `Our premium ${p.name} is carefully ground from the finest handpicked raw ingredients sourced directly from organic farmers across India. We use a low-temperature grinding process to ensure that all natural oils, rich aroma, and authentic color are locked into every packet. This versatile spice powder adds a deep, savory layer to your curries, soups, marinades, and daily recipes. It is completely free from artificial dyes, chemicals, MSG, or synthetic fillers, guaranteeing 100% purity and unmatched freshness in your kitchen.`;
  } else if (p.category === "seasoning") {
    longDetails = `Bring authentic restaurant-style flavors to your home cooked dishes with our premium ${p.name}. Crafted from high-grade dried herbs and select ingredients, this seasoning blend is mixed in precise proportions to deliver a balanced and flavorful touch to your pizzas, pastas, salads, and snacks. Packaged in a moisture-controlled, food-safe jar to retain its volatile oils and signature aroma, it is the perfect pantry addition for food enthusiasts who value gourmet quality and clean ingredients.`;
  } else if (p.category === "seeds") {
    longDetails = `Supercharge your daily nutrition with our premium raw ${p.name}. Loaded with essential fatty acids, protein, dietary fiber, and trace minerals like zinc and magnesium, these seeds are a powerhouse of clean energy. They are carefully cleaned, dried, and sorted to ensure that only the plumpest, highest-quality seeds reach your table. Ideal for mixing into morning smoothies, oatmeal bowls, baking healthy breads, or simply roasting for a crunchy afternoon snack.`;
  } else if (p.category === "dryfruits") {
    longDetails = `Indulge in the finest selected ${p.name}, hand-gathered and naturally dried to preserve their natural sweetness, flavor, and dense nutrient profile. Rich in healthy monounsaturated fats, antioxidants, and vitamins, these premium dry fruits are perfect for daily vitality. We pack them under clean, vacuum-sealed conditions to prevent moisture and extend shelf-life without the need for any chemical preservatives or artificial sweeteners. A perfect snack on their own or a rich garnish for desserts.`;
  } else {
    longDetails = `Our Ayurvedic ${p.name} represents the best of traditional wellness practices, prepared under strict quality standards. Sourced from high-altitude herbs and roots, this adaptogenic supplement supports overall immunity, energy levels, and stress relief. Ground into a fine, easily soluble form, it can be seamlessly blended into warm milk, tea, or water for your daily health routine. It is entirely vegetarian, organic, and ethically sourced.`;
  }

  // Generate richer highlights list
  const highlights = {
    shelfLife: p.category === "dryfruits" || p.category === "seeds" ? "12 Months from Packaging" : "9 Months from Packaging",
    storage: "Store in a cool, dark, and dry place. Transfer to an airtight glass container after opening to prevent moisture absorption.",
    origin: "100% Indian Origin",
    form: p.category === "powders" ? "Fine Ground Powder" : (p.category === "seeds" ? "Whole Dried Seeds" : "Premium Selected Grade"),
    ingredients: p.name.includes("Powder") ? `100% Pure Dehydrated ${p.name.replace(" Powder", "")}` : `Raw Organic ${p.name}`,
    netWeight: p.unit,
    foodType: "100% Vegetarian / Vegan Friendly",
    manufacturedBy: "Online Mart Foods & Spices Pvt. Ltd., Industrial Estate, Sector-4, Rajasthan, India"
  };

  return {
    ...p,
    details: longDetails,
    highlights: highlights
  };
});

// Re-write the products.js file
const fileContentTemplate = `// products.js
// 🔹 SINGLE FILE for all product data.

// ---------- 1. CATEGORIES ----------
export const categories = ${JSON.stringify(categories, null, 2)};

// ---------- 2. PRODUCTS ----------
export const products = ${JSON.stringify(enrichedProducts, null, 2)};

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
console.log("SUCCESSFULLY RICH-ENRICHED PRODUCTS");
