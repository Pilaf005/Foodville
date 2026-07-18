"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function BulkOrderForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    gstin: "",
    email: "",
    phone: "",
    productName: "",
    quantityKg: "",
    deliveryPincode: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const prefilledProduct = searchParams.get("product") || "";
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, productName: prefilledProduct }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/bulk-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit quotation request");

      setSubmittedId(data.data.inquiryId);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200">
      {submittedId ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-stone-900">Request Received!</h2>
          <p className="text-stone-600 text-sm max-w-md mx-auto">
            Your quotation request ID is <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">{submittedId}</span>.
            Our Wholesale Pricing Director will contact you within 2-4 hours with a customized commercial catalog & pricing.
          </p>
          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3D4A32] text-white font-semibold hover:bg-[#2C3624] transition">
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Request Custom B2B Quotation</h2>
            <p className="text-stone-500 text-xs sm:text-sm">Submit your commercial requirements to receive direct factory bulk pricing.</p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Rahul Sharma"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rahul@company.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Delivery Pincode *</label>
              <input
                type="text"
                required
                value={formData.deliveryPincode}
                onChange={(e) => setFormData({ ...formData, deliveryPincode: e.target.value })}
                placeholder="110001"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Company / Entity Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Sharma Foods & Spices"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Company GSTIN (For Input Tax Credit)</label>
              <input
                type="text"
                value={formData.gstin}
                onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                placeholder="07AAAAA1111A1Z1"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Product Description / Name *</label>
              <input
                type="text"
                required
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                placeholder="e.g. Turmeric Powder - Bulk Pack"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Target Quantity (in KG) *</label>
              <input
                type="number"
                required
                min="10"
                value={formData.quantityKg}
                onChange={(e) => setFormData({ ...formData, quantityKg: e.target.value })}
                placeholder="Minimum 10 kg"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Custom Packaging or Quality Specifications (Optional)</label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Need vacuum packaging / Lab test reports / Special logistics delivery instructions..."
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#3D4A32]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2C3624] via-[#3D4A32] to-[#6B7F59] text-white font-bold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            {loading ? "Requesting Quotation..." : "Submit B2B Quotation Request"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

export default function BulkOrderPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Hero */}
        <div
          className="relative rounded-3xl text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-[#6B7F59]/30 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bulk_wholesale_banner.png')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-amber-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
              </svg>
              Foodville Direct Commercial Program
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              B2B Commercial Spices, Dry Fruits & Seeds
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Wholesale distribution & private labeling. Secure direct pricing, lab-certified batches, and nationwide logistics dispatching within 24 hours.
            </p>
          </div>
        </div>

        {/* Form and info container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Suspense fallback={<div className="lg:col-span-7 bg-white rounded-3xl p-10 border shadow animate-pulse h-[500px]" />}>
            <BulkOrderForm />
          </Suspense>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2C3624] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-[#6B7F59]/30">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Direct Wholesale Hotline</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our Business Development Director for custom contract manufacturing, export proposals, or instant cargo booking.
              </p>
              <div className="pt-2 text-xs text-amber-300 space-y-1 font-mono">
                <p>📞 Call/WhatsApp: +91 9911575605</p>
                <p>📧 Email: wholesale@foodvilleindia.com</p>
                <p>📍 Location: Foodville Consumer Products Private Limited, H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
