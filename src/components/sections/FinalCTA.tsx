import { Reveal } from "@/components/motion/Reveal";

export const FinalCTA = () => {
  return (
    <section id="final" className="bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div
            className="rounded-[var(--radius-lg)] border border-white/60 p-10 shadow-soft backdrop-blur sm:p-14"
            style={{
              background:
                "linear-gradient(130deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
            }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Ready to start
                </p>
                <h2 className="mt-4 text-[2rem] font-semibold leading-tight sm:text-[2.4rem]">
                  Meet your day with clarity and a softer pace.
                </h2>
                <p className="mt-3 max-w-[52ch] text-base text-[var(--muted)] sm:text-lg">
                  Join the private beta to shape the most thoughtful habit tracker yet.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="h-11 rounded-[var(--radius-pill)] bg-[var(--text)] px-6 text-sm font-semibold text-white shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)]">
                  Join the waitlist
                </button>
                <button className="h-11 rounded-[var(--radius-pill)] border border-black/10 px-6 text-sm font-semibold text-[var(--text)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)]">
                  Request a demo
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
