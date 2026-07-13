/**
 * Product reviews.
 *
 * Rules (the same ones the big stores use):
 *  - you must be signed in to review,
 *  - one review per user per product — submitting again REPLACES yours,
 *  - "Verified Purchase" is stamped when the reviewer has a non-cancelled
 *    order containing the product,
 *  - the product's rating becomes the average of all reviews (1 decimal).
 */
import Product from "@/server/models/Product";
import Order from "@/server/models/Order";
import User from "@/server/models/User";
import { badRequest, notFound } from "@/server/utils/apiError";
import { serializeProduct } from "@/server/utils/serialize";
import { cacheClear } from "@/server/utils/cache";

export async function addReview(userId, key, { rating, comment }) {
  const numeric = Number(key);
  const product = await Product.findOne(
    Number.isInteger(numeric) && String(numeric) === String(key)
      ? { numericId: numeric, isActive: true }
      : { slug: key, isActive: true }
  );
  if (!product) throw notFound("Product not found.");

  const user = await User.findById(userId).lean();
  if (!user) throw badRequest("Please sign in to review.");

  // Public display name — never the email itself.
  const name =
    user.fullName?.trim() ||
    `${String(user.email).split("@")[0].slice(0, 2)}***`;

  const verified = !!(await Order.exists({
    user: userId,
    status: { $ne: "cancelled" },
    "items.productId": product.numericId,
  }));

  const review = {
    name,
    rating: Math.round(Number(rating)),
    comment: String(comment || "").trim(),
    date: new Date().toISOString().split("T")[0],
    userId: String(userId),
    verified,
  };

  // Replace this user's earlier review, or add a new one at the top.
  const existingIdx = product.reviews.findIndex((r) => r.userId === String(userId));
  if (existingIdx >= 0) product.reviews.splice(existingIdx, 1);
  product.reviews.unshift(review);

  // Rating = average of reviews, 1 decimal.
  const avg =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
  product.rating = Math.round(avg * 10) / 10;

  await product.save();
  cacheClear(); // product detail + lists show the fresh rating immediately

  return serializeProduct(product.toObject());
}
