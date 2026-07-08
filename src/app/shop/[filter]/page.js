"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

// Legacy deep-link handler — redirects /shop/bestsellers → /shop?tab=bestsellers
export default function ShopFilterRedirect({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const router = useRouter();

  useEffect(() => {
    router.replace(`/shop?tab=${params.filter}`);
  }, [params.filter, router]);

  return (
    <div className="flex h-64 items-center justify-center text-muted text-sm">
      Redirecting…
    </div>
  );
}
