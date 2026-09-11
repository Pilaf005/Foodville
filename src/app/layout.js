import "./globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CompleteProfileBanner from "@/components/common/CompleteProfileBanner";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import AppProviders from "@/providers";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { Nunito_Sans } from "next/font/google";
// ChatWidgetLoader is a "use client" component that lazy-loads FoodvilleChatWidget with ssr:false
import ChatWidgetLoader from "@/components/common/ChatWidgetLoader";

// Self-hosted font via next/font — eliminates the 440ms render-blocking external Google Fonts request
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-sans",
  display: "swap",
});

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
    <html lang="en" className={nunitoSans.variable}>
      <head>
        {/* Preconnect to Cloudflare R2 CDN — eliminates DNS/TLS handshake delay for all product images */}
        <link rel="preconnect" href="https://pub-ea082eb584df4a42a07e202cd67dcb02.r2.dev" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased flex flex-col justify-between overflow-x-hidden">
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
                <ChatWidgetLoader />
              </ErrorBoundary>
            </WishlistProvider>
          </CartProvider>
        </AppProviders>
      </body>
    </html>
  );
}
