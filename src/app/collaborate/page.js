"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Share2,
  Mail,
  Gift,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Heart,
  Flame,
  Award,
  ShieldCheck,
  Truck,
  Leaf,
  Send,
  HelpCircle,
  User,
  Phone,
  MapPin,
  Loader2,
  AlertCircle,
  RotateCcw,
  X,
} from "lucide-react";

function InstagramIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function CollaboratePage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    creatorName: "",
    socialHandle: "",
    email: "",
    phone: "",
    reelUrl: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    recipeNotes: "",
    website: "", // Honeypot 1
    b_confirm: "", // Honeypot 2
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submissionResult, setSubmissionResult] = useState(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Track scroll for mobile sticky bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/creator-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || data.error?.message || "Failed to submit reel. Please check your details.");
      }

      const resData = data.data || data;
      setSubmissionResult({
        submissionId: resData.submissionId || data.submissionId || "CREATOR-2026-0001",
        creatorName: resData.creatorName || formData.creatorName || "Creator",
        email: resData.email || formData.email || "",
      });
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again or reach us at support@foodvilleindia.com");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      creatorName: "",
      socialHandle: "",
      email: "",
      phone: "",
      reelUrl: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      recipeNotes: "",
      website: "",
      b_confirm: "",
    });
    setSubmissionResult(null);
    setErrorMsg("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      num: "01",
      title: "Create a video reel for our brand",
      desc: "Get creative in your kitchen! Cook your favourite dish, season snacks, or share a quick culinary tip using Foodville spices.",
      icon: Video,
      badge: "Step 1",
      color: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      num: "02",
      title: "Post on your social media",
      desc: "Publish your reel on Instagram, YouTube Shorts, or Facebook. Tag @foodville15 and use #FoodvilleSpices #RealFoodRealFlavour.",
      icon: Share2,
      badge: "Step 2",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      num: "03",
      title: "Submit link & claim your spices",
      desc: "Tap Submit Reel to open the submission form. You will receive an instant email confirmation and your first free spice hamper!",
      icon: Mail,
      badge: "Step 3",
      color: "bg-rose-100 text-rose-800 border-rose-200",
    },
    {
      num: "04",
      title: "Create video reel & post on social media",
      desc: "Keep the flavour journey going! Share more recipes, snack experiments, or daily kitchen routines with Foodville seasonings.",
      icon: Flame,
      badge: "Step 4",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      num: "05",
      title: "Submit new link",
      desc: "Submit your new reel link anytime. Our team reviews verified posts within 24–48 hours.",
      icon: Send,
      badge: "Step 5",
      color: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      num: "06",
      title: "Claim more spices",
      desc: "Unlock bigger gift hampers, master chef seasoning kits, and exclusive pre-launch spice combos delivered free to your door!",
      icon: Gift,
      badge: "Step 6",
      color: "bg-amber-100 text-amber-900 border-amber-300",
    },
  ];

  const hampers = [
    {
      title: "Starter Flavor Duo",
      subtitle: "Claimed after Reel 1",
      desc: "Signature Peri-Peri Masala & Pizza Pasta Herb Seasoning shakers for effortless everyday gourmet cooking.",
      image: "/images/combo_classic_pizza_partner.jpg",
      tag: "1st Reel Reward",
    },
    {
      title: "Pure Aromatics Trio",
      subtitle: "Claimed after Reel 2",
      desc: "100% Dehydrated Garlic Powder, Ginger Powder, and Crispy Red Onion Powder — no peeling or tears needed.",
      image: "/images/combo_all_in_one_onion_garlic_base.jpg",
      tag: "Popular Reward",
    },
    {
      title: "Master Chef Creator Box",
      subtitle: "Claimed after 3+ Reels",
      desc: "Curated deluxe hamper box packed with premium seasonings, wellness powders, and dry fruit seeds combo.",
      image: "/images/combo_master_culinary_base_kit.jpg",
      tag: "VIP Creator Hamper",
    },
  ];

  const faqs = [
    {
      q: "How do I submit my video link? Do I need to open my email app?",
      a: "No need to open any external email app! Simply tap 'Submit Your Reel (Claim Free Spices)' on this page. An instant submission modal will open where you enter your reel link and address. You will receive an instant email confirmation, and our team is notified automatically.",
    },
    {
      q: "Who is eligible to participate?",
      a: "Anyone who loves cooking, eating, or making fun food content! Whether you are an established food blogger or an enthusiastic home cook with 50 followers, everyone is welcome.",
    },
    {
      q: "What should the video reel contain?",
      a: "Showcase any recipe, snack, breakfast, or beverage where you use or season with Foodville products. Ensure the Foodville packaging is visible and tag @foodville15 in your caption.",
    },
    {
      q: "How do I receive my spice hamper?",
      a: "Once our team verifies your reel link, we dispatch your gift hamper straight to the postal address provided in your submission via express courier with real-time tracking.",
    },
    {
      q: "Is there a limit on how many reels I can submit?",
      a: "There is no limit! Steps 4, 5, and 6 are designed to repeat. For every verified new recipe reel you post and submit, you unlock more spice hampers.",
    },
    {
      q: "Are the spices and delivery completely free?",
      a: "Yes, 100% free! We never ask for any payment, shipping fees, or hidden charges. Our spices are our gift to creators who share real food love.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2E2A26] selection:bg-[#56684A] selection:text-white pb-20 md:pb-0">
      
      {/* Top Ribbon Ticker */}
      <div className="bg-[#56684A] text-[#FAF7F2] px-3 py-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 border-b border-black/10 leading-snug">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
        <span>
          Exclusive Creator Programme — Free Spice Hampers for Reel Creators! • Tag{" "}
          <strong className="text-amber-200 underline decoration-amber-400">@foodville15</strong>
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-20 md:py-24 overflow-hidden border-b border-[#E8E1D5]">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 sm:h-96 bg-[#EBF1E6]/80 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            
            {/* Real Food Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-[#D5CCBE] shadow-2xs text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-[#56684A]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B91C1C] animate-ping shrink-0" />
                <span>REAL FOOD • REAL FLAVOUR • ALWAYS ♡</span>
              </div>
            </div>

            {/* Crimson Ribbon Banner */}
            <div className="relative inline-block px-2">
              <div className="bg-[#B91C1C] text-white px-4 sm:px-8 md:px-10 py-2 sm:py-2.5 rounded-sm shadow-md font-extrabold tracking-wider sm:tracking-widest text-xs sm:text-base md:text-lg uppercase transform -rotate-1">
                LET&apos;S COLLABORATE WITH FOODVILLE
              </div>
            </div>

            {/* Main Catchy Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1E1B17] tracking-tight leading-[1.15] sm:leading-tight">
              Create. Share. <br />
              <span className="text-[#56684A] italic underline decoration-amber-400 decoration-wavy decoration-2">
                Get Spices!
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-base md:text-lg text-[#5C554D] leading-relaxed max-w-2xl mx-auto font-medium px-2">
              Show your love for real food, share your delicious recipes with our community, and get rewarded with pure spice hampers delivered free to your doorstep!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* PRIMARY CTA: Opens Modal */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#56684A] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#435239] transition-all transform active:scale-98 text-center cursor-pointer min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                <span>Submit Your Reel (Claim Free Spices)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white text-[#2E2A26] border border-[#D5CCBE] font-bold text-sm sm:text-base hover:bg-[#F5EFE6] transition-all shadow-2xs min-h-[48px]"
              >
                <span>How It Works</span>
                <ChevronDown className="w-4 h-4 text-[#56684A]" />
              </a>
            </div>

            {/* Playful Stickers Bar */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EBF1E6] border border-[#C6D8BC] text-[11px] sm:text-xs font-bold text-[#3F5034]">
                <Heart className="w-3 h-3 text-[#B91C1C] fill-[#B91C1C]" />
                <span>Create • Share • Enjoy • Repeat ♡</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[11px] sm:text-xs font-bold text-[#92400E]">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Good Food Brings People Together ♡</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#D5CCBE] text-[11px] sm:text-xs font-bold text-[#56684A]">
                <Truck className="w-3 h-3 text-[#56684A]" />
                <span>100% Free Pan-India Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-Step Visual Journey */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1E6] text-[#3F5034] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
            Simple 6-Step Cycle
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1B17] tracking-tight">
            How The Collaboration Works
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5C554D] px-2">
            Zero contracts, zero complicated processes. Just create, post, submit your reel via our modal, and receive authentic spice hampers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-[#E8E1D5] shadow-2xs hover:shadow-md hover:border-[#56684A]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Step Pill & Number */}
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span
                      className={`text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${step.color}`}
                    >
                      {step.badge}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#D5CCBE] group-hover:text-[#56684A]/30 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] flex items-center justify-center text-[#56684A] mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-[#56684A] group-hover:text-white transition-all duration-200">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1E1B17] leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub-label / Action button */}
                <div className="mt-5 pt-3 sm:pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#56684A]">
                  <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                    {idx === 2 || idx === 4 ? "Direct modal submission" : idx === 5 ? "Repeat anytime!" : "Quick & easy"}
                  </span>
                  {(idx === 2 || idx === 4) && (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1 text-[#B91C1C] hover:underline font-bold cursor-pointer text-xs"
                    >
                      <span>Submit Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK SUBMISSION ACTION BANNER */}
      <section className="py-10 sm:py-14 bg-[#F3EDE2] border-y border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#DDD3C4] shadow-sm text-center space-y-4 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B91C1C] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3 h-3" />
                Easy Modal Submission
              </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1E1B17] tracking-tight">
              Ready with Your Video Reel?
            </h2>
            
            <p className="text-xs sm:text-sm text-[#5C554D] max-w-lg mx-auto leading-relaxed">
              Tap below to open the submission form, enter your reel URL and postal address. You will receive an instant email confirmation with your Reference ID!
            </p>

            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#56684A] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#435239] transition-all transform active:scale-98 cursor-pointer min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                <span>Submit Your Reel (Claim Free Spices)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-[11px] sm:text-xs text-[#7A7368]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#56684A]" />
                Automated confirmation email
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#56684A]" />
                100% Free pan-India courier
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Spice Hampers Showcase */}
      <section id="rewards" className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
            Pure Delicious Rewards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1B17] tracking-tight">
            Spice Hampers You Can Claim
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5C554D] px-2">
            All spice rewards are 100% stone-ground, preservative-free, and chemical-free products delivered straight from our facility in Ghaziabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {hampers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56 bg-[#F5EFE6] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#56684A] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                  {item.tag}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#B91C1C] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1B17] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#56684A]">
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#56684A]" />
                    Full Size Jars
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold text-[11px] sm:text-xs">
                    Free Delivery
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Best Practices & Tagging Guidelines */}
      <section className="py-12 sm:py-16 bg-white border-y border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E8E1D5] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1E6] text-[#3F5034] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                Creator Guidelines
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1E1B17] leading-tight">
                Tips to Make Your Reel Stand Out &amp; Get Approved Instantly
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#4A433B]">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#56684A] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="leading-relaxed">
                    <strong>Tag Us:</strong> Tag <span className="text-[#56684A] font-bold">@foodville15</span> in your reel caption and on-screen tag. Add <code className="bg-white px-1.5 py-0.5 rounded text-[#B91C1C] font-semibold border border-[#E8E1D5] text-[11px]">#FoodvilleSpices</code> and <code className="bg-white px-1.5 py-0.5 rounded text-[#B91C1C] font-semibold border border-[#E8E1D5] text-[11px]">#RealFoodRealFlavour</code>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#56684A] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="leading-relaxed">
                    <strong>Show Packaging:</strong> Highlight the Foodville jar or spice pouch clearly while sprinkling, cooking, or plating your recipe.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#56684A] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="leading-relaxed">
                    <strong>Authentic Cooking:</strong> Share genuine recipe steps — whether it&apos;s a quick 2-minute snack, pasta, healthy salad, or a rich family curry.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#56684A] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="leading-relaxed">
                    <strong>High Quality:</strong> Keep lighting bright, sound clear, and video resolution at 1080p for best visibility and creator feature on our official page.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-[#DDD3C4] shadow-2xs text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EBF1E6] text-[#56684A] flex items-center justify-center mx-auto">
                <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#1E1B17]">
                Connect With Our Community
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554D]">
                Follow us on Instagram for daily recipe inspiration, creator features, and seasonal spice launches.
              </p>
              <a
                href="https://www.instagram.com/foodville15?stkn=MTc2dXphZHc3djA0Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-sm hover:opacity-95 transition-opacity min-h-[44px]"
              >
                <span>Follow @foodville15</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section id="faq" className="py-12 sm:py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1E6] text-[#3F5034] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1B17] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5C554D]">
            Everything you need to know about creating reels and claiming your spice rewards.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#E8E1D5] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-4 py-3.5 sm:px-6 sm:py-4 md:py-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm md:text-base text-[#1E1B17] hover:bg-[#FAF7F2] transition-colors cursor-pointer gap-3 min-h-[48px]"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3 leading-snug">
                    <HelpCircle className="w-4 h-4 text-[#56684A] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#56684A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-[#5C554D] leading-relaxed border-t border-[#F0EAE1] pt-3 bg-[#FAF7F2]/50 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Quality Badges Strip */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center p-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EBF1E6] text-[#56684A] flex items-center justify-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-[#1E1B17]">100% Natural</h5>
              <p className="text-[11px] sm:text-xs text-[#736B63]">No preservatives or chemicals</p>
            </div>

            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center p-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FEF3C7] text-amber-700 flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-[#1E1B17]">ISO 9001:2015</h5>
              <p className="text-[11px] sm:text-xs text-[#736B63]">Hygienic manufacturing plant</p>
            </div>

            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center p-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FEE2E2] text-[#B91C1C] flex items-center justify-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-[#1E1B17]">Real Flavour Always</h5>
              <p className="text-[11px] sm:text-xs text-[#736B63]">Stone-ground Indian spices</p>
            </div>

            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center p-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E0F2FE] text-sky-700 flex items-center justify-center">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h5 className="font-bold text-xs sm:text-sm text-[#1E1B17]">Free Shipping</h5>
              <p className="text-[11px] sm:text-xs text-[#736B63]">Pan-India doorstep courier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-[#56684A] text-white py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Ready to Share Your Cooking Magic?
          </h3>
          <p className="text-xs sm:text-sm text-[#D1E6C0] max-w-xl mx-auto">
            Record your video, share it with your followers, and submit your link to receive your exclusive Foodville spice hamper.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#3F5034] font-extrabold text-sm sm:text-base shadow-lg hover:bg-[#FAF7F2] transition-all transform active:scale-98 cursor-pointer min-h-[48px]"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#B91C1C]" />
              <span>Submit Your Reel Link Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MOBILE STICKY FLOATING CTA BAR (Appears on Mobile when scrolled) */}
      {/* ========================================================================= */}
      {showStickyBar && (
        <div className="fixed bottom-3 inset-x-3 sm:hidden z-40 animate-in slide-in-from-bottom-5 duration-200">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#56684A] text-white font-bold text-sm shadow-xl flex items-center justify-between border border-white/20 active:scale-98 transition-transform cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Submit Reel (Claim Free Spices)</span>
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FULLY MOBILE-OPTIMIZED REEL SUBMISSION MODAL */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DDD3C4] overflow-hidden z-10 max-h-[92dvh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-[#FAF7F2] px-4 py-3.5 sm:px-6 sm:py-4 border-b border-[#E8E1D5] flex items-center justify-between shrink-0">
              <div className="space-y-0.5 sm:space-y-1 pr-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B91C1C] text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Direct Reel Submission
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E1B17] leading-tight">
                  Submit Your Reel &amp; Claim Spices
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#D5CCBE] flex items-center justify-center text-[#5C554D] hover:bg-[#F5EFE6] hover:text-[#1E1B17] transition-all cursor-pointer shadow-2xs shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4 sm:space-y-5" style={{ WebkitOverflowScrolling: "touch" }}>
              
              {submissionResult ? (
                /* SUCCESS STATE */
                <div className="text-center py-4 sm:py-6 px-2 space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="inline-block bg-[#EBF1E6] text-[#3F5034] text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full border border-[#C6D8BC]">
                      Reference ID: {submissionResult.submissionId}
                    </span>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1E1B17]">
                      Reel Submission Received! 🎉
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C554D] max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#1E1B17]">{submissionResult.creatorName || "Creator"}</strong>! We have sent a confirmation email to <strong className="text-[#56684A]">{submissionResult.email}</strong>.
                    </p>
                  </div>

                  <div className="bg-[#FAF7F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#E8E1D5] max-w-md mx-auto text-left space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#4A433B]">
                    <div className="font-bold text-[#1E1B17] flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#56684A]" />
                      What Happens Next:
                    </div>
                    <ul className="space-y-1 text-xs text-[#5C554D] list-disc pl-4 sm:pl-5 leading-relaxed">
                      <li>Our team reviews your reel within 24–48 working hours.</li>
                      <li>Your 100% free spice hamper is dispatched from our Ghaziabad facility.</li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                    <button
                      onClick={handleResetForm}
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#56684A] text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-[#435239] transition-all cursor-pointer min-h-[44px]"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Reel Link</span>
                    </button>

                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#2E2A26] border border-[#D5CCBE] font-bold text-xs sm:text-sm hover:bg-[#F5EFE6] transition-all cursor-pointer min-h-[44px]"
                    >
                      <span>Done</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Error Banner */}
                  {errorMsg && (
                    <div className="p-3 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 text-red-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Field 1: Published Reel Link */}
                  <div className="space-y-1">
                    <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                      Published Reel / Video URL <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A7368]">
                        <Video className="w-4 h-4" />
                      </div>
                      <input
                        type="url"
                        name="reelUrl"
                        required
                        value={formData.reelUrl}
                        onChange={handleChange}
                        placeholder="https://www.instagram.com/reel/... or Shorts link"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#7A7368]">
                      Ensure reel is public and tags <strong className="text-[#56684A]">@foodville15</strong>.
                    </p>
                  </div>

                  {/* Field 2 & 3: Creator Name & Social Handle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A7368]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="creatorName"
                          required
                          value={formData.creatorName}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                        Social Handle / Profile
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A7368]">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="socialHandle"
                          value={formData.socialHandle}
                          onChange={handleChange}
                          placeholder="e.g. @priya_cooks"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Field 4 & 5: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A7368]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@gmail.com (For confirmation)"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                        WhatsApp / Mobile <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A7368]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address Section */}
                  <div className="space-y-2.5 pt-2 border-t border-[#F0EAE1]">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#56684A] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Delivery Address (For Free Spice Hamper)</span>
                    </div>

                    <input
                      type="text"
                      name="street"
                      required
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="House / Flat No., Street, Area, Landmark *"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City *"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                      />
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State *"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                      />
                      <input
                        type="text"
                        name="pincode"
                        required
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="6-digit PIN *"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Optional Recipe Notes */}
                  <div className="space-y-1">
                    <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                      Recipe / Spices Used (Optional)
                    </label>
                    <textarea
                      name="recipeNotes"
                      rows={2}
                      value={formData.recipeNotes}
                      onChange={handleChange}
                      placeholder="e.g. Made Paneer Tikka with Foodville Peri-Peri"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Anti-Bot Honeypots */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                    <input type="text" name="b_confirm" tabIndex={-1} autoComplete="off" value={formData.b_confirm} onChange={handleChange} />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-[#56684A] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#435239] transition-all transform active:scale-98 disabled:opacity-70 disabled:pointer-events-none cursor-pointer min-h-[48px]"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          <span>Submitting Reel &amp; Notifying Team...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                          <span>Submit Reel (Claim Free Spices)</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#7A7368] text-center pt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                    <span>100% Free • Confirmation sent to your email</span>
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
