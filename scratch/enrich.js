const fs = require('fs');
const path = require('path');

// 1. Read existing products.js
const productsJsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
let jsContent = fs.readFileSync(productsJsPath, 'utf8');

// 2. Convert ESM to CommonJS temporarily
let cjsContent = jsContent
  .replace(/export const categories =/g, 'module.exports.categories =')
  .replace(/export const products =/g, 'module.exports.products =');

const tempPath = path.join(__dirname, 'temp_products.cjs');
fs.writeFileSync(tempPath, cjsContent, 'utf8');

// 3. Require the temporary file
const { categories, products } = require('./temp_products.cjs');

// 4. Load Excel products
const excelProductsPath = path.join(__dirname, 'all_excel_products.json');
const excelProducts = JSON.parse(fs.readFileSync(excelProductsPath, 'utf8'));

console.log(`Total products in products.js: ${products.length}`);
console.log(`Total unique products in Excel: ${Object.keys(excelProducts).length}`);

// Clean up temp file
if (fs.existsSync(tempPath)) {
  fs.unlinkSync(tempPath);
}

// 5. Test matching
const matched = [];
const unmatchedExcel = [];
const unmatchedJs = [];

const excelKeysLower = Object.keys(excelProducts).reduce((acc, key) => {
  acc[key.toLowerCase().trim()] = { originalKey: key, variants: excelProducts[key] };
  return acc;
}, {});

for (const p of products) {
  const nameLower = p.name.toLowerCase().trim();
  if (excelKeysLower[nameLower]) {
    matched.push({ p, excel: excelKeysLower[nameLower] });
  } else {
    unmatchedJs.push(p.name);
  }
}

for (const key of Object.keys(excelProducts)) {
  const keyLower = key.toLowerCase().trim();
  const found = products.some(p => p.name.toLowerCase().trim() === keyLower);
  if (!found) {
    unmatchedExcel.push(key);
  }
}

console.log(`Matched: ${matched.length} products`);
console.log(`Unmatched JS products (first 10):`, unmatchedJs.slice(0, 10));
console.log(`Unmatched Excel products:`, unmatchedExcel);
