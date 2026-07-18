const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const MONGODB_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";
const email = "armanhasan4021@gmail.com";

async function check() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("foodville");

  const user = await db.collection("users").findOne({ email });
  console.log("User:", user);

  if (user) {
    const addresses = await db.collection("addresses").find({ user: user._id }).toArray();
    console.log(`Addresses for User ID ${user._id}:`, addresses);
  } else {
    console.log("No user found with email:", email);
  }

  const allAddresses = await db.collection("addresses").find({}).toArray();
  console.log("All Addresses in Database:", allAddresses);

  await client.close();
}

check();
