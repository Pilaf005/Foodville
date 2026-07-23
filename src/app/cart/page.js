"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo, useCallback } from "react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useCheckout } from "@/features/checkout/hooks/useCheckout";
import CartItem from "@/features/cart/components/CartItem";
import ProductCard from "@/features/products/components/ProductCard";
import AddressPickerModal from "@/features/address/components/AddressPickerModal";
import PaymentModal from "@/features/checkout/components/PaymentModal";
import CouponSection from "@/features/cart/components/CouponSection";
import { useAddresses } from "@/features/profile/hooks/useProfile";
import {
  DEFAULT_COUPONS,
  evaluateCouponClient,
  getBestCouponClient,
  getNextDiscountTierClient,
} from "@/features/cart/utils/pricingUtils";

import { DELIVERY_THRESHOLD, DELIVERY_CHARGE } from "@/features/cart/constants";

const PAYMENT_METHOD_LABELS = {
  cod: "Cash on Delivery",
  razorpay: "Pay Online (UPI · Cards · Netbanking)",
};

function calcBilling(cart) {
  const totalSellingPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalMrp          = cart.reduce((sum, item) => sum + item.qty * (item.mrp || item.price), 0);
  const totalSavings      = totalMrp - totalSellingPrice;
  const deliveryCharge    = cart.length > 0 ? DELIVERY_CHARGE : 0;
  const totalPayable      = totalSellingPrice + deliveryCharge;
  return { totalSellingPrice, totalMrp, totalSavings, deliveryCharge, totalPayable };
}

function formatAddressText(address) {
  if (!address) return "No delivery address selected";
  return [address.houseFlat, address.area, address.city, address.pincode].filter(Boolean).join(", ");
}

function formatAddressLabel(address) {
  return address ? `Delivering to ${address.label || "Home"}` : "Delivery Address";
}

function formatMoney(val) {
  const num = Number(val) || 0;
  return num % 1 === 0 ? String(num) : num.toFixed(2);
}

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
    <div className="flex items-center gap-2 mb-4 sm:mb-8 pt-1">
      <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-black/5 transition text-ink flex items-center justify-center shrink-0" aria-label="Back to shop">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Link>
      <h1 className="text-lg sm:text-2xl font-black text-gray-900 leading-none">Checkout ({totalQty})</h1>
    </div>
  );
}

