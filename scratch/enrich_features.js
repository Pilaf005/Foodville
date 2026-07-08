const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\mukul sharma\\Project\\Online Mart\\src\\data\\products.js';

// We will read the file and dynamically extract the categories and products,
// then enrich them with highlights and units arrays, and write back.
const fileContent = fs.readFileSync(filePath, 'utf8');

// Let's parse the products by extracting the JSON array from products.js
// Or we can just evaluate the products list by importing it or running it in a safe vm context.
// Let's write a script that parses the products array using a regular expression or simple evaluation.
// An easier way is to read the file, locate "export const products = [", parse everything until the helper functions,
// but since the file is valid JS we can run a simple regex match to get the products string.
// Let's read the products array, modify it, and write it back.

// Let's extract the products using a safe function evaluation in node
const vm = require('vm');
const sandbox = { module: {}, exports: {} };
// Replace exports with standard commonjs exports so we can evaluate it
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

// Let's enrich the products
const enrichedProducts = originalProducts.map((p) => {
  // 1. highlights
  const form = p.category === "powders" || p.tags.includes("powder") ? "Powder" : "Whole";
  const ingredients = p.name.includes("Powder") ? `Pure Dried ${p.name.replace(" Powder", "")}` : `Organic ${p.name}`;
  
  const highlights = {
    shelfLife: p.category === "dryfruits" ? "12 Months" : "9 Months",
    storage: "Store in a cool, dry place in an airtight container.",
    origin: "India",
    form: form,
    ingredients: ingredients,
    netWeight: p.unit,
    foodType: "Vegetarian / Vegan",
    manufacturedBy: "Online Mart Pvt. Ltd., Organic Farm Lands, India"
  };

  // 2. units array
  let unitOptions = [];
  const baseWeightStr = p.unit.toLowerCase();
  const basePrice = p.price;
  const baseMrp = p.mrp;

  if (baseWeightStr.includes("g")) {
    const val = parseInt(baseWeightStr);
    if (val === 50) {
      unitOptions = [
        { unit: "50g", price: basePrice, mrp: baseMrp },
        { unit: "100g", price: Math.round(basePrice * 1.8), mrp: Math.round(baseMrp * 1.8) },
        { unit: "250g", price: Math.round(basePrice * 4.0), mrp: Math.round(baseMrp * 4.0) }
      ];
    } else if (val === 100) {
      unitOptions = [
        { unit: "100g", price: basePrice, mrp: baseMrp },
        { unit: "250g", price: Math.round(basePrice * 2.3), mrp: Math.round(baseMrp * 2.3) },
        { unit: "500g", price: Math.round(basePrice * 4.2), mrp: Math.round(baseMrp * 4.2) },
        { unit: "1kg", price: Math.round(basePrice * 8.0), mrp: Math.round(baseMrp * 8.0) }
      ];
    } else if (val === 150) {
      unitOptions = [
        { unit: "150g", price: basePrice, mrp: baseMrp },
        { unit: "250g", price: Math.round(basePrice * 1.6), mrp: Math.round(baseMrp * 1.6) },
        { unit: "500g", price: Math.round(basePrice * 3.0), mrp: Math.round(baseMrp * 3.0) },
        { unit: "1kg", price: Math.round(basePrice * 5.6), mrp: Math.round(baseMrp * 5.6) }
      ];
    } else if (val === 200) {
      unitOptions = [
        { unit: "200g", price: basePrice, mrp: baseMrp },
        { unit: "500g", price: Math.round(basePrice * 2.3), mrp: Math.round(baseMrp * 2.3) },
        { unit: "1kg", price: Math.round(basePrice * 4.2), mrp: Math.round(baseMrp * 4.2) }
      ];
    } else if (val === 250) {
      unitOptions = [
        { unit: "250g", price: basePrice, mrp: baseMrp },
        { unit: "500g", price: Math.round(basePrice * 1.8), mrp: Math.round(baseMrp * 1.8) },
        { unit: "1kg", price: Math.round(basePrice * 3.4), mrp: Math.round(baseMrp * 3.4) },
        { unit: "2kg", price: Math.round(basePrice * 6.5), mrp: Math.round(baseMrp * 6.5) }
      ];
    } else {
      // Fallback
      unitOptions = [
        { unit: p.unit, price: basePrice, mrp: baseMrp },
        { unit: "500g", price: Math.round(basePrice * 2.0), mrp: Math.round(baseMrp * 2.0) }
      ];
    }
  } else {
    // Already in kg or other unit
    unitOptions = [
      { unit: p.unit, price: basePrice, mrp: baseMrp },
      { unit: "2kg", price: Math.round(basePrice * 1.9), mrp: Math.round(baseMrp * 1.9) }
    ];
  }

  return {
    ...p,
    highlights,
    units: unitOptions
  };
});

// Re-write the file template with enriched products
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
console.log("SUCCESSFULLY ENRICHED WITH DYNAMIC UNITS AND HIGHLIGHTS");
