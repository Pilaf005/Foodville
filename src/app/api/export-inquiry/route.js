import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import GlobalExportInquiry from "@/server/models/GlobalExportInquiry";
import Sequence from "@/server/models/Sequence";

export const runtime = "nodejs";

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
    country,
    destinationPort,
    email,
    phone,
    productInterest,
    quantity,
    incoterms,
    customPackaging,
    message,
    website,     // Honeypot field 1
    b_confirm,   // Honeypot field 2
    _t           // Form render timestamp
  } = body;

  // 1. Anti-Bot Honeypot Trap
  if (website || b_confirm) {
    console.warn("[Anti-Bot Shield] Global export bot submission rejected via Honeypot trap.");
    return ok({ success: true, message: "Export quotation request received successfully." });
  }

  // 2. Submission Timing Trap (Fast bot submission detection)
  if (_t && typeof _t === "number") {
    const elapsed = Date.now() - _t;
    if (elapsed < 1200) {
      console.warn(`[Anti-Bot Shield] Bot rejected due to sub-second submission speed (${elapsed}ms).`);
      return ok({ success: true, message: "Export quotation request received successfully." });
    }
  }

  // 3. Mandatory Fields Check
  if (!fullName || !companyName || !country || !email || !phone || !quantity) {
    throw badRequest("Please fill in all required fields (Full Name, Company Name, Country, Email, Phone, and Quantity).");
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!EMAIL_REGEX.test(cleanEmail)) {
    throw badRequest("Please enter a valid email address.");
  }

  const cleanPhone = String(phone).trim();
  if (cleanPhone.length < 7) {
    throw badRequest("Please enter a valid international phone number with country code.");
  }

  const nextVal = await getNextSequence("export_inquiry");
  const inquiryId = `EXP${100000 + nextVal}`;

  const productsList = Array.isArray(productInterest)
    ? productInterest
    : productInterest
    ? [String(productInterest).trim()]
    : [];

  const doc = await GlobalExportInquiry.create({
    inquiryId,
    fullName: String(fullName).trim(),
    companyName: String(companyName).trim(),
    country: String(country).trim(),
    destinationPort: String(destinationPort || "").trim(),
    email: cleanEmail,
    phone: cleanPhone,
    productInterest: productsList,
    quantity: String(quantity).trim(),
    incoterms: incoterms || "FOB",
    customPackaging: !!customPackaging,
    message: String(message || "").trim(),
    status: "pending",
  });

  return ok({
    success: true,
    inquiryId: doc.inquiryId,
    message: "Global export quotation inquiry submitted successfully! Our international trade desk will contact you within 24 business hours.",
  });
});
