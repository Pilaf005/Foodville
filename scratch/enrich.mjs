import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { categories, products } from '../src/data/products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load Excel products
const excelProductsPath = path.join(__dirname, 'all_excel_products.json');
const excelProducts = JSON.parse(fs.readFileSync(excelProductsPath, 'utf8'));

// Helper for subcategory translation
function formatSubCategory(sub) {
  if (!sub) return '';
  let formatted = sub.trim();
  if (formatted === 'Dry Fruits/Seeds') return 'Dry Fruits and Seeds';
  if (formatted === 'Herbs/Spices') return 'Herbs and Spices';
  if (formatted === 'Seasonings/Preservatives') return 'Seasonings and Preservatives';
  return formatted;
}

// Helper for packaging formatting
function formatPackaging(pack) {
  if (!pack) return '';
  let formatted = pack.trim();
  formatted = formatted.replace(/\*/g, 'x');
  // Capitalize Jar or Pouch
  if (formatted.toLowerCase().startsWith('jar')) {
    formatted = 'Jar' + formatted.slice(3);
  } else if (formatted.toLowerCase().startsWith('pouch')) {
    formatted = 'Pouch' + formatted.slice(5);
  }
  return formatted;
}

// Helper for GST formatting
function formatGstPercent(val, part = 'igst') {
  const num = parseFloat(val);
  if (isNaN(num)) return '0 percent';
  if (part === 'igst') {
    return `${num} percent`;
  } else {
    // cgst / sgst (half of igst)
    return `${num / 2} percent`;
  }
}

// Name mapping: Excel name (lowercase) → products.js name (lowercase)
// For cases where the names differ between the two sources
const NAME_MAP = {
  'pizza pasta masala': 'pizza pasta seasoning',
  'basil seeds':        'basil seeds (sabja)',
};

// Create a case-insensitive map for matching (keyed by Excel name lowercase)
const excelKeysLower = Object.keys(excelProducts).reduce((acc, key) => {
  acc[key.toLowerCase().trim()] = { originalKey: key, variants: excelProducts[key] };
  return acc;
}, {});

// Build reverse map: products.js name (lowercase) → Excel name (lowercase)
const REVERSE_MAP = Object.fromEntries(
  Object.entries(NAME_MAP).map(([excelName, jsName]) => [jsName, excelName])
);

let matchedCount = 0;

const updatedProducts = products.map(p => {
  const nameLower = p.name.toLowerCase().trim();
  // Check direct match first, then check reverse map (for renamed products)
  const excelLookupKey = REVERSE_MAP[nameLower] || nameLower;
  const match = excelKeysLower[excelLookupKey];
  
  if (!match) {
    // Not a product from Excel, keep as is
    return p;
  }
  
  matchedCount++;
  const { originalKey, variants } = match;
  
  // Sort variants: 100g first, then 200g, etc.
  const sortedVariants = [...variants].sort((a, b) => {
    return parseInt(a.net_content) - parseInt(b.net_content);
  });
  
  const has100g = sortedVariants.some(v => v.net_content === '100');
  const has200g = sortedVariants.some(v => v.net_content === '200');
  
  // Base unit determination:
  // "For products that have both 100g and 200g variants set the 100g price as the base price...
  // For products with both sizes, the base size should be 100g.
  // If only 100g exists, base is 100g. If only 200g exists, base is 200g."
  const baseNet = (has100g) ? '100' : '200';
  const baseUnit = baseNet + 'g';
  
  // Find base variant
  const baseVar = sortedVariants.find(v => v.net_content === baseNet) || sortedVariants[0];
  
  const basePrice = p.price; // keep original base price
  const baseMrp = p.mrp;     // keep original base mrp
  
  // Construct units array:
  const newUnits = sortedVariants.map(v => {
    const sizeStr = v.net_content + 'g';
    let unitPrice = basePrice;
    let unitMrp = baseMrp;
    
    if (v.net_content === '200' && has100g && has200g) {
      // 200g price is approximately 1.8 times the 100g price
      unitPrice = Math.round(basePrice * 1.8);
      unitMrp = Math.round(baseMrp * 1.8);
    }
    
    return {
      unit: sizeStr,
      price: unitPrice,
      mrp: unitMrp,
      gtin: v.gtin,
      packaging: formatPackaging(v.packaging)
    };
  });
  
  // Update top-level fields
  p.brand = 'Foodville';
  p.unit = baseUnit;
  p.price = basePrice;
  p.mrp = baseMrp;
  p.gtin = baseVar.gtin;
  p.packaging = formatPackaging(baseVar.packaging);
  
  // Update highlights
  const newHighlights = {
    ...p.highlights,
    brand: 'Foodville',
    gtin: baseVar.gtin,
    netContent: baseUnit,
    packagingType: formatPackaging(baseVar.packaging),
    category: 'Food',
    subCategory: formatSubCategory(baseVar.sub_category),
    origin: 'India',
    igst: formatGstPercent(baseVar.igst, 'igst'),
    cgst: formatGstPercent(baseVar.igst, 'cgst'),
    sgst: formatGstPercent(baseVar.igst, 'sgst'),
    companyName: 'Foodville Consumer Products Private Limited',
    hsCode: baseVar.hs_code
  };
  
  p.highlights = newHighlights;
  p.units = newUnits;
  
  return p;
});

console.log(`Matched and updated ${matchedCount} out of ${products.length} products.`);

// Reconstruct products.js content
const outputJsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');

const helperFunctions = `// ---------- 3. HELPER FUNCTIONS ----------
export function getAllProducts() { return products; }

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

const newFileContent = `// products.js
// 🔹 SINGLE FILE for all product data — 128 products total.

// ---------- 1. CATEGORIES ----------
export const categories = ${JSON.stringify(categories, null, 2)};

// ---------- 2. PRODUCTS ----------
export const products = ${JSON.stringify(updatedProducts, null, 2)};

${helperFunctions}`;

fs.writeFileSync(outputJsPath, newFileContent, 'utf8');
console.log('Successfully wrote updated products.js!');
