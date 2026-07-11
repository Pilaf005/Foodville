"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useCheckout } from "@/features/checkout/hooks/useCheckout";
import CartItem from "@/features/cart/components/CartItem";
import ProductCard from "@/features/products/components/ProductCard";
import LocationModal from "@/features/checkout/components/location/LocationModal";
import PaymentModal from "@/features/checkout/components/PaymentModal";

import { DELIVERY_THRESHOLD, DELIVERY_CHARGE } from "@/features/cart/constants";

const PAYMENT_METHOD_LABELS = {
  cod:        "Cash on Delivery",
  gpay:       "Google Pay UPI",
  phonepe:    "PhonePe UPI",
  amazonpay:  "Amazon Pay UPI",
  card:       "Credit / Debit Card",
  netbanking: "Netbanking",
};

/** Everything except COD is settled online through Razorpay. */
const toGatewayMethod = (uiMethod) => (uiMethod === "cod" ? "cod" : "razorpay");

/** The checkout LocationModal's address shape → the API's address shape. */
function toApiAddress(a) {
  if (!a) return null;
  return {
    label: a.label || "Home",
    receiverName: a.name || a.receiverName || "",
    phone: String(a.phone || "").replace(/\D/g, "").slice(-10),
    houseFlat: a.completeAddress || a.houseFlat || "",
    apartment: a.area || a.apartment || "",
    landmark: a.landmark || "",
    city: a.city || "",
    state: a.state || "",
    pincode: a.pincode || "",
    deliveryInstructions: a.deliveryInstructions || "",
    ...(a.coordinates?.lat != null ? { coordinates: a.coordinates } : {}),
  };
}

// ─── Utils ────────────────────────────────────────────────────────────────
function calcBilling(cart) {
  const totalSellingPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalMrp          = cart.reduce((sum, item) => sum + item.qty * (item.mrp || item.price), 0);
  const totalSavings      = totalMrp - totalSellingPrice;
  const deliveryCharge    = totalSellingPrice >= DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  const totalPayable      = totalSellingPrice + deliveryCharge;
  return { totalSellingPrice, totalMrp, totalSavings, deliveryCharge, totalPayable };
}

function formatAddressText(address) {
  if (!address) return "No delivery address selected";
  return [address.completeAddress, address.area, address.city].filter(Boolean).join(", ");
}

function formatAddressLabel(address) {
  return address ? `Delivering to ${address.label || "Home"}` : "Delivery Location";
}

// ─── Sub-components ───────────────────────────────────────────────────────
function CartEmptyState() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
      <div className="w-20 h-20 rounded-full bg-olive/10 grid place-items-center text-olive mb-4">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
          <circle cx="9" cy="21" r="1.2" />
          <circle cx="17" cy="21" r="1.2" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Your cart is empty</h2>
      <p className="text-sm text-gray-500 mt-1">Add some items from our product collection to proceed with checkout.</p>
      <Link href="/" className="mt-6 bg-[#6B7F59] hover:bg-[#5a6b4a] text-white text-sm font-bold px-8 py-3 rounded-2xl shadow-md transition">
        Shop Products
      </Link>
    </main>
  );
}

function CartHeader({ totalQty }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <Link href="/" className="p-3 rounded-full hover:bg-gray-100 transition text-gray-600" aria-label="Back to shop">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Link>
      <h1 className="text-xl sm:text-2xl font-black text-gray-900">Checkout ({totalQty})</h1>
    </div>
  );
}

