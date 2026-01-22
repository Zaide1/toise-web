import { AppCard } from "@/components/ui/AppCard";
import { Reveal } from "@/components/motion/Reveal";

const CARDS = [
  {
    title: "Glanceable routine",
    copy: "See your key rituals in a single, soft-focus stack.",
  },
  {
    title: "Gentle nudges",
    copy: "Micro prompts that feel like coaching, not alarms.",
  },
  {
    title: "Macro clarity",
    copy: "Pastel macro tiles show what matters without the noise.",
  },
];

export const StaggeredAppCards = () => {
  return (
    <section id="features" className="bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {CARDS.map((card, index) => (
              <div
                key={card.title}
                className={
                  index === 1
                    ? "lg:-translate-y-6"
                    : index === 2
                      ? "lg:-translate-y-2"
                      : ""
                }
              >
                <AppCard className="flex h-full flex-col gap-3">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {card.copy}
                  </p>
                </AppCard>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
