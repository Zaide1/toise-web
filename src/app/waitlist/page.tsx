"use client";

import { useEffect, useId, useMemo, useState } from "react";

import { FloatingNav } from "@/components/nav/FloatingNav";
import { Footer } from "@/components/sections/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

const STORAGE_KEY = "chompmate_waitlist_v1";

type WaitlistStep = "email" | "questions" | "success";

type Answers = {
  goal?: string;
  experience?: string;
  painPoints?: string[];
  loggingPref?: string;
  dietPrefs?: string[];
  device?: string;
};

type QuestionType = "single" | "multi";

type Question = {
  id: keyof Answers;
  title: string;
  type: QuestionType;
  options: string[];
  maxSelections?: number;
  optional?: boolean;
};

const QUESTIONS: Question[] = [
  {
    id: "goal",
    title: "Primary goal",
    type: "single",
    options: [
      "Lose weight",
      "Maintain",
      "Gain muscle",
      "Eat healthier",
      "Improve consistency",
      "Other",
    ],
  },
  {
    id: "experience",
    title: "Experience",
    type: "single",
    options: ["New to tracking", "Done it before, fell off", "I track regularly already"],
  },
  {
    id: "painPoints",
    title: "Biggest pain",
    type: "multi",
    maxSelections: 2,
    options: [
      "Logging takes too long",
      "Hard to estimate portions",
      "I forget / no routine",
      "Too much guilt / too intense",
      "Confusing macros",
      "Other",
    ],
  },
  {
    id: "loggingPref",
    title: "How do you prefer to log?",
    type: "single",
    options: ["Scan/photo (fast)", "Search database", "Manual entry", "Mixed"],
  },
  {
    id: "dietPrefs",
    title: "Dietary preferences",
    type: "multi",
    optional: true,
    options: [
      "None",
      "High protein",
      "Vegetarian",
      "Vegan",
      "Halal",
      "Kosher",
      "Gluten-free",
      "Dairy-free",
    ],
  },
  {
    id: "device",
    title: "Device",
    type: "single",
    options: ["iPhone", "Android"],
  },
];

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

  const [answers, setAnswers] = useState<Answers>({
    painPoints: [],
    dietPrefs: [],
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [displayedQuestion, setDisplayedQuestion] = useState(0);
  const [questionVisible, setQuestionVisible] = useState(true);

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

  const goToQuestion = (nextIndex: number) => {
    if (nextIndex === questionIndex) return;

    setQuestionIndex(nextIndex);
    if (prefersReducedMotion) {
      setDisplayedQuestion(nextIndex);
      setQuestionVisible(true);
      return;
    }

    setQuestionVisible(false);
    setTimeout(() => {
      setDisplayedQuestion(nextIndex);
      setQuestionVisible(true);
    }, 220);
  };

  const resetWizard = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({ painPoints: [], dietPrefs: [] });
    setQuestionIndex(0);
    setDisplayedQuestion(0);
    setEmail("");
    setError("");
    setErrorVisible(false);
    transitionToStep("email");
  };

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setError("Enter a valid email address.");
      setErrorVisible(true);
      return;
    }

    transitionToStep("questions");
  };

  const currentQuestion = QUESTIONS[displayedQuestion];

  const selection = useMemo(() => {
    const value = answers[currentQuestion.id];
    return value ?? (currentQuestion.type === "multi" ? [] : "");
  }, [answers, currentQuestion]);

  const isAnswered = () => {
    if (currentQuestion.optional) return true;
    if (currentQuestion.type === "single") {
      return Boolean(selection);
    }
    return Array.isArray(selection) && selection.length > 0;
  };

  const isOptionDisabled = (option: string) => {
    if (currentQuestion.type !== "multi") return false;
    const selected = Array.isArray(selection) ? selection : [];
    if (selected.includes(option)) return false;
    if (currentQuestion.maxSelections && selected.length >= currentQuestion.maxSelections) {
      return true;
    }
    if (currentQuestion.id === "dietPrefs" && selected.includes("None")) {
      return option !== "None";
    }
    return false;
  };

  const handleSelect = (option: string) => {
    if (currentQuestion.type === "single") {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
      return;
    }

    setAnswers((prev) => {
      const existing = Array.isArray(prev[currentQuestion.id])
        ? (prev[currentQuestion.id] as string[])
        : [];

      if (existing.includes(option)) {
        return {
          ...prev,
          [currentQuestion.id]: existing.filter((item) => item !== option),
        };
      }

      if (currentQuestion.maxSelections && existing.length >= currentQuestion.maxSelections) {
        return prev;
      }

      if (currentQuestion.id === "dietPrefs" && option === "None") {
        return { ...prev, dietPrefs: ["None"] };
      }

      const withoutNone =
        currentQuestion.id === "dietPrefs"
          ? existing.filter((item) => item !== "None")
          : existing;

      return {
        ...prev,
        [currentQuestion.id]: [...withoutNone, option],
      };
    });
  };

  const handleSkip = async () => {
    setError("");
    setErrorVisible(false);
    setIsSubmitting(true);
    try {
      await submitWaitlist({ email: email.trim(), answers });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          email: email.trim(),
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

  const handleNext = () => {
    if (!isAnswered()) return;
    if (questionIndex < QUESTIONS.length - 1) {
      goToQuestion(questionIndex + 1);
      return;
    }
    handleJoinWaitlist();
  };

  const handleBack = () => {
    if (questionIndex === 0) {
      transitionToStep("email");
      return;
    }
    goToQuestion(questionIndex - 1);
  };

  const handleJoinWaitlist = async () => {
    setError("");
    setErrorVisible(false);
    setIsSubmitting(true);

    try {
      await submitWaitlist({ email: email.trim(), answers });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          email: email.trim(),
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

  const stepProgress = step === "questions" ? "Step 2 of 2" : "Step 1 of 2";

  return (
    <main className="min-h-viewport bg-[var(--page-bg)] text-[var(--text)] flex flex-col">
      <FloatingNav ctaLabel="Home" ctaHref="/" />
      <div className="page-container flex min-h-[70vh] flex-1 items-center justify-center pt-80 pb-12 sm:pt-96 sm:pb-20">
        <div
          className="w-full max-w-xl rounded-[50px] border border-black/10 bg-white/80 p-8 shadow-soft backdrop-blur transition-all duration-300 mt-32 sm:mt-0 sm:p-12"
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
                  We'll email you when your invite is ready.
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
                    Early access
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                    {stepProgress}
                  </p>
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl font-black text-[var(--text)] sm:text-4xl">
                    Join the waitlist
                  </h1>
                  <p className="text-sm leading-6 text-[var(--muted)] sm:text-base">
                    Get early access to ChompMate. We'll email you when your invite is ready.
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
                  <PrimaryButton className="w-full sm:w-auto" type="submit">
                    Continue
                  </PrimaryButton>
                  <p className="text-xs text-[var(--muted)]" aria-live="polite">
                    No spam. Unsubscribe anytime.
                  </p>
                  <a
                    className="text-xs font-semibold text-[var(--text)] underline-offset-4 hover:underline"
                    href="/"
                  >
                    Back to home
                  </a>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Early access
                  </p>
                  <button
                    type="button"
                    className="text-xs font-semibold text-[var(--muted)] underline-offset-4 hover:underline"
                    onClick={handleSkip}
                    disabled={isSubmitting}
                  >
                    Skip
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-[var(--text)] sm:text-3xl">
                    {currentQuestion.title}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                    Step 2 of 2
                  </p>
                </div>

                <div
                  className={`${
                    prefersReducedMotion
                      ? ""
                      : "transition-all duration-300 ease-out"
                  } ${questionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <div className="flex flex-wrap gap-3">
                    {currentQuestion.options.map((option) => {
                      const selected =
                        currentQuestion.type === "single"
                          ? selection === option
                          : Array.isArray(selection) && selection.includes(option);
                      const disabled = isOptionDisabled(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelect(option)}
                          disabled={disabled}
                          aria-pressed={selected}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition shadow-soft ${
                            selected
                              ? "border-black/30 bg-black/5 text-[var(--text)]"
                              : "border-black/10 bg-white text-[var(--text)]"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-40"
                              : "hover:border-black/20"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {currentQuestion.type === "multi" && currentQuestion.maxSelections ? (
                    <p className="mt-3 text-xs text-[var(--muted)]">
                      Pick up to {currentQuestion.maxSelections}
                    </p>
                  ) : null}
                </div>

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <SecondaryButton
                    className="w-full sm:w-auto"
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleBack();
                    }}
                  >
                    Back
                  </SecondaryButton>
                  <PrimaryButton
                    className="w-full sm:w-auto"
                    onClick={handleNext}
                    disabled={isSubmitting || !isAnswered()}
                    type="button"
                  >
                    {questionIndex === QUESTIONS.length - 1
                      ? isSubmitting
                        ? "Joining..."
                        : "Join waitlist"
                      : "Next"}
                  </PrimaryButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-10 sm:pt-16">
        <Footer />
      </div>
    </main>
  );
}
