import { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SecondaryButton = ({ className = "", ...props }: ButtonProps) => {
  return (
    <a
      className={`flex h-11 items-center justify-center rounded-[var(--radius-pill)] border border-black/10 px-6 text-sm font-semibold text-[var(--text)] transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)] ${className}`}
      {...props}
    />
  );
};
