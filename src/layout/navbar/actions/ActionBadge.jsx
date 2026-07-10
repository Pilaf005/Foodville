"use client";

import React from "react";

export const ActionBadge = ({ count, className = "bg-olive" }) => {
  if (count <= 0) return null;

  return (
    <span className={`absolute -right-0.5 -top-0.5 h-4 w-4 grid place-items-center rounded-full text-[9px] font-bold text-white ring-2 ring-cream ${className}`}>
      {count}
    </span>
  );
};

export default ActionBadge;
