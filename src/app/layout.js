import "./globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CompleteProfileBanner from "@/components/common/CompleteProfileBanner";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import AppProviders from "@/providers";

export const metadata = {
  title: "Foodville — Powders, Seeds & Dry Fruits",
  description:
    "Shop premium spice powders, seeds, dry fruits and herbal wellness products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased flex flex-col justify-between">
        <AppProviders>
          <CartProvider>
            <WishlistProvider>
              <div className="flex-1">
                <Navbar />
                <CompleteProfileBanner />
                <main className="mx-auto max-w-6xl px-4 pt-4 pb-3 sm:py-6 sm:px-6">
                  {children}
                </main>
              </div>
              <Footer />
              <ScrollToTop />
            </WishlistProvider>
          </CartProvider>
        </AppProviders>
      </body>
    </html>
  );
}
