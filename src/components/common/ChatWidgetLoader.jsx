"use client";

import dynamic from "next/dynamic";

// Lazy-load chat widget as a Client Component — defers heavy client JS from initial page paint
const FoodvilleChatWidget = dynamic(() => import("@/components/common/FoodvilleChatWidget"), {
  ssr: false,
});

export default function ChatWidgetLoader() {
  return <FoodvilleChatWidget />;
}
