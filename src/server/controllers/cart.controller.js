/**
 * Cart. Stored per-user as {productId, qty, unit} only; prices are always
 * recomputed from the catalog so the bill can't be tampered with client-side.
 */
import Cart from "@/server/models/Cart";
import { priceItems } from "@/server/services/pricing.service";
import { env } from "@/server/config/env";

async function getOrCreate(userId) {
  return (
    (await Cart.findOne({ user: userId })) ||
    (await Cart.create({ user: userId, items: [] }))
  );
}

/** Cart with fresh prices + the bill. Empty carts return a zeroed bill. */
export async function getCart(userId) {
  const cart = await getOrCreate(userId);
  if (!cart.items.length) {
    return {
      items: [],
      amounts: { subtotal: 0, savings: 0, deliveryCharge: 0, total: 0 },
      freeDeliveryThreshold: env.freeDeliveryThreshold,
    };
  }

  const priced = await priceItems(cart.items);
  return { ...priced, freeDeliveryThreshold: env.freeDeliveryThreshold };
}

export async function addToCart(userId, { productId, qty = 1, unit = "" }) {
  const cart = await getOrCreate(userId);
  const existing = cart.items.find(
    (i) => i.productId === Number(productId) && (i.unit || "") === (unit || "")
  );

  if (existing) existing.qty += Number(qty) || 1;
  else cart.items.push({ productId: Number(productId), qty: Number(qty) || 1, unit });

  await cart.save();
  return getCart(userId);
}

export async function updateCartItem(userId, productId, { qty, unit = "" }) {
  const cart = await getOrCreate(userId);
  const n = Number(qty);

  if (n <= 0) {
    cart.items = cart.items.filter(
      (i) => !(i.productId === Number(productId) && (i.unit || "") === (unit || ""))
    );
  } else {
    const item = cart.items.find(
      (i) => i.productId === Number(productId) && (i.unit || "") === (unit || "")
    );
    if (item) {
      item.qty = n;
    }
  }

  await cart.save();
  return getCart(userId);
}

export async function removeFromCart(userId, productId) {
  const cart = await getOrCreate(userId);
  cart.items = cart.items.filter((i) => i.productId !== Number(productId));
  await cart.save();
  return getCart(userId);
}

export async function clearCart(userId) {
  await Cart.updateOne({ user: userId }, { $set: { items: [] } });
  return getCart(userId);
}

/**
 * Replace the whole server cart with the client's current view. Called right
 * before checkout so the order always matches EXACTLY what the customer sees
 * on screen — even if an earlier add-to-cart request silently failed. Prices
 * are still recomputed server-side; only ids/quantities come from the client.
 */
export async function replaceCart(userId, rawItems = []) {
  const items = (Array.isArray(rawItems) ? rawItems : [])
    .map((i) => ({
      productId: Number(i.productId ?? i.id),
      qty: Math.max(1, Math.min(99, Number(i.qty) || 1)),
      unit: String(i.unit || ""),
    }))
    .filter((i) => Number.isFinite(i.productId) && i.productId > 0)
    .slice(0, 100);

  await Cart.updateOne({ user: userId }, { $set: { items } }, { upsert: true });
  return getCart(userId);
}

/**
 * Merge a guest's localStorage cart into their account at login.
 * Quantities add up; the same product+unit isn't duplicated.
 */
export async function mergeGuestCart(userId, guestItems = []) {
  if (!Array.isArray(guestItems) || !guestItems.length) return getCart(userId);

  const cart = await getOrCreate(userId);

  for (const raw of guestItems) {
    const productId = Number(raw.productId ?? raw.id);
    if (!productId) continue;
    const unit = raw.unit || "";
    const qty = Math.max(1, Number(raw.qty) || 1);

    const existing = cart.items.find((i) => i.productId === productId && (i.unit || "") === unit);
    if (existing) existing.qty += qty;
    else cart.items.push({ productId, qty, unit });
  }

  await cart.save();
  return getCart(userId);
}
