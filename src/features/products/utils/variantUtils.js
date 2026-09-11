/**
 * Product Variant Utilities
 * 
 * Expands products with multiple weight/pack variations into individual cards for the storefront.
 * When a product has multiple units (e.g., 100g, 250g, 500g, 1kg), each unit variation becomes
 * a distinct card with its own unit label, price, MRP, and unique ID for direct cart additions.
 */

/**
 * Expands an array of products into individual variant card items.
 * If a product has multiple `units` (length > 1), it generates a card per unit.
 * If a product has 0 or 1 unit, or is a combo, it returns the single original product card.
 *
 * @param {Array} products - List of product documents
 * @returns {Array} List of expanded product variant objects
 */
export function expandProductVariants(products = []) {
  if (!Array.isArray(products) || products.length === 0) return [];

  // Group variant items per product, separated by availability
  const availableGroups = [];
  const comingSoonGroups = [];

  for (const product of products) {
    if (!product) continue;

    let variants = [];

    // Expand if standard product with multiple units
    if (Array.isArray(product.units) && product.units.length > 1) {
      variants = product.units
        .filter((u) => u && u.unit)
        .map((unit) => ({
          ...product,
          id: `${product.id}-${unit.unit}`,
          numericId:
            product.numericId ??
            (typeof product.id === "number"
              ? product.id
              : Number(String(product.id).split("-")[0])),
          parentProductId: product.id,
          unit: unit.unit,
          price: unit.price,
          mrp: unit.mrp || unit.price,
          ...(unit.packaging ? { packaging: unit.packaging } : {}),
          ...(unit.gtin ? { gtin: unit.gtin } : {}),
        }));
    } else {
      variants = [product];
    }

    if (variants.length > 0) {
      if (product.isComingSoon) {
        comingSoonGroups.push(variants);
      } else {
        availableGroups.push(variants);
      }
    }
  }

  // Interleave round-robin helper across product groups
  const interleave = (groups) => {
    const list = [];
    let maxVariants = 0;
    for (const group of groups) {
      if (group.length > maxVariants) maxVariants = group.length;
    }

    for (let round = 0; round < maxVariants; round++) {
      for (const group of groups) {
        if (round < group.length) {
          list.push(group[round]);
        }
      }
    }
    return list;
  };

  // Place active available products first, and coming soon products last
  return [...interleave(availableGroups), ...interleave(comingSoonGroups)];
}
