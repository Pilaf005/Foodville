/**
 * Zod validators for product listing query params. Coerces + bounds everything
 * so the DB layer receives clean, safe values (no unbounded limits, etc.).
 */
import { z } from "zod";
import { PRODUCT_CATEGORIES, SHOP_BY_VALUES } from "@/server/models/Product";

// Home "shop by" tabs use kebab keys; Product.shopBy uses camel values.
export const TAB_TO_SHOPBY = {
  bestsellers: "bestseller",
  "newly-in": "newlyIn",
  "value-buys": "valueBuys",
  trending: "trending",
};

export const SORT_OPTIONS = ["relevance", "price_asc", "price_desc", "rating", "newest"];

export const listProductsQuery = z
  .object({
    category: z.enum(PRODUCT_CATEGORIES).optional(),
    shopBy: z.enum(SHOP_BY_VALUES).optional(),
    tab: z.enum(Object.keys(TAB_TO_SHOPBY)).optional(),
    search: z.string().trim().min(1).max(80).optional(),
    sort: z.enum(SORT_OPTIONS).default("relevance"),
    topSellers: z.coerce.boolean().optional(),
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(60).default(24),
  })
  .transform((q) => ({
    ...q,
    // resolve tab -> shopBy (explicit shopBy wins)
    shopBy: q.shopBy ?? (q.tab ? TAB_TO_SHOPBY[q.tab] : undefined),
  }));

/** Parse a URLSearchParams into a plain object then validate. */
export function parseListQuery(searchParams) {
  const raw = Object.fromEntries(searchParams.entries());
  return listProductsQuery.parse(raw);
}
