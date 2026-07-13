"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useRequestOtp, useVerifyOtp, useAuth } from "@/features/auth/hooks/useAuth";
import { useUpdateProfile } from "@/features/profile/hooks/useProfile";

const OTP_LENGTH = 6;

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
];

function LoginCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/profile";

  const { user, isAuthenticated, isLoading } = useAuth();
  const requestOtp = useRequestOtp();
  const verifyOtp = useVerifyOtp();
  // silent: the onboarding step shows its own "Welcome!" — avoid a double toast.
  const updateProfile = useUpdateProfile({ silent: true });

  const [step, setStep] = useState("email"); // "email" | "code" | "details"
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [cooldown, setCooldown] = useState(0);
  const [details, setDetails] = useState({
    fullName: "",
    phone: "",
    gender: "prefer_not_to_say",
    dateOfBirth: "",
  });
  const inputsRef = useRef([]);

  // Signed-in users landing here:
  //  - profile complete   → straight to their destination.
  //  - profile INCOMPLETE → show the details step. This covers the abnormal
  //    flows too: closing the tab or pressing Back right after OTP verification
  //    leaves them logged in but half-onboarded — next time they reach /login
  //    (directly or via the "complete your profile" banner) the step reappears
  //    instead of being silently skipped forever.
  useEffect(() => {
    if (isLoading || !isAuthenticated || step === "details") return;
    if (!user?.fullName || !user?.phone) {
      setDetails({
        fullName: user?.fullName || "",
        phone: user?.phone || "",
        gender: user?.gender || "prefer_not_to_say",
        dateOfBirth: user?.dateOfBirth || "",
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep("details");
      return;
    }
    router.replace(redirectTo);
  }, [isLoading, isAuthenticated, user, router, redirectTo, step]);

  // Resend countdown.
  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  useEffect(() => {
    if (step === "code") inputsRef.current[0]?.focus();
  }, [step]);

  const code = useMemo(() => digits.join(""), [digits]);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  async function handleSendCode(e) {
    e?.preventDefault();
    if (!isEmailValid) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    try {
      const res = await requestOtp.mutateAsync(email.trim().toLowerCase());
      setStep("code");
      setDigits(Array(OTP_LENGTH).fill(""));
      setCooldown(res?.resendInSeconds ?? 60);
      if (res?.devCode) {
        toast.info(`Dev mode — your code is ${res.devCode}`, { duration: 10000 });
      } else {
        toast.success(`We sent a ${OTP_LENGTH}-digit code to ${email.trim()}`);
      }
    } catch (err) {
      if (err?.details?.retryAfter) setCooldown(err.details.retryAfter);
    }
  }

  async function handleVerify(e) {
    e?.preventDefault();
    if (code.length !== OTP_LENGTH) return;
    try {
      const data = await verifyOtp.mutateAsync({ email: email.trim().toLowerCase(), code });
      const user = data?.user;
      // First-timers (or anyone missing the basics) complete their profile now.
      // The phone number saved here is auto-filled at checkout later.
      if (!user?.fullName || !user?.phone) {
        setDetails({
          fullName: user?.fullName || "",
          phone: user?.phone || "",
          gender: user?.gender || "prefer_not_to_say",
          dateOfBirth: user?.dateOfBirth || "",
        });
        setStep("details");
        return;
      }
      toast.success("Welcome back!");
      router.replace(redirectTo);
    } catch {
      setDigits(Array(OTP_LENGTH).fill(""));
      inputsRef.current[0]?.focus();
    }
  }

  async function handleDetailsSubmit(e) {
    e?.preventDefault();
    if (details.fullName.trim().length < 2) {
      toast.error("Please enter your full name.");
      return;
    }
    if (!/^\d{10}$/.test(details.phone)) {
      toast.error("Enter a valid 10-digit mobile number.");
      return;
    }
    try {
      await updateProfile.mutateAsync({
        fullName: details.fullName.trim(),
        phone: details.phone,
        gender: details.gender,
        dateOfBirth: details.dateOfBirth,
      });
      toast.success("Welcome to Foodville!");
      router.replace(redirectTo);
    } catch {
      /* the mutation already toasts the error */
    }
  }

  function setDigitAt(index, value) {
    const clean = value.replace(/\D/g, "");
    setDigits((prev) => {
      const next = [...prev];
      next[index] = clean.slice(-1);
      return next;
    });
    if (clean && index < OTP_LENGTH - 1) inputsRef.current[index + 1]?.focus();
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handlePaste(e) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!text) return;
    e.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    text.split("").forEach((ch, i) => (next[i] = ch));
    setDigits(next);
    inputsRef.current[Math.min(text.length, OTP_LENGTH - 1)]?.focus();
  }

  return (
    <div className="mx-auto w-full max-w-md py-8 sm:py-14">
      <div className="animate-scale-in rounded-3xl border border-cardline bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
        {/* Header */}
        <div key={step} className="animate-fade-in mb-6 text-center">
          <h1 className="text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">
            {step === "email" ? "Sign in" : step === "code" ? "Verify your email" : "Complete your profile"}
          </h1>
          <p className="mt-2 text-xs text-muted sm:text-sm">
            {step === "email"
              ? "Enter your email and we'll send you a one-time code. No password needed."
              : step === "code"
                ? <>We sent a {OTP_LENGTH}-digit code to <span className="font-semibold text-ink">{email}</span></>
                : "A few details to speed up checkout — your phone number is auto-filled when you order."}
          </p>
        </div>

        {step === "details" ? (
          <form onSubmit={handleDetailsSubmit} noValidate className="space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                Full name <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                autoComplete="name"
                placeholder="First and last name"
                value={details.fullName}
                onChange={(e) => setDetails((d) => ({ ...d, fullName: e.target.value }))}
                className="w-full rounded-2xl border border-cardline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                Mobile number <span className="text-terracotta">*</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="10-digit mobile number"
                value={details.phone}
                onChange={(e) => setDetails((d) => ({ ...d, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))}
                className="w-full rounded-2xl border border-cardline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
              />
              <p className="mt-1 text-[11px] text-muted">Used for delivery updates and auto-filled at checkout.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">Gender</label>
                <select
                  value={details.gender}
                  onChange={(e) => setDetails((d) => ({ ...d, gender: e.target.value }))}
                  className="w-full rounded-2xl border border-cardline bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
                >
                  {GENDER_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">Date of birth</label>
                <input
                  type="date"
                  value={details.dateOfBirth}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDetails((d) => ({ ...d, dateOfBirth: e.target.value }))}
                  className="w-full rounded-2xl border border-cardline bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={updateProfile.isPending}
              className="mt-1 flex w-full items-center justify-center rounded-2xl bg-olive px-4 py-3 text-sm font-bold
                         uppercase tracking-wide text-white transition hover:bg-olive-dark active:scale-[0.98]
                         disabled:cursor-not-allowed disabled:opacity-60"
            >
              {updateProfile.isPending ? <Spinner label="Saving…" /> : "Save & continue"}
            </button>

            <button
              type="button"
              onClick={() => router.replace(redirectTo)}
              className="w-full text-center text-xs font-semibold text-muted transition hover:text-ink"
            >
              Skip for now
            </button>
          </form>
        ) : step === "email" ? (
          <form onSubmit={handleSendCode} noValidate>
            <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink outline-none transition
                focus:border-olive focus:ring-2 focus:ring-olive/20
                ${emailError ? "border-red-400" : "border-cardline"}`}
            />
            {emailError && <p className="mt-2 text-xs text-red-500">{emailError}</p>}

            <button
              type="submit"
              disabled={requestOtp.isPending}
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-olive px-4 py-3 text-sm font-bold
                         uppercase tracking-wide text-white transition hover:bg-olive-dark active:scale-[0.98]
                         disabled:cursor-not-allowed disabled:opacity-60"
            >
              {requestOtp.isPending ? <Spinner label="Sending…" /> : "Send code"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} noValidate>
            <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
              {digits.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => setDigitAt(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  aria-label={`Digit ${i + 1}`}
                  className="h-12 w-10 rounded-xl border border-cardline bg-white text-center text-lg font-bold
                             text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20
                             sm:h-14 sm:w-12 sm:text-xl"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={code.length !== OTP_LENGTH || verifyOtp.isPending}
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-olive px-4 py-3 text-sm font-bold
                         uppercase tracking-wide text-white transition hover:bg-olive-dark active:scale-[0.98]
                         disabled:cursor-not-allowed disabled:opacity-60"
            >
              {verifyOtp.isPending ? <Spinner label="Verifying…" /> : "Verify & continue"}
            </button>

            <div className="mt-5 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setDigits(Array(OTP_LENGTH).fill(""));
                }}
                className="font-semibold text-muted transition hover:text-ink"
              >
                ← Change email
              </button>

              <button
                type="button"
                onClick={handleSendCode}
                disabled={cooldown > 0 || requestOtp.isPending}
                className="font-semibold text-olive transition hover:text-olive-dark disabled:cursor-not-allowed disabled:text-muted"
              >
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
              </button>
            </div>
          </form>
        )}

        <p className="mt-6 border-t border-cardline pt-4 text-center text-[11px] leading-relaxed text-muted">
          By continuing you agree to our{" "}
          <Link href="/terms-and-conditions" className="font-semibold text-olive hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold text-olive hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Spinner({ label }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      {label}
    </span>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="mx-auto h-64 w-full max-w-md animate-pulse rounded-3xl bg-white/60" />}>
      <LoginCard />
    </Suspense>
  );
}
