import { AppCard } from "@/components/ui/AppCard";
import { MacroTile } from "@/components/ui/MacroTile";
import { Reveal } from "@/components/motion/Reveal";

const BLOCKS = [
  {
    eyebrow: "Daily balance",
    title: "Stay in rhythm with a calmer daily summary.",
    body: "A soft-glass card stacks your goals, while macro tiles keep the details calm and readable.",
    bullets: ["Scene-aware card surfaces", "One-tap macro visibility"],
    tint: "bg-[#EAF2ED]",
  },
  {
    eyebrow: "Nourish gently",
    title: "Macro tiles that feel like the app, not analytics.",
    body: "Your nutrients are laid out like the Toise home screen—simple, pastel, and effortless to scan.",
    bullets: ["Pastel tiles for instant read", "Soft shadows, no harsh contrast"],
    tint: "bg-[#EEF2F7]",
  },
];

export const FeatureBlocks = () => {
  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container space-y-16 py-20 sm:py-24 lg:py-32">
        {BLOCKS.map((block, index) => (
          <Reveal key={block.title}>
            <div
              className={`grid items-center gap-10 rounded-[48px] p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] ${
                block.tint
              } ${index % 2 === 1 ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}
            >
              <div
                className={`flex flex-col gap-4 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <p className="text-xs font-semibold text-[var(--muted)]">
                  {block.eyebrow}
                </p>
                <h2 className="text-[2rem] font-semibold leading-tight sm:text-[2.4rem]">
                  {block.title}
                </h2>
                <p className="max-w-[52ch] text-sm leading-6 text-[var(--muted)] sm:text-base">
                  {block.body}
                </p>
                <ul className="space-y-2 text-sm text-[var(--text)]">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--text)]" />
                      <span className="text-sm text-[var(--muted)]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex flex-col gap-4">
                  <AppCard className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                      Calories
                    </p>
                    <p className="text-3xl font-semibold text-[var(--text)]">
                      1,124
                      <span className="text-base text-[var(--muted)]"> kcal</span>
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Today • steady and on track
                    </p>
                  </AppCard>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <MacroTile
                      label="Protein"
                      value="92g"
                      target="110g"
                      tone="protein"
                      icon={<span>🥚</span>}
                    />
                    <MacroTile
                      label="Carbs"
                      value="210g"
                      target="240g"
                      tone="carbs"
                      icon={<span>🍚</span>}
                    />
                    <MacroTile
                      label="Fat"
                      value="54g"
                      target="60g"
                      tone="fat"
                      icon={<span>🥑</span>}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
