"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import CartItem from "@/components/cart/CartItem";
import ProductCard from "@/components/ProductCard";
import LocationModal from "@/components/location/LocationModal";
import PaymentModal from "@/components/checkout/PaymentModal";

export default function CartPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [activeAddress, setActiveAddress] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  function handlePlaceOrder() {
    if (!activeAddress) {
      setIsLocationOpen(true);
      return;
    }
    const orderData = {
      orderId: "ORD" + Math.floor(1000000000 + Math.random() * 9000000000),
      items: cart,
      payable: totalPayable,
      paymentMethod: selectedMethod,
      address: activeAddress,
    };
    localStorage.setItem("lastOrder", JSON.stringify(orderData));
    clearCart();
    router.push("/order-confirmed");
  }

  // Load active address
  useEffect(() => {
    try {
      const raw = localStorage.getItem("activeAddress");
      if (raw) setActiveAddress(JSON.parse(raw));
    } catch (_) {}
  }, []);

  if (!cart || cart.length === 0) {
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
        <Link
          href="/"
          className="mt-6 bg-[#6B7F59] hover:bg-[#5a6b4a] text-white text-sm font-bold px-8 py-3 rounded-2xl shadow-md transition"
        >
          Shop Products
        </Link>
      </main>
    );
  }

  // Calculate bill pricing
  const totalSellingPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalMrp = cart.reduce((sum, item) => sum + item.qty * (item.mrp || item.price), 0);
  const totalSavings = totalMrp - totalSellingPrice;

  // Delivery charge calculations
  const deliveryThreshold = 500;
  const deliveryCharge = totalSellingPrice >= deliveryThreshold ? 0 : 40;
  const totalPayable = totalSellingPrice + deliveryCharge;

  // Recommendations: select products from similar categories of items currently in the cart
  const cartProductIds = new Set(cart.map((item) => String(String(item.id).split("-")[0])));
  const cartCategories = new Set(
    products
      .filter((p) => cartProductIds.has(String(p.id)))
      .map((p) => p.category)
  );

  const recommendations = products
    .filter(
      (p) =>
        cartCategories.has(p.category) &&
        !cartProductIds.has(String(p.id))
    )
    .slice(0, 8);

  if (recommendations.length < 4) {
    const extra = products
      .filter((p) => !cartProductIds.has(String(p.id)) && !recommendations.some((r) => r.id === p.id))
      .slice(0, 6);
    recommendations.push(...extra);
  }

  const addressText = activeAddress
    ? `${activeAddress.completeAddress ? `${activeAddress.completeAddress}, ` : ""}${activeAddress.area ? `${activeAddress.area}, ` : ""}${activeAddress.city}`
    : "No delivery address selected";

  const addressLabel = activeAddress
    ? `Delivering to ${activeAddress.label || "Home"}`
    : "Delivery Location";

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
          aria-label="Back to shop"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-2xl font-black text-gray-900">
          Checkout ({cart.reduce((sum, item) => sum + item.qty, 0)})
        </h1>
      </div>

      {/* Two column grid layout for desktop / stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Cart items & Recommendations (60% width) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Cart items list */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-base font-bold text-gray-900">You might also like</h2>
                <span className="text-xs text-gray-400 font-semibold">{recommendations.length} products</span>
              </div>
              {/* Horizontal scroll row with proper desktop card sizes */}
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin snap-x">
                {recommendations.map((p) => (
                  <div key={p.id} className="w-[200px] min-w-[200px] shrink-0 snap-start">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Bill details & Address & Payment Call-to-action (40% width) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
              Bill details
            </h3>

            {/* Price breakdown */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-gray-500">
                <span>Items total</span>
                <div className="flex items-baseline gap-2">
                  {totalSavings > 0 && (
                    <span className="line-through text-gray-300 text-xs">₹{totalMrp}</span>
                  )}
                  <span className="font-bold text-gray-800">₹{totalSellingPrice}</span>
                </div>
              </div>

              {/* Delivery charge */}
              <div className="flex items-center justify-between text-gray-500">
                <span>Delivery charges</span>
                {deliveryCharge === 0 ? (
                  <span className="text-green-600 font-bold">Free Delivery</span>
                ) : (
                  <span className="font-bold text-gray-800">₹{deliveryCharge}</span>
                )}
              </div>

              {/* Total Savings */}
              {totalSavings > 0 && (
                <div className="flex items-center justify-between text-green-600 font-bold">
                  <span>Total Savings</span>
                  <span>- ₹{totalSavings}</span>
                </div>
              )}

              {/* Strikethrough/Free delivery notice helper */}
              {deliveryCharge > 0 && (
                <p className="text-[11px] text-amber-600 font-semibold bg-amber-50 rounded-xl px-3 py-2">
                  Add products worth ₹{deliveryThreshold - totalSellingPrice} more for Free Delivery!
                </p>
              )}
            </div>

            {/* Total payable */}
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <span className="text-base font-bold text-gray-900">Total Payable</span>
              <span className="text-xl font-black text-gray-900">₹{totalPayable}</span>
            </div>

            {/* Delivery address segment */}
            <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-50 grid place-items-center text-rose-500 shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-gray-900">{addressLabel}</p>
                  <p className="text-[11px] text-gray-500 leading-snug mt-0.5 truncate max-w-[200px]">
                    {addressText}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLocationOpen(true)}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 transition shrink-0"
              >
                Change
              </button>
            </div>

            {/* Selected payment method segment */}
            {selectedMethod && (
              <div className="border-t border-gray-100 pt-4 flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-xl bg-green-50 grid place-items-center text-[#6B7F59] shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900">Payment Mode</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5 capitalize">
                      {selectedMethod === "cod" ? "Cash on Delivery" : selectedMethod === "gpay" ? "Google Pay UPI" : selectedMethod === "phonepe" ? "PhonePe UPI" : selectedMethod === "amazonpay" ? "Amazon Pay UPI" : selectedMethod}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="text-xs font-bold text-[#6B7F59] hover:underline shrink-0"
                >
                  Change
                </button>
              </div>
            )}

            {/* Choose Payment / Place Order Action */}
            <div className="pt-2">
              {selectedMethod ? (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block"
                >
                  PLACE ORDER — ₹{totalPayable}
                </button>
              ) : (
                <button
                  onClick={() => setIsPaymentOpen(true)}
                  className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block"
                >
                  CHOOSE PAYMENT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Location modal */}
      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onAddressSaved={(addr) => setActiveAddress(addr)}
      />

      {/* Payment selection modal — opens directly from cart */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        selectedMethod={selectedMethod}
        onSelectMethod={(id) => setSelectedMethod(id)}
        totalPayable={totalPayable}
      />
    </main>
  );
}
