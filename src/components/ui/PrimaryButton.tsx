import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`h-11 rounded-[var(--radius-pill)] bg-[var(--text)] px-6 text-sm font-semibold text-white shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)] ${className}`}
      {...props}
    />
  );
};
