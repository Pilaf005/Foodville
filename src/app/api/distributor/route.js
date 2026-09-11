import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import DistributorApplication from "@/server/models/DistributorApplication";
import Sequence from "@/server/models/Sequence";
import { sendDistributorApplicationNotification } from "@/server/services/email.service";

export const runtime = "nodejs";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const PINCODE_REGEX = /^[1-9]\d{5}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function getNextSequence(name) {
  const seq = await Sequence.findOneAndUpdate(
    { name },
    { $inc: { val: 1 } },
    { new: true, upsert: true }
  );
  return seq.val;
}

export const POST = withRoute(async (req) => {
  const body = await req.json();
  const {
    fullName,
    firmName,
    email,
    phone,
    city,
    state,
    pincode,
    territoryCovered,
    distributorType,
    investmentBudget,
    godownSpace,
    vehiclesCount,
    salesTeamSize,
    existingBrands,
    yearsInBusiness,
    companyGstin,
    notes,
    website,     // Honeypot field 1
    b_confirm,   // Honeypot field 2
    _t           // Timing token
  } = body;

  // 1. Anti-Bot Honeypot Trap
  if (website || b_confirm) {
    console.warn("[Anti-Bot Shield] Distributor spam bot submission rejected via Honeypot trap.");
    return ok({ success: true, message: "Distributor application submitted successfully." }); // Fake success for bots
  }

  // 2. Submission Timing Trap (Fast bot submission detection)
  if (_t && typeof _t === "number") {
    const elapsed = Date.now() - _t;
    if (elapsed < 1200) {
      console.warn(`[Anti-Bot Shield] Bot rejected due to sub-second submission speed (${elapsed}ms).`);
      return ok({ success: true, message: "Distributor application submitted successfully." });
    }
  }

  // 3. Mandatory Fields Check
  if (!fullName || !firmName || !email || !phone || !city || !state || !pincode) {
    throw badRequest("Please fill in all required fields (Name, Firm Name, Email, Phone, City, State, Pincode).");
  }

  // 4. Strict Phone Number & Pincode Regex Validation
  const rawPhone = String(phone).trim();
  if (!PHONE_REGEX.test(rawPhone)) {
    throw badRequest("Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.");
  }

  const rawPincode = String(pincode).trim();
  if (!PINCODE_REGEX.test(rawPincode)) {
    throw badRequest("Please enter a valid 6-digit Indian PIN code.");
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!EMAIL_REGEX.test(cleanEmail)) {
    throw badRequest("Please enter a valid email address.");
  }

  // 5. Sanitize Name & Bot Pattern Check
  const cleanName = String(fullName).trim();
  if (cleanName.length < 2 || cleanName.length > 60 || /[<>{}[\]\\]/.test(cleanName)) {
    throw badRequest("Please enter a valid contact person name.");
  }

  if (!cleanName.includes(" ") && /[A-Z].*[A-Z].*[A-Z]/.test(cleanName) && cleanName.length > 12) {
    console.warn("[Anti-Bot Shield] Bot single-word name pattern rejected:", cleanName);
    return ok({ success: true, message: "Distributor application submitted successfully." });
  }

  const nextVal = await getNextSequence("distributor_application");
  const applicationId = `DIST${100000 + nextVal}`;

  const doc = await DistributorApplication.create({
    applicationId,
    fullName: cleanName,
    firmName: String(firmName).trim(),
    email: cleanEmail,
    phone: rawPhone,
    city: String(city).trim(),
    state: String(state).trim(),
    pincode: rawPincode,
    territoryCovered: String(territoryCovered || "").trim(),
    distributorType: distributorType || "area_distributor",
    investmentBudget: investmentBudget || "Flexible / Commercial Terms",
    godownSpace: godownSpace || "500_1500",
    vehiclesCount: String(vehiclesCount || "1-2").trim(),
    salesTeamSize: String(salesTeamSize || "1-3").trim(),
    existingBrands: String(existingBrands || "").trim(),
    yearsInBusiness: String(yearsInBusiness || "1-3 years").trim(),
    companyGstin: String(companyGstin || "").trim().toUpperCase(),
    notes: String(notes || "").trim(),
    status: "pending",
  });

  // Trigger email notification in background
  sendDistributorApplicationNotification(doc).catch(() => {});

  return ok({
    success: true,
    applicationId: doc.applicationId,
    message: "Distributor partnership application submitted successfully! Our National Sales Director will contact you within 24 business hours.",
  });
});
