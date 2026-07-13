"use client";

import { useState } from "react";
import { useAdminProducts, useAdminMutations } from "@/features/admin/hooks/useAdmin";
import { useImageUpload } from "@/features/profile/hooks/useProfile";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useDebounce } from "@/hooks/useDebounce";
import { Skeleton } from "@/components/feedback/Skeleton";
import { Pagination } from "@/app/admin/orders/page";
import Modal from "@/components/ui/Modal";
import { toast } from "sonner";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

const slugify = (s) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const EMPTY = {
  name: "", slug: "", category: "powders", unit: "", price: "", mrp: "",
  stock: 0, description: "", image: "",
};

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null); // product | EMPTY | null
  const debounced = useDebounce(search.trim(), 300);

  const { products, meta, isPending } = useAdminProducts({
    ...(debounced ? { search: debounced } : {}),
    page,
    limit: 20,
  });
  const { deleteProduct } = useAdminMutations();

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search products…"
          className="w-full rounded-2xl border border-cardline bg-white px-4 py-2.5 text-sm outline-none
                     transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
        <button
          onClick={() => setEditing({ ...EMPTY })}
          className="shrink-0 rounded-2xl bg-olive px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white
                     transition hover:bg-olive-dark active:scale-[0.98]"
        >
          + Add product
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-cardline bg-white">
        {isPending ? (
          <div className="space-y-2 p-4">
            {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-14 rounded-xl" />)}
          </div>
        ) : products.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">No products found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-xs">
              <thead className="bg-cream/60 text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-bold">Product</th>
                  <th className="px-4 py-2.5 font-bold">Category</th>
                  <th className="px-4 py-2.5 font-bold">Price</th>
                  <th className="px-4 py-2.5 font-bold">Stock</th>
                  <th className="px-4 py-2.5 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-t border-cardline/60">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-cardline bg-cream">
                          {p.image && <img src={p.image} alt="" className="h-full w-full object-cover" />}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-bold text-ink">{p.name}</p>
                          <p className="truncate text-[11px] text-muted">{p.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted">{p.category}</td>
                    <td className="px-4 py-3 font-bold text-ink">{inr(p.price)}</td>
                    <td className="px-4 py-3">
                      <span className={p.stock > 0 ? "text-ink" : "font-bold text-red-500"}>
                        {p.stock ?? 0}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditing(p)}
                          className="rounded-xl border border-cardline px-3 py-1.5 font-bold text-ink transition hover:border-olive hover:text-olive"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${p.name}"? Its images will be removed too.`)) {
                              deleteProduct.mutate(p.id);
                            }
                          }}
                          className="rounded-xl border border-red-200 px-3 py-1.5 font-bold text-red-500 transition hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {meta && meta.totalPages > 1 && <Pagination meta={meta} page={page} setPage={setPage} />}

      {editing && <ProductModal product={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

function ProductModal({ product, onClose }) {
  const isNew = !product.id;
  const [form, setForm] = useState({
    ...EMPTY,
    ...product,
    price: product.price ?? "",
    mrp: product.mrp ?? "",
  });

  const { categories } = useCategories();
  const { createProduct, updateProduct } = useAdminMutations();
  const upload = useImageUpload();

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const busy = createProduct.isPending || updateProduct.isPending || upload.isPending;

  async function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const slug = form.slug || slugify(form.name);
    if (!slug) return toast.error("Enter a product name first.");

    const result = await upload.mutateAsync({
      file,
      folder: "products",
      ownerId: slug,
      replaceUrl: form.image || undefined, // old file is deleted from R2
    });
    if (result?.url) {
      set("image", result.url);
      toast.success("Image uploaded");
    }
  }

  async function handleSave(e) {
    e.preventDefault();
    const payload = {
      ...form,
      slug: form.slug || slugify(form.name),
      price: Number(form.price),
      mrp: form.mrp === "" ? undefined : Number(form.mrp),
      stock: Number(form.stock) || 0,
    };

    if (!payload.name || !payload.price) return toast.error("Name and price are required.");

    if (isNew) await createProduct.mutateAsync(payload);
    else await updateProduct.mutateAsync({ id: product.id, data: payload });
    onClose();
  }

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={isNew ? "Add product" : "Edit product"}
      subtitle={isNew ? "New item in the catalog" : `Editing “${product.name}”`}
      maxWidth="max-w-lg"
    >
      <form onSubmit={handleSave} className="space-y-3">
          <Field label="Name">
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className={inputCls}
              required
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Slug">
              <input
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                placeholder={slugify(form.name) || "auto"}
                className={inputCls}
              />
            </Field>
            <Field label="Category">
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className={inputCls}>
                {categories.filter((c) => c.id !== "all").map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Field label="Price (₹)">
              <input type="number" value={form.price} onChange={(e) => set("price", e.target.value)} className={inputCls} required />
            </Field>
            <Field label="MRP (₹)">
              <input type="number" value={form.mrp} onChange={(e) => set("mrp", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Stock">
              <input type="number" value={form.stock} onChange={(e) => set("stock", e.target.value)} className={inputCls} />
            </Field>
          </div>

          <Field label="Unit">
            <input value={form.unit} onChange={(e) => set("unit", e.target.value)} placeholder="100g" className={inputCls} />
          </Field>

          <Field label="Description">
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={2}
              className={inputCls}
            />
          </Field>

          <Field label="Image">
            <div className="flex items-center gap-3">
              <span className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-cardline bg-cream">
                {form.image && <img src={form.image} alt="" className="h-full w-full object-cover" />}
              </span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={handleImage}
                disabled={upload.isPending}
                className="text-xs text-muted file:mr-2 file:rounded-xl file:border-0 file:bg-olive file:px-3 file:py-2
                           file:text-xs file:font-bold file:text-white hover:file:bg-olive-dark"
              />
            </div>
            {upload.isPending && <p className="mt-1 text-[11px] text-muted">Uploading…</p>}
          </Field>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-cardline py-2.5 text-xs font-bold uppercase text-ink transition hover:border-olive"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={busy}
              className="flex-1 rounded-2xl bg-olive py-2.5 text-xs font-bold uppercase text-white transition
                         hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
            >
              {busy ? "Saving…" : isNew ? "Create" : "Save changes"}
            </button>
          </div>
      </form>
    </Modal>
  );
}

const inputCls =
  "w-full rounded-xl border border-cardline bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-muted">{label}</span>
      {children}
    </label>
  );
}
