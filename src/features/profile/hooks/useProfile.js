"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import profileService, { addressService, uploadService } from "@/features/profile/services/profile.service";
import { queryKeys } from "@/lib/queryKeys";

export function useProfile() {
  const query = useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: profileService.get,
    retry: false,
  });
  return { ...query, profile: query.data ?? null };
}

export function useUpdateProfile({ silent = false } = {}) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => profileService.update(data),
    onSuccess: (user) => {
      qc.setQueryData(queryKeys.auth.me, user);
      // `silent` lets flows with their own success message (e.g. the login
      // onboarding step's "Welcome!") avoid stacking a second toast.
      if (!silent) toast.success("Profile updated", { id: "profile" });
    },
    onError: (err) => toast.error(err?.message || "Could not save your profile.", { id: "profile" }),
  });
}

export function useUpdatePreferences() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (preferences) => profileService.updatePreferences(preferences),
    onSuccess: (user) => {
      qc.setQueryData(queryKeys.auth.me, user);
      toast.success("Preferences saved");
    },
    onError: (err) => toast.error(err?.message || "Could not save your preferences."),
  });
}

export function useUpdateNotifications() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (notifications) => profileService.updateNotifications(notifications),
    onSuccess: (user) => {
      qc.setQueryData(queryKeys.auth.me, user);
      toast.success("Notification settings saved");
    },
    onError: (err) => toast.error(err?.message || "Could not save your settings."),
  });
}

export function useAddresses() {
  const query = useQuery({
    queryKey: queryKeys.addresses.all,
    queryFn: addressService.list,
  });
  return { ...query, addresses: query.data ?? [] };
}

export function useAddressMutations() {
  const qc = useQueryClient();
  const invalidate = () => qc.invalidateQueries({ queryKey: queryKeys.addresses.all });

  const create = useMutation({
    mutationFn: (data) => addressService.create(data),
    onSuccess: () => { invalidate(); toast.success("Address saved"); },
    onError: (err) => toast.error(err?.message || "Could not save the address."),
  });

  const update = useMutation({
    mutationFn: ({ id, data }) => addressService.update(id, data),
    onSuccess: () => { invalidate(); toast.success("Address updated"); },
    onError: (err) => toast.error(err?.message || "Could not update the address."),
  });

  const remove = useMutation({
    mutationFn: (id) => addressService.remove(id),
    onSuccess: () => { invalidate(); toast.success("Address removed"); },
    onError: (err) => toast.error(err?.message || "Could not remove the address."),
  });

  return { create, update, remove };
}

/** Upload an image to R2 (returns { key, url }). */
export function useImageUpload() {
  return useMutation({
    mutationFn: (payload) => uploadService.image(payload),
    onError: (err) => toast.error(err?.message || "Image upload failed."),
  });
}
