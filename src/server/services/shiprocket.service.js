import { env } from "@/server/config/env";
import { AppError } from "@/server/utils/apiError";

let cachedToken = null;
let tokenExpiry = null; // timestamp when token expires

/**
 * Fetch a valid Shiprocket JWT token, reusing cached one if valid.
 */
async function getShiprocketToken() {
  const credentials = env.shiprocket;
  if (!credentials.email || !credentials.password) {
    throw new AppError(
      "Shiprocket is not configured. Set SHIPROCKET_EMAIL and SHIPROCKET_PASSWORD.",
      503,
      "SHIPROCKET_NOT_CONFIGURED"
    );
  }

  // Tokens are valid for 10 days. We refresh 1 hour before expiry.
  const now = Date.now();
  if (cachedToken && tokenExpiry && now < tokenExpiry - 3600 * 1000) {
    return cachedToken;
  }

  console.log("[Shiprocket] Fetching new authentication token...");
  try {
    const cleanPassword = String(credentials.password).replace("\\$", "$");
    const res = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: cleanPassword,
      }),
    });

    const body = await res.json();
    if (!res.ok || !body.token) {
      throw new Error(body.message || "Failed to authenticate with Shiprocket");
    }

    cachedToken = body.token;
    // Set token expiry to 9 days from now to be safe
    tokenExpiry = Date.now() + 9 * 24 * 3600 * 1000;
    return cachedToken;
  } catch (err) {
    console.error("[Shiprocket Auth Error]", err);
    throw new AppError(`Shiprocket Auth Failed: ${err.message}`, 500, "SHIPROCKET_AUTH_FAILED");
  }
}

/**
 * Make an authenticated API request to Shiprocket.
 */
async function shiprocketRequest(endpoint, options = {}) {
  const token = await getShiprocketToken();
  const url = `https://apiv2.shiprocket.in/v1/external${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new AppError(
      body.message || `Shiprocket API error: ${response.statusText}`,
      response.status,
      "SHIPROCKET_API_ERROR"
    );
  }

  return body;
}

/**
 * Cancels an order on Shiprocket.
 */
export async function cancelShiprocketOrder(shiprocketOrderId) {
  console.log(`[Shiprocket] Cancelling order ID: ${shiprocketOrderId}`);
  const res = await shiprocketRequest("/orders/cancel", {
    method: "POST",
    body: JSON.stringify({ ids: [Number(shiprocketOrderId)] }),
  });
  return res;
}

/**
 * Calculates shipping rate for a package between pickup postcode and delivery postcode.
 */
export async function getShippingRate({ deliveryPincode, weight, isCod }) {
  const pickupPincode = env.shiprocket?.pickupLocationPincode || 122098;
  const codVal = isCod ? 1 : 0;
  
  console.log(`[Shiprocket Rate] Calculating rate from ${pickupPincode} to ${deliveryPincode} (weight: ${weight}kg, cod: ${codVal})`);
  
  try {
    const url = `/courier/serviceability/?pickup_postcode=${pickupPincode}&delivery_postcode=${deliveryPincode}&weight=${weight}&cod=${codVal}`;
    const res = await shiprocketRequest(url, { method: "GET" });
    
    const couriers = res.data?.available_courier_companies;
    if (!Array.isArray(couriers) || couriers.length === 0) {
      return null;
    }
    
    // Find the cheapest serviceable courier
    let cheapestCourier = null;
    let cheapestRate = Infinity;
    for (const c of couriers) {
      const charge = Number(c.rate || c.total_charges || Infinity);
      if (charge < cheapestRate) {
        cheapestRate = charge;
        cheapestCourier = c;
      }
    }
    
    if (!cheapestCourier) return null;

    const freightCharge = Number(cheapestCourier.freight_charge || cheapestCourier.rate || 0);
    const codCharges = isCod ? Number(cheapestCourier.cod_charges || 0) : 0;
    const baseTotal = freightCharge + codCharges;
    
    const gst = Math.round(baseTotal * 0.18 * 100) / 100;
    const deliveryCharge = Math.round(baseTotal * 1.18 * 100) / 100;

    return {
      baseDeliveryCharge: Math.round(freightCharge * 100) / 100,
      codCharge: Math.round(codCharges * 100) / 100,
      gst,
      deliveryCharge
    };
  } catch (err) {
    console.error("[Shiprocket Rate Error]", err?.message || err);
    return null;
  }
}
