import { PALETTE } from "@/lib/generated/flutterTokens";

const FALLBACKS = {
  ground: "var(--ground)",
  card: "var(--card)",
  text: "var(--text)",
  muted: "var(--muted)",
};

export const FirstSection = () => {
  const ground = PALETTE.stageGround ?? FALLBACKS.ground;
  const card = PALETTE.boneWhite ?? FALLBACKS.card;
  const text = PALETTE.forestText ?? FALLBACKS.text;
  const muted = PALETTE.sectionLabel ?? FALLBACKS.muted;

  return (
    <section
      className="relative z-20 -mt-24"
      style={{ backgroundColor: ground, color: text }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: muted }}>
            Your day, balanced
          </p>
          <h2
            className="mt-4 text-3xl font-semibold sm:text-4xl"
            style={{
              fontFamily:
                "\"Cormorant Garamond\", \"Iowan Old Style\", \"Palatino Linotype\", serif",
            }}
          >
            A gentle command center for habits that actually stick.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Light-aligned routines",
              copy: "See the exact moments your energy peaks and dips, then shape your rituals around it.",
            },
            {
              title: "Soft-focus insights",
              copy: "A calm, card-based dashboard keeps the data legible without the noise.",
            },
            {
              title: "Grounded coaching",
              copy: "Practical nudges that help you reset, not burn out.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/40 p-6 shadow-[0_16px_40px_rgba(18,30,24,0.12)]"
              style={{ backgroundColor: card }}
            >
              <h3 className="text-xl font-semibold" style={{ color: text }}>
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7" style={{ color: muted }}>
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
