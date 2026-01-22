import { Reveal } from "@/components/motion/Reveal";
import { AppCard } from "@/components/ui/AppCard";

const TESTIMONIALS = [
  {
    quote:
      "The calmest habit tracker I have touched. It makes the day feel spacious.",
    name: "Emilia R.",
    role: "Wellness founder",
  },
  {
    quote:
      "The sky shifts are subtle, but they keep me grounded. The flow just works.",
    name: "Kaito M.",
    role: "Product designer",
  },
  {
    quote:
      "Everything feels intentional. I log faster and think less about the app.",
    name: "Ava N.",
    role: "Beta tester",
  },
];

const METRICS = [
  "Fast logging",
  "Calm UI",
  "Built for consistency",
];

export const SocialProof = () => {
  return (
    <section id="proof" className="bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                Social proof
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-[2.4rem]">
                Loved by people who care about their rhythm.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <AppCard key={item.name} className="flex h-full flex-col justify-between">
                  <p className="text-sm leading-6 text-[var(--text)]">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[var(--text)]">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {item.role}
                    </p>
                  </div>
                </AppCard>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {METRICS.map((item) => (
                <span
                  key={item}
                  className="rounded-[var(--radius-pill)] border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
