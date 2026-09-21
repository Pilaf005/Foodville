import EventHero from "./components/EventHero";
import EventSchedule from "./components/EventSchedule";
import EventStallExperience from "./components/EventStallExperience";
import EventWhyCollaborate from "./components/EventWhyCollaborate";
import EventProductShowcase from "./components/EventProductShowcase";
import EventFaq from "./components/EventFaq";
import EventFooterBanner from "./components/EventFooterBanner";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foodvilleindia.com";

export const metadata = {
  title: "Foodville at UP International Trade Show 2026 | Event Showcase & Creator Collab",
  description:
    "Join Foodville at the UP International Trade Show (UPITS 2026), India Expo Centre, Greater Noida (25–29 September). Experience 100% natural Indian spices, dehydrated powders, shoot reels, and collect exclusive creator gift hampers!",
  keywords: [
    "UP International Trade Show 2026",
    "UPITS 2026",
    "Foodville Trade Show",
    "Foodville Event Greater Noida",
    "India Expo Centre Greater Noida Events",
    "Food Creator Collaboration",
    "Dehydrated Vegetable Powders",
    "Authentic Indian Spices",
    "Foodville India",
  ],
  alternates: {
    canonical: `${BASE_URL}/event`,
  },
  openGraph: {
    title: "Foodville at UP International Trade Show 2026 | Event Showcase",
    description:
      "Visit Foodville at India Expo Centre, Greater Noida from 25–29 Sept! Taste test pure Indian spices, shoot creator content, and claim your free gift hamper.",
    url: `${BASE_URL}/event`,
    siteName: "Foodville Consumer Products Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/event/creator-invitation-hero.jpg`,
        width: 1200,
        height: 1200,
        alt: "Foodville at UP International Trade Show 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodville at UP International Trade Show 2026",
    description:
      "Join us at India Expo Centre, Greater Noida from 25–29 Sept. Experience authentic Indian spices & collect creator gift hampers!",
    images: [`${BASE_URL}/images/event/creator-invitation-hero.jpg`],
  },
};

export default function EventPage() {
  // Schema.org Event structured data for rich search snippet indexing
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Foodville at UP International Trade Show 2026",
    startDate: "2026-09-25T11:00:00+05:30",
    endDate: "2026-09-29T20:00:00+05:30",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "India Expo Centre & Mart",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 23 -25 & 27- 29 Knowledge Park - II Gautam Budh Nagar",
        addressLocality: "Greater Noida",
        postalCode: "201306",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    image: [`${BASE_URL}/images/event/creator-invitation-hero.jpg`],
    description:
      "Experience authentic Indian spices, dehydrated powders, and creator collaborations with Foodville at the UP International Trade Show 2026 in Greater Noida.",
    organizer: {
      "@type": "Organization",
      name: "Foodville Consumer Products Private Limited",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/event`,
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-09-21T00:00:00+05:30",
    },
    performer: {
      "@type": "Organization",
      name: "Foodville",
    },
  };

  return (
    <div className="-mx-4 sm:-mx-6 min-h-screen bg-[#FAF7F2] text-[#2E2A26] selection:bg-[#56684A] selection:text-white pb-0 overflow-x-hidden pt-2 sm:pt-3">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      {/* 1. Hero Section */}
      <EventHero />

      {/* 2. Schedule, Timings & Venue Logistics */}
      <EventSchedule />

      {/* 3. 3-Step Stall Walkthrough & Hamper Showcase */}
      <EventStallExperience />

      {/* 4. Why Collaborate with Foodville */}
      <EventWhyCollaborate />

      {/* 5. Exhibition Product Catalogue */}
      <EventProductShowcase />

      {/* 6. Frequently Asked Questions */}
      <EventFaq />

      {/* 8. Inspiring Closing Banner & Social Links */}
      <EventFooterBanner />
    </div>
  );
}
