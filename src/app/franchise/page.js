"use client";

import { useState } from "react";
import Link from "next/link";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    investmentBudget: "10L - 25L",
    propertyStatus: "looking_for_space",
    experience: "",
    companyName: "",
    companyGstin: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit application");

      setSubmittedId(data.data.applicationId);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <div
          className="relative rounded-3xl text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-olive/30 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/franchise_store_banner.png')" }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-amber-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>
              Official Foodville Franchise Program
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Partner with India’s Fastest Growing Organic & FMCG Brand
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Open a high-profit Foodville Storefront or Master Distribution Hub in your city. Enjoy 35%+ gross margins, direct factory supply, and 100% marketing assistance.
            </p>
          </div>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <h3 className="font-bold text-stone-900 text-lg">35%+ Gross Margins</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Direct factory sourcing eliminates middlemen margins so you maximize store profitability.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Direct Supply Chain</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Scheduled bulk dispatches directly from our Shiprocket integrated state warehouses.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Protected Territory</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Exclusive pincode radius rights guaranteed under legal franchise agreements.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h12M6 15h12M9 3h6v4H9z"/></svg>
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Turnkey Setup</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">Store architecture, POS software, branding kits, and staff training included.</p>
          </div>
        </div>

        {/* Application Form & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200">
            {submittedId ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h2 className="text-2xl font-extrabold text-stone-900">Application Submitted!</h2>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Your reference ID is <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">{submittedId}</span>.
                  Our National Expansion Manager will contact you within 24 business hours.
                </p>
                <div className="pt-4">
                  <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-olive-dark text-white font-semibold hover:bg-olive-dark/90 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">Apply for Foodville Franchise</h2>
                  <p className="text-stone-500 text-xs sm:text-sm">Fill in your details below to request our confidential Franchise Prospectus.</p>
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
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
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
                      placeholder="rahul@example.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Target Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="110001"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Gurugram"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Haryana"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Planned Investment Budget *</label>
                    <select
                      value={formData.investmentBudget}
                      onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px] bg-white"
                    >
                      <option value="5L - 10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10L - 25L">₹10 Lakhs - ₹25 Lakhs</option>
                      <option value="25L - 50L">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="50L+">₹50 Lakhs +</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Retail Property Status</label>
                    <select
                      value={formData.propertyStatus}
                      onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px] bg-white"
                    >
                      <option value="owned">Owned Shop Space</option>
                      <option value="rented">Rented / Leased Shop</option>
                      <option value="looking_for_space">Currently Looking for Location</option>
                    </select>
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
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Company GSTIN (For Input Tax Credit)</label>
                    <input
                      type="text"
                      value={formData.companyGstin}
                      onChange={(e) => setFormData({ ...formData, companyGstin: e.target.value })}
                      placeholder="07AAAAA1111A1Z1"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Business Experience / Remarks (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us briefly about your current retail or distribution business..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-olive-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
                  />
                </div>

                {/* Hidden Honeypot Anti-Bot Trap */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website || ""} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                  <input type="text" name="b_confirm" tabIndex={-1} autoComplete="off" value={formData.b_confirm || ""} onChange={(e) => setFormData({ ...formData, b_confirm: e.target.value })} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-olive-dark via-olive-dark to-olive text-white font-bold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
                >
                  {loading ? "Submitting Application..." : "Submit Confidential Franchise Application"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Contact Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-olive-dark text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-olive/30">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-bold">Need Immediate Help?</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our Business Development Team for urgent inquiries or Master Distributorship proposals.
              </p>
              <div className="pt-4 border-t border-white/15 space-y-3.5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-gold">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Phone / Call</span>
                    <a href="tel:+919911575605" className="text-white font-bold hover:text-gold transition text-sm">+91 9911575605</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-gold">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Email Proposals</span>
                    <a href="mailto:franchise@foodville.in" className="text-white font-bold hover:text-gold transition text-sm">franchise@foodville.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-gold mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider block">Headquarters</span>
                    <span className="text-white/90 font-medium leading-relaxed block text-xs">Foodville Consumer Products Pvt. Ltd.<br />H-112, 1st Floor, Patel Nagar-III, Ghaziabad, U.P. 201001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
