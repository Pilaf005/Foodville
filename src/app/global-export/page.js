"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchableCountrySelect from "@/components/common/SearchableCountrySelect";

const INCOTERMS = [
  { code: "FOB", label: "FOB (Free On Board - Nhava Sheva / Mundra Port, India)" },
  { code: "CIF", label: "CIF (Cost, Insurance & Freight to your destination port)" },
  { code: "CFR", label: "CFR (Cost & Freight to your destination port)" },
  { code: "DDP", label: "DDP (Delivered Duty Paid to your warehouse address)" },
  { code: "EXW", label: "EXW (Ex-Works / Factory Pickup from India)" },
];

const EXPORT_LICENSES = [
  {
    id: "spices-board",
    code: "Spices Board CRES",
    authority: "Spices Board of India",
    ministry: "Ministry of Commerce & Industry, Govt. of India",
    title: "Certificate of Registration as Exporter of Spices",
    desc: "Authorized manufacturer & global exporter of dehydrated pure spice powders, seeds, and seasonings.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/spices_board.jpg",
    badge: "🌿",
  },
  {
    id: "apeda",
    code: "APEDA RCMC Reg.",
    authority: "APEDA India",
    ministry: "Ministry of Commerce & Industry, Govt. of India",
    title: "Agricultural & Processed Food Products Export Registration",
    desc: "Certified exporter for processed food products, botanical superfood powders, and agro commodities.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/apeda.png",
    badge: "🌾",
  },
  {
    id: "fssai-central",
    code: "FSSAI Central Lic.",
    authority: "Food Safety and Standards Authority of India",
    ministry: "Ministry of Health and Family Welfare",
    title: "Central Manufacturing & Export License",
    desc: "Strict adherence to statutory food hygiene parameters, packaging compliance, and purity protocols.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/fssai.jpg",
    badge: "🛡️",
  },
  {
    id: "iec-dgft",
    code: "DGFT IEC Code",
    authority: "Directorate General of Foreign Trade (DGFT)",
    ministry: "Department of Commerce, Govt. of India",
    title: "Import Export Code (IEC) Registration",
    desc: "Recognized international trade entity authorized for port dispatch, customs clearance, and global banking.",
    pdfUrl: "/pdf/IEC.pdf",
    hasPdf: true,
    logoUrl: "/images/certifications/iec.jpg",
    badge: "🏛️",
  },
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    authority: "International Quality Standards",
    ministry: "Quality Management System (QMS)",
    title: "ISO 9001:2015 Quality Management Certified",
    desc: "Standardized quality control protocols, farm-to-dispatch traceability, and audited processing consistency.",
    pdfUrl: "/pdf/ISO 9001 2015 Certification.pdf",
    hasPdf: true,
    logoUrl: "/iso.jpg",
    badge: "🔬",
  },
  {
    id: "us-fda",
    code: "US FDA Compliant",
    authority: "United States FDA",
    ministry: "Food Safety Modernization Act (FSMA)",
    title: "US FDA Food Facility Compliance",
    desc: "Compliant production facility meeting US import requirements and international labeling standards.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/fda.jpg",
    badge: "🇺🇸",
  },
  {
    id: "haccp-gmp",
    code: "HACCP & GMP",
    authority: "Codex Alimentarius Benchmark",
    ministry: "Good Manufacturing & Hygiene Practice",
    title: "Hazard Analysis Critical Control Point (HACCP)",
    desc: "Comprehensive bio-chemical contamination prevention, clean-room processing, and automated packing.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/haccp.svg",
    badge: "🧼",
  },
  {
    id: "halal-kosher",
    code: "Halal & Kosher Ready",
    authority: "International Dietary Standards",
    ministry: "100% Pure Plant-Based & Vegan Facility",
    title: "Halal & Kosher Production Line Compliance",
    desc: "Dedicated 100% pure vegetarian, plant-based processing facility with zero cross-contamination.",
    pdfUrl: null,
    hasPdf: false,
    logoUrl: "/images/certifications/halal.svg",
    badge: "🌙",
  },
];

function GlobalExportForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    destinationPort: "",
    email: "",
    phone: "",
    productName: "",
    quantity: "",
    incoterms: "FOB",
    customPackaging: false,
    message: "",
    website: "",      // Honeypot field (must stay empty)
    b_confirm: "",    // Honeypot field (must stay empty)
  });

  const [formLoadedAt, setFormLoadedAt] = useState(Date.now());
  const [productsList, setProductsList] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch only active main products (exclude combos, bulk, and coming soon products)
  useEffect(() => {
    async function fetchActiveProducts() {
      try {
        const res = await fetch("/api/products?limit=150");
        const json = await res.json();
        const items = json?.data?.items || json?.data || json?.items || [];
        if (Array.isArray(items) && items.length > 0) {
          const mainActiveProducts = items.filter((p) => {
            if (!p) return false;
            // 1. Must be active
            if (p.isActive === false) return false;
            // 2. Must not be coming soon
            if (p.isComingSoon === true) return false;
            if (p.tags && Array.isArray(p.tags) && p.tags.some(t => String(t).toLowerCase().includes("coming"))) return false;
            // 3. Must not be a combo
            if (p.category === "combos" || p.category === "combo") return false;
            if (Array.isArray(p.comboIncludes) && p.comboIncludes.length > 0) return false;
            if (String(p.name || "").toLowerCase().includes("combo")) return false;
            // 4. Must not be bulk category or bulk product
            if (p.category === "bulk") return false;
            if (String(p.name || "").toLowerCase().includes("(bulk)") || String(p.name || "").toLowerCase().startsWith("bulk ")) return false;
            return true;
          });
          setProductsList(mainActiveProducts.length > 0 ? mainActiveProducts : EXPORT_PRODUCTS);
        } else {
          setProductsList(EXPORT_PRODUCTS);
        }
      } catch (err) {
        console.error("Failed to fetch active products:", err);
        setProductsList(EXPORT_PRODUCTS);
      } finally {
        setLoadingProducts(false);
      }
    }
    fetchActiveProducts();
  }, []);

  useEffect(() => {
    const prefilledProduct = searchParams.get("product") || searchParams.get("productName") || "";
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productName: prefilledProduct,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!formData.productName) {
      setErrorMsg("Please select a product of interest from the dropdown.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        productInterest: [formData.productName],
        _t: formLoadedAt,
      };

      const res = await fetch("/api/export-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit export quotation request.");

      setSubmittedId(data.data?.inquiryId || data.inquiryId || "EXP-CONFIRMED");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200" id="inquiry-form">
      {submittedId ? (
        <div className="text-center py-12 space-y-5">
          <div className="w-20 h-20 bg-[#F0F4EC] text-[#56684A] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-[#F0F4EC] text-[#425235] font-mono text-xs font-bold rounded-full border border-[#6B7F59]/30">
              Inquiry Reference: {submittedId}
            </span>
            <h3 className="text-2xl font-black text-ink">Export Request Received!</h3>
            <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
              Thank you for contacting Foodville Global Trade Division. Our international export director will prepare your official Proforma &amp; CIF/FOB quote within 24 business hours.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-600 max-w-md mx-auto text-left space-y-1.5">
            <p className="font-bold text-ink">⚡ What happens next?</p>
            <p>1. Technical COA &amp; Specification sheets emailed to you.</p>
            <p>2. Customized quotation based on your destination port and Incoterm.</p>
            <p>3. Express sample dispatch via DHL / FedEx available upon request.</p>
          </div>

          <button
            onClick={() => {
              setSubmittedId(null);
              setFormLoadedAt(Date.now());
              setFormData({
                fullName: "",
                companyName: "",
                country: "",
                destinationPort: "",
                email: "",
                phone: "",
                productName: "",
                quantity: "",
                incoterms: "FOB",
                customPackaging: false,
                message: "",
                website: "",
                b_confirm: "",
              });
            }}
            className="inline-block px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-ink font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Submit Another Export Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Anti-Bot Honeypot Trap - Invisible to humans, filled by automated spambots */}
          <div className="hidden sr-only opacity-0 pointer-events-none absolute -left-[9999px]" aria-hidden="true" tabIndex={-1}>
            <label htmlFor="website">Website Address</label>
            <input
              id="website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
            <label htmlFor="b_confirm">Confirm Verification</label>
            <input
              id="b_confirm"
              type="text"
              name="b_confirm"
              tabIndex={-1}
              autoComplete="off"
              value={formData.b_confirm}
              onChange={(e) => setFormData({ ...formData, b_confirm: e.target.value })}
            />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#56684A] uppercase tracking-widest block mb-1">
              Direct Manufacturer Pricing
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
              Request International Proforma Quotation
            </h3>
            <p className="text-xs text-muted mt-1">
              Fill out the trade details below. We cater to overseas importers, food manufacturers, spice packers, and global retail distributors.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Contact Person Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Company / Business Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Global Foods LLC"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Destination Country *</label>
              <SearchableCountrySelect
                required
                value={formData.country}
                onChange={(countryName) => setFormData({ ...formData, country: countryName })}
                placeholder="Search & select destination country..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Destination Port / Airport</label>
              <input
                type="text"
                placeholder="e.g. Port of Los Angeles / Jebel Ali"
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Corporate Email *</label>
              <input
                type="email"
                required
                placeholder="purchasing@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Phone / WhatsApp with Country Code *</label>
              <input
                type="tel"
                required
                placeholder="+1 555-0199 or +971 50-0000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>
          </div>

          {/* Same Row: Active Product Dropdown & Required Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Select Product *</label>
              <select
                required
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition cursor-pointer"
              >
                <option value="">
                  {loadingProducts ? "Loading active products..." : "-- Select Active Product --"}
                </option>
                {productsList.map((prod) => (
                  <option key={prod.id || prod._id || prod.slug || prod.name} value={prod.name}>
                    {prod.name}
                  </option>
                ))}
                <option value="Other / Custom Specification">Other / Custom Formulation / Specification</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-ink">Estimated Required Quantity *</label>
              <input
                type="text"
                required
                placeholder="e.g. 500 kg, 2 MT, 20ft FCL"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-ink">Preferred Incoterm *</label>
            <select
              value={formData.incoterms}
              onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition cursor-pointer"
            >
              {INCOTERMS.map((term) => (
                <option key={term.code} value={term.code}>
                  {term.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-[#F0F4EC]/70 rounded-xl border border-[#6B7F59]/20">
            <input
              type="checkbox"
              id="customPackaging"
              checked={formData.customPackaging}
              onChange={(e) => setFormData({ ...formData, customPackaging: e.target.checked })}
              className="w-4 h-4 rounded text-[#6B7F59] focus:ring-[#6B7F59] border-stone-300 cursor-pointer"
            />
            <label htmlFor="customPackaging" className="text-xs font-semibold text-[#1E2519] cursor-pointer">
              I require Custom Private Labeling / OEM Retail Packaging for our brand.
            </label>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-ink">Special Specifications / Trade Notes</label>
            <textarea
              rows={3}
              placeholder="e.g. Mesh size requirements, moisture levels, target delivery date, lab testing requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#6B7F59] hover:bg-[#56684A] disabled:opacity-50 text-white font-black text-sm rounded-2xl shadow-lg transition-all active:scale-[0.99] cursor-pointer"
          >
            {loading ? "Submitting Export Inquiry..." : "Submit Export Quotation Request →"}
          </button>
          
          <p className="text-[11px] text-center text-muted">
            🔒 Your commercial data is strictly confidential. Foodville never shares customer specifications.
          </p>
        </form>
      )}
    </div>
  );
}

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const hasPdf = cert.hasPdf && cert.pdfUrl;
  const encodedUrl = hasPdf ? encodeURI(cert.pdfUrl) : null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl h-[88vh] bg-white rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-scale-in">
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-stone-200 bg-stone-50/90">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-24 sm:w-28 flex items-center justify-start shrink-0">
              {cert.logoUrl ? (
                <img
                  src={cert.logoUrl}
                  alt={cert.title}
                  className="max-h-9 max-w-full object-contain object-left rounded-sm"
                />
              ) : (
                <span className="text-2xl">{cert.badge}</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-ink truncate">
                  {cert.title}
                </h3>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#F0F4EC] text-[#425235] border border-[#6B7F59]/30 shrink-0 hidden sm:inline-block">
                  {cert.code}
                </span>
              </div>
              <p className="text-[11px] text-muted truncate">
                {cert.authority} — {cert.ministry}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {hasPdf ? (
              <>
                <a
                  href={encodedUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 font-bold text-xs border border-stone-300 transition shadow-xs cursor-pointer"
                  title="Download PDF"
                >
                  <svg className="w-3.5 h-3.5 text-stone-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>

                <a
                  href={encodedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#6B7F59] hover:bg-[#56684A] text-white font-bold text-xs shadow transition cursor-pointer"
                  title="Open in new tab"
                >
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span className="hidden sm:inline">New Tab</span>
                </a>
              </>
            ) : (
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl hidden sm:inline-flex items-center gap-1.5">
                <span>🔒</span> Available on Request
              </span>
            )}

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-stone-100 p-2 sm:p-4 flex flex-col relative overflow-hidden">
          {hasPdf ? (
            <object
              data={encodedUrl}
              type="application/pdf"
              className="w-full h-full rounded-2xl bg-white border border-stone-200/80 shadow-inner"
            >
              <iframe
                src={`${encodedUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title={cert.title}
                className="w-full h-full rounded-2xl bg-white border border-stone-200/80 shadow-inner"
              >
                <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4 bg-white rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#F0F4EC] text-[#56684A] flex items-center justify-center mx-auto text-2xl font-bold">
                    📄
                  </div>
                  <div className="space-y-1 max-w-md">
                    <h4 className="text-base font-bold text-ink">Official Certificate PDF</h4>
                    <p className="text-xs text-muted">
                      Click below to view or download the complete document.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={encodedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#6B7F59] hover:bg-[#56684A] text-white font-bold text-xs rounded-xl shadow transition"
                    >
                      Open Certificate in New Tab ↗
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-6 sm:p-12 text-center bg-white rounded-2xl border border-stone-200 shadow-xs space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-[#F0F4EC] text-[#56684A] flex items-center justify-center mx-auto text-4xl shadow-sm border border-[#6B7F59]/20">
                {cert.badge || "📄"}
              </div>

              <div className="space-y-2 max-w-lg">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-mono text-xs font-bold border border-amber-200">
                  Document Reference: {cert.code}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-ink">
                  Document Available on Request
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Full verified regulatory records, lab test reports (COA), and certificate copies for <strong>{cert.title}</strong> ({cert.authority}) are dispatched with commercial export consignments or provided upon buyer verification.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/919911575605?text=Hello%20Foodville%20Trade%20Desk%2C%20I%20would%20like%20to%20request%20verified%20documents%20for%20${encodeURIComponent(cert.title)}%20(${encodeURIComponent(cert.code)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>💬</span> Request via WhatsApp Trade Desk
                </a>
                <a
                  href="#inquiry-form"
                  onClick={onClose}
                  className="px-5 py-3 bg-[#56684A] hover:bg-[#45543B] text-white font-bold text-xs rounded-xl shadow transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>📝</span> Request with Quotation Form →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="shrink-0 px-6 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-600">
          <span className="flex items-center gap-1.5">
            <span className="text-[#56684A] font-bold">✓ Verified Statutory Record</span>
            <span className="hidden md:inline text-stone-400">• Foodville Consumer Products Private Limited</span>
          </span>
          <span className="text-muted">
            Certified physical copies dispatched with export consignment
          </span>
        </div>
      </div>
    </div>
  );
}

const EXPORT_FAQS = [
  {
    id: "payment",
    category: "Payment & Terms",
    q: "What are your standard international payment terms and accepted currencies?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>We provide flexible payment structures tailored for verified international importers:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li><strong>Telegraphic Transfer (T/T):</strong> 30% advance deposit upon Proforma Invoice confirmation, 70% balance upon presentation of scanned Bill of Lading (B/L) copy.</li>
          <li><strong>Letter of Credit (L/C):</strong> 100% Irrevocable Confirmed Letter of Credit at sight from tier-1 international banks for full container loads (FCL).</li>
          <li><strong>Accepted Currencies:</strong> We invoice and settle in <strong>USD ($)</strong>, <strong>EUR (€)</strong>, <strong>GBP (£)</strong>, and <strong>AED (د.إ)</strong>.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "incoterms",
    category: "Payment & Terms",
    q: "Which Incoterms do you support for ocean and air shipments?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>We support all standard ICC Incoterms 2020 to fit your logistical preferences:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="text-ink block font-bold">FOB (Free On Board)</strong>
            <span>Loaded onto vessel at Nhava Sheva (JNPT) or Mundra Port.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="text-ink block font-bold">CIF / CFR (Cost, Insurance, Freight)</strong>
            <span>Delivered to your designated international seaport or airport.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="text-ink block font-bold">DDP (Delivered Duty Paid)</strong>
            <span>Door-to-door delivery with customs clearance and import duties handled.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="text-ink block font-bold">EXW (Ex-Works)</strong>
            <span>Direct pickup from our certified manufacturing facility in India.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ports",
    category: "Shipping & Logistics",
    q: "Which departure sea ports and international air cargo hubs do you use?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>Our strategic manufacturing location provides fast transit connections to India&apos;s largest deep-sea export terminals:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li><strong>Ocean Cargo (FCL &amp; LCL):</strong> Primary dispatch via <strong>Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva, Mumbai)</strong> and <strong>Mundra Port (Gujarat)</strong>. Typical feeder container transit to main port is under 48 hours.</li>
          <li><strong>Air Freight:</strong> Direct departure via <strong>Indira Gandhi International Airport (DEL, Delhi)</strong> and <strong>Chhatrapati Shivaji Maharaj International Airport (BOM, Mumbai)</strong> for urgent or high-value shipments.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "samples",
    category: "Quality & Testing",
    q: "Can you provide complimentary laboratory testing samples before placing an order?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>Yes! We actively encourage overseas buyers to conduct sensory evaluation and lab testing:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li>We dispatch <strong>100g to 250g sealed sample packs</strong> with product Certificate of Analysis (COA).</li>
          <li>Samples are sent via express air courier (<strong>DHL Express / FedEx Priority</strong>) with tracking provided within 48 hours.</li>
          <li><strong>Sample Policy:</strong> Product samples are complimentary for verified corporate buyers. The courier freight cost is fully credited back against your first commercial export invoice.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "documents",
    category: "Shipping & Logistics",
    q: "What statutory export documents accompany each commercial consignment?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>To guarantee zero-delay customs clearance at your destination port, our documentation team provides:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Commercial Invoice &amp; Detailed Packing List</span>
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Certificate of Origin (Chamber of Commerce)</span>
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Phytosanitary Clearance Certificate</span>
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Product Lab Test Report (NABL accredited COA)</span>
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Fumigation &amp; ISPM-15 Wooden Pallet Cert</span>
          <span className="flex items-center gap-1.5 p-2 bg-stone-50 rounded-lg border border-stone-200">✓ Clean On-Board Ocean Bill of Lading (B/L)</span>
        </div>
      </div>
    ),
  },
  {
    id: "oem",
    category: "Packaging & OEM",
    q: "Do you offer OEM, Private Labeling, and custom retail packaging?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>Yes! Over 60% of our export volume is manufactured under private labeling for international supermarket chains and specialty brands:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li><strong>Retail Formats:</strong> Stand-up pouches with zip lock (100g, 250g, 500g, 1kg), glass spice grinders, PET jars, composite canisters.</li>
          <li><strong>Bulk Packaging:</strong> 25kg / 50kg multi-wall Kraft paper bags with inner food-grade poly liner, and HDPE woven sacks.</li>
          <li><strong>Regulatory Labeling:</strong> Multi-language print, customized Barcodes (EAN-13, UPC-A), and compliance with FDA Nutrition Facts, EU food law, or GCC GSO 9 regulations.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "moq",
    category: "Orders & MOQ",
    q: "What is the Minimum Order Quantity (MOQ) and can we consolidate multiple items?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>We offer flexible order volumes to support both growing distributors and high-volume importers:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li><strong>LCL Palletized Shipments:</strong> Starting from <strong>500 kg to 1 Metric Tonne (MT)</strong>.</li>
          <li><strong>20ft FCL Container:</strong> Approx. 10 to 14 Metric Tonnes (depending on product bulk density).</li>
          <li><strong>40ft High Cube Container:</strong> Approx. 22 to 26 Metric Tonnes.</li>
          <li><strong>Mixed Container Consolidation:</strong> You can combine multiple spice powders, whole seeds, and dry fruits in a single container with itemized pallet segregation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "quality",
    category: "Quality & Testing",
    q: "How do you ensure zero pesticide residues, low moisture, and international purity standards?",
    a: (
      <div className="space-y-2 text-stone-600">
        <p>Foodville operates under strict Quality Management Systems certified to <strong>ISO 9001:2015</strong>, <strong>APEDA</strong>, <strong>Spices Board of India</strong>, and <strong>US-FDA</strong> standards:</p>
        <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
          <li><strong>Cold Stone-Grinding:</strong> Retains volatile essential oils and natural bioactive compounds (e.g. up to 7%+ curcumin in turmeric) without heat degradation.</li>
          <li><strong>Dehydration &amp; Moisture Control:</strong> Maintained strictly below 8-10% to prevent microbial growth and ensure 18-24 months ambient shelf life.</li>
          <li><strong>Third-Party Lab Verification:</strong> Every product undergoes comprehensive laboratory testing for Salmonella, E. coli, heavy metals (Lead, Cadmium, Arsenic), and pesticide multi-residue screening (MRL compliant).</li>
        </ul>
      </div>
    ),
  },
];

function ExportFaqSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = ["All", "Payment & Terms", "Shipping & Logistics", "Quality & Testing", "Packaging & OEM", "Orders & MOQ"];

  const filteredFaqs = selectedCategory === "All"
    ? EXPORT_FAQS
    : EXPORT_FAQS.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
          International Export &amp; Trade FAQ
        </h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          Detailed guidance on international shipping ports, Incoterms, payment terms, regulatory documentation, and custom private labeling.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 pb-2 sm:pb-0 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === "All" ? EXPORT_FAQS.length : EXPORT_FAQS.filter((f) => f.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenFaqIndex(0);
              }}
              className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#56684A] text-white shadow-sm"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-stone-200/80 text-stone-600"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#6B7F59]/50 bg-[#F0F4EC]/30 shadow-xs border-l-4 border-l-[#56684A]"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-ink hover:bg-stone-50/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="leading-snug">{faq.q}</span>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="hidden md:inline-block text-[10px] font-semibold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
                    {faq.category}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-[#56684A] text-white" : "bg-stone-100 text-stone-600"}`}>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-stone-600 leading-relaxed border-t border-[#6B7F59]/10 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions? Banner */}
      <div className="rounded-3xl bg-[#56684A] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#6B7F59]/40">
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D3E0C8]">
            <span>💬</span> 24/7 International Trade Support Desk
          </div>
          <h4 className="text-base sm:text-lg font-black text-white">
            Have a custom commodity requirement or target CIF port?
          </h4>
          <p className="text-xs text-stone-200 max-w-xl leading-relaxed">
            Our trade directors are available on WhatsApp and email to provide instant specifications, sample dispatch, and proforma invoices.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href="https://wa.me/919911575605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md hover:bg-[#20ba5a] transition cursor-pointer"
          >
            <span>💬</span> WhatsApp Trade Desk
          </a>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#56684A] font-bold text-xs shadow-md hover:bg-stone-100 transition cursor-pointer"
          >
            <span>📄</span> Request Proforma Quote →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function GlobalExportPage() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="sm:-mx-12 overflow-x-hidden">
      <div className="relative w-full max-w-full mx-auto px-2 sm:px-4 space-y-8 sm:space-y-12 pb-10">
        <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
        
        {/* Header Hero — exact same height and width as Homepage Hero Banner */}
        <div
          className="w-full min-h-[340px] sm:h-[380px] relative rounded-lg sm:rounded-3xl text-white p-6 sm:p-10 overflow-hidden shadow-md border border-[#6B7F59]/30 bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: "url('/images/global_export_banner.jpg')" }}
        >
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-900/40 pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6B7F59]/20 backdrop-blur-md border border-[#BAC8AB]/30 text-xs font-bold text-[#D3E0C8]">
              <span>🌐</span> Worldwide B2B Export &amp; Bulk Supply
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Premium Pure Spices &amp; Powders Shipped Worldwide
            </h1>
            <p className="text-stone-300 text-xs sm:text-base leading-relaxed max-w-2xl">
              Foodville Consumer Products Private Limited is India&apos;s trusted manufacturer and exporter of 100% natural, dehydrated spice powders, herbal wellness powders, organic seeds, and dry fruits. Supplying food manufacturers, spice packers, and retail brands across 50+ countries.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#inquiry-form"
                className="px-6 py-2.5 bg-[#6B7F59] hover:bg-[#56684A] text-white font-bold text-sm rounded-2xl shadow-lg transition-all"
              >
                Request FOB / CIF Quote ↓
              </a>
              <a
                href="#export-certifications"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-2xl border border-white/20 transition flex items-center gap-1.5"
              >
                <span>📜</span> View Licenses &amp; Certifications
              </a>
            </div>
          </div>
        </div>

        {/* Global Credentials & Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#export-certifications" className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-center space-y-2 hover:border-[#6B7F59] transition block group">
            <span className="text-2xl block">🏅</span>
            <h4 className="font-bold text-sm text-ink group-hover:text-[#56684A] transition">Spices Board &amp; APEDA</h4>
            <p className="text-[11px] text-muted">Registered Indian Government export compliance</p>
          </a>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-center space-y-2">
            <span className="text-2xl block">🚢</span>
            <h4 className="font-bold text-sm text-ink">FCL &amp; LCL Sea Freight</h4>
            <p className="text-[11px] text-muted">Direct loading from Nhava Sheva &amp; Mundra</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-center space-y-2">
            <span className="text-2xl block">📑</span>
            <h4 className="font-bold text-sm text-ink">Complete Export Papers</h4>
            <p className="text-[11px] text-muted">Phytosanitary, Certificate of Origin, COA</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-center space-y-2">
            <span className="text-2xl block">📦</span>
            <h4 className="font-bold text-sm text-ink">OEM / Private Label</h4>
            <p className="text-[11px] text-muted">Custom retail pouch &amp; 25kg bulk packing</p>
          </div>
        </div>

        {/* Main Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-4">
              <h3 className="text-lg font-bold text-ink">Why Global Importers Choose Foodville</h3>
              
              <div className="space-y-3.5 text-xs text-stone-600">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#F0F4EC] text-[#56684A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-ink block">100% Pure Farm-Sourced Raw Material</strong>
                    No starch, no artificial colors, zero preservatives. Ultra-low moisture dehydration ensures 12-24 month shelf stability.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#F0F4EC] text-[#56684A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-ink block">Standardized Product Lab Testing (COA)</strong>
                    All products undergo rigorous laboratory testing for microbiology (Salmonella, E. coli), pesticide residues, heavy metals, and moisture.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#F0F4EC] text-[#56684A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-ink block">Multi-Currency &amp; Incoterm Flexibility</strong>
                    Trade in USD, EUR, GBP, or AED. Supported terms include FOB India, CIF destination port, CFR, and DDP warehouse delivery.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#F0F4EC] text-[#56684A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-ink block">Express Sample Dispatch</strong>
                    Air-courier samples (DHL / FedEx) dispatched within 48 hours for laboratory verification and sensory evaluation.
                  </div>
                </div>
              </div>
            </div>

            {/* Export Packaging Specs Box */}
            <div className="bg-[#56684A] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-[#6B7F59]/40 shadow-sm">
              <h4 className="font-bold text-base text-[#F0F4EC]">Export Packaging Options</h4>
              <ul className="text-xs space-y-2 text-stone-100">
                <li className="flex items-center gap-2">
                  <span className="text-[#D3E0C8] font-bold">•</span>
                  <span><strong>25 kg / 50 kg</strong> Multi-wall Kraft Paper Bags with Inner Food-Grade Poly Liner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D3E0C8] font-bold">•</span>
                  <span><strong>25 kg</strong> HDPE Woven Sacks with Moisture Barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D3E0C8] font-bold">•</span>
                  <span><strong>Corrugated Master Cartons</strong> on Fumigated ISPM-15 Wooden Pallets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#D3E0C8] font-bold">•</span>
                  <span><strong>OEM / Private Label:</strong> 100g, 250g, 500g Standup Zipper Pouches</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form Column */}
          <Suspense fallback={<div className="lg:col-span-7 bg-white rounded-3xl p-10 text-center text-muted">Loading export form...</div>}>
            <GlobalExportForm />
          </Suspense>
        </div>

        {/* Export Licenses & Regulatory Accreditations Section */}
        <div className="space-y-6 pt-4" id="export-certifications">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#56684A] uppercase tracking-widest">
              Statutory Compliance &amp; Global Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink">
              Government Registrations &amp; Export Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Foodville Consumer Products Private Limited operates with statutory clearances from Indian export boards and international food safety authorities. Click to inspect official certificates.
            </p>
          </div>

          <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 gap-4 snap-x snap-mandatory sm:snap-none -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 scrollbar-none">
            {EXPORT_LICENSES.map((lic) => (
              <div
                key={lic.id}
                className="w-[82vw] max-w-[310px] sm:w-auto shrink-0 sm:shrink snap-start bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:border-[#6B7F59] hover:shadow-md transition flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="h-12 w-32 flex items-center justify-start">
                      {lic.logoUrl ? (
                        <img
                          src={lic.logoUrl}
                          alt={lic.title}
                          className="max-h-11 max-w-[125px] object-contain object-left rounded-sm"
                        />
                      ) : (
                        <span className="text-2xl">{lic.badge}</span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#F0F4EC] text-[#425235] border border-[#6B7F59]/30 shrink-0">
                      {lic.code}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-sm text-ink group-hover:text-[#56684A] transition leading-snug">
                      {lic.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#56684A] mt-0.5">
                      {lic.authority}
                    </p>
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {lic.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setActiveCert(lic)}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-stone-50 hover:bg-[#6B7F59] hover:text-white text-stone-700 font-bold text-xs border border-stone-200 hover:border-[#6B7F59] transition shadow-xs cursor-pointer group/btn"
                  >
                    <svg className="w-3.5 h-3.5 text-stone-500 group-hover/btn:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span>{lic.hasPdf ? "View Certificate (PDF) ↗" : "View Compliance Details ↗"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Export Shipping Documentation Assurance */}
          <div className="bg-[#56684A] text-white rounded-3xl p-6 sm:p-8 border border-[#6B7F59]/40 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D3E0C8]">
                  <span>📑</span> Complete Commercial Shipping Paperwork
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Mandatory Documentation Dispatched with Every Export Consignment
                </h3>
                <p className="text-xs text-stone-200 max-w-2xl leading-relaxed">
                  We guarantee zero-delay customs clearance at your destination port by providing a complete, verified set of trade and inspection documents.
                </p>
              </div>

              <a
                href="#inquiry-form"
                className="shrink-0 px-5 py-2.5 bg-[#6B7F59] hover:bg-[#425235] text-white font-bold text-xs rounded-xl shadow transition"
              >
                Request Sample Documentation →
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-black/15 rounded-xl border border-white/15 text-xs">
                <strong className="text-[#D3E0C8] block font-bold mb-1">1. Certificate of Origin</strong>
                <span className="text-stone-200 text-[11px]">Chamber of Commerce verified for preferential customs tariff.</span>
              </div>
              <div className="p-3 bg-black/15 rounded-xl border border-white/15 text-xs">
                <strong className="text-[#D3E0C8] block font-bold mb-1">2. Product Lab Test Report (COA)</strong>
                <span className="text-stone-200 text-[11px]">Microbiological, heavy metals, pesticide &amp; moisture analysis.</span>
              </div>
              <div className="p-3 bg-black/15 rounded-xl border border-white/15 text-xs">
                <strong className="text-[#D3E0C8] block font-bold mb-1">3. Phytosanitary Clearance</strong>
                <span className="text-stone-200 text-[11px]">Indian Quarantine &amp; Plant Protection Directorate certified.</span>
              </div>
              <div className="p-3 bg-black/15 rounded-xl border border-white/15 text-xs">
                <strong className="text-[#D3E0C8] block font-bold mb-1">4. Fumigation (ISPM-15)</strong>
                <span className="text-stone-200 text-[11px]">Pest-free treated container and pallet fumigation certificate.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export FAQ Section */}
        <ExportFaqSection />

      </div>
    </div>
  );
}
