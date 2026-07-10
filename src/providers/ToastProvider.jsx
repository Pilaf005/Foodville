"use client";

import { Toaster } from "sonner";

export function ToastProvider({ children }) {
  return (
    <>
      {children}
      <Toaster richColors closeButton position="top-right" />
    </>
  );
}

export default ToastProvider;
