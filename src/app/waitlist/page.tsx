"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { FloatingNav } from "@/components/nav/FloatingNav";
import { Footer } from "@/components/sections/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const STORAGE_KEY = "chompmate_android_waitlist_v1";

type WaitlistStep = "email" | "success";

type Answers = {
  device?: string;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const submitWaitlist = async (payload: { email: string; answers: Answers }) => {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Waitlist submission failed.");
  }

  return { ok: true };
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    const legacyMedia = media as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };
    if (typeof legacyMedia.addListener === "function") {
      legacyMedia.addListener(update);
      return () => legacyMedia.removeListener?.(update);
    }
  }, []);

  return reduced;
};

export default function WaitlistPage() {
  const inputId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [step, setStep] = useState<WaitlistStep>("email");
  const [stepVisible, setStepVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as { email?: string };
      if (parsed?.email) {
        setEmail(parsed.email);
        setStep("success");
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStepVisible(true);
      return;
    }

    setStepVisible(false);
    const id = requestAnimationFrame(() => setStepVisible(true));
    return () => cancelAnimationFrame(id);
  }, [step, prefersReducedMotion]);

  const transitionToStep = (nextStep: WaitlistStep) => {
    if (nextStep === step) return;

    if (prefersReducedMotion) {
      setStep(nextStep);
      return;
    }

    setStepVisible(false);
    setTimeout(() => setStep(nextStep), 220);
  };

  const resetWizard = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEmail("");
    setError("");
    setErrorVisible(false);
    transitionToStep("email");
  };

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setErrorVisible(false);

    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setError("Enter a valid email address.");
      setErrorVisible(true);
      return;
    }
    setIsSubmitting(true);

    try {
      const answers: Answers = { device: "Android" };
      await submitWaitlist({ email: trimmed, answers });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          email: trimmed,
          answers,
          createdAt: new Date().toISOString(),
        })
      );
      transitionToStep("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setErrorVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!error || errorVisible) return;
    const timeout = setTimeout(() => setError(""), 300);
    return () => clearTimeout(timeout);
  }, [error, errorVisible]);

  return (
    <main className="min-h-viewport flex flex-col bg-[var(--page-bg)] text-[var(--text)]">
      <FloatingNav ctaLabel="Home" ctaHref="/" />
      <div className="page-container flex min-h-[70vh] flex-1 items-center justify-center pt-80 pb-12 sm:pt-96 sm:pb-20">
        <div
          className="mt-32 w-full max-w-xl rounded-[50px] border border-black/10 bg-white/80 p-8 shadow-soft backdrop-blur transition-all duration-300 sm:mt-0 sm:p-12"
        >
          <div
            className={`${
              prefersReducedMotion
                ? ""
              : "transition-all duration-300 ease-out"
            } ${stepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            {step === "success" ? (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Early access
                </p>
                <h1 className="text-3xl font-black text-[var(--text)] sm:text-4xl">
                  You're on the list ✅
                </h1>
                <p className="text-sm leading-6 text-[var(--muted)] sm:text-base">
                  We&apos;ll email you when Android access is ready.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <PrimaryButton
                    className="w-full sm:w-auto"
                    type="button"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Back to home
                  </PrimaryButton>
                  <button
                    type="button"
                    className="inline-block text-xs font-semibold text-[var(--muted)] underline-offset-4 hover:underline"
                    onClick={resetWizard}
                  >
                    Join with a different email
                  </button>
                </div>
              </div>
            ) : step === "email" ? (
              <form className="space-y-5" onSubmit={handleEmailSubmit} noValidate>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Android waitlist
                  </p>
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl font-black text-[var(--text)] sm:text-4xl">
                    Join the Android waitlist
                  </h1>
                  <p className="text-sm leading-6 text-[var(--muted)] sm:text-base">
                    Leave your email and we&apos;ll let you know when the Android beta opens.
                  </p>
                </div>

                <div className="space-y-1">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
                    htmlFor={inputId}
                  >
                    Email address
                  </label>
                  <input
                    id={inputId}
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(event) => {
                      const nextValue = event.target.value;
                      setEmail(nextValue);
                      if (error && nextValue.trim() === "") {
                        setErrorVisible(false);
                      }
                    }}
                    className={`w-full rounded-[24px] border bg-white px-4 py-3 text-sm text-[var(--text)] shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)] ${
                      error ? "border-red-400 focus-visible:ring-red-300" : "border-black/10"
                    }`}
                  />
                  <div
                    className={`text-sm text-red-600 transition-all duration-300 ease-out ${
                      errorVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {error || " "}
                  </div>
                </div>

                <div className="space-y-2">
                  <PrimaryButton
                    className="w-full sm:w-auto"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join waitlist"}
                  </PrimaryButton>
                  <p className="text-xs text-[var(--muted)]" aria-live="polite">
                    No spam. Unsubscribe anytime.
                  </p>
                  <Link
                    className="text-xs font-semibold text-[var(--text)] underline-offset-4 hover:underline"
                    href="/"
                  >
                    Back to home
                  </Link>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-10 sm:pt-16">
        <Footer />
      </div>
    </main>
  );
}
