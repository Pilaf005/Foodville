import Wishlist from "@/server/models/Wishlist";
import Product from "@/server/models/Product";
import { serializeProducts } from "@/server/utils/serialize";

async function getOrCreate(userId) {
  return (
    (await Wishlist.findOne({ user: userId })) ||
    (await Wishlist.create({ user: userId, productIds: [] }))
  );
}

/** Full product objects, so the wishlist grid can render straight away. */
export async function getWishlist(userId) {
  const wishlist = await getOrCreate(userId);
  if (!wishlist.productIds.length) return [];

  const products = await Product.find({
    numericId: { $in: wishlist.productIds },
    isActive: true,
  }).lean();

  return serializeProducts(products);
}

export async function toggleWishlist(userId, productId) {
  const wishlist = await getOrCreate(userId);
  const id = Number(productId);

  const index = wishlist.productIds.indexOf(id);
  const added = index === -1;

  if (added) wishlist.productIds.push(id);
  else wishlist.productIds.splice(index, 1);

  await wishlist.save();
  return { added, products: await getWishlist(userId) };
}

export async function mergeGuestWishlist(userId, productIds = []) {
  if (!Array.isArray(productIds) || !productIds.length) return getWishlist(userId);
  const wishlist = await getOrCreate(userId);
  const merged = new Set([...wishlist.productIds, ...productIds.map(Number).filter(Boolean)]);
  wishlist.productIds = [...merged];
  await wishlist.save();
  return getWishlist(userId);
}
