import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";

type FeatureRowProps = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
};

export const FeatureRow = ({
  eyebrow,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt,
  flip = false,
}: FeatureRowProps) => {
  return (
    <section className="bg-[var(--page-bg)]">
      <div className="page-container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div
            className={`grid items-center gap-12 lg:grid-cols-[1fr_1fr] ${
              flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                {eyebrow}
              </p>
              <h2 className="mt-4 max-w-[22ch] text-[2rem] font-semibold leading-tight sm:text-[2.4rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-[56ch] text-base leading-7 text-[var(--muted)] sm:text-lg">
                {body}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--text)]">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--text)]" />
                    <span className="max-w-[50ch] text-sm text-[var(--muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] rounded-[var(--radius-lg)] border border-black/5 bg-[var(--card)] p-4 shadow-soft">
                <div className="overflow-hidden rounded-[calc(var(--radius-lg)-6px)] border border-black/5 bg-white">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={900}
                    height={1200}
                    sizes="(min-width: 1024px) 420px, 80vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
