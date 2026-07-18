const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const OLD_URI = "mongodb+srv://youresbuddies:fmcS8QLnxt85ZBDh@cluster1.lwkedfx.mongodb.net/foodville";
const NEW_URI = "mongodb+srv://foodville:8cjgGytHwqbaWE2K@cluster0.etxiogd.mongodb.net/foodville";

async function migrate() {
  console.log("Connecting to Source...");
  const sourceClient = await MongoClient.connect(OLD_URI);
  const sourceDb = sourceClient.db("foodville");

  console.log("Connecting to Target...");
  const targetClient = await MongoClient.connect(NEW_URI);
  const targetDb = targetClient.db("foodville");

  const name = "counters";
  console.log(`Processing collection: "${name}"`);

  const sourceCol = sourceDb.collection(name);
  const docs = await sourceCol.find({}).toArray();
  console.log(`Found ${docs.length} documents in source.`);

  const targetCol = targetDb.collection(name);
  console.log(`Wiping target collection "${name}"...`);
  await targetCol.deleteMany({});

  if (docs.length > 0) {
    console.log(`Inserting ${docs.length} documents into target...`);
    const insertResult = await targetCol.insertMany(docs, { ordered: false });
    console.log(`Inserted ${insertResult.insertedCount} documents.`);
  }

  console.log("Counters migration completed successfully!");
  await sourceClient.close();
  await targetClient.close();
}

migrate().catch(console.error);
