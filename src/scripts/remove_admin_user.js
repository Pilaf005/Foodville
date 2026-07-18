const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const MONGODB_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";
const email = "hasanarman1624@gmail.com";

async function remove() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("foodville");

  const user = await db.collection("users").findOne({ email });
  if (user) {
    console.log(`Found user document for "${email}":`, user);
    console.log("Removing user doc...");
    await db.collection("users").deleteOne({ _id: user._id });

    console.log("Cleaning up associated user data...");
    await db.collection("addresses").deleteMany({ user: user._id });
    await db.collection("carts").deleteMany({ user: user._id });
    await db.collection("wishlists").deleteMany({ user: user._id });
    console.log("Cleanup finished.");
  } else {
    console.log(`No user record with email "${email}" exists.`);
  }

  await client.close();
}

remove().catch(console.error);
