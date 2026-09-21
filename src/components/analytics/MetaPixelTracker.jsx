"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/metaPixel";

export default function MetaPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // The initial script execution already fires the first PageView.
    // We only trigger PageView on subsequent client-side route navigations.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    pageview();
  }, [pathname, searchParams]);

  return null;
}
