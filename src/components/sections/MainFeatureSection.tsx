import { HexCard } from "@/components/ui/HexCard";
import { MealSummaryCard, DEFAULT_MEAL_MACROS } from "@/components/ui/MealSummaryCard";

export const MainFeatureSection = () => {
  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <HexCard>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase text-[var(--muted)]">
                  Daily clarity
                </p>
                <h2 className="mt-3 text-2xl font-black text-[var(--text)] sm:text-3xl">
                  Calories and macros, styled like the app.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Log meals fast, then see your day in a calm, consistent card
                  that never feels noisy.
                </p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase text-[var(--muted)]">
                    Calories
                  </p>
                  <p className="mt-2 text-4xl font-black text-[var(--text)]">
                    0<span className="text-lg font-semibold text-[var(--muted)]"> kcal</span>
                  </p>
                  <p className="text-sm text-[var(--muted)]">Consumed</p>
                </div>
              </div>
              <div className="flex-1">
                <MealSummaryCard calories="3000" macros={DEFAULT_MEAL_MACROS} />
              </div>
            </div>
          </HexCard>
        </div>
      </div>
    </section>
  );
};
