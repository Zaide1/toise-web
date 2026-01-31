"use client";

import { PALETTE } from "@/lib/generated/flutterTokens";

type FloatingNavProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export const FloatingNav = ({
  ctaLabel = "Join waitlist",
  ctaHref = "/waitlist",
}: FloatingNavProps) => {
  const text = PALETTE.forestText ?? "var(--text)";
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center sm:top-6">
      <div className="pointer-events-auto flex w-[90vw] max-w-5xl items-center justify-between gap-6 rounded-full border border-black/10 bg-white/80 px-6 py-4 text-sm font-semibold text-[var(--text)] shadow-soft backdrop-blur sm:w-[70vw] sm:px-12 sm:py-6">
        <div className="flex items-baseline gap-3">
          <span
            className="text-xl font-black sm:text-2xl"
            style={{ letterSpacing: "-1.2px", color: text }}
          >
            ChompMate
          </span>
          <span className="hidden text-xs font-semibold tracking-[0.08em] text-[var(--muted)] sm:inline">
            calorie companion
          </span>
        </div>
        <a
          href={ctaHref}
          className="rounded-full bg-[var(--text)] px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};
