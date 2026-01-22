import { ReactNode } from "react";

import { PALETTE } from "@/lib/generated/flutterTokens";

const FALLBACK = {
  surface: "var(--card)",
  border: "rgba(31, 42, 36, 0.06)",
};

type HexCardProps = {
  children: ReactNode;
  className?: string;
  surface?: string;
};

export const HexCard = ({ children, className = "", surface }: HexCardProps) => {
  const cardSurface = surface ?? PALETTE.pillDayMatcha ?? FALLBACK.surface;

  return (
    <div
      className={`rounded-[50px] border p-8 shadow-soft sm:p-10 ${className}`}
      style={{ background: cardSurface, borderColor: FALLBACK.border }}
    >
      {children}
    </div>
  );
};
