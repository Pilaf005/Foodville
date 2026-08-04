"use client";

import React, { useState, useEffect, useRef } from "react";

export default function FoodvilleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [chatMode, setChatMode] = useState("faq"); // 'faq' | 'chat'
  const [isTyping, setIsTyping] = useState(false);

  // Draggable State
  const [position, setPosition] = useState(null); // { x: number, y: number } | null (null = default bottom-right)
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
    hasMoved: false,
  });

  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to **Foodville India**.\n\nI am your Foodville Assistant. How can I help you today? Choose an option below or type your query!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick FAQ Chips
  const FAQ_CHIPS = [
    { icon: "🚚", label: "Track My Order", action: "__track__" },
    { icon: "🏷️", label: "Active Discount Coupons", action: "__coupons__" },
    { icon: "🌿", label: "Popular Spices & Combos", action: "__products__" },
    { icon: "📦", label: "Bulk & Wholesale Packs", action: "__bulk__" },
    { icon: "🏪", label: "Franchise Inquiry", action: "__franchise__" },
    { icon: "💬", label: "Chat on WhatsApp Support", action: "__human__", highlight: true },
  ];

  // Auto-scroll chat messages
  useEffect(() => {
    if (chatEndRef.current && isOpen) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping, isOpen]);

  // ── Dragging Logic (Mouse & Touch) ──
  const handleDragStart = (clientX, clientY) => {
    let currentX = position?.x;
    let currentY = position?.y;

    if (currentX === undefined || currentY === undefined) {
      const buttonWidth = 56; // 14 * 4
      const buttonHeight = 56;
      currentX = window.innerWidth - buttonWidth - 20; // 20px from right
      currentY = window.innerHeight - buttonHeight - 20; // 20px from bottom
    }

    dragRef.current = {
      startX: clientX,
      startY: clientY,
      posX: currentX,
      posY: currentY,
      hasMoved: false,
    };

    const handleDragMove = (moveEvent) => {
      const moveX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;

      const dx = moveX - dragRef.current.startX;
      const dy = moveY - dragRef.current.startY;

      if (Math.hypot(dx, dy) > 6) {
        dragRef.current.hasMoved = true;
        setIsDragging(true);
      }

      if (dragRef.current.hasMoved) {
        const iconSize = 56;
        const newX = Math.max(10, Math.min(window.innerWidth - iconSize - 10, dragRef.current.posX + dx));
        const newY = Math.max(10, Math.min(window.innerHeight - iconSize - 10, dragRef.current.posY + dy));
        setPosition({ x: newX, y: newY });
      }
    };

    const handleDragEnd = () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);

      setTimeout(() => {
        setIsDragging(false);
      }, 50);
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("touchend", handleDragEnd);
  };

  const handleIconClick = () => {
    if (dragRef.current.hasMoved) return; // Prevent toggle if user was dragging
    setIsOpen(!isOpen);
  };

  const addBotMessage = (text, orderData = null) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChatHistory((prev) => [
      ...prev,
      { sender: "bot", text, time, orderData },
    ]);
  };

  const handleLookupOrder = async (orderIdClean) => {
    setIsTyping(true);
    try {
      const res = await fetch(`/api/orders/${encodeURIComponent(orderIdClean)}`);
      const data = await res.json();
      setIsTyping(false);

      if (res.ok && data.success && data.data) {
        const order = data.data;
        const statusText = String(order.status || "placed").replace(/_/g, " ").toUpperCase();
        const trackingText = order.shipping?.awbCode
          ? `\n\n🚚 **Courier**: ${order.shipping.courierName || "Shiprocket"}\n📍 **AWB Tracking**: ${order.shipping.awbCode}`
          : "";

        addBotMessage(
          `📦 **Order Status for ${order.orderId}**:\n\n` +
          `• **Status**: ${statusText}\n` +
          `• **Items**: ${order.items?.length || 1} item(s)\n` +
          `• **Total Amount**: ₹${order.amounts?.total || 0}\n` +
          `• **Payment Mode**: ${String(order.paymentMethod).toUpperCase()}${trackingText}\n\n` +
          `Need more details? You can view your full order history in your profile or chat with our team on WhatsApp!`
        );
      } else {
        addBotMessage(
          `🔍 We couldn't find order details for **${orderIdClean}** automatically.\n\n` +
          `Please double-check your Order ID (e.g. **FV-100006**) or click the **Chat on WhatsApp** button below to connect with our team directly!`
        );
      }
    } catch {
      setIsTyping(false);
      addBotMessage(
        `Please provide your Order ID (formatted like **FV-100006**) and I will check the live delivery status for you!`
      );
    }
  };

  const processUserMessage = (text) => {
    const clean = text.trim();
    if (!clean) return;

    if (clean === "__human__") {
      window.open(
        `https://wa.me/919911575605?text=${encodeURIComponent(
          "Hi Foodville! I need assistance with my order / product inquiry."
        )}`,
        "_blank"
      );
      return;
    }

    setChatMode("chat");
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChatHistory((prev) => [...prev, { sender: "user", text: clean, time }]);
    setInputMsg("");
    setIsTyping(true);

    // Intent Processing Logic
    setTimeout(() => {
      const lower = clean.toLowerCase();

      // Order Tracking Intent
      const orderMatch = clean.match(/FV-?\d+/i);
      if (orderMatch) {
        const orderIdClean = orderMatch[0].toUpperCase().replace(/^FV(\d+)$/, "FV-$1");
        handleLookupOrder(orderIdClean);
        return;
      }

      setIsTyping(false);

      if (clean === "__track__" || lower.includes("track") || lower.includes("where is my order") || lower.includes("status")) {
        addBotMessage(
          "🚚 **Track Order**\n\nPlease type your **Order ID** (e.g. `FV-100006`) below and I will check your live delivery status!"
        );
      } else if (clean === "__coupons__" || lower.includes("coupon") || lower.includes("offer") || lower.includes("discount") || lower.includes("promo")) {
        addBotMessage(
          "🏷️ **Active Foodville Offers & Promo Codes**:\n\n" +
          "• **WELCOME10**: 10% OFF on your 1st Order!\n" +
          "• **FOODVILLE15**: 15% OFF on orders of ₹999 or more.\n" +
          "• **FOODVILLE20**: 20% OFF on orders of ₹1,999 to ₹2,499.\n" +
          "• **MAX500**: **Flat ₹500 OFF** on orders of ₹2,500 or more!\n\n" +
          "✨ *Free Delivery on all orders over ₹499!* Simply add items to your cart and the best discount applies automatically."
        );
      } else if (clean === "__products__" || lower.includes("product") || lower.includes("garlic") || lower.includes("onion") || lower.includes("combo") || lower.includes("spice")) {
        addBotMessage(
          "🌿 **Popular Foodville Products & Seasonings**:\n\n" +
          "• **Dehydrated Garlic & Red/White Onion Powders**: 100% Pure & Natural.\n" +
          "• **Italian Duo & Seasonings**: Oregano, Chili Flakes, Peri Peri Masala.\n" +
          "• **Festive Gift & Dry Fruit Platters**: Premium Almonds, Cashews, Seeds.\n\n" +
          "👉 Visit our **[Shop Page](/shop)** to browse all categories!"
        );
      } else if (clean === "__bulk__" || lower.includes("bulk") || lower.includes("wholesale") || lower.includes("sack") || lower.includes("25kg")) {
        addBotMessage(
          "📦 **Bulk & Wholesale Orders**:\n\n" +
          "We offer factory-direct 25kg bulk sacks & commercial packaging for restaurants, food manufacturers, and wholesalers with GST billing.\n\n" +
          "👉 Visit our **[Bulk Order Page](/bulk-order)** or tap **Chat on WhatsApp** to request wholesale pricing!"
        );
      } else if (clean === "__franchise__" || lower.includes("franchise") || lower.includes("dealership") || lower.includes("store")) {
        addBotMessage(
          "🏪 **Foodville Store Franchise**:\n\n" +
          "Partner with Foodville to open an exclusive spices & dry fruits franchise store in your city with full marketing and supply support.\n\n" +
          "👉 Fill out our quick application at **[Franchise Page](/franchise)**!"
        );
      } else if (lower.includes("shipping") || lower.includes("delivery") || lower.includes("free") || lower.includes("charge")) {
        addBotMessage(
          "🚚 **Shipping & Delivery Info**:\n\n" +
          "• **Free Shipping**: Available on all orders over **₹499**!\n" +
          "• **Standard Delivery**: 3 to 5 business days via Shiprocket express couriers (Delhivery, Bluedart, Ecom Express).\n" +
          "• **COD**: Cash on Delivery available across 26,000+ pincodes in India."
        );
      } else if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey") || lower.includes("namaste")) {
        addBotMessage(
          "Hello! 👋 Welcome to Foodville. How can I assist you today? You can ask me to track an order, view active discount codes, or recommend spice powders!"
        );
      } else {
        addBotMessage(
          "Got it! For detailed help, custom requirements, or to speak directly with our team, tap the **Chat on WhatsApp Support** button below or call us at **+91 9911575605**!"
        );
      }
    }, 600);
  };

  // Determine smart placement style
  const isCustomPos = position !== null;
  const containerStyle = isCustomPos
    ? { left: `${position.x}px`, top: `${position.y}px` }
    : { right: "20px", bottom: "20px" };

  // Calculate drawer placement relative to icon position
  const isUpperHalf = position ? position.y < window.innerHeight / 2 : false;
  const isLeftHalf = position ? position.x < window.innerWidth / 2 : false;

  const drawerPositionClass = isCustomPos
    ? `${isUpperHalf ? "top-16" : "bottom-16"} ${isLeftHalf ? "left-0" : "right-0"}`
    : "bottom-16 right-0";

  return (
    <div
      style={containerStyle}
      className="fixed z-50 flex flex-col items-end print:hidden touch-none"
    >
      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div
          className={`absolute ${drawerPositionClass} w-[92vw] sm:w-[380px] h-[540px] max-h-[75vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-cream animate-in fade-in zoom-in-95 duration-200 z-50`}
        >
          {/* Header */}
          <div className="bg-olive px-4 py-3.5 flex items-center justify-between text-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center p-1.5 border border-white/30">
                  <img src="/chatbot-icon.png" alt="Foodville" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-olive"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white">Foodville Assistant</h3>
                <p className="text-[10px] text-emerald-100 font-medium">Online • Instant Answers</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://wa.me/919911575605?text=Hi%20Foodville!%20I%20need%20assistance."
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-emerald-100 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.117 1.529 5.847L.057 23.25a.75.75 0 00.918.918l5.403-1.472A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.738 9.738 0 01-4.944-1.346l-.354-.212-3.667.998.96-3.578-.23-.37A9.714 9.714 0 012.25 12c0-5.375 4.375-9.75 9.75-9.75S21.75 6.625 21.75 12 21.75z"/>
                </svg>
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 font-sans text-xs">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl shadow-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-olive text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-150"
                  }`}
                >
                  <p
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-bold text-olive hover:text-olive-dark">$1</a>'),
                    }}
                  />
                  <span className={`block text-[9px] mt-1 text-right ${msg.sender === "user" ? "text-emerald-100" : "text-gray-400"}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 border border-gray-150 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-olive rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-olive rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-olive rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick FAQ Options */}
          {chatMode === "faq" && !isTyping && (
            <div className="p-3 bg-white/70 border-t border-gray-200 flex-shrink-0 space-y-1.5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-1">
                Suggested Questions:
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {FAQ_CHIPS.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => processUserMessage(chip.action)}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-left text-[11px] font-semibold transition-all cursor-pointer border min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised ${
                      chip.highlight
                        ? "bg-[#25D366] text-white border-[#1db954] hover:bg-[#1db954] col-span-2 justify-center shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-emerald-50 hover:border-olive hover:text-olive-dark"
                    }`}
                  >
                    <span className="text-sm">{chip.icon}</span>
                    <span className="truncate">{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Persistent WhatsApp Escalation Banner in Chat Mode */}
          {chatMode === "chat" && (
            <div className="bg-[#EBF3E6] px-3 py-1.5 border-t border-[#c8e6c9] flex items-center justify-between flex-shrink-0 text-[10px] font-medium text-gray-700">
              <span className="flex items-center gap-1">
                <span>💬</span> Need human help?
              </span>
              <a
                href="https://wa.me/919911575605?text=Hi%20Foodville!%20I%20need%20assistance%20with%20my%20order."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm transition-colors min-h-[44px] min-w-[44px] justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              processUserMessage(inputMsg);
            }}
            className="p-2.5 bg-white border-t border-gray-200 flex items-center gap-2 flex-shrink-0"
          >
            <button
              type="button"
              onClick={() => setChatMode("faq")}
              title="Show quick options"
              className="p-1.5 text-gray-400 hover:text-olive transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <input
              ref={inputRef}
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Type order ID (e.g. FV-100006)..."
              className="flex-1 bg-gray-100 rounded-full px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-olive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised font-medium min-h-[44px]"
            />

            <button
              type="submit"
              disabled={!inputMsg.trim()}
              className="w-8 h-8 min-h-[44px] min-w-[44px] rounded-full bg-olive hover:bg-olive-dark text-white flex items-center justify-center flex-shrink-0 transition-colors disabled:opacity-40 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
            >
              <svg className="w-4 h-4 transform translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Draggable Trigger Button */}
      <div
        onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
        onClick={handleIconClick}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        className="relative group flex items-center justify-center bg-olive hover:bg-olive-dark text-white w-14 h-14 min-h-[44px] min-w-[44px] rounded-full shadow-2xl transition-transform active:scale-95 border-2 border-white select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
        title="Drag anywhere or click to chat"
      >
        <span className="absolute inset-0 rounded-full bg-olive/40 animate-ping pointer-events-none"></span>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#25D366] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white z-10 shadow-sm pointer-events-none">
            1
          </span>
        )}

        {isOpen ? (
          <svg className="w-6 h-6 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <img src="/chatbot-icon.png" alt="Foodville" className="w-8 h-8 object-contain pointer-events-none drop-shadow-sm" />
        )}
      </div>
    </div>
  );
}
