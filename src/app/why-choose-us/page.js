"use client";

import { useState } from "react";

export default function WhyChooseUsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const values = [
    {
      icon: "🌱",
      title: "100% Raw & Natural Sourcing",
      description:
        "We believe that nature knows best. Every spice powder, seed, and dry fruit in our collection is sourced directly from sustainable, premium farms. We ensure our products are entirely free from synthetic chemical additives, artificial colors, and chemical preservatives so you consume nothing but pure nature."
    },
    {
      icon: "📜",
      title: "ISO 9001:2015 Certified Quality Standards",
      description:
        "Quality is not just a promise; it is our foundation. As an ISO 9001:2015 Certified Company, Foodville adheres to the most stringent international quality control protocols. From selecting ingredients to final packaging, every batch undergoes thorough checks for moisture levels, hygiene, and absolute purity."
    },
    {
      icon: "🚜",
      title: "Empowering Local Farmers",
      description:
        "By establishing direct-to-consumer pipelines, we bypass multiple layers of distributors and middle-agents. This ensures our farmers receive fair, higher pay for their hard work, and enables us to deliver fresh, farm-gate products to your kitchen at fair, honest prices."
    },
    {
      icon: "⚙️",
      title: "Traditional Stone-Ground Processing",
      description:
        "To preserve the delicate essential oils, rich natural flavor, and inherent nutritional value of our spices, we employ cold-processing and traditional stone-grinding. Unlike high-speed commercial mills that generate high heat, our method keeps the temperature low so that nutrients remain intact."
    },
    {
      icon: "📦",
      title: "Freshness-Lock Protective Packaging",
      description:
        "Exposure to moisture and air can degrade the flavor and nutrition of dry fruits and seeds. We utilize vacuum-sealed, moisture-proof, food-grade packaging that locks in the freshness, crunch, and intense natural aroma from our packaging center all the way to your dining table."
    },
    {
      icon: "⚡",
      title: "Superfast Delivery & Active Support",
      description:
        "We value your time. Our system processes orders swiftly to guarantee delivery in record time across more than 24,000 pincodes. Furthermore, our dedicated customer support team is always active and reachable via a quick click to WhatsApp or email to resolve any queries instantly."
    }
  ];

  const stats = [
    { value: "55+", label: "Unique Products" },
    { value: "ISO", label: "9001:2015 Certified" },
    { value: "100%", label: "Preservative Free" },
    { value: "24K+", label: "Pincodes Served" },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Ethical Farm Sourcing",
      desc: "We source our spices, seeds, and dry fruits directly from native growing regions (like high-curcumin Lakadong Turmeric from Meghalaya and premium Almonds from Kashmir)."
    },
    {
      step: "02",
      title: "Multi-Stage Quality Sorting",
      desc: "Raw products are sorted using optical scanners and hand-grading to remove any defects, ensuring only premium-grade sizes and colors proceed to processing."
    },
    {
      step: "03",
      title: "Cold-Ground Processing",
      desc: "Spices are slowly stone-ground under low temperatures to preserve volatile aromatic oils and sensitive bio-actives that standard high-heat mills destroy."
    },
    {
      step: "04",
      title: "Hygienic Vacuum Packaging",
      desc: "Finished products are sealed immediately in food-grade, moisture-barrier pouches inside our ISO-certified facility to prevent oxidation and moisture ingress."
    },
    {
      step: "05",
      title: "Secure & Swift Shipping",
      desc: "Dispatched within 24 hours with active tracking shared on WhatsApp. Packed in durable boxes to prevent damage during regional transit."
    }
  ];

  const comparisonData = [
    {
      category: "Spices (e.g. Turmeric, Chilli)",
      commercial: "High-heat milled, artificial colors added, volatile oils lost, curcumin content below 2%.",
      foodville: "Stone-ground under low temperatures, zero colors/preservatives, high native essential oils, high curcumin (up to 7%+)."
    },
    {
      category: "Dry Fruits (e.g. Almonds, Cashews)",
      commercial: "Often stored in damp warehouses, inconsistent size grading, preservatives added for shelf life.",
      foodville: "Strict size-grading (premium jumbo sizes), moisture-controlled vacuum packaging, 100% natural with no sulfites."
    },
    {
      category: "Seeds & Berries (e.g. Pumpkin, Chia)",
      commercial: "Processed with high sugar, artificial glazing agents, mixed with dust or stems.",
      foodville: "Triple-sorted raw seeds, zero added sugar or glazes, sorted to remove all foreign residues."
    }
  ];

  const promises = [
    {
      icon: "🤝",
      title: "Honest Pricing, Always",
      body: "We eliminate unnecessary middlemen from our supply chain. The savings are passed directly to you. What you pay is the true, fair value of a premium quality product — never inflated."
    },
    {
      icon: "🧪",
      title: "Every Batch Lab Tested",
      body: "Before any product reaches your home, it passes through rigorous quality checks for microbiological safety, moisture content, adulteration, and shelf-life stability. You receive only what passes every single test."
    },
    {
      icon: "🌍",
      title: "Sustainable & Responsible",
      body: "We are committed to responsible business. Our packaging is designed to minimize plastic waste, our sourcing favors regenerative farming, and our operations work to reduce the carbon footprint at every step of the supply chain."
    },
    {
      icon: "💬",
      title: "Always-On Customer Care",
      body: "Have a question before ordering? Need help after delivery? Our dedicated support team responds within minutes on WhatsApp and email — real humans, not bots, who genuinely care about your satisfaction."
    }
  ];

  const faqs = [
    {
      q: "What makes Foodville spices different from general market spices?",
      a: "Commercial spices are ground in high-speed machinery that generates temperatures above 60°C. This heat evaporates the natural essential oils (which contain the flavor, aroma, and health benefits like curcumin in turmeric). Foodville uses cold stone-grinding technology, keeping the temperature low to preserve these beneficial oils and active nutrients."
    },
    {
      q: "Are all Foodville products 100% vegetarian and free from artificial colors?",
      a: "Yes, absolutely! All Foodville products are 100% vegetarian, dairy-free, and gluten-free. We strictly do not add any artificial colors, synthetic flavors, chemical preservatives, or anticaking agents to any of our products."
    },
    {
      q: "What does the ISO 9001:2015 certification mean?",
      a: "ISO 9001:2015 is an international standard that certifies our Quality Management System. It ensures that every step of our operation—from sourcing from farmers, cold processing in our facility, quality testing, sanitary packaging, to customer support—follows strict, traceable safety guidelines."
    },
    {
      q: "How does the WhatsApp order tracking work?",
      a: "Once your order is processed, our system automatically generates a unique tracking link and sends it to you via WhatsApp. You can click the link to check your package's live location, expected delivery date, and coordinate directly with the delivery agent."
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-16">

      {/* Page Header */}
      <div className="border-b border-cardline pb-6">
        <h1 className="text-2xl sm:text-4xl font-black text-ink uppercase tracking-tight">
          Why Choose Foodville?
        </h1>
        <p className="text-sm text-muted mt-2 max-w-2xl leading-relaxed">
          Discover the values, quality commitment, and science-backed processing methods that make Foodville Consumer Products the premium choice for clean kitchens.
        </p>
      </div>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#3A4930] text-white p-8 sm:p-12 shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wider text-[#C9A86C] uppercase">
            The Foodville Promise
          </span>
          <h2 className="text-xl sm:text-3xl font-black leading-tight">
            Earthy, Pure & Nourishing Staples For a Healthier Lifestyle
          </h2>
          <p className="text-sm text-white/80 leading-relaxed font-normal">
            At Foodville, we are on a mission to bring raw purity back to everyday cooking. In an era of heavy processing and additives, we stand firm on our promise of clean eating. We meticulously source, cold-process, and hygienically package every product so you can nourish your family with absolute confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl bg-white border border-cardline p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:border-olive/40">
            <p className="text-2xl sm:text-3xl font-black text-olive">{s.value}</p>
            <p className="text-xs text-muted font-semibold mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Values / Core Pillars Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto space-y-2 mb-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-ink uppercase tracking-wider">
            Our Core Quality Pillars
          </h2>
          <p className="text-xs text-muted leading-relaxed">
            From farm field to your kitchen, we control every step to deliver clean food of international quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-cardline hover:border-olive/50 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-olive/10 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105 shadow-inner">
                {v.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-ink group-hover:text-olive transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed font-normal">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Timeline - Interactive / visual section */}
      <section className="space-y-8">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-ink uppercase tracking-wider">
            Our Farm-To-Table Journey
          </h2>
          <p className="text-xs text-muted leading-relaxed">
            How we maintain absolute freshness and maximum active nutrients throughout the supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-cardline hidden md:block z-0"></div>
          
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-white border border-cardline rounded-2xl p-5 space-y-3 shadow-sm hover:border-olive transition duration-300">
              <div className="w-10 h-10 rounded-full bg-olive text-white flex items-center justify-center font-bold text-sm shadow">
                {step.step}
              </div>
              <h3 className="font-extrabold text-xs text-ink">{step.title}</h3>
              <p className="text-[11px] text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Data Table */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-ink uppercase tracking-wider">
            How Foodville Compares
          </h2>
          <p className="text-xs text-muted leading-relaxed">
            See the difference between standard industrial products and Foodville's quality parameters.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-cardline bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream border-b border-cardline">
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-ink">Product Type</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-muted">Standard Commercial Brands</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-olive bg-olive/5">Foodville Standard</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-cardline last:border-none hover:bg-cream/25 transition">
                  <td className="p-4 text-xs font-extrabold text-ink">{row.category}</td>
                  <td className="p-4 text-xs text-muted leading-relaxed">{row.commercial}</td>
                  <td className="p-4 text-xs text-ink font-medium leading-relaxed bg-olive/5">{row.foodville}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="rounded-3xl border border-cardline bg-cream/40 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-cardline">
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#1E40AF" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="20" r="15" fill="#1E40AF" />
            <path d="M10 20H30M20 10V30M13 14C17 18 17 22 13 26M27 14C23 18 23 22 27 26" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <text x="20" y="21" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ISO</text>
            <text x="20" y="28" fill="white" fontSize="5" fontWeight="semibold" textAnchor="middle" fontFamily="sans-serif">9001:2015</text>
          </svg>
        </div>
        <div className="space-y-3 flex-1 text-center md:text-left">
          <h3 className="text-base sm:text-lg font-black text-ink uppercase tracking-wider">
            Quality You Can Certifiably Trust
          </h3>
          <p className="text-xs text-muted leading-relaxed font-normal">
            Foodville is proudly operated under strict adherence to ISO 9001:2015 protocols, ensuring all safety, purity, and hygiene rules are continuously updated and monitored. When you cook with our products, you cook with ingredients that meet premium international safety standards.
          </p>
          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-olive">
            <span className="flex items-center gap-1">✓ 100% Vegetarian</span>
            <span className="flex items-center gap-1">✓ Hygienically Ground</span>
            <span className="flex items-center gap-1">✓ Lab Tested for Purity</span>
          </div>
        </div>
      </section>

      {/* Customer Promises Section */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-ink uppercase tracking-wider">
            Our Promises to You
          </h2>
          <p className="text-xs text-muted leading-relaxed">
            These are not marketing words. These are the commitments we hold ourselves accountable to every single day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {promises.map((p, i) => (
            <div key={i} className="rounded-2xl border border-cardline bg-white p-6 space-y-2 shadow-sm hover:shadow-md hover:border-olive/40 transition-all duration-300 group">
              <div className="text-2xl">{p.icon}</div>
              <h4 className="font-extrabold text-sm text-ink group-hover:text-olive transition-colors">{p.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="rounded-3xl bg-[#3A4930]/5 border border-[#3A4930]/15 p-6 sm:p-10 space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-olive"></div>
          <h2 className="text-base sm:text-lg font-black text-ink uppercase tracking-wider">Our Story</h2>
        </div>
        <p className="text-sm text-ink/80 leading-[1.9]">
          Foodville was founded with a single, powerful purpose — to make truly clean, wholesome food accessible to every Indian household. We saw that grocery shelves were overwhelmed with products carrying long lists of artificial ingredients that no one could pronounce. Families were unknowingly consuming preservatives, synthetic dyes, and cheap fillers in their everyday staples.
        </p>
        <p className="text-sm text-ink/80 leading-[1.9]">
          We decided to go back to basics. We partnered with farmers who care about their soil and their crops. We invested in traditional cold-processing technology that retains the full spectrum of nutrients. We built transparent packaging that tells you exactly what is inside — because you deserve to know what you are feeding your family.
        </p>
        <p className="text-sm text-ink/80 leading-[1.9]">
          Today, Foodville is proudly registered and certified under ISO 9001:2015, headquartered in Ghaziabad, Uttar Pradesh, and serves customers across the country. Every product in our catalog — from cold-stone spice powders to premium dry fruit combos — carries our unwavering promise: <span className="font-bold text-olive">Pure. Natural. Honest.</span>
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-ink uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-muted leading-relaxed">
            Quick answers to help you understand our processing, quality standards, and shipping.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-cardline bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-xs text-ink hover:bg-cream/20 transition focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="text-olive text-sm font-extrabold">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="p-5 pt-0 text-xs text-muted leading-relaxed border-t border-cardline/30 bg-cream/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Strip */}
      <section className="rounded-3xl bg-[#3A4930] text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-black">Have Questions? We Are Here.</h3>
          <p className="text-xs text-white/70 leading-relaxed max-w-sm">
            Our friendly support team is always a message away. Reach out on WhatsApp or email and get a response within minutes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="https://wa.me/919911575605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white hover:opacity-90 transition shadow"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="mailto:support@foodvilleindia.com"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Support
          </a>
        </div>
      </section>

    </div>
  );
}
