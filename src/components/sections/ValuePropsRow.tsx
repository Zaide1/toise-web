import { Reveal } from "@/components/motion/Reveal";

const FALLBACKS = {
  card: "var(--card)",
  text: "var(--text)",
  muted: "var(--muted)",
};

const ITEMS = [
  {
    title: "Light-aligned routines",
    copy: "A daily flow that shifts with your circadian rhythm, not against it.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Calm data surfaces",
    copy: "See progress with soft-glass cards and readable, quiet metrics.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M5 7h14M5 12h10M5 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Guided consistency",
    copy: "Micro check-ins that feel like coaching, not reminders.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const ValuePropsRow = () => {
  const card = FALLBACKS.card;
  const text = FALLBACKS.text;
  const muted = FALLBACKS.muted;

  return (
    <section id="features" className="relative bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-black/5 p-6 shadow-soft"
                style={{ backgroundColor: card, color: text }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-sm" style={{ color: text }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-6" style={{ color: muted }}>
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
