const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const MONGODB_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";

async function run() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("foodville");

  const users = await db.collection("users").find({ email: "hasanarman1624@gmail.com" }).toArray();
  console.log("Users with email 'hasanarman1624@gmail.com' in database:", users);

  await client.close();
}

run();
