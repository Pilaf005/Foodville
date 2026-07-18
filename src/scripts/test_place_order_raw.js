const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient, ObjectId } = require("mongodb");

const MONGODB_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";
const userId = "6a57265982a1075c08741c98";
const addressId = "6a575e8e648d7c60e5dd6da5";

async function run() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("foodville");

  console.log("Looking up address using ObjectIds:");
  const addr1 = await db.collection("addresses").findOne({
    _id: new ObjectId(addressId),
    user: new ObjectId(userId)
  });
  console.log("Result (with ObjectIds):", addr1);

  console.log("\nLooking up address using string _id and ObjectId user:");
  const addr2 = await db.collection("addresses").findOne({
    _id: addressId,
    user: new ObjectId(userId)
  });
  console.log("Result (string _id):", addr2);

  console.log("\nLooking up address using ObjectId _id and string user:");
  const addr3 = await db.collection("addresses").findOne({
    _id: new ObjectId(addressId),
    user: userId
  });
  console.log("Result (string user):", addr3);

  await client.close();
}

run();
