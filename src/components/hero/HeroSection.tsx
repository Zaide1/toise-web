"use client";

import Image from "next/image";

import { PALETTE } from "@/lib/generated/flutterTokens";
import { useScenePhase } from "@/lib/scene/useScenePhase";

const FALLBACKS = {
  daySkyTop: "var(--sky-day-start)",
  daySkyBottom: "var(--sky-day-end)",
  nightSkyTop: "var(--sky-night-start)",
  nightSkyBottom: "var(--sky-night-end)",
  ground: "var(--ground)",
  hillHorizon: "#3f6e56",
  hillHigh: "#4f8660",
  hillLow: "#5e9b6b",
  card: "var(--card)",
  text: "var(--text)",
  muted: "var(--muted)",
};

export const HeroSection = () => {
  const phase = useScenePhase();

  const skyTop =
    phase === "night"
      ? PALETTE.nightSkyTop ?? FALLBACKS.nightSkyTop
      : PALETTE.daySkyTop ?? FALLBACKS.daySkyTop;
  const skyBottom =
    phase === "night"
      ? PALETTE.nightSkyBottom ?? FALLBACKS.nightSkyBottom
      : PALETTE.daySkyBottom ?? FALLBACKS.daySkyBottom;

  const ground = PALETTE.stageGround ?? FALLBACKS.ground;
  const hillHorizon = PALETTE.hillHorizon ?? FALLBACKS.hillHorizon;
  const hillHigh = PALETTE.hillHigh ?? FALLBACKS.hillHigh;
  const hillLow = PALETTE.hillLow ?? FALLBACKS.hillLow;
  const card = PALETTE.boneWhite ?? FALLBACKS.card;
  const text = PALETTE.forestText ?? FALLBACKS.text;
  const muted = PALETTE.sectionLabel ?? FALLBACKS.muted;
  const heroText = phase === "night" ? "#f7f6f2" : text;
  const heroMuted = phase === "night" ? "rgba(247, 246, 242, 0.7)" : muted;
  const ctaBg = phase === "night" ? "#1d2b36" : text;

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${skyTop} 0%, ${skyBottom} 70%)`,
        }}
        aria-hidden
      />
      <div
        className={`float-slow absolute inset-0 transition-opacity duration-1000 ${
          phase === "day" ? "opacity-70" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(160px 70px at 12% 22%, rgba(255,255,255,0.55), transparent 70%), radial-gradient(220px 90px at 38% 18%, rgba(255,255,255,0.45), transparent 72%), radial-gradient(180px 70px at 70% 24%, rgba(255,255,255,0.4), transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className={`twinkle absolute inset-0 transition-opacity duration-1000 ${
          phase === "night" ? "opacity-60" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 14% 18%, rgba(255,255,255,0.6), transparent 60%), radial-gradient(1.5px 1.5px at 34% 22%, rgba(255,255,255,0.45), transparent 60%), radial-gradient(1px 1px at 52% 14%, rgba(255,255,255,0.45), transparent 60%), radial-gradient(2px 2px at 72% 20%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(1.5px 1.5px at 84% 30%, rgba(255,255,255,0.4), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-48"
        style={{
          background:
            phase === "night"
              ? "linear-gradient(180deg, rgba(8,15,20,0.55) 0%, rgba(8,15,20,0) 80%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 80%)",
        }}
        aria-hidden
      />

      <div className="page-container relative z-10 grid gap-12 pb-44 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div style={{ color: heroText }}>
          <p className="text-xs font-semibold uppercase tracking-[0.36em]" style={{ color: heroMuted }}>
            Circadian-first coaching
          </p>
          <h1 className="mt-5 max-w-[20ch] text-[2.4rem] font-semibold leading-tight sm:text-[3.4rem] lg:text-[3.9rem]">
            A calmer way to build routines that actually stick.
          </h1>
          <p className="mt-4 max-w-[56ch] text-base leading-7 sm:text-lg" style={{ color: heroMuted }}>
            ChompMate blends gentle accountability with a sky-synced interface, so your focus,
            hydration, and recovery happen when your body is ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              className="h-11 rounded-[var(--radius-pill)] px-6 text-sm font-semibold text-white shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              style={{ background: ctaBg }}
            >
              Join the waitlist
            </button>
            <a
              className="h-11 rounded-[var(--radius-pill)] border border-white/40 px-6 text-sm font-semibold leading-[2.6rem] transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              style={{ color: heroText }}
              href="#features"
            >
              See the flow
            </a>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: heroMuted }}>
            Private beta • Built in the UK • Join the waitlist
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <div
            className="relative w-[260px] rounded-[var(--radius-lg)] border border-white/40 p-3 shadow-soft"
            style={{ background: card }}
          >
            <div className="absolute left-1/2 top-2 h-1 w-14 -translate-x-1/2 rounded-full bg-black/10" />
            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-6px)] border border-black/5 bg-white">
              <Image
                src="/placeholders/app-screenshot.svg"
                alt="ChompMate app preview"
                width={540}
                height={1080}
                sizes="(min-width: 1024px) 260px, 60vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-44"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${ground} 90%)`,
        }}
        aria-hidden
      />

      <div className="absolute bottom-[-5rem] left-0 right-0 h-56" aria-hidden>
        <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0 150 C 150 90, 350 200, 600 150 C 850 100, 1050 190, 1200 140 L1200 220 L0 220 Z"
            fill={hillHorizon}
          />
          <path
            d="M0 170 C 220 120, 420 210, 700 170 C 930 135, 1080 200, 1200 170 L1200 220 L0 220 Z"
            fill={hillHigh}
          />
          <path
            d="M0 190 C 260 150, 520 220, 820 190 C 980 170, 1100 210, 1200 195 L1200 220 L0 220 Z"
            fill={hillLow}
          />
        </svg>
      </div>
    </section>
  );
};
