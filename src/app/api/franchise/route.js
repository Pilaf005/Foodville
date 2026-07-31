import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import FranchiseApplication from "@/server/models/FranchiseApplication";
import Sequence from "@/server/models/Sequence";
import { sendFranchiseApplicationNotification } from "@/server/services/email.service";

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
    email,
    phone,
    city,
    state,
    pincode,
    investmentBudget,
    propertyStatus,
    experience,
    companyName,
    companyGstin,
    notes,
    website,     // Honeypot field 1
    b_confirm    // Honeypot field 2
  } = body;

  // 1. Anti-Bot Honeypot Trap: Real users never fill these hidden fields
  if (website || b_confirm) {
    console.warn("[Anti-Bot Shield] Spam bot submission rejected via Honeypot trap.");
    return ok({ success: true, message: "Application submitted successfully." }); // Fake success for bots
  }

  // 2. Mandatory Fields Check
  if (!fullName || !email || !phone || !city || !state || !pincode || !investmentBudget) {
    throw badRequest("Please fill in all required fields (Name, Email, Phone, City, State, Pincode, Budget).");
  }

  // 3. Strict Phone Number & Pincode Regex Validation (DO NOT STRIP NON-DIGITS FIRST!)
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

  // 4. Sanitize Name & Check for Real Human Name Pattern
  const cleanName = String(fullName).trim();
  if (cleanName.length < 2 || cleanName.length > 60 || /[<>{}[\]\\]/.test(cleanName)) {
    throw badRequest("Please enter a valid full name.");
  }

  // Bot pattern check: single 10+ letter word with random uppercase/lowercase (e.g. WWygeztTGHMwmrKhAnOUx)
  if (!cleanName.includes(" ") && /[A-Z].*[A-Z].*[A-Z]/.test(cleanName) && cleanName.length > 12) {
    console.warn("[Anti-Bot Shield] Bot single-word name pattern rejected:", cleanName);
    return ok({ success: true, message: "Application submitted successfully." }); // Fake success for bot
  }

  const nextVal = await getNextSequence("franchise_application");
  const applicationId = `FA${100000 + nextVal}`;

  const doc = await FranchiseApplication.create({
    applicationId,
    fullName: cleanName,
    email: cleanEmail,
    phone: rawPhone,
    city: String(city).trim(),
    state: String(state).trim(),
    pincode: rawPincode,
    investmentBudget,
    propertyStatus,
    experience: String(experience || "").trim(),
    companyName: String(companyName || "").trim(),
    companyGstin: String(companyGstin || "").trim(),
    notes: String(notes || "").trim(),
    status: "pending",
  });
 
  // Trigger email notification in background
  sendFranchiseApplicationNotification(doc).catch(() => {});
 
  return ok({
    success: true,
    applicationId: doc.applicationId,
    message: "Franchise partner application submitted successfully! Our expansion director will contact you within 24 hours.",
  });
});
