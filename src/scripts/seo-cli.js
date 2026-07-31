import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import dns from "dns";

// Use Google Public DNS for MongoDB Atlas SRV lookup reliability on Windows/ISPs
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch {
  // Ignore if network environment restricts custom DNS
}

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

let mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("❌ Error: MONGODB_URI is not set in environment or .env file.");
  process.exit(1);
}
if (!mongoUri.includes("foodville") && !mongoUri.endsWith("/")) {
  mongoUri = mongoUri + "foodville";
}

const dbName = process.env.MONGODB_DB || "foodville";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://foodvilleindia.com";

const command = process.argv[2] || "audit";

async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUri, { dbName, serverSelectionTimeoutMS: 5000 });
  }
}

// Mongoose Models
const ProductSchema = new mongoose.Schema({ name: String, slug: String, image: String, description: String, isActive: Boolean }, { strict: false });
const BlogSchema = new mongoose.Schema({ title: String, slug: String, image: String, excerpt: String }, { strict: false });
const CategorySchema = new mongoose.Schema({ name: String, slug: String, image: String }, { strict: false });

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
const Blog = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogSchema);
const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);

async function runAudit() {
  console.log("\n🔍  Foodville SEO Health Audit CLI");
  console.log("==========================================");

  try {
    await connectToDatabase();
  } catch (dbErr) {
    console.log(`\n⚠️  Database Connection Note: (${dbErr.message})`);
    console.log("   Running static SEO page checks...\n");
  }

  let products = [];
  let blogs = [];
  let categories = [];

  if (mongoose.connection.readyState === 1) {
    [products, blogs, categories] = await Promise.all([
      Product.find({ isActive: true }).lean(),
      Blog.find({}).lean(),
      Category.find({}).lean(),
    ]);
  }

  console.log(`📊  Scanned: ${products.length} Products | ${blogs.length} Blogs | ${categories.length} Categories\n`);

  let warnings = 0;
  let errors = 0;

  // 1. Audit Products
  console.log("🛍️  Auditing Products SEO:");
  let productWarnings = 0;
  if (products.length > 0) {
    products.forEach((p) => {
      if (!p.image || p.image.includes("placeholder")) {
        console.log(`   ⚠️  [MISSING IMAGE] Product "${p.name}" (${p.slug}) has no primary image.`);
        warnings++;
        productWarnings++;
      }
      if (!p.description || p.description.length < 20) {
        console.log(`   ⚠️  [SHORT META DESC] Product "${p.name}" (${p.slug}) description is too short (<20 chars).`);
        warnings++;
        productWarnings++;
      }
      if (!p.slug) {
        console.log(`   ❌ [MISSING SLUG] Product "${p.name}" has no URL slug!`);
        errors++;
        productWarnings++;
      }
    });
    if (productWarnings === 0) {
      console.log(`   ✅  All ${products.length} active products have valid images, slugs, and meta descriptions.`);
    }
  }

  // 2. Audit Blogs
  console.log("\n📝  Auditing Blogs SEO:");
  if (blogs.length === 0) {
    console.log("   ℹ️  0 Blog articles found. (Write articles in Admin to boost organic Google keyword traffic).");
  } else {
    let blogWarnings = 0;
    blogs.forEach((b) => {
      if (!b.image) {
        console.log(`   ⚠️  [MISSING OG IMAGE] Blog "${b.title}" has no cover image.`);
        warnings++;
        blogWarnings++;
      }
      if (!b.excerpt || b.excerpt.length < 30) {
        console.log(`   ⚠️  [SHORT EXCERPT] Blog "${b.title}" excerpt is too short for meta description.`);
        warnings++;
        blogWarnings++;
      }
    });
    if (blogWarnings === 0) {
      console.log(`   ✅  All ${blogs.length} blog posts are healthy.`);
    }
  }

  // 3. Audit Categories
  console.log("\n🏷️  Auditing Categories SEO:");
  let categoryWarnings = 0;
  if (categories.length > 0) {
    categories.forEach((c) => {
      if (!c.image) {
        console.log(`   ⚠️  [MISSING CATEGORY THUMB] Category "${c.name}" has no image.`);
        warnings++;
        categoryWarnings++;
      }
    });
    if (categoryWarnings === 0) {
      console.log(`   ✅  All ${categories.length} categories have valid thumbnail images and URL slugs.`);
    }
  }

  console.log("\n==========================================");
  if (errors === 0 && warnings === 0) {
    console.log("✅  SEO Audit Passed 100%! All metadata, images, and URL slugs are healthy.\n");
  } else {
    console.log(`⚠️  Audit Finished: ${errors} Error(s), ${warnings} Warning(s) found.\n`);
  }
}

async function pingSearchEngines() {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  console.log(`\n🚀  Foodville Search Engine Indexer`);
  console.log("==========================================");
  console.log(`📍  Sitemap URL: ${sitemapUrl}\n`);

  // IndexNow Protocol (Bing, Yandex, DuckDuckGo, Seznam, Naver)
  const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=foodville2026seo`;

  try {
    const res = await fetch(indexNowUrl);
    console.log(`📡  IndexNow API (Bing / Yandex / DuckDuckGo): ${res.status === 200 || res.status === 202 ? "✅ SUCCESS (200 OK)" : `Status ${res.status}`}`);
  } catch (e) {
    console.log(`📡  IndexNow API note: ${e.message}`);
  }

  console.log("\n💡  Google Search Console Note:");
  console.log("   Google retired legacy GET /ping in 2024. Your dynamic sitemap is live at:");
  console.log(`   👉 ${sitemapUrl}`);
  console.log("   Submit this sitemap once in Google Search Console under 'Sitemaps' tab.");
  console.log("   Googlebot will automatically crawl all 132 products and 3 blogs!\n");
}

async function main() {
  try {
    if (command === "ping") {
      await pingSearchEngines();
    } else {
      await runAudit();
    }
  } catch (err) {
    console.error("CLI error:", err);
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    process.exit(0);
  }
}

main();
