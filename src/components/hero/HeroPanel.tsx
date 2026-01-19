"use client";

import { useState } from "react";

import { PALETTE } from "@/lib/generated/flutterTokens";
import { useSceneSky } from "@/lib/scene/useSceneSky";
import { CloudOverlay } from "@/components/hero/CloudOverlay";
import { RemyRive } from "@/components/hero/RemyRive";
import { StarOverlay } from "@/components/hero/StarOverlay";

const FALLBACKS = {
  ground: "var(--ground)",
  hillHorizon: "#3f6e56",
  hillHigh: "#4f8660",
  hillLow: "#5e9b6b",
};

const PANEL_RADIUS = "52px";

const withAlpha = (color: string, alpha: number) => {
  if (!color.startsWith("#") || color.length !== 7) return color;
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const HeroPanel = () => {
  const { skyTop, skyBottom, starsOpacity, cloudsOpacity, showSunGlow } =
    useSceneSky();
  const [textureOpacity] = useState(1);
  const ground = PALETTE.stageGround ?? FALLBACKS.ground;
  const hillHorizon = PALETTE.hillHorizon ?? FALLBACKS.hillHorizon;
  const hillHigh = PALETTE.hillHigh ?? FALLBACKS.hillHigh;
  const hillLow = PALETTE.hillLow ?? FALLBACKS.hillLow;
  const skyFade = withAlpha(skyBottom, 0.9);
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const sleepStart = 22 * 60 + 10;
  const sleepEnd = 6 * 60 + 40;
  const isSleeping = minutes >= sleepStart || minutes < sleepEnd;

  const remyWidth = isSleeping
    ? "clamp(85px, 32%, 130px)"
    : "clamp(75px, 30%, 125px)";
  const remyBottom = isSleeping ? "calc(65% * 0.16)" : "calc(65% * 0.28)";

  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container pb-12 pt-8 sm:pb-16 lg:pb-20">
        <div
          className="relative mx-auto mt-[4vh] max-w-3xl overflow-hidden border border-black/5 shadow-soft"
          style={{ borderRadius: PANEL_RADIUS }}
        >
          <div className="relative w-full aspect-[4/3]">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${skyTop} 0%, ${skyFade} 100%)`,
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: showSunGlow ? 0 : starsOpacity }}
              aria-hidden
            >
              <StarOverlay isActive={!showSunGlow} opacity={starsOpacity} />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: showSunGlow ? cloudsOpacity : 0 }}
              aria-hidden
            >
              <CloudOverlay isActive={showSunGlow} opacity={cloudsOpacity} />
            </div>
            <div
              className="absolute"
              style={{
                top: "-20%",
                left: "-20%",
                width: "150%",
                height: "80%",
                opacity: showSunGlow ? 1 : 0,
                transition: "opacity 1500ms ease-in-out",
                background:
                  "radial-gradient(circle at 15% 10%, rgba(255,255,255,0.4), rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 100%)",
              }}
              aria-hidden
            />
            <div
              className="absolute z-20 pointer-events-none"
              style={{ right: "17%", bottom: remyBottom, width: remyWidth }}
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1.2" }}>
              <RemyRive isSleeping={isSleeping} />
            </div>
          </div>
            <div className="absolute inset-x-0 bottom-0 h-[65%]" aria-hidden>
              <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <filter
                    id="hillShadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="12"
                      floodColor="rgba(0,0,0,0.2)"
                    />
                  </filter>
                  <pattern
                    id="grassPattern"
                    width="256"
                    height="256"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(0 0)"
                  >
                    <image
                      href="/textures/grass_pattern.png"
                      width="1024"
                      height="1024"
                      transform="scale(0.25)"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                </defs>
                <path
                  d="M0 280 C 250 0 600 350 1000 320 L1000 1000 L0 1000 Z"
                  fill={hillHorizon}
                />
                <path
                  d="M1000 150 C 650 150 350 450 0 550 L0 1000 L1000 1000 Z"
                  fill={hillHigh}
                />
                <path
                  d="M0 400 C 500 100 600 600 1000 700 L1000 1000 L0 1000 Z"
                  fill={hillLow}
                />
                <path
                  d="M0 400 C 500 100 600 600 1000 700 L1000 1000 L0 1000 Z"
                  fill="url(#grassPattern)"
                  opacity={0.12 * textureOpacity}
                  style={{ mixBlendMode: "multiply" }}
                />
                <path
                  d="M1000 350 C 650 350 350 850 0 700 L0 1000 L1000 1000 Z"
                  fill={ground}
                  filter="url(#hillShadow)"
                />
                <path
                  d="M1000 350 C 650 350 350 850 0 700 L0 1000 L1000 1000 Z"
                  fill="url(#grassPattern)"
                  opacity={0.45 * textureOpacity}
                  style={{ mixBlendMode: "multiply" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
