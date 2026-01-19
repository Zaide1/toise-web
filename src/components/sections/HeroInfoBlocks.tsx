"use client";

import Image from "next/image";

import { ScrollFade } from "@/components/motion/ScrollFade";
import { AppCard } from "@/components/ui/AppCard";
import { HexCard } from "@/components/ui/HexCard";
import { DEFAULT_MEAL_MACROS, MealSummaryCard } from "@/components/ui/MealSummaryCard";
import { NutritionScoreCard } from "@/components/ui/NutritionScoreCard";
import { WeeklyReviewCard } from "@/components/ui/WeeklyReviewCard";
import { useScenePhase } from "@/lib/scene/useScenePhase";

type DeviceBezelProps = {
  imageSrc?: string;
  alt?: string;
  fit?: "cover" | "contain";
  className?: string;
};

const DeviceBezel = ({
  imageSrc,
  alt,
  fit = "cover",
  className = "",
}: DeviceBezelProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-[34px] border border-black/12 bg-transparent" />
      <div className="absolute inset-[10px] rounded-[24px] ring-1 ring-black/[0.03]" />
      <div className="absolute inset-[10px] overflow-hidden rounded-[24px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt ?? ""}
            fill
            sizes="(max-width: 768px) 240px, 320px"
            className={
              fit === "contain"
                ? "object-cover object-top lg:object-contain"
                : "object-cover object-top"
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export const HeroInfoBlocks = () => {
  const scenePhase = useScenePhase();
  const circadianScreenshot = (() => {
    const normalized = scenePhase.toLowerCase();

    if (["dawn", "morning", "sunrise"].some((phase) => normalized.includes(phase))) {
      return "/screenshots/6.30am_homepage.webp";
    }

    if (["day", "midday", "afternoon"].some((phase) => normalized.includes(phase))) {
      return "/screenshots/12.30pm_homepage.webp";
    }

    if (["evening", "night", "dusk"].some((phase) => normalized.includes(phase))) {
      return "/screenshots/21.00pm_homepage.webp";
    }

    return "/screenshots/12.30pm_homepage.webp";
  })();

  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container pb-32 pt-10">
        <div className="relative flex items-start justify-center">
          <div className="relative flex w-full max-w-5xl flex-col items-center gap-16 pt-16 sm:pt-24 lg:gap-20 lg:pt-32">
            <div className="flex w-full flex-col items-center gap-10">
              <ScrollFade className="self-center">
                <div className="max-w-sm text-left lg:-translate-x-12">
                  <h3 className="text-[2rem] font-black leading-[0.95] text-[var(--text)]">
                    Log meals with ease.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Snap, scan, or type. We'll keep it simple.
                  </p>
                </div>
              </ScrollFade>

              <ScrollFade className="self-center lg:self-end">
                <HexCard className="relative w-full max-w-[560px] overflow-hidden lg:h-[380px] lg:w-[560px] lg:translate-x-10">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase text-[var(--muted)]">
                        Daily clarity
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-[var(--text)]">
                        Calories and macros, without the stress.
                      </h3>
                    </div>
                    <div className="relative flex flex-1 flex-col items-center lg:items-end lg:pt-8">
                      <div className="pointer-events-none relative flex justify-center overflow-visible px-4 max-h-[320px] sm:max-h-[360px] lg:pointer-events-auto lg:static lg:flex lg:flex-1 lg:items-end lg:justify-center lg:max-h-none">
                        <DeviceBezel
                          imageSrc="/screenshots/meal_details_macros.webp"
                          alt="Meal details macros screen"
                          fit="contain"
                          className="aspect-[9/19] w-[210px] translate-y-4 scale-100 origin-bottom sm:w-[210px] sm:-translate-y-4 sm:scale-100 lg:w-[210px] lg:translate-y-0 lg:scale-100"
                        />
                      </div>
                      <div className="absolute right-0 top-0 z-20 w-full max-w-[280px] -translate-x-[90px] translate-y-[185px] rotate-2 lg:translate-y-[200px] lg:-translate-x-[80px] lg:rotate-2">
                        <NutritionScoreCard
                          className="relative z-20 -mb-20 origin-top-right scale-70 lg:scale-80"
                          score={84}
                        />
                      </div>
                    </div>
                  </div>
                </HexCard>
              </ScrollFade>
            </div>

            <div className="flex w-full flex-col items-center gap-10">
              <ScrollFade className="self-center">
                <div className="max-w-sm text-left lg:translate-x-12">
                  <h3 className="text-[2rem] font-black leading-[0.95] text-[var(--text)]">
                    See your week at a glance.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    A simple summary that keeps you on pace.
                  </p>
                </div>
              </ScrollFade>

              <ScrollFade className="self-center lg:self-start">
                <HexCard className="relative w-full max-w-[560px] overflow-hidden lg:h-[380px] lg:w-[560px] lg:-translate-x-10">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase text-[var(--muted)]">
                        Weekly stats
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-[var(--text)]">
                        Progress that feels calm and clear.
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                        Track your steady wins with gentle weekly summaries.
                      </p>
                    </div>
                    <div className="relative flex flex-1 items-end justify-center lg:justify-end">
                    <div className="pointer-events-none relative flex justify-center overflow-visible px-4 max-h-[320px] sm:max-h-[360px] lg:pointer-events-auto lg:static lg:flex lg:flex-1 lg:items-end lg:justify-center lg:max-h-none">
                      <DeviceBezel
                        imageSrc="/screenshots/weekly_review_page.webp"
                        alt="Weekly review screen"
                        fit="contain"
                        className="aspect-[9/19] w-[216px] translate-y-4 scale-100 origin-bottom sm:w-[240px] sm:-translate-y-4 sm:scale-100 lg:w-[210px] lg:translate-y-8 lg:scale-100"
                      />
                    </div>
                      <div className="absolute right-0 top-0 z-20 w-full max-w-[240px] origin-top-right scale-70 translate-x-6 rotate-2">
                        <WeeklyReviewCard />
                      </div>
                    </div>
                  </div>
                </HexCard>
              </ScrollFade>
            </div>

            <div className="flex w-full flex-col items-center gap-10">
              <ScrollFade className="self-center">
                <div className="max-w-sm text-left lg:-translate-x-12">
                  <h3 className="text-[2rem] font-black leading-[0.95] text-[var(--text)]">
                    In sync with your day.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    A time-aware interface that stays in sync from morning to night.
                  </p>
                </div>
              </ScrollFade>

              <ScrollFade className="self-center lg:self-end">
                <HexCard className="relative w-full max-w-[560px] overflow-hidden lg:h-[380px] lg:w-[560px] lg:translate-x-10">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase text-[var(--muted)]">
                        Circadian UI
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-[var(--text)]">
                        The sky shifts with your day.
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                       Dawn to night, the interface updates with local time, so you always feel oriented.
                      </p>
                    </div>
                    <div className="relative flex flex-1 items-end justify-center lg:justify-end">
                      <div className="pointer-events-none relative flex justify-center overflow-visible px-4 max-h-[320px] sm:max-h-[360px] lg:pointer-events-auto lg:static lg:flex lg:flex-1 lg:items-end lg:justify-center lg:max-h-none">
                      <DeviceBezel
                        imageSrc={circadianScreenshot}
                        alt="Toise app screenshot"
                        fit="cover"
                        className="aspect-[9/19] w-[216px] translate-y-4 scale-100 origin-bottom sm:w-[240px] sm:-translate-y-4 sm:scale-100 lg:w-[210px] lg:translate-y-8 lg:scale-100"
                      />
                      </div>
                    </div>
                  </div>
                </HexCard>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