function CartBillPanel({
  billing, activeAddress, selectedMethod, isPlacing,
  availableCoupons, appliedCoupon, onApplyCoupon, onRemoveCoupon, nextTier,
  onOpenLocation, onOpenPayment, onPlaceOrder,
}) {
  const { 
    totalSellingPrice, totalMrp, totalSavings, 
    discount = 0, discountLabel = "", couponCode = "",
    baseDeliveryCharge, codCharge, gst, 
    deliveryCharge, totalPayable 
  } = billing;
  const addressText  = formatAddressText(activeAddress);
  const addressLabel = formatAddressLabel(activeAddress);
  const paymentLabel = PAYMENT_METHOD_LABELS[selectedMethod] ?? selectedMethod;

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Coupon Section Component */}
      <CouponSection
        availableCoupons={availableCoupons}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={onApplyCoupon}
        onRemoveCoupon={onRemoveCoupon}
        subtotal={totalSellingPrice}
      />

      <div className="bg-white rounded-2xl sm:rounded-3xl border border-cardline/60 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-4 sm:space-y-5">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 border-b border-gray-100 pb-2.5 sm:pb-3">Bill details</h3>

        {/* Free Delivery Progress Banner */}
        {(() => {
          const amountLeft = DELIVERY_THRESHOLD - totalSellingPrice;
          const isEligible = totalSellingPrice > DELIVERY_THRESHOLD;
          const progressPct = Math.min(100, (totalSellingPrice / DELIVERY_THRESHOLD) * 100);
          if (isEligible) {
            return (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-emerald-700">
                <span className="text-base">🎉</span>
                <span>You've unlocked <strong>FREE delivery</strong> on this order!</span>
              </div>
            );
          }
          return (
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                <span className="text-sm">🚚</span>
                <span>
                  Add <strong className="text-amber-900">₹{formatMoney(amountLeft)}</strong> more for <strong className="text-emerald-700">FREE delivery!</strong>
                </span>
              </div>
              <div className="w-full h-1.5 bg-amber-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          );
        })()}

        {/* Discount Motivation Progress Banner */}
        {(() => {
          if (!nextTier) {
            return (
              <div className="flex items-center gap-2 bg-[#6B7F59]/10 border border-[#6B7F59]/30 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#5a6b4a]">
                <span className="text-base">🎉</span>
                <span>Maximum discount unlocked! Saving <strong>Flat ₹500 OFF</strong> with code <strong>MAX500</strong>.</span>
              </div>
            );
          }
          return (
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2.5 space-y-1.5">
              <div className="flex items-center justify-between gap-1.5 text-xs font-semibold text-indigo-950">
                <span className="flex items-center gap-1">
                  <span>🏷️</span>
                  <span>
                    Add <strong>₹{formatMoney(nextTier.amountLeft)}</strong> more for <strong className="text-indigo-700 font-extrabold">{nextTier.percentLabel} OFF</strong>!
                  </span>
                </span>
                <span className="text-[10px] font-black bg-indigo-200 text-indigo-900 px-1.5 py-0.5 rounded uppercase">
                  {nextTier.nextCode}
                </span>
              </div>
              <div className="w-full h-1.5 bg-indigo-200/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${nextTier.progressPct}%` }}
                />
              </div>
            </div>
          );
        })()}

        {/* Price breakdown */}
        <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-gray-500">
            <span>Items total</span>
            <div className="flex items-baseline gap-2">
              {totalSavings > 0 && <span className="line-through text-gray-300 text-[10px] sm:text-xs">₹{formatMoney(totalMrp)}</span>}
              <span className="font-bold text-gray-800">₹{formatMoney(totalSellingPrice)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-gray-500">
            <span>Delivery charges</span>
            <span className="font-bold text-gray-800">
              {baseDeliveryCharge > 0 ? `₹${formatMoney(baseDeliveryCharge)}` : <span className="text-emerald-600 font-extrabold uppercase">FREE</span>}
            </span>
          </div>

          {codCharge > 0 && (
            <div className="flex items-center justify-between text-gray-500">
              <span>COD Handling Fee</span>
              <span className="font-bold text-gray-800">₹{formatMoney(codCharge)}</span>
            </div>
          )}

          {gst > 0 && (
            <div className="flex items-center justify-between text-gray-500">
              <span>Shipping GST (18%)</span>
              <span className="font-bold text-gray-800">₹{formatMoney(gst)}</span>
            </div>
          )}

          {discount > 0 && (
            <div className="flex items-center justify-between text-emerald-700 font-bold">
              <span className="flex items-center gap-1">
                <span>🏷️</span> {discountLabel || `Coupon Discount (${couponCode})`}
              </span>
              <span>- ₹{formatMoney(discount)}</span>
            </div>
          )}

          {totalSavings > 0 && (
            <div className="flex items-center justify-between text-gray-500 font-medium text-xs">
              <span>Product MRP Savings</span>
              <span>- ₹{formatMoney(totalSavings)}</span>
            </div>
          )}
        </div>

        {/* Total payable */}
        <div className="border-t border-gray-100 pt-3.5 sm:pt-4 flex items-center justify-between">
          <span className="text-sm sm:text-base font-bold text-gray-900">Total Payable</span>
          <span className="text-lg sm:text-xl font-black text-gray-900">₹{formatMoney(totalPayable)}</span>
        </div>

        {/* Delivery address */}
        <div className="border-t border-gray-100 pt-3.5 sm:pt-4 flex items-start justify-between gap-3">
          <div className="flex gap-2.5 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-50 grid place-items-center text-rose-500 shrink-0 mt-0.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="sm:w-4 sm:h-4">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-900">{addressLabel}</p>
              <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug mt-0.5 truncate max-w-[150px] xs:max-w-[200px] sm:max-w-[250px] md:max-w-none">{addressText}</p>
            </div>
          </div>
          <button onClick={onOpenLocation} className="text-xs font-bold text-rose-600 hover:text-rose-700 transition shrink-0 px-2 py-1.5 rounded-lg hover:bg-rose-50 cursor-pointer">
            Change
          </button>
        </div>

        {/* Payment method */}
        {selectedMethod && (
          <div className="border-t border-gray-100 pt-3.5 sm:pt-4 flex items-start justify-between gap-3">
            <div className="flex gap-2.5 sm:gap-3 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-green-50 grid place-items-center text-[#6B7F59] shrink-0 mt-0.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="sm:w-4 sm:h-4">
                  <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900">Payment Mode</p>
                <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug mt-0.5 capitalize">{paymentLabel}</p>
              </div>
            </div>
            <button onClick={onOpenPayment} className="text-xs font-bold text-[#6B7F59] transition shrink-0 px-2 py-1.5 rounded-lg hover:bg-[#6B7F59]/5 cursor-pointer">
              Change
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="pt-2 hidden lg:block">
          {selectedMethod ? (
            <button
                onClick={onPlaceOrder}
                disabled={isPlacing}
                className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block disabled:opacity-60 cursor-pointer"
              >
                {isPlacing ? "PLACING ORDER…" : `PLACE ORDER — ₹${formatMoney(totalPayable)}`}
              </button>
            ) : (
              <button
                onClick={onOpenPayment}
                className="w-full bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-4 px-6 rounded-2xl transition shadow-md shadow-olive/20 text-center block cursor-pointer"
              >
                CHOOSE PAYMENT
              </button>
            )}
          </div>
        </div>
    </div>
  );
}

function MobileStickyCheckout({ billing, selectedMethod, isPlacing, onOpenPayment, onPlaceOrder }) {
  const { totalPayable } = billing;
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 pt-3 pb-5 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Total Payable</p>
          <p className="text-lg font-black text-gray-900">₹{formatMoney(totalPayable)}</p>
        </div>
        {selectedMethod ? (
          <button
            onClick={onPlaceOrder}
            disabled={isPlacing}
            className="flex-1 bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-3.5 px-6 rounded-2xl transition shadow-md disabled:opacity-60 text-center cursor-pointer"
          >
            {isPlacing ? "PLACING…" : "PLACE ORDER"}
          </button>
        ) : (
          <button
            onClick={onOpenPayment}
            className="flex-1 bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-[0.98] text-white text-sm font-bold py-3.5 px-6 rounded-2xl transition shadow-md text-center cursor-pointer"
          >
            CHOOSE PAYMENT
          </button>
        )}
      </div>
    </div>
  );
}

export default function CartPage() {
  const router = useRouter();
  const { cart } = useCart();
  const { user, isAuthenticated, isLoading } = useAuth();
  const { placeOrder, isPlacing } = useCheckout();
  const { addresses } = useAddresses();

  const [activeAddress,  setActiveAddress]  = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPaymentOpen,  setIsPaymentOpen]  = useState(false);
  const [shippingDetails, setShippingDetails] = useState(null);

  // Coupon state
  const [appliedCouponCode, setAppliedCouponCode] = useState("");
  const [isCouponRemoved, setIsCouponRemoved] = useState(false);
  const [availableCoupons, setAvailableCoupons] = useState(DEFAULT_COUPONS);
  const [serverCartData, setServerCartData] = useState(null);

  // Auto-select the default saved address (or the first one) once loaded.
  useEffect(() => {
    if (activeAddress || !addresses.length) return;
    setActiveAddress(addresses.find((a) => a.isDefault) || addresses[0]);
  }, [addresses, activeAddress]);

  const cartDep = JSON.stringify(cart?.map((i) => ({ id: i.id, qty: i.qty })) || []);

  // Fetch server cart pricing and coupons
  const fetchCartAndCoupons = useCallback(async () => {
    if (!isAuthenticated) return;
    try {
      const url = appliedCouponCode
        ? `/api/cart?couponCode=${encodeURIComponent(appliedCouponCode)}`
        : `/api/cart`;
      const res = await fetch(url).then((r) => r.json());
      if (res.success && res.data) {
        setServerCartData(res.data);
      }
    } catch (err) {
      console.error("Error fetching cart pricing:", err);
    }
  }, [appliedCouponCode, isAuthenticated]);

  useEffect(() => {
    if (cart && cart.length > 0 && isAuthenticated) {
      fetchCartAndCoupons();
    } else {
      setServerCartData(null);
    }
  }, [cartDep, appliedCouponCode, isAuthenticated, fetchCartAndCoupons]);

  // Fetch available coupons list
  useEffect(() => {
    const baseBilling = calcBilling(cart || []);
    fetch(`/api/coupons?subtotal=${baseBilling.totalSellingPrice}`)
      .then((r) => r.json())
      .then((res) => {
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          setAvailableCoupons(res.data);
        }
      })
      .catch((err) => console.error("Error fetching coupons:", err));
  }, [cartDep]);

  // Fetch dynamic Shiprocket shipping rates based on active address pincode and payment method
  useEffect(() => {
    if (!activeAddress?.pincode) {
      setShippingDetails(null);
      return;
    }
    const pincode = activeAddress.pincode;
    const method = selectedMethod || "razorpay";
    
    fetch(`/api/shipping/rate?pincode=${pincode}&paymentMethod=${method}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setShippingDetails(res.data);
        }
      })
      .catch((err) => console.error("Error fetching shipping rate:", err));
  }, [activeAddress, selectedMethod, cartDep]);

  const { products: recommendationPool } = useProducts({ limit: 12, sort: "rating" });

  const handleApplyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    const found = availableCoupons.find((c) => c.code === clean);
    if (found && !found.isEligible && found.reason) {
      toast.error(found.reason);
      return;
    }
    setIsCouponRemoved(false);
    setAppliedCouponCode(clean);
    toast.success(`Coupon code ${clean} applied!`);
  };

  const handleRemoveCoupon = () => {
    setIsCouponRemoved(true);
    setAppliedCouponCode("");
    toast.info("Coupon removed.");
  };

  // Calculate order billing breakdown in real-time
  const billing = useMemo(() => {
    const baseBilling = calcBilling(cart || []);
    const subtotal = baseBilling.totalSellingPrice;
    const hasAddress = !!activeAddress?.pincode;

    // Instant local client calculation for 0ms responsiveness on + / -
    let localDiscount = 0;
    let localDiscountLabel = "";
    let localCouponCode = "";
    let localAppliedCoupon = null;

    if (!isCouponRemoved) {
      if (appliedCouponCode) {
        const found = availableCoupons.find((c) => c.code === appliedCouponCode) ||
          DEFAULT_COUPONS.find((c) => c.code === appliedCouponCode);
        if (found) {
          const evalRes = evaluateCouponClient(found, subtotal);
          if (evalRes.isEligible) {
            localDiscount = evalRes.amount;
            localDiscountLabel = evalRes.discountLabel;
            localCouponCode = evalRes.code;
            localAppliedCoupon = evalRes;
          }
        }
      }

      if (!localDiscount && !appliedCouponCode) {
        const best = getBestCouponClient(subtotal, true, availableCoupons);
        if (best) {
          localDiscount = best.amount;
          localDiscountLabel = best.discountLabel;
          localCouponCode = best.code;
          localAppliedCoupon = best;
        }
      }
    }

    // Dynamic discount ALWAYS calculates based on current subtotal so it updates live on + / -
    const discount = localDiscount;
    const discountLabel = localDiscountLabel;
    const couponCode = localCouponCode;
    const appliedCoupon = localAppliedCoupon;
    const nextTier = getNextDiscountTierClient(subtotal);

    if (shippingDetails !== null && hasAddress) {
      const isFree = subtotal > DELIVERY_THRESHOLD;
      const baseDeliveryCharge = isFree ? 0 : (shippingDetails.baseDeliveryCharge || 0);
      const codCharge = isFree ? 0 : (shippingDetails.codCharge || 0);
      const gst = isFree ? 0 : (shippingDetails.gst || 0);
      const deliveryCharge = baseDeliveryCharge + codCharge + gst;
      const totalPayable = Math.max(0, subtotal - discount + deliveryCharge);
      
      return { 
        ...baseBilling, 
        discount,
        discountLabel,
        couponCode,
        appliedCoupon,
        nextTier,
        baseDeliveryCharge, 
        codCharge, 
        gst, 
        deliveryCharge, 
        totalPayable 
      };
    }

    const isFreeGuest = subtotal > DELIVERY_THRESHOLD;
    const guestDelivery = isFreeGuest ? 0 : DELIVERY_CHARGE;
    const totalPayable = Math.max(0, subtotal - discount + guestDelivery);

    return {
      ...baseBilling,
      discount,
      discountLabel,
      couponCode,
      appliedCoupon,
      nextTier,
      deliveryCharge: guestDelivery,
      baseDeliveryCharge: guestDelivery,
      codCharge: 0,
      gst: 0,
      totalPayable
    };
  }, [cart, shippingDetails, activeAddress, serverCartData, appliedCouponCode, isCouponRemoved, availableCoupons]);

  if (!cart || cart.length === 0) return <CartEmptyState />;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  const cartIds = new Set(cart.map((i) => i.id));
  const recommendations = recommendationPool.filter((p) => !cartIds.has(p.id)).slice(0, 8);

  async function handlePlaceOrder() {
    if (!isLoading && !isAuthenticated) {
      toast.info("Please sign in to place your order.");
      router.push("/login?redirect=/cart");
      return;
    }
    if (!activeAddress?.id) {
      setIsLocationOpen(true);
      return;
    }

    try {
      await placeOrder({
        addressId: activeAddress.id,
        address: activeAddress,
        paymentMethod: selectedMethod,
        couponCode: appliedCouponCode || billing.couponCode || null,
        user,
      });
    } catch {}
  }

  return (
    <div className="pb-[20px] lg:pb-8">
      <CartHeader totalQty={totalQty} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 sm:space-y-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-cardline/60 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="divide-y divide-gray-100">
              {cart.map((item) => <CartItem key={`${item.id}-${item.unit}`} item={item} />)}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <CartBillPanel
            billing={billing}
            activeAddress={activeAddress}
            selectedMethod={selectedMethod}
            isPlacing={isPlacing}
            availableCoupons={availableCoupons}
            appliedCoupon={billing.appliedCoupon}
            onApplyCoupon={handleApplyCoupon}
            onRemoveCoupon={handleRemoveCoupon}
            nextTier={billing.nextTier}
            onOpenLocation={() => setIsLocationOpen(true)}
            onOpenPayment={() => setIsPaymentOpen(true)}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>

      <MobileStickyCheckout
        billing={billing}
        selectedMethod={selectedMethod}
        isPlacing={isPlacing}
        onOpenPayment={() => setIsPaymentOpen(true)}
        onPlaceOrder={handlePlaceOrder}
      />

      <AddressPickerModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        selectedId={activeAddress?.id}
        onSelect={(addr) => setActiveAddress(addr)}
        prefill={{ receiverName: user?.fullName, phone: user?.phone }}
      />
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        selectedMethod={selectedMethod}
        onSelectMethod={(id) => setSelectedMethod(id)}
        totalPayable={billing.totalPayable}
      />
    </div>
  );
}
