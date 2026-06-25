"use client";

import { PALETTE } from "@/lib/generated/flutterTokens";
import { ANDROID_WAITLIST_HREF, IOS_BETA_HREF } from "@/lib/betaLinks";
import {
  AndroidIcon,
  AppleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@/components/ui/PlatformIcons";

type FloatingNavProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export const FloatingNav = ({
  ctaLabel = "Join waitlist",
  ctaHref = "/waitlist",
}: FloatingNavProps) => {
  const text = PALETTE.forestText ?? "var(--text)";
  const androidGreen = "#7ea972";
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center sm:top-6">
      <div className="pointer-events-auto flex w-[92vw] max-w-6xl items-center justify-between gap-10 rounded-full border border-black/10 bg-white/80 px-6 py-4 text-sm font-semibold text-[var(--text)] shadow-soft backdrop-blur sm:w-[86vw] sm:px-14 sm:py-6 lg:gap-24 lg:px-16">
        <div className="flex min-w-0 flex-1 items-baseline gap-3 sm:gap-5">
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
        <div className="hidden shrink-0 md:block">
          <details className="group relative">
            <summary className="flex list-none items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 [&::-webkit-details-marker]:hidden">
              <span>Get the beta</span>
              <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-full mt-4 w-[340px] rounded-[32px] border border-black/8 bg-white p-4 text-[var(--text)] shadow-soft">
              <div className="px-2 pb-4 pt-2 text-center">
                <p className="text-[1.85rem] font-black tracking-[-0.05em]">
                  Get ChompMate
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                  Choose your platform
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href={IOS_BETA_HREF}
                  target={IOS_BETA_HREF.startsWith("http") ? "_blank" : undefined}
                  rel={
                    IOS_BETA_HREF.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-[24px] bg-[var(--text)] px-5 py-4 text-white transition hover:opacity-95"
                >
                  <AppleIcon className="h-8 w-8 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-left text-xl font-bold tracking-[-0.03em]">
                      Try the iOS beta
                    </span>
                    <span className="block text-left text-sm text-white/78">
                      Available now
                    </span>
                  </span>
                  <ChevronRightIcon className="h-6 w-6 shrink-0" />
                </a>
                <a
                  href={ANDROID_WAITLIST_HREF}
                  className="flex items-center gap-4 rounded-[24px] border bg-white px-5 py-4 text-[var(--text)] transition hover:bg-black/3"
                  style={{ borderColor: "color-mix(in srgb, #7ea972 58%, white)" }}
                >
                  <AndroidIcon className="h-8 w-8 shrink-0" style={{ color: androidGreen }} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-left text-xl font-bold tracking-[-0.03em]">
                      Android waitlist
                    </span>
                    <span className="block text-left text-sm" style={{ color: androidGreen }}>
                      Coming soon
                    </span>
                  </span>
                  <ChevronRightIcon className="h-6 w-6 shrink-0" />
                </a>
              </div>
              <p className="px-2 pb-2 pt-4 text-center text-sm text-[var(--muted)]">
                iOS beta is available on TestFlight.
              </p>
            </div>
          </details>
        </div>
        <a
          href={ctaHref}
          className="rounded-full bg-[var(--text)] px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:opacity-90 md:hidden sm:px-6 sm:py-3 sm:text-sm"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};
