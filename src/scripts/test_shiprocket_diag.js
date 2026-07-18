const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const axios = require("axios");
require("dotenv").config({ path: "C:/Users/hasan/OneDrive/Desktop/foodville-project/Foodville-2/.env" });

const email = process.env.SHIPROCKET_EMAIL;
const password = process.env.SHIPROCKET_PASSWORD;
const pickupPincode = process.env.SHIPROCKET_PICKUP_POSTCODE || "122098";
const pickupLocation = process.env.SHIPROCKET_PICKUP_LOCATION || "Primary";

async function testShiprocket() {
  console.log(`=== SHIPROCKET DIAGNOSTIC START ===`);
  console.log(`Email: "${email}"`);
  console.log(`Pickup Pincode: "${pickupPincode}"`);
  console.log(`Pickup Location Nickname: "${pickupLocation}"`);

  if (!email || !password) {
    console.error("Missing Shiprocket credentials in .env!");
    return;
  }

  try {
    console.log("\nLogging in to Shiprocket...");
    const cleanPassword = String(password).replace("\\$", "$");
    const loginRes = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email,
      password: cleanPassword
    });

    const token = loginRes.data?.token;
    console.log("Authentication successful! Token received.");

    console.log(`\nChecking serviceability from origin (${pickupPincode}) to delivery (110001)...`);
    const servRes = await axios.get(`https://apiv2.shiprocket.in/v1/external/courier/serviceability/`, {
      params: {
        pickup_postcode: pickupPincode,
        delivery_postcode: 110001,
        weight: 0.5,
        cod: 0
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const couriers = servRes.data?.data?.available_courier_companies;
    console.log(`Serviceability Check successful! Found ${couriers ? couriers.length : 0} available couriers.`);
    if (couriers && couriers.length > 0) {
      console.log("First courier details in full:", JSON.stringify(couriers[0], null, 2));
    }
  } catch (err) {
    console.error("Shiprocket operation failed with error:");
    if (err.response) {
      console.error(`Status: ${err.response.status}`);
      console.error(err.response.data);
    } else {
      console.error(err.message);
    }
  }
  console.log(`=== SHIPROCKET DIAGNOSTIC END ===`);
}

testShiprocket();
