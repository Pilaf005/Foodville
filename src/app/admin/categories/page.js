"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useAdminCategories, useAdminMutations } from "@/features/admin/hooks/useAdmin";
import { useImageUpload } from "@/features/profile/hooks/useProfile";
import { Skeleton } from "@/components/feedback/Skeleton";

const slugify = (s) =>
  String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const EMPTY = { name: "", slug: "", image: "", bgColor: "bg-white", order: 0, isActive: true };

export default function AdminCategoriesPage() {
  const { categories, isPending } = useAdminCategories();
  const { deleteCategory } = useAdminMutations();
  const [editing, setEditing] = useState(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">
          {isPending ? "…" : `${categories.length} categories`}
        </p>
        <button
          onClick={() => setEditing({ ...EMPTY })}
          className="rounded-2xl bg-olive px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white
                     transition hover:bg-olive-dark active:scale-[0.98]"
        >
          + Add category
        </button>
      </div>

      {isPending ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.slug}
              className="card-hover animate-fade-up flex items-center gap-3 rounded-2xl border border-cardline bg-white p-4 transition"
            >
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-cardline bg-cream">
                {c.image && <img src={c.image} alt="" className="h-full w-full object-cover" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">{c.name}</p>
                <p className="truncate text-[11px] text-muted">{c.slug}</p>
                <p className="mt-0.5 text-[11px] font-bold text-olive">
                  {c.productCount} product{c.productCount === 1 ? "" : "s"}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-1.5">
                <button
                  onClick={() => setEditing(c)}
                  className="rounded-xl border border-cardline px-3 py-1.5 text-[11px] font-bold text-ink transition hover:border-olive hover:text-olive"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (c.productCount > 0) {
                      toast.error(`"${c.name}" still has ${c.productCount} products. Move them first.`);
                      return;
                    }
                    if (confirm(`Delete category "${c.name}"?`)) deleteCategory.mutate(c.slug);
                  }}
                  className="rounded-xl border border-red-200 px-3 py-1.5 text-[11px] font-bold text-red-500 transition hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && <CategoryModal category={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

function CategoryModal({ category, onClose }) {
  const isNew = !category.slug;
  const [form, setForm] = useState({ ...EMPTY, ...category });
  const { createCategory, updateCategory } = useAdminMutations();
  const upload = useImageUpload();

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const busy = createCategory.isPending || updateCategory.isPending || upload.isPending;

  async function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const slug = form.slug || slugify(form.name);
    if (!slug) return toast.error("Enter a category name first.");

    const result = await upload.mutateAsync({
      file,
      folder: "categories",
      ownerId: slug,
      replaceUrl: form.image || undefined, // the old tile is deleted from R2
    });
    if (result?.url) set("image", result.url);
  }

  async function handleSave(e) {
    e.preventDefault();
    const payload = { ...form, slug: form.slug || slugify(form.name), order: Number(form.order) || 0 };
    if (!payload.name) return toast.error("A name is required.");

    if (isNew) await createCategory.mutateAsync(payload);
    else await updateCategory.mutateAsync({ slug: category.slug, data: payload });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4">
      <div className="animate-slide-up w-full max-w-md rounded-t-3xl border border-cardline bg-white p-5 shadow-xl sm:animate-scale-in sm:rounded-3xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-black uppercase tracking-tight text-ink">
            {isNew ? "Add category" : "Edit category"}
          </h2>
          <button onClick={onClose} className="text-xl leading-none text-muted transition hover:text-ink">×</button>
        </div>

        <form onSubmit={handleSave} className="space-y-3">
          <Field label="Name">
            <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} required />
          </Field>

          <Field label={isNew ? "Slug (URL id)" : "Slug (fixed)"}>
            <input
              value={form.slug}
              onChange={(e) => set("slug", slugify(e.target.value))}
              placeholder={slugify(form.name) || "auto"}
              disabled={!isNew}
              className={`${inputCls} disabled:cursor-not-allowed disabled:bg-cream/60 disabled:text-muted`}
            />
          </Field>

          <Field label="Display order">
            <input type="number" value={form.order} onChange={(e) => set("order", e.target.value)} className={inputCls} />
          </Field>

          <Field label="Tile image">
            <div className="flex items-center gap-3">
              <span className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-cardline bg-cream">
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
      </div>
    </div>
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
