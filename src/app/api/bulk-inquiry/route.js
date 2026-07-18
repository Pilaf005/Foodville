import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import BulkInquiry from "@/server/models/BulkInquiry";
import Sequence from "@/server/models/Sequence";
import { sendBulkInquiryNotification } from "@/server/services/email.service";

export const runtime = "nodejs";

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
  const { fullName, companyName, gstin, email, phone, productName, quantityKg, deliveryPincode, notes } = body;

  if (!fullName || !email || !phone || !productName || !quantityKg || !deliveryPincode) {
    throw badRequest("Please fill in all required fields (Name, Email, Phone, Product, Quantity, Pincode).");
  }

  const parsedQty = Number(quantityKg);
  if (isNaN(parsedQty) || parsedQty < 10) {
    throw badRequest("Minimum bulk order quantity is 10kg.");
  }

  const nextVal = await getNextSequence("bulk_inquiry");
  const inquiryId = `BQ${100000 + nextVal}`;

  const doc = await BulkInquiry.create({
    inquiryId,
    fullName,
    companyName: companyName || "",
    gstin: gstin || "",
    email,
    phone,
    productName,
    quantityKg: parsedQty,
    deliveryPincode,
    notes: notes || "",
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
