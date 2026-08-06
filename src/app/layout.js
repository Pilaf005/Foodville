import "./globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CompleteProfileBanner from "@/components/common/CompleteProfileBanner";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import AppProviders from "@/providers";
import ErrorBoundary from "@/components/common/ErrorBoundary";

import FoodvilleChatWidget from "@/components/common/FoodvilleChatWidget";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foodvilleindia.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Foodville — Pure Spice Powders, Seeds & Dry Fruits",
    template: "%s | Foodville Consumer Products Private Limited",
  },
  description:
    "Foodville Consumer Products Private Limited offers 100% natural, premium dehydrated spice powders, seeds, dry fruits, and herbal wellness products. Order online with nationwide delivery.",
  keywords: [
    "Foodville",
    "foodvilleindia",
    "Foodville Consumer Products Private Limited",
    "Foodville India",
    "Foodville Spices",
    "Spice Powders",
    "Dehydrated Red Onion Powder",
    "Pure Moringa Powder",
    "Dry Fruits Online",
    "Herbal Seeds",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Foodville — Pure Spice Powders, Seeds & Dry Fruits",
    description: "Foodville Consumer Products Private Limited offers 100% natural, premium dehydrated spice powders, seeds, dry fruits, and herbal wellness products.",
    url: BASE_URL,
    siteName: "Foodville Consumer Products Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/icon.png`,
        width: 512,
        height: 512,
        alt: "Foodville Consumer Products Private Limited Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foodville Consumer Products Private Limited",
  legalName: "Foodville Consumer Products Private Limited",
  alternateName: ["Foodville", "foodvilleindia", "Foodville India", "Foodville Spices"],
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@foodvilleindia.com",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Foodville Consumer Products Private Limited",
  alternateName: ["Foodville", "foodvilleindia", "Foodville India"],
  url: BASE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,400;1,6..12,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased flex flex-col justify-between">
        <AppProviders>
          <CartProvider>
            <WishlistProvider>
              <div className="flex-1">
                <ErrorBoundary>
                  <Navbar />
                </ErrorBoundary>
                <ErrorBoundary>
                  <CompleteProfileBanner />
                </ErrorBoundary>
                <main className="mx-auto max-w-6xl px-4 pt-4 pb-3 sm:py-6 sm:px-6">
                  <ErrorBoundary>
                    {children}
                  </ErrorBoundary>
                </main>
              </div>
              <ErrorBoundary>
                <Footer />
              </ErrorBoundary>
              <ScrollToTop />
              <ErrorBoundary>
                <FoodvilleChatWidget />
              </ErrorBoundary>
            </WishlistProvider>
          </CartProvider>
        </AppProviders>
      </body>
    </html>
  );
}
