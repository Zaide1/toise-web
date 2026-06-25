import { PALETTE } from "@/lib/generated/flutterTokens";
import { ANDROID_WAITLIST_HREF, IOS_BETA_HREF } from "@/lib/betaLinks";
import { AndroidIcon, AppleIcon } from "@/components/ui/PlatformIcons";

const FALLBACK = {
  text: "var(--text)",
};

export const LandingSlogan = () => {
  const text = PALETTE.forestText ?? FALLBACK.text;
  const androidGreen = "#7ea972";

  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container flex min-h-[46vh] flex-col items-center justify-end pt-40 text-center sm:min-h-[26vh] sm:pt-0">
        <h1
          className="text-[2.4rem] font-black leading-[0.9] tracking-[-0.06em] sm:text-[3rem] lg:text-[3.4rem]"
          style={{ color: text, textShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
        >
          Slow and steady
          <br />
          wins the race.
        </h1>
        <div className="mt-8 flex w-full max-w-2xl flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href={IOS_BETA_HREF}
            target={IOS_BETA_HREF.startsWith("http") ? "_blank" : undefined}
            rel={
              IOS_BETA_HREF.startsWith("http")
                ? "noreferrer noopener"
                : undefined
            }
            className="flex h-14 w-full items-center justify-center gap-3 rounded-[var(--radius-pill)] bg-[var(--text)] px-8 text-base font-semibold text-white shadow-soft transition hover:opacity-95 sm:w-auto sm:min-w-[260px]"
          >
            <AppleIcon className="h-6 w-6" />
            <span>Try the iOS beta</span>
          </a>
          <a
            href={ANDROID_WAITLIST_HREF}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-[var(--radius-pill)] border bg-transparent px-8 text-base font-semibold text-[var(--text)] transition hover:bg-black/3 sm:w-auto sm:min-w-[260px]"
            style={{ borderColor: "color-mix(in srgb, #7ea972 58%, white)" }}
          >
            <AndroidIcon className="h-6 w-6" style={{ color: androidGreen }} />
            <span>Android waitlist</span>
          </a>
        </div>
        <p className="mt-4 text-sm font-medium text-[var(--muted)]">
          iOS beta available on TestFlight.
        </p>
      </div>
    </section>
  );
};
