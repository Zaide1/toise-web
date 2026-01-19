import { PALETTE } from "@/lib/generated/flutterTokens";

const FALLBACK = {
  text: "var(--text)",
};

export const LandingSlogan = () => {
  const text = PALETTE.forestText ?? FALLBACK.text;

  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container flex min-h-[24vh] items-end justify-center text-center sm:min-h-[26vh]">
        <h1
          className="text-[2.4rem] font-black leading-[0.9] tracking-[-0.06em] sm:text-[3rem] lg:text-[3.4rem]"
          style={{ color: text, textShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
        >
          Slow and steady
          <br />
          wins the race.
        </h1>
      </div>
    </section>
  );
};
