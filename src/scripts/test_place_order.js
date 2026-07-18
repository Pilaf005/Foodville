const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
require("dotenv").config({ path: "C:/Users/hasan/OneDrive/Desktop/foodville-project/Foodville-2/.env" });

const { connectDB } = require("../server/db/mongoose");
const { createOrder } = require("../server/controllers/order.controller");
const Cart = require("../server/models/Cart").default;
const Address = require("../server/models/Address").default;

const userId = "6a57265982a1075c08741c98";
const addressId = "6a575e8e648d7c60e5dd6da5";

async function test() {
  console.log("Connecting to DB...");
  await connectDB();
  console.log("Connected!");

  // Check Cart
  const cart = await Cart.findOne({ user: userId });
  console.log("User Cart:", cart);

  if (!cart || !cart.items.length) {
    console.log("Cart is empty! Adding one item for testing...");
    await Cart.updateOne(
      { user: userId },
      { $set: { items: [{ productId: 201, qty: 1, price: 100, name: "Turmeric Powder", image: "/images/test.jpg" }] } },
      { upsert: true }
    );
    console.log("Item added to cart.");
  }

  // Check Address
  const addr = await Address.findOne({ _id: addressId, user: userId });
  console.log("Address Lookup:", addr);

  console.log("\nAttempting to place order...");
  try {
    const order = await createOrder(userId, {
      addressId,
      paymentMethod: "cod"
    });
    console.log("Order created successfully!", order);
  } catch (err) {
    console.error("Order creation failed with error:");
    console.error(err);
  }

  await mongoose.disconnect();
}

test();
