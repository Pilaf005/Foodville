import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: "Foodville — Powders, Seeds & Dry Fruits",
  description:
    "Shop premium spice powders, seeds, dry fruits and herbal wellness products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased flex flex-col justify-between">
        <CartProvider>
          <WishlistProvider>
            <div className="flex-1">
              <Navbar />
              <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
                {children}
              </main>
            </div>
            <Footer />
            <ScrollToTop />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
