/**
 * Server-authoritative pricing.
 *
 * The client NEVER tells us what something costs. We take productId/qty/unit,
 * re-read the real price from the catalog, and compute the bill here. This is
 * what stops someone editing the request and buying a ₹900 combo for ₹1.
 */
import Product from "@/server/models/Product";
import { env } from "@/server/config/env";
import { badRequest } from "@/server/utils/apiError";

/** Resolve the price for a chosen unit/variant, falling back to the base price. */
function resolveVariant(product, unit) {
  if (unit && Array.isArray(product.units)) {
    const match = product.units.find((u) => u.unit === unit);
    if (match) return { unit: match.unit, price: match.price, mrp: match.mrp ?? match.price };
  }
  return { unit: product.unit || "", price: product.price, mrp: product.mrp ?? product.price };
}

/**
 * Turn [{ productId, qty, unit }] into priced line items + a bill.
 * Throws if a product is missing, inactive, or out of stock.
 */
export async function priceItems(rawItems) {
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    throw badRequest("Your cart is empty.");
  }

  const ids = [...new Set(rawItems.map((i) => Number(i.productId)))];
  const products = await Product.find({ numericId: { $in: ids }, isActive: true }).lean();
  const byId = new Map(products.map((p) => [p.numericId, p]));

  const items = rawItems.map((raw) => {
    const product = byId.get(Number(raw.productId));
    if (!product) throw badRequest(`A product in your cart is no longer available.`);

    const qty = Math.max(1, Number(raw.qty) || 1);
    if (product.stock != null && product.stock < qty) {
      throw badRequest(`"${product.name}" only has ${product.stock} left in stock.`);
    }

    const variant = resolveVariant(product, raw.unit);

    return {
      productId: product.numericId,
      slug: product.slug,
      name: product.name,
      brand: product.brand || "Foodville",
      image: product.image,
      unit: variant.unit,
      price: variant.price,
      mrp: variant.mrp,
      qty,
    };
  });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const mrpTotal = items.reduce((sum, i) => sum + (i.mrp ?? i.price) * i.qty, 0);
  const savings = Math.max(0, mrpTotal - subtotal);
  const deliveryCharge = subtotal >= env.freeDeliveryThreshold ? 0 : env.deliveryCharge;
  const total = subtotal + deliveryCharge;

  return {
    items,
    amounts: { subtotal, savings, deliveryCharge, total },
  };
}
