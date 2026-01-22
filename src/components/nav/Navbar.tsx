"use client";

import { PALETTE } from "@/lib/generated/flutterTokens";
import { useScenePhase } from "@/lib/scene/useScenePhase";

const FALLBACKS = {
  daySkyTop: "var(--sky-day-start)",
  nightSkyTop: "var(--sky-night-start)",
  text: "var(--text)",
};

export const Navbar = () => {
  const phase = useScenePhase();

  const skyTop =
    phase === "night"
      ? PALETTE.nightSkyTop ?? FALLBACKS.nightSkyTop
      : PALETTE.daySkyTop ?? FALLBACKS.daySkyTop;
  const text = PALETTE.forestText ?? FALLBACKS.text;
  const navText = phase === "night" ? "#f7f6f2" : text;

  return (
    <header className="relative z-30">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${skyTop} 0%, rgba(0,0,0,0) 85%)`,
          opacity: phase === "night" ? 0.6 : 0.35,
        }}
        aria-hidden
      />
      <div className="page-container relative flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 text-sm font-semibold" style={{ color: navText }}>
            T
          </div>
          <span className="text-sm font-semibold" style={{ color: navText }}>
            TOISE
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" style={{ color: navText }}>
          <a className="transition-opacity hover:opacity-70" href="#features">
            Features
          </a>
          <a className="transition-opacity hover:opacity-70" href="#proof">
            Proof
          </a>
          <a className="transition-opacity hover:opacity-70" href="#final">
            Get access
          </a>
        </nav>
        <a
          className="flex h-11 items-center justify-center rounded-[var(--radius-pill)] border border-white/40 px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          style={{ color: navText }}
          href="/waitlist"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
};