function CartRecommendations({ recommendations }) {
  if (recommendations.length === 0) return null;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-base font-bold text-gray-900">You might also like</h2>
        <span className="text-xs text-gray-400 font-semibold">{recommendations.length} products</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin snap-x">
        {recommendations.map((p) => (
          <div key={p.id} className="w-[200px] min-w-[200px] shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CartBillPanel({
  billing, activeAddress, selectedMethod, isPlacing,
  onOpenLocation, onOpenPayment, onPlaceOrder,
}) {
  const { totalSellingPrice, totalMrp, totalSavings, deliveryCharge, totalPayable } = billing;
  const addressText  = formatAddressText(activeAddress);
  const addressLabel = formatAddressLabel(activeAddress);
  const paymentLabel = PAYMENT_METHOD_LABELS[selectedMethod] ?? selectedMethod;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-5">
      <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Bill details</h3>

      {/* Price breakdown */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between text-gray-500">
          <span>Items total</span>
          <div className="flex items-baseline gap-2">
            {totalSavings > 0 && <span className="line-through text-gray-300 text-xs">₹{totalMrp}</span>}
            <span className="font-bold text-gray-800">₹{totalSellingPrice}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <span>Delivery charges</span>
          {deliveryCharge === 0 ? (
            <span className="text-green-600 font-bold">Free Delivery</span>
          ) : (
            <span className="font-bold text-gray-800">₹{deliveryCharge}</span>
          )}
        </div>

        {totalSavings > 0 && (
          <div className="flex items-center justify-between text-green-600 font-bold">
            <span>Total Savings</span>
            <span>- ₹{totalSavings}</span>
          </div>
        )}

        {deliveryCharge > 0 && (
          <p className="text-[11px] text-amber-600 font-semibold bg-amber-50 rounded-xl px-3 py-2">
            Add products worth ₹{DELIVERY_THRESHOLD - totalSellingPrice} more for Free Delivery!
          </p>
        )}
      </div>

      {/* Total payable */}
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <span className="text-base font-bold text-gray-900">Total Payable</span>
        <span className="text-xl font-black text-gray-900">₹{totalPayable}</span>
      </div>

      {/* Delivery address */}
      <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-xl bg-rose-50 grid place-items-center text-rose-500 shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-900">{addressLabel}</p>
            <p className="text-[11px] text-gray-500 leading-snug mt-0.5 truncate max-w-[200px]">{addressText}</p>
          </div>
        </div>
        <button onClick={onOpenLocation} className="text-xs font-bold text-rose-600 hover:text-rose-700 transition shrink-0 px-2 py-2 rounded-lg hover:bg-rose-50">
          Change
        </button>
      </div>

      {/* Payment method */}
      {selectedMethod && (
        <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-green-50 grid place-items-center text-[#6B7F59] shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-900">Payment Mode</p>
              <p className="text-[11px] text-gray-500 leading-snug mt-0.5 capitalize">{paymentLabel}</p>
            </div>
          </div>
          <button onClick={onOpenPayment} className="text-xs font-bold text-[#6B7F59] transition shrink-0 px-2 py-2 rounded-lg hover:bg-[#6B7F59]/5">
            Change
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="pt-2">
        {selectedMethod ? (
          <button
            onClick={onPlaceOrder}
            disabled={isPlacing}
            className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block disabled:opacity-60"
          >
            {isPlacing ? "PLACING ORDER…" : `PLACE ORDER — ₹${totalPayable}`}
          </button>
        ) : (
          <button
            onClick={onOpenPayment}
            className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block"
          >
            CHOOSE PAYMENT
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Mobile sticky checkout bar ───────────────────────────────────────────
function MobileStickyCheckout({ billing, selectedMethod, isPlacing, onOpenPayment, onPlaceOrder }) {
  const { totalPayable } = billing;
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Total Payable</p>
          <p className="text-lg font-black text-gray-900">₹{totalPayable}</p>
        </div>
        {selectedMethod ? (
          <button
            onClick={onPlaceOrder}
            disabled={isPlacing}
            className="flex-1 bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-3.5 px-6 rounded-2xl transition shadow-md disabled:opacity-60"
          >
            {isPlacing ? "PLACING…" : "PLACE ORDER"}
          </button>
        ) : (
          <button
            onClick={onOpenPayment}
            className="flex-1 bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-3.5 px-6 rounded-2xl transition shadow-md"
          >
            CHOOSE PAYMENT
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function CartPage() {
  const router = useRouter();
  const { cart } = useCart();
  const { user, isAuthenticated, isLoading } = useAuth();
  const { placeOrder, isPlacing } = useCheckout();

  const [activeAddress,  setActiveAddress]  = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPaymentOpen,  setIsPaymentOpen]  = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("activeAddress");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setActiveAddress(JSON.parse(raw));
    } catch (_) {}
  }, []);

  // Recommendations now come from the catalog API (same category as the cart).
  const firstCategory = cart[0]?.slug ? undefined : undefined;
  const { products: recommendationPool } = useProducts({ limit: 12, sort: "rating" });

  if (!cart || cart.length === 0) return <CartEmptyState />;

  const billing  = calcBilling(cart);
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartIds = new Set(cart.map((i) => i.id));
  const recommendations = recommendationPool.filter((p) => !cartIds.has(p.id)).slice(0, 8);

  async function handlePlaceOrder() {
    // Checkout requires an account — this is where guests are asked to sign in.
    if (!isLoading && !isAuthenticated) {
      toast.info("Please sign in to place your order.");
      router.push("/login?redirect=/cart");
      return;
    }
    if (!activeAddress) {
      setIsLocationOpen(true);
      return;
    }

    const address = toApiAddress(activeAddress);
    if (!address?.receiverName || !address?.phone || !address?.city) {
      toast.error("Please add a delivery address with a name and phone number.");
      setIsLocationOpen(true);
      return;
    }

    try {
      await placeOrder({
        address,
        paymentMethod: toGatewayMethod(selectedMethod),
        user,
      });
    } catch {
      /* useCheckout already surfaced the error */
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8 pb-28 lg:pb-8">
      <CartHeader totalQty={totalQty} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left column: Cart items & Recommendations */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <div className="divide-y divide-gray-100">
              {cart.map((item) => <CartItem key={`${item.id}-${item.unit}`} item={item} />)}
            </div>
          </div>
          <CartRecommendations recommendations={recommendations} />
        </div>

        {/* Right column: Sticky bill panel — desktop only visible via lg: */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <CartBillPanel
            billing={billing}
            activeAddress={activeAddress}
            selectedMethod={selectedMethod}
            isPlacing={isPlacing}
            onOpenLocation={() => setIsLocationOpen(true)}
            onOpenPayment={() => setIsPaymentOpen(true)}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>

      {/* Mobile sticky bottom checkout bar */}
      <MobileStickyCheckout
        billing={billing}
        selectedMethod={selectedMethod}
        isPlacing={isPlacing}
        onOpenPayment={() => setIsPaymentOpen(true)}
        onPlaceOrder={handlePlaceOrder}
      />

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onAddressSaved={(addr) => setActiveAddress(addr)}
      />
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        selectedMethod={selectedMethod}
        onSelectMethod={(id) => setSelectedMethod(id)}
        totalPayable={billing.totalPayable}
      />
    </main>
  );
}
