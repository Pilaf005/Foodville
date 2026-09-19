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
  Users,
  Eye,
  TrendingUp,
  AlertTriangle,
  FileText,
  CheckCheck,
  Lock,
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
  const [agreedPolicy, setAgreedPolicy] = useState(true);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const [activeHamperIndex, setActiveHamperIndex] = useState(0);
  const [activePolicyIndex, setActivePolicyIndex] = useState(0);

  const handleStepScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (steps?.length || 6);
    if (cardWidth > 0) {
      const current = Math.min(
        (steps?.length || 6) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeStepIndex) {
        setActiveStepIndex(current);
      }
    }
  };

  const handleTierScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (eligibilityTiers?.length || 3);
    if (cardWidth > 0) {
      const current = Math.min(
        (eligibilityTiers?.length || 3) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeTierIndex) {
        setActiveTierIndex(current);
      }
    }
  };

  const handleHamperScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (hampers?.length || 3);
    if (cardWidth > 0) {
      const current = Math.min(
        (hampers?.length || 3) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activeHamperIndex) {
        setActiveHamperIndex(current);
      }
    }
  };

  const handlePolicyScroll = (e) => {
    const el = e.currentTarget;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / (policyRules?.length || 4);
    if (cardWidth > 0) {
      const current = Math.min(
        (policyRules?.length || 4) - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (current !== activePolicyIndex) {
        setActivePolicyIndex(current);
      }
    }
  };

  const handleCopyTemplate = () => {
    const templateText =
      "Cooked this recipe using @foodville15 pure spices! 🌿✨ 100% natural, preservative-free flavours. #Foodville #FoodvilleSpices #RealFoodRealFlavour #FlavoursOfFoodville";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(templateText);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2500);
    }
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedPolicy) {
      setErrorMsg("Please accept the Collaboration Policy (follow @foodville15, required tags, no deletion) to submit your reel.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/creator-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          agreedPolicy,
        }),
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
        collaborationPolicy: resData.collaborationPolicy || "Accepted",
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
    setAgreedPolicy(true);
    setSubmissionResult(null);
    setErrorMsg("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      num: "01",
      title: "Get Creative & Promote Foodville",
      desc: "Express your creativity in your own style! Create an engaging reel promoting Foodville pure spices and encourage your audience to buy products through www.foodvilleindia.com or on Flipkart.",
      icon: Video,
      badge: "Step 1",
      color: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      num: "02",
      title: "Publish on Instagram with Tags",
      desc: "Publish your reel on Instagram. Tag and mention @foodville15 in your video & caption, and add #Foodville #FoodvilleSpices #RealFoodRealFlavour.",
      icon: Share2,
      badge: "Step 2",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      num: "03",
      title: "Submit Link & Claim 3 Spices",
      desc: "Tap Submit Reel to enter your reel link and address. Once verified, claim 200g of any 3 spices of your choice delivered 100% free!",
      icon: Mail,
      badge: "Step 3",
      color: "bg-rose-100 text-rose-800 border-rose-200",
    },
    {
      num: "04",
      title: "Unlock 2nd Reel (15k+ Views)",
      desc: "Once your 1st Foodville reel reaches 15,000+ views, you become eligible for Reel 2! Follow the exact same creative steps to promote Foodville and direct viewers to website/Flipkart.",
      icon: Flame,
      badge: "Step 4",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      num: "05",
      title: "Submit 2nd Reel & Claim 5 Spices",
      desc: "Submit your new reel link. Get verified within 24–48 hours and claim 200g of any 5 spices of your choice delivered straight to your door!",
      icon: Send,
      badge: "Step 5",
      color: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      num: "06",
      title: "Unlock 3rd Reel & Claim 7 Spices",
      desc: "When your 2nd Foodville reel crosses 30,000+ views, follow the same way for Reel 3 to claim 200g of any 7 spices of your choice + VIP ambassador perks!",
      icon: Gift,
      badge: "Step 6",
      color: "bg-amber-100 text-amber-900 border-amber-300",
    },
  ];

  const eligibilityTiers = [
    {
      tierBadge: "Tier 1",
      tierColor: "bg-[#EBF1E6] text-[#3F5034] border-[#C6D8BC]",
      reelNum: "1st Reel",
      isFeatured: false,
      metricVal: "5,000+",
      metricLabel: "Followers",
      metricSub: "+ 20k+ avg. views on recent reels",
      rewardTitle: "200g of Any 3 Spices",
      rewardWeight: "600g Total",
      checkpoints: [
        "Active food, recipe or cooking creator",
        "Free express doorstep courier pan-India",
      ],
      ctaText: "Submit Reel 1 (Claim 3 Spices)",
    },
    {
      tierBadge: "Tier 2",
      tierColor: "bg-[#56684A] text-white border-[#435239]",
      reelNum: "2nd Reel",
      isFeatured: false,
      metricVal: "15,000+",
      metricLabel: "Organic Views",
      metricSub: "Achieved on your 1st Foodville reel",
      rewardTitle: "200g of Any 5 Spices",
      rewardWeight: "1 KG Total",
      checkpoints: [
        "Fast-track verification in 24–48 hours",
        "Follow same creative format for Reel 2",
      ],
      ctaText: "Submit Reel 2 (Claim 1 KG Box)",
    },
    {
      tierBadge: "Tier 3 VIP",
      tierColor: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      reelNum: "3rd+ Reel",
      isFeatured: false,
      metricVal: "30,000+",
      metricLabel: "Views on Reel 2",
      metricSub: "Achieved on your 2nd Foodville reel",
      rewardTitle: "200g of Any 7 Spices",
      rewardWeight: "1.4 KG Total",
      checkpoints: [
        "VIP Brand Ambassador club perks",
        "Direct founder WhatsApp line & tastings",
      ],
      ctaText: "Submit Reel 3 (Claim VIP Box)",
    },
  ];

  const hampers = [
    {
      reelNum: "1st Reel",
      qtyPacks: 3,
      totalWeight: "600g Net",
      title: "Triple Spice Hamper",
      badge: "Starter Tier",
      badgeColor: "bg-[#EBF1E6] text-[#3F5034] border-[#C6D8BC]",
      desc: "Pick 200g of any 3 Foodville spices, seasonings, or dehydrated powders of your choice.",
      samplePills: ["Peri-Peri Masala", "Pizza Herbs", "Garlic Powder", "Crispy Onion"],
      perks: [
        "Pick any 3 spices from full catalog",
        "100% Free doorstep express courier",
      ],
      ctaText: "Claim 3 Spices (600g)",
    },
    {
      reelNum: "2nd Reel",
      qtyPacks: 5,
      totalWeight: "1 KG Net",
      title: "Aromatic Master Box",
      badge: "⭐ 15k+ Views",
      badgeColor: "bg-[#56684A] text-white border-[#435239]",
      isFeatured: false,
      desc: "Pick 200g of any 5 Foodville pure spices to expand your culinary creations.",
      samplePills: ["Garlic Powder", "Ginger", "Kasuri Methi", "Pizza Herbs", "Peri-Peri"],
      perks: [
        "1 KG Total pure artisanal spices",
        "Priority 24h packing & express shipping",
      ],
      ctaText: "Claim 5 Spices (1 KG)",
    },
    {
      reelNum: "3rd+ Reel",
      qtyPacks: 7,
      totalWeight: "1.4 KG Net",
      title: "Grand Chef VIP Hamper",
      badge: "👑 30k+ Views VIP",
      badgeColor: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      desc: "Pick 200g of any 7 spices across our catalog + VIP brand ambassador perks.",
      samplePills: ["All 7 of Choice", "Root Powders", "Wellness Seeds"],
      perks: [
        "1.4 KG Master crate (7 full packs)",
        "VIP Ambassador tasting club privileges",
      ],
      ctaText: "Claim 7 Spices (VIP)",
    },
  ];

  const policyRules = [
    {
      num: "01",
      title: "Follow @foodville15 on Instagram",
      desc: "Must be an active follower of our official Instagram handle (@foodville15) before submitting your reel link and throughout the partnership.",
      badge: "Active Follower",
      badgeColor: "bg-[#EBF1E6] text-[#3F5034] border-[#C6D8BC]",
      footerType: "verify",
    },
    {
      num: "02",
      title: "Tag & Mention @foodville15",
      desc: "Add an on-screen tag in the video and mention @foodville15 in the main caption so food lovers and our team can discover your dish.",
      badge: "Tag + Mention",
      badgeColor: "bg-[#EBF1E6] text-[#3F5034] border-[#C6D8BC]",
      footerType: "tag",
    },
    {
      num: "03",
      title: "Add Official Brand Hashtags",
      desc: "Include #Foodville, #FoodvilleSpices and #RealFoodRealFlavour in your caption to ensure automated tracking and feature eligibility.",
      badge: "Official Tags",
      badgeColor: "bg-[#EBF1E6] text-[#3F5034] border-[#C6D8BC]",
      footerType: "copy",
    },
    {
      num: "04",
      title: "No Deletion & No Unfollow Rule",
      desc: "Reels must remain permanently published. Archiving, deleting, or unfollowing results in permanent disqualification from all future hampers.",
      badge: "Permanent Goodwill",
      badgeColor: "bg-red-50 text-[#B91C1C] border-red-200",
      isWarning: true,
      footerType: "warning",
    },
  ];

  const faqs = [
    {
      q: "How do I submit my video link? Do I need to open my email app?",
      a: "No need to open any external email app! Simply tap 'Submit Your Reel (Claim Free Spices)' on this page. An instant submission modal will open where you enter your reel link and address. You will receive an instant email confirmation, and our team is notified automatically.",
    },
    {
      q: "Who is eligible to participate and claim spice hampers?",
      a: "For your 1st Reel: Creators with 5,000+ followers and an average of 20,000+ views across their last 3–4 reels are eligible to claim 200g of any 3 spices. For your 2nd Reel: Your 1st Foodville reel must achieve 15,000+ views to claim 200g of any 5 spices. For your 3rd Reel: Your 2nd Foodville reel must reach 30,000+ views to claim 200g of any 7 spices!",
    },
    {
      q: "What is the collaboration policy regarding post deletion and unfollowing?",
      a: "As part of our mutual creator partnership, you must follow @foodville15, tag @foodville15 on the reel and in your caption, and include #Foodville #FoodvilleSpices #RealFoodRealFlavour. You cannot unfollow the brand or delete/archive the collaboration reel after receiving your free hampers. Non-compliance results in permanent disqualification from all future Foodville creator programs.",
    },
    {
      q: "What should my video reel contain and how should I promote?",
      a: "Express your creativity! Showcase cooking, tasting, kitchen hacks, or seasoning fun using Foodville pure spices. Prominently encourage your viewers to purchase authentic Foodville products through our website www.foodvilleindia.com or on Flipkart, and tag @foodville15.",
    },
    {
      q: "How do I receive my spice hamper?",
      a: "Once our team verifies your reel link, we dispatch your gift hamper straight to the postal address provided in your submission via express courier with real-time tracking.",
    },
    {
      q: "Is there a limit on how many reels I can submit?",
      a: "Steps 4, 5, and 6 are designed to reward progression! After Reel 1 (3 spices), once you hit 15k+ views you unlock Reel 2 (5 spices). When Reel 2 hits 30k+ views, you unlock Reel 3 (7 spices).",
    },
    {
      q: "Are the spices and delivery completely free?",
      a: "Yes, 100% free! We never ask for any payment, shipping fees, or hidden charges. Our spices are our gift to creators who share real food love.",
    },
  ];

  return (
    <div className="-mx-4 sm:-mx-6 min-h-screen bg-[#FAF7F2] text-[#2E2A26] selection:bg-[#56684A] selection:text-white pb-0 overflow-x-hidden pt-2 sm:pt-3">
      
      {/* Top Ribbon Ticker */}
      <div className="bg-[#56684A] text-[#FAF7F2] px-3 py-2.5 text-center text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 border-y border-black/10 leading-snug">
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
              Express your creativity and promote Foodville pure spices! Get rewarded with <strong>200g of any 3 spices</strong> on your 1st reel, <strong>5 spices</strong> on your 2nd, and <strong>7 spices</strong> on your 3rd—delivered 100% free!
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-4 max-w-sm sm:max-w-xl mx-auto w-full">
              
              {/* Row 1: How It Works & Eligibility Buttons in Same Row with Equal Dimensions */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                <a
                  href="#how-it-works"
                  className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-[#2E2A26] border border-[#D5CCBE] font-bold text-[11px] sm:text-sm hover:bg-[#F5EFE6] transition-all shadow-2xs min-h-[42px] sm:min-h-[46px] whitespace-nowrap text-center"
                >
                  <span>How It Works</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                </a>

                <a
                  href="#eligibility"
                  className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-[#2E2A26] border border-[#D5CCBE] font-bold text-[11px] sm:text-sm hover:bg-[#F5EFE6] transition-all shadow-2xs min-h-[42px] sm:min-h-[46px] whitespace-nowrap text-center"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                  <span>Eligibility</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                </a>
              </div>

              {/* Row 2: Submit Your Reel Button Just Below (Mobile-first balanced typography) */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#56684A] text-white font-bold shadow-lg hover:bg-[#435239] transition-all transform active:scale-98 cursor-pointer min-h-[46px] sm:min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
                <span className="font-extrabold text-xs sm:text-base tracking-tight text-center flex-1 sm:flex-initial leading-tight">
                  <span>Submit Your Reel</span>{" "}
                  <span className="text-amber-200 font-semibold block sm:inline text-[11px] sm:text-sm sm:before:content-['•_'] sm:before:text-white/60">
                    Claim Free Spices
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-white/80" />
              </button>

            </div>

            {/* Playful Stickers Bar (Compact and neatly wrapped on mobile) */}
            <div className="pt-3 sm:pt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EBF1E6] border border-[#C6D8BC] text-[10px] sm:text-xs font-bold text-[#3F5034]">
                <Heart className="w-3 h-3 text-[#B91C1C] fill-[#B91C1C] shrink-0" />
                <span className="sm:hidden">Create &amp; Share ♡</span>
                <span className="hidden sm:inline">Create • Share • Enjoy • Repeat ♡</span>
              </div>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[10px] sm:text-xs font-bold text-[#92400E]">
                <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                <span className="sm:hidden">Pure Spices Only</span>
                <span className="hidden sm:inline">Good Food Brings People Together ♡</span>
              </div>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#D5CCBE] text-[10px] sm:text-xs font-bold text-[#56684A]">
                <Truck className="w-3 h-3 text-[#56684A] shrink-0" />
                <span className="sm:hidden">Free Pan-India Courier</span>
                <span className="hidden sm:inline">100% Free Pan-India Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-Step Visual Journey */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-white border-y border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
          <span className="font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#56684A]" />
            <span>6 Easy Steps</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
            <span>Step {activeStepIndex + 1} of {steps.length}</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Steps Container: Horizontally Scrollable on Mobile, Responsive Grid on Desktop */}
        <div
          onScroll={handleStepScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="w-[84vw] max-w-[320px] sm:w-[340px] md:w-auto shrink-0 md:shrink snap-center relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-[#E8E1D5] shadow-2xs hover:shadow-md hover:border-[#56684A]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Step Header: Icon & Number */}
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] flex items-center justify-center text-[#56684A] group-hover:scale-105 group-hover:bg-[#56684A] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-[#D5CCBE] group-hover:text-[#56684A]/30 transition-colors">
                      {step.num}
                    </span>
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

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStepIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
              }`}
            />
          ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* CREATOR ELIGIBILITY SECTION (SIMPLE, ATTRACTIVE, MEDIUM SIZE CARDS) */}
      {/* ========================================================================= */}
      <section id="eligibility" className="py-12 sm:py-16 md:py-20 bg-[#F7F2EA] border-y border-[#E5DAC8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header (Single Clean Header) */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE1D2] border border-[#D8C9B4] text-[#3F4D36] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#56684A]" />
              <span>Creator Standards &amp; Milestones</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1E1B17]">
              Creator <span className="text-[#56684A] italic font-serif">Eligibility</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#635C53] max-w-xl mx-auto">
              Simple milestone pathways to unlock free artisanal spice hampers as your community grows with Foodville pure spices.
            </p>
          </div>

          {/* Mobile Swipe Guidance Bar */}
          <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
            <span className="font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#56684A]" />
              <span>3 Milestones</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
              <span>Milestone {activeTierIndex + 1} of {eligibilityTiers.length}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* 3 Milestone Cards Grid: Scrollable on Mobile, 3-Col Grid on Desktop */}
          <div
            onScroll={handleTierScroll}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {eligibilityTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto shrink-0 md:shrink snap-center relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                  tier.isFeatured
                    ? "border-2 border-[#56684A] shadow-md ring-2 ring-[#56684A]/10"
                    : "border border-[#E5DAC8] shadow-2xs hover:shadow-md hover:border-[#56684A]/40"
                }`}
              >
                {/* Featured Ribbon Badge */}
                {tier.isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#56684A] text-white px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-xs flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{tier.featuredText}</span>
                  </div>
                )}

                <div className="space-y-3">
                  {/* Header: Tier Badge & Reel Step */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs ${tier.tierColor}`}>
                      {tier.tierBadge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#736B63] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E8E1D5]">
                      {tier.reelNum}
                    </span>
                  </div>

                  {/* Hero Metric Banner */}
                  <div className="bg-[#FAF7F2] rounded-xl p-3 sm:p-3.5 border border-[#E8E1D5]">
                    <span className="text-[10px] uppercase font-bold text-[#8A8175] block tracking-wide">
                      Qualification Benchmark
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-serif font-black text-[#1E1B17] leading-none">
                        {tier.metricVal}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#56684A]">
                        {tier.metricLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#736B63] mt-1 font-medium leading-tight">
                      {tier.metricSub}
                    </p>
                  </div>

                  {/* Reward Unlock Highlight Box */}
                  <div className="rounded-xl p-3 bg-[#FDFCF9] border border-[#E8DFC9]">
                    <div className="flex items-center justify-between gap-1 text-xs">
                      <span className="font-extrabold text-[#1E1B17] flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-[#56684A]" />
                        <span>{tier.rewardTitle}</span>
                      </span>
                      <span className="text-[10px] font-bold text-[#56684A] bg-[#EBF1E6] px-2 py-0.5 rounded border border-[#C6D8BC] shrink-0">
                        {tier.rewardWeight}
                      </span>
                    </div>
                  </div>

                  {/* Key Checkpoints Checklist */}
                  <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5">
                    {tier.checkpoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-xs text-[#524B42]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE1]">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#56684A] hover:bg-[#435239] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Tier Dots */}
          <div className="flex md:hidden items-center justify-center gap-1.5 pt-2">
            {eligibilityTiers.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTierIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
                }`}
              />
            ))}
          </div>

          {/* Subtle Bottom Link to Policy */}
          <div className="mt-8 text-center">
            <a
              href="#policy"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#56684A] hover:text-[#3F4D36] bg-white hover:bg-[#F2ECE1] px-4 py-2 rounded-full border border-[#D5CCBE] shadow-2xs transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Need to review tagging guidelines or rules? Read Collaboration Policy ↓</span>
            </a>
          </div>

        </div>
      </section>



      {/* Rewards & Spice Hampers Showcase (Simple, Attractive, Medium Size) */}
      <section id="rewards" className="py-12 sm:py-16 md:py-20 bg-white border-y border-[#E5DAC8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
            Pure Delicious Rewards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1B17] tracking-tight">
            Spice Hampers You Can Claim
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5C554D] px-2">
            100% stone-ground, preservative-free pure spices in sealed 200g packs delivered free to your door.
          </p>
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
          <span className="font-semibold flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-[#56684A]" />
            <span>3 Hampers</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#92400E] font-bold text-[11px] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
            <span>Hamper {activeHamperIndex + 1} of {hampers.length}</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* 3 Hamper Cards Grid: Scrollable on Mobile, 3-Col Grid on Desktop */}
        <div
          onScroll={handleHamperScroll}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {hampers.map((item, idx) => (
            <div
              key={idx}
              className={`w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto shrink-0 md:shrink snap-center relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                item.isFeatured
                  ? "border-2 border-[#56684A] shadow-md ring-2 ring-[#56684A]/10"
                  : "border border-[#E5DAC8] shadow-2xs hover:shadow-md hover:border-[#56684A]/40"
              }`}
            >
              {/* Featured Ribbon Badge */}
              {item.isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#56684A] text-white px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-xs flex items-center gap-1 shrink-0 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="space-y-3">
                {/* Header: Badge & Reel ID */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#736B63] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E8E1D5]">
                    {item.reelNum}
                  </span>
                </div>

                {/* Hero Quantity & Weight Highlight Banner */}
                <div className="bg-[#FAF7F2] rounded-xl p-3 sm:p-3.5 border border-[#E8E1D5]">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="inline-flex items-baseline gap-1.5 text-[#1E1B17]">
                      <span className="text-3xl sm:text-4xl font-serif font-black leading-none">
                        {item.qtyPacks}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#56684A]">
                        × 200g Packs
                      </span>
                    </div>
                    <span className="text-[11px] font-extrabold text-[#2E2A26] bg-white px-2 py-0.5 rounded-md border border-[#D5CCBE] shadow-2xs shrink-0">
                      ⚖️ {item.totalWeight}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#736B63] mt-1 font-medium">
                    Pick any {item.qtyPacks} spices from our full catalog
                  </p>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E1B17] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C554D] leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Popular Spice Pills */}
                <div className="pt-2 border-t border-[#F0EAE1]">
                  <span className="text-[10px] uppercase font-bold text-[#8A8175] block mb-1">
                    Choice Ideas:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.samplePills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] sm:text-[11px] font-medium bg-[#F9F6F0] text-[#524B42] border border-[#E8E1D5] px-2 py-0.5 rounded-md"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Perks Checklist */}
                <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5">
                  {item.perks.map((perk, perkIdx) => (
                    <div key={perkIdx} className="flex items-center gap-1.5 text-xs text-[#524B42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="mt-4 pt-3 border-t border-[#F0EAE1]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#56684A] hover:bg-[#435239] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Hamper Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-2">
          {hampers.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeHamperIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
              }`}
            />
          ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BRAND COLLABORATION POLICY (SIMPLE, ATTRACTIVE, BALANCED CARDS) */}
      {/* ========================================================================= */}
      <section id="policy" className="py-12 sm:py-16 md:py-20 bg-[#F7F2EA] border-y border-[#E5DAC8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Single Clean Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#B91C1C] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Publishing Rules</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1E1B17]">
              Collaboration <span className="text-[#56684A] italic font-serif">Policy</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#635C53] max-w-xl mx-auto">
              To ensure mutual creator trust and authentic engagement, all participating creators agree to these simple publishing standards.
            </p>
          </div>

          {/* Mobile Swipe Guidance Bar */}
          <div className="flex md:hidden items-center justify-between pb-3 px-1 text-xs text-[#736B63]">
            <span className="font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#56684A]" />
              <span>4 Publishing Rules</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[#56684A] font-bold text-[11px] bg-[#EBF1E6] px-2.5 py-0.5 rounded-full border border-[#C6D8BC]">
              <span>Rule {activePolicyIndex + 1} of {policyRules.length}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* 4 Simple Policy Cards: Scrollable on Mobile, 2-Col Grid on Desktop */}
          <div
            onScroll={handlePolicyScroll}
            className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 pt-1 px-4 md:px-0 -mx-4 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {policyRules.map((rule, idx) => (
              <div
                key={idx}
                className={`w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-200 flex flex-col justify-between ${
                  rule.isWarning
                    ? "border-red-200 hover:border-red-300 shadow-2xs"
                    : "border-[#E5DAC8] hover:border-[#56684A]/40 shadow-2xs"
                }`}
              >
                <div>
                  {/* Top row: Number and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`w-8 h-8 rounded-xl font-bold font-mono text-xs flex items-center justify-center border ${
                        rule.isWarning
                          ? "bg-red-50 text-[#B91C1C] border-red-200"
                          : "bg-[#EBF1E6] text-[#56684A] border-[#C6D8BC]"
                      }`}
                    >
                      {rule.num}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${rule.badgeColor}`}
                    >
                      {rule.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-[#1E1B17] text-base mb-1.5">
                    {rule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#635C53] leading-relaxed">
                    {rule.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE1]">
                  {rule.footerType === "verify" && (
                    <div className="flex items-center gap-1.5 text-xs text-[#524B42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                      <span>Verified automatically prior to dispatch</span>
                    </div>
                  )}

                  {rule.footerType === "tag" && (
                    <div className="flex items-center gap-1.5 text-xs text-[#524B42]">
                      <Video className="w-3.5 h-3.5 text-[#56684A] shrink-0" />
                      <span>Video tag + caption mention required</span>
                    </div>
                  )}

                  {rule.footerType === "copy" && (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] font-mono font-bold text-[#56684A] bg-[#EBF1E6] px-1.5 py-0.5 rounded">#Foodville</span>
                        <span className="text-[10px] font-mono font-bold text-[#56684A] bg-[#EBF1E6] px-1.5 py-0.5 rounded">#FoodvilleSpices</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyTemplate}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#2E2A26] font-bold text-[11px] border border-[#DED4C3] transition-colors cursor-pointer shrink-0"
                      >
                        {copiedTemplate ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#56684A]" />
                            <span>Copy Template</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {rule.footerType === "warning" && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B91C1C]">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#B91C1C] shrink-0" />
                      <span>Permanent partnership • No deletion allowed</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Policy Dots */}
          <div className="flex md:hidden items-center justify-center gap-1.5 pt-2">
            {policyRules.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePolicyIndex === i ? "w-6 bg-[#56684A]" : "w-1.5 bg-[#D5CCBE]"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Creator Best Practices & Tagging Guidelines */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] border-y border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E8E1D5] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-2xs">
            
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
                    <strong>Tag &amp; Promote:</strong> Tag <span className="text-[#56684A] font-bold">@foodville15</span> in your caption &amp; video. Encourage your viewers to purchase authentic Foodville spices through our website <a href="https://www.foodvilleindia.com" target="_blank" rel="noopener noreferrer" className="text-[#56684A] font-bold underline">www.foodvilleindia.com</a> or on <span className="font-bold text-[#1E1B17]">Flipkart</span>. Add <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded text-[#B91C1C] font-semibold border border-[#E8E1D5] text-[11px]">#FoodvilleSpices</code> and <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded text-[#B91C1C] font-semibold border border-[#E8E1D5] text-[11px]">#RealFoodRealFlavour</code>.
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
                    <strong>Any Creative Format:</strong> Show your creativity your way! Whether it&apos;s a quick 2-minute snack hack, gourmet family meal, tasting reaction, or daily kitchen routine, genuine passion shines brightest.
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

            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#DDD3C4] shadow-2xs text-center space-y-3 sm:space-y-4">
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

                  <div className="bg-[#FAF7F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#E8E1D5] max-w-md mx-auto text-left space-y-2.5 text-xs sm:text-sm text-[#4A433B]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E8E1D5] text-xs">
                      <span className="font-semibold text-[#7A7368]">Collaboration Policy:</span>
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Accepted &amp; Confirmed</span>
                      </span>
                    </div>

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

                  {/* Optional Recipe Notes & Spice Choice */}
                  <div className="space-y-1">
                    <label className="block text-xs sm:text-sm font-bold text-[#1E1B17]">
                      Recipe &amp; Preferred Spices (200g Packs)
                    </label>
                    <textarea
                      name="recipeNotes"
                      rows={2}
                      value={formData.recipeNotes}
                      onChange={handleChange}
                      placeholder="e.g. Recipe name & your preferred 3 spices (or 5/7 spices) for your 200g hamper packs"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5CCBE] text-[#1E1B17] text-base sm:text-sm focus:bg-white focus:border-[#56684A] focus:ring-2 focus:ring-[#56684A]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Anti-Bot Honeypots */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
                    <input type="text" name="b_confirm" tabIndex={-1} autoComplete="off" value={formData.b_confirm} onChange={handleChange} />
                  </div>

                  {/* Mandatory Collaboration Policy Agreement */}
                  <div className="pt-1">
                    <label
                      className={`flex items-start gap-2.5 p-3 rounded-xl border transition-colors cursor-pointer ${
                        agreedPolicy
                          ? "bg-[#FAF7F2] border-[#56684A]/30 hover:bg-[#F5EFE6]"
                          : "bg-red-50/70 border-red-200 hover:bg-red-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        required
                        checked={agreedPolicy}
                        onChange={(e) => setAgreedPolicy(e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-[#56684A] rounded border-[#D5CCBE] focus:ring-[#56684A] accent-[#56684A] shrink-0 cursor-pointer"
                      />
                      <span className="text-[11px] sm:text-xs text-[#4A433B] leading-relaxed select-none">
                        I confirm that I follow <strong className="text-[#56684A]">@foodville15</strong>, have tagged Foodville with required hashtags in my video &amp; caption, and agree to the <strong>No Deletion &amp; No Unfollow</strong> collaboration policy.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting || !agreedPolicy}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-[#56684A] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#435239] transition-all transform active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer min-h-[48px]"
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
