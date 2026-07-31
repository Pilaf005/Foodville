import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import BulkInquiry from "@/server/models/BulkInquiry";
import Sequence from "@/server/models/Sequence";
import { sendBulkInquiryNotification } from "@/server/services/email.service";

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
    companyName,
    gstin,
    email,
    phone,
    productName,
    quantityKg,
    deliveryPincode,
    notes,
    website,     // Honeypot field 1
    b_confirm    // Honeypot field 2
  } = body;

  // 1. Anti-Bot Honeypot Trap
  if (website || b_confirm) {
    console.warn("[Anti-Bot Shield] Bulk inquiry bot submission rejected via Honeypot trap.");
    return ok({ success: true, message: "Quotation request submitted successfully." });
  }

  // 2. Mandatory Fields Check
  if (!fullName || !email || !phone || !productName || !quantityKg || !deliveryPincode) {
    throw badRequest("Please fill in all required fields (Name, Email, Phone, Product, Quantity, Pincode).");
  }

  // 3. Strict Phone & Pincode Regex Validation (DO NOT STRIP NON-DIGITS FIRST!)
  const rawPhone = String(phone).trim();
  if (!PHONE_REGEX.test(rawPhone)) {
    throw badRequest("Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.");
  }

  const rawPincode = String(deliveryPincode).trim();
  if (!PINCODE_REGEX.test(rawPincode)) {
    throw badRequest("Please enter a valid 6-digit Indian delivery PIN code.");
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!EMAIL_REGEX.test(cleanEmail)) {
    throw badRequest("Please enter a valid email address.");
  }

  // Bot pattern check: single 12+ letter word with random uppercase (e.g. WWygeztTGHMwmrKhAnOUx)
  const cleanName = String(fullName).trim();
  if (!cleanName.includes(" ") && /[A-Z].*[A-Z].*[A-Z]/.test(cleanName) && cleanName.length > 12) {
    console.warn("[Anti-Bot Shield] Bot single-word name pattern rejected:", cleanName);
    return ok({ success: true, message: "Quotation request submitted successfully." }); // Fake success for bot
  }

  const parsedQty = Number(quantityKg);
  if (isNaN(parsedQty) || parsedQty < 10) {
    throw badRequest("Minimum bulk order quantity is 10kg.");
  }

  const nextVal = await getNextSequence("bulk_inquiry");
  const inquiryId = `BQ${100000 + nextVal}`;

  const doc = await BulkInquiry.create({
    inquiryId,
    fullName: String(fullName).trim(),
    companyName: String(companyName || "").trim(),
    gstin: String(gstin || "").trim(),
    email: cleanEmail,
    phone: rawPhone,
    productName: String(productName).trim(),
    quantityKg: parsedQty,
    deliveryPincode: rawPincode,
    notes: String(notes || "").trim(),
    status: "pending",
  });
 
  // Trigger email notification in background
  sendBulkInquiryNotification(doc).catch(() => {});
 
  return ok({
    success: true,
    inquiryId: doc.inquiryId,
    message: "B2B wholesale quotation request submitted! Our wholesale pricing director will contact you within 2-4 hours.",
  });
});
