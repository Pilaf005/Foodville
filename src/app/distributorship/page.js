"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DistributorshipPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    firmName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    territoryCovered: "",
    distributorType: "area_distributor",
    investmentBudget: "10L - 25L",
    godownSpace: "500_1500",
    vehiclesCount: "1-2",
    salesTeamSize: "1-3",
    existingBrands: "",
    yearsInBusiness: "1-3 years",
    companyGstin: "",
    notes: "",
    website: "",      // Honeypot field 1
    b_confirm: "",    // Honeypot field 2
  });

  const [formLoadedAt, setFormLoadedAt] = useState(Date.now());
  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const payload = {
        ...formData,
        _t: formLoadedAt,
      };

      const res = await fetch("/api/distributor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit distributor application.");

      setSubmittedId(data.data?.applicationId || data.applicationId || "DIST-RECEIVED");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:-mx-12 overflow-x-hidden">
      <div className="relative w-full max-w-full mx-auto px-3 sm:px-4 space-y-8 sm:space-y-12 pb-12">
        
        {/* Header Hero Banner */}
        <div className="w-full min-h-[340px] sm:h-[380px] relative rounded-2xl sm:rounded-3xl text-white p-6 sm:p-10 overflow-hidden shadow-lg border border-[#56684A]/30 flex flex-col justify-center bg-stone-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/distributor_network_banner.jpg"
              alt="Foodville Distributorship FMCG Network & Logistics Hub"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 95vw, 1280px"
              className="object-cover object-center"
            />
            {/* Overlay to ensure high contrast & text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/40 pointer-events-none" />
          </div>
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-amber-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
              </svg>
              Authorized FMCG Distributorship &amp; Channel Partner Program
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Partner with India&apos;s Fastest Growing Clean-Label FMCG Brand
            </h1>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl">
              Become an authorized Foodville Channel Distributor or Super Stockist. Supply 130+ ISO 9001:2015 certified pure stone-ground spices, seasonings, dry fruits, and superfoods directly from our Ghaziabad plant with attractive distributor margins, rapid inventory turnover, and protected territory rights.
            </p>
          </div>
        </div>

        {/* Market Presence Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#56684A] block">130+</span>
            <span className="text-xs font-bold text-stone-800 block mt-0.5">Certified SKUs</span>
            <span className="text-[10px] text-stone-500">5 Daily Staple Categories</span>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#56684A] block">ISO</span>
            <span className="text-xs font-bold text-stone-800 block mt-0.5">9001:2015 Plant</span>
            <span className="text-[10px] text-stone-500">FSSAI Certified Processing</span>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#56684A] block">High ROI</span>
            <span className="text-xs font-bold text-stone-800 block mt-0.5">Trade Margins</span>
            <span className="text-[10px] text-stone-500">Fast Rotation &amp; Cash Cycle</span>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200/80 p-4 text-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-black text-[#56684A] block">24,000+</span>
            <span className="text-xs font-bold text-stone-800 block mt-0.5">PIN Codes Served</span>
            <span className="text-[10px] text-stone-500">24-48h Fast Dispatch SLA</span>
          </div>
        </div>

        {/* Application Form & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="distributor-form">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200">
            {submittedId ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#F0F4EC] text-[#56684A] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-[#F0F4EC] text-[#425235] font-mono text-xs font-bold rounded-full border border-[#56684A]/30">
                    Application Ref: {submittedId}
                  </span>
                  <h2 className="text-2xl font-extrabold text-stone-900">Distributor Application Received!</h2>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for applying for Foodville FMCG Distributorship. Our National Channel Expansion Director will review your trade profile and contact you within 24 business hours.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-600 max-w-md mx-auto text-left space-y-1.5">
                  <p className="font-bold text-stone-900">⚡ What happens next?</p>
                  <p>1. Official Distributor Margin Matrix &amp; Product Catalogue sent to your email.</p>
                  <p>2. Direct telephonic review to confirm your target territory and MOQ requirements.</p>
                  <p>3. Area exclusivity agreement and opening stock dispatch scheduling.</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedId(null);
                      setFormLoadedAt(Date.now());
                      setFormData({
                        fullName: "",
                        firmName: "",
                        email: "",
                        phone: "",
                        city: "",
                        state: "",
                        pincode: "",
                        territoryCovered: "",
                        distributorType: "area_distributor",
                        investmentBudget: "Flexible",
                        godownSpace: "500_1500",
                        vehiclesCount: "1-2",
                        salesTeamSize: "1-3",
                        existingBrands: "",
                        yearsInBusiness: "1-3 years",
                        companyGstin: "",
                        notes: "",
                        website: "",
                        b_confirm: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs rounded-xl transition cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-2.5 bg-[#56684A] hover:bg-[#425235] text-white font-bold text-xs rounded-xl transition cursor-pointer"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[11px] font-bold text-[#56684A] uppercase tracking-widest block mb-1">
                    Direct Channel Partnership
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Apply for Foodville FMCG Distributorship
                  </h2>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1">
                    Fill out the distribution details below to request our wholesale rate card and partnership dossier.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Anti-Bot Decoy Honeypot */}
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

                {/* Section 1: Basic & Business Identification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Firm / Agency / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      placeholder="e.g. Sharma FMCG Distributors"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Section 2: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number (Calling &amp; WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@sharmatraders.in"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Section 3: Location & Territory */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">City / District *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jaipur"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Rajasthan"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Base PIN Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="e.g. 302001"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Target Territory / Key Areas Covered</label>
                  <input
                    type="text"
                    value={formData.territoryCovered}
                    onChange={(e) => setFormData({ ...formData, territoryCovered: e.target.value })}
                    placeholder="e.g. South Jaipur, Mansarovar, Tonk Road &amp; surrounding 25km radius"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] transition min-h-[44px]"
                  />
                </div>

                {/* Section 4: Distributorship Category */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Distributor Partnership Tier *</label>
                  <select
                    value={formData.distributorType}
                    onChange={(e) => setFormData({ ...formData, distributorType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] bg-white min-h-[44px]"
                  >
                    <option value="area_distributor">Authorized Area FMCG Distributor</option>
                    <option value="super_stockist">Super Stockist (State / Multi-District)</option>
                    <option value="wholesaler_stockist">Wholesaler / Master Stockist</option>
                    <option value="modern_trade_partner">Modern Trade &amp; Supermarket Supplier</option>
                    <option value="institutional_supplier">Institutional / HORECA Partner</option>
                  </select>
                </div>

                {/* Section 5: Warehouse & Infrastructure */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Godown / Storage Space</label>
                    <select
                      value={formData.godownSpace}
                      onChange={(e) => setFormData({ ...formData, godownSpace: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] bg-white min-h-[44px]"
                    >
                      <option value="below_500">Below 500 sq. ft.</option>
                      <option value="500_1500">500 – 1,500 sq. ft.</option>
                      <option value="1500_3000">1,500 – 3,000 sq. ft.</option>
                      <option value="3000_plus">3,000+ sq. ft.</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Delivery Vehicles (Tempos/Vans)</label>
                    <select
                      value={formData.vehiclesCount}
                      onChange={(e) => setFormData({ ...formData, vehiclesCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] bg-white min-h-[44px]"
                    >
                      <option value="None">None (Third-party logistics)</option>
                      <option value="1-2">1 - 2 Dedicated Vehicles</option>
                      <option value="3-5">3 - 5 Dedicated Vehicles</option>
                      <option value="5+">5+ Vehicles Fleet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Field Sales Team Size</label>
                    <select
                      value={formData.salesTeamSize}
                      onChange={(e) => setFormData({ ...formData, salesTeamSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] bg-white min-h-[44px]"
                    >
                      <option value="0">Self / Owner operated</option>
                      <option value="1-3">1 - 3 Field Sales Reps</option>
                      <option value="4-8">4 - 8 Field Sales Reps</option>
                      <option value="8+">8+ Large Sales Team</option>
                    </select>
                  </div>
                </div>

                {/* Section 6: Tax & Trade Background */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">GSTIN (For Invoicing &amp; Tax Credit)</label>
                    <input
                      type="text"
                      value={formData.companyGstin}
                      onChange={(e) => setFormData({ ...formData, companyGstin: e.target.value.toUpperCase() })}
                      placeholder="e.g. 08AAAAA1111A1Z1"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] uppercase min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Years in FMCG / Distribution Business</label>
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A] bg-white min-h-[44px]"
                    >
                      <option value="New to Distribution">New to Distribution Business</option>
                      <option value="1-3 years">1 - 3 Years</option>
                      <option value="3-7 years">3 - 7 Years</option>
                      <option value="7+ years">7+ Years of Experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Existing FMCG Brands Handled / Current Network (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.existingBrands}
                    onChange={(e) => setFormData({ ...formData, existingBrands: e.target.value })}
                    placeholder="List any food, beverage, or FMCG brands you currently distribute, along with your approximate retail counter reach (e.g. 300+ kirana stores)..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A]/20 focus:border-[#56684A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#56684A] hover:bg-[#425235] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
                >
                  {loading ? "Submitting Application..." : "Submit FMCG Distributorship Application"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Contact Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#56684A] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">National Trade &amp; Channel Desk</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our Business Development Directors for Super Stockist mandates, state dealership rights, or institutional trade alliances.
              </p>
              
              <div className="pt-4 border-t border-white/15 space-y-3.5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Trade Desk Call</span>
                    <a href="tel:+919911575605" className="text-white font-bold hover:text-amber-300 transition text-sm">+91 9911575605</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Distributor Proposals</span>
                    <a href="mailto:support@foodvilleindia.com" className="text-white font-bold hover:text-amber-300 transition text-sm">support@foodvilleindia.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-300 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Headquarters &amp; Central Operations</span>
                    <span className="text-white/90 font-medium leading-relaxed block text-xs">
                      Foodville Consumer Products Pvt. Ltd.<br />
                      H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Trade Advantage Pillars Grounded in Real Foodville USPs */}
        <div className="flex overflow-x-auto pb-4 pt-1 gap-3.5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-6 no-scrollbar">
          <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/80 space-y-2.5 flex flex-col justify-start h-full">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">Stone-Ground Purity USP</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Our low-temperature stone grinding retains volatile essential oils and high curcumin (up to 7%+) with zero chemical colors or fillers, giving retail counters a proven sales differentiator.
            </p>
          </div>

          <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/80 space-y-2.5 flex flex-col justify-start h-full">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">Direct Factory Supply</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Dispatched fresh from our Ghaziabad facility in nitrogen-flushed, multi-layer barrier pouches providing 12-month shelf-life stability and zero middleman margins.
            </p>
          </div>

          <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/80 space-y-2.5 flex flex-col justify-start h-full">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">Protected PIN Exclusivity</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Strict territorial radius and pincode distribution monopolies guaranteed under legal Channel Partner agreements to prevent price undercutting or counter overlap.
            </p>
          </div>

          <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/80 space-y-2.5 flex flex-col justify-start h-full">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M3 7v14M21 7v14M6 11h12M6 15h12M9 3h6v4H9z" />
              </svg>
            </div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">Trade Marketing &amp; POS</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Branded acrylic counter display units, danglers, shelf talkers, promotional trial sample sachets, and high-margin retail onboarding schemes for rapid counter penetration.
            </p>
          </div>
        </div>

        {/* 6 Real Foodville FMCG Product Categories */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-[11px] font-bold text-[#56684A] uppercase tracking-widest block">
              High-Velocity Consumer Portfolio (130+ SKUs)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Fast-Moving FMCG Categories Built for Modern &amp; General Trade
            </h2>
            <p className="text-xs text-stone-500">
              High repeat-purchase velocity across grocery kiranas, departmental stores, organic supermarkets, and institutional kitchens.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 pt-1 gap-3.5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 no-scrollbar">
            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-2xl shrink-0">🌶️</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Pure Stone-Ground Spices</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">50g / 100g / 200g / 500g Pouches</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  High-Curcumin Lakadong Turmeric, Guntur Red Chilli, Cumin, Coriander, Garlic, Red Onion, Ginger, and Garam Masala. Stone-ground under low heat.
                </p>
              </div>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl shrink-0">🌿</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Gourmet Seasonings &amp; Herbs</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">Shaker Jars &amp; Stand-up Pouches</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Peri Peri Seasoning, Pizza Oregano, Red Chilli Flakes, Italian Mixed Herbs, Chaat Masala, Kasuri Methi, and Black Pepper Seasoners.
                </p>
              </div>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl shrink-0">🌱</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Triple-Sorted Seeds &amp; Superfoods</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">100g / 250g / 500g Zip Pouches</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Raw Pumpkin Seeds, Chia Seeds, Roasted Flax Seeds, Basil (Sabja) Seeds, Sunflower Seeds, Watermelon Seeds, and 7-in-1 Daily Nutri-Seeds Mix.
                </p>
              </div>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-2xl shrink-0">🥜</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Dry Fruits &amp; Gourmet Nuts</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">Moisture-Proof Vacuum Packs</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Jumbo California Almonds, W320/W240 Cashews, Kashmiri Walnut Kernels, Afghan Black Raisins, Premium Pistachios, and Turkish Dried Figs (Anjeer).
                </p>
              </div>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center text-2xl shrink-0">🍵</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Herbal &amp; Daily Wellness</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">100g / 250g Airtight PET Jars</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Organic Moringa Leaf Powder, Ashwagandha Root Powder, Pure Amla Powder, Mulethi Powder, Giloy Powder, Spirulina, and Beetroot Superfood Powder.
                </p>
              </div>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full space-y-3 transition hover:shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center text-2xl shrink-0">📦</span>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">Commercial Sacks &amp; HoReCa</h4>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#56684A] block">5kg / 10kg / 25kg Bulk Sacks</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Factory-grade bulk packaging for restaurants, cloud kitchen chains, bakery ingredient suppliers, spice repackers, and institutional buyers.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* 4-Step Transparent Onboarding Roadmap */}
        <div className="bg-[#56684A] text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-lg border border-white/20">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
              Seamless Channel Setup
            </span>
            <h2 className="text-xl sm:text-2xl font-black">
              4-Step Fast Track Distributor Onboarding
            </h2>
            <p className="text-xs text-stone-300">
              From your initial application submission to opening stock arrival at your godown in under 5 business days.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 pt-1 gap-3.5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-6 no-scrollbar">
            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col justify-start h-full space-y-2">
              <span className="text-amber-300 font-mono font-black text-sm block">STEP 01</span>
              <h4 className="font-bold text-sm">Application &amp; Feasibility</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Submit your firm details below. Our expansion director reviews pin code feasibility within 24 business hours.
              </p>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col justify-start h-full space-y-2">
              <span className="text-amber-300 font-mono font-black text-sm block">STEP 02</span>
              <h4 className="font-bold text-sm">Commercial Alignment</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Receive wholesale price list, margin structure, and discuss opening order SKU mix tailored to your local market.
              </p>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col justify-start h-full space-y-2">
              <span className="text-amber-300 font-mono font-black text-sm block">STEP 03</span>
              <h4 className="font-bold text-sm">Exclusivity Agreement</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Execute the formal Channel Partner Agreement reserving your exclusive pincode radius and trade rights.
              </p>
            </div>

            <div className="w-[72vw] max-w-[280px] sm:w-full sm:max-w-none sm:shrink shrink-0 snap-start bg-white/10 p-5 rounded-2xl border border-white/10 flex flex-col justify-start h-full space-y-2">
              <span className="text-amber-300 font-mono font-black text-sm block">STEP 04</span>
              <h4 className="font-bold text-sm">Stock Dispatch &amp; POS</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                First consignment dispatched from Ghaziabad along with retail standees, trial pouches, and sales kits.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
