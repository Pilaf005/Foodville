const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const MONGODB_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";

async function clearOrders() {
  console.log("Connecting to MongoDB Atlas...");
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("foodville");
  console.log("Connected!");

  // 1. Clear orders
  console.log("Wiping 'orders' collection...");
  const ordersResult = await db.collection("orders").deleteMany({});
  console.log(`Deleted ${ordersResult.deletedCount} orders.`);

  // 2. Clear payments
  console.log("Wiping 'payments' collection...");
  const paymentsResult = await db.collection("payments").deleteMany({});
  console.log(`Deleted ${paymentsResult.deletedCount} payments.`);

  // 3. Reset order counter
  console.log("Resetting order counter sequence in 'counters'...");
  await db.collection("counters").updateOne(
    { _id: "order" },
    { $set: { seq: 0 } },
    { upsert: true }
  );
  console.log("Order counter reset to 0 (next order will be FV100001).");

  await client.close();
  console.log("Database clean completed successfully!");
}

clearOrders().catch(console.error);
