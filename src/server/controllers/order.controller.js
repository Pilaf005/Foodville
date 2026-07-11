/**
 * Orders.
 *
 * An order is always built from the user's SERVER cart and priced server-side.
 * COD orders are confirmed immediately; Razorpay orders stay `pending` until a
 * verified signature (or webhook) proves payment.
 */
import Order from "@/server/models/Order";
import Cart from "@/server/models/Cart";
import Address from "@/server/models/Address";
import Product from "@/server/models/Product";
import { nextSequence } from "@/server/models/Counter";
import { priceItems } from "@/server/services/pricing.service";
import { badRequest, notFound } from "@/server/utils/apiError";

export function serializeOrder(o) {
  if (!o) return null;
  return {
    id: String(o._id),
    orderId: o.orderId,
    items: o.items,
    amounts: o.amounts,
    address: o.address,
    paymentMethod: o.paymentMethod,
    paymentStatus: o.paymentStatus,
    status: o.status,
    timeline: o.timeline,
    placedAt: o.placedAt,
    razorpayOrderId: o.razorpay?.orderId,
  };
}

async function generateOrderId() {
  const seq = await nextSequence("order");
  return `FV${String(100000 + seq)}`;
}

/**
 * Create an order from the signed-in user's cart.
 * @param {string} userId
 * @param {{ addressId?: string, address?: object, paymentMethod: "cod"|"razorpay" }} input
 */
export async function createOrder(userId, { addressId, address, paymentMethod }) {
  const cart = await Cart.findOne({ user: userId });
  if (!cart || !cart.items.length) throw badRequest("Your cart is empty.");

  // Resolve the delivery address (saved one, or an inline one from checkout).
  let snapshot = address;
  if (addressId) {
    const saved = await Address.findOne({ _id: addressId, user: userId }).lean();
    if (!saved) throw notFound("Delivery address not found.");
    snapshot = saved;
  }
  if (!snapshot || !snapshot.city || !snapshot.receiverName || !snapshot.phone || !snapshot.pincode) {
    throw badRequest("A complete delivery address (name, phone, PIN code, city) is required.");
  }

  // Prices come from the catalog — never from the client.
  const { items, amounts } = await priceItems(cart.items);

  const orderId = await generateOrderId();
  const isCod = paymentMethod === "cod";

  const order = await Order.create({
    orderId,
    user: userId,
    items,
    amounts,
    address: {
      label: snapshot.label,
      receiverName: snapshot.receiverName,
      phone: snapshot.phone,
      houseFlat: snapshot.houseFlat,
      area: snapshot.area,
      landmark: snapshot.landmark,
      city: snapshot.city,
      state: snapshot.state,
      pincode: snapshot.pincode,
    },
    paymentMethod,
    paymentStatus: "pending",
    status: isCod ? "confirmed" : "pending",
    timeline: isCod
      ? [{ status: "confirmed", at: new Date(), note: "Order placed (Cash on Delivery)" }]
      : [{ status: "pending", at: new Date(), note: "Awaiting payment" }],
  });

  // COD is final at placement: empty the cart and decrement stock now.
  if (isCod) {
    await finaliseOrder(order);
  }

  return serializeOrder(order.toObject());
}

/** Called once an order is genuinely confirmed (COD placed, or payment verified). */
export async function finaliseOrder(order) {
  // Remove only the ORDERED items — if the customer abandoned a payment,
  // shopped some more, then finished paying the old order, their newer cart
  // additions must survive.
  await Cart.updateOne(
    { user: order.user },
    { $pull: { items: { productId: { $in: order.items.map((i) => i.productId) } } } }
  );

  await Promise.all(
    order.items.map((item) =>
      Product.updateOne({ numericId: item.productId }, { $inc: { stock: -item.qty } })
    )
  );
}

export async function listOrders(userId) {
  const docs = await Order.find({ user: userId }).sort({ placedAt: -1 }).lean();
  return docs.map(serializeOrder);
}

export async function getOrder(userId, orderId) {
  const doc = await Order.findOne({ orderId, user: userId }).lean();
  if (!doc) throw notFound("Order not found.");
  return serializeOrder(doc);
}
