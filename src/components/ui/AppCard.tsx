import { ReactNode } from "react";

type AppCardProps = {
  children: ReactNode;
  className?: string;
};

export const AppCard = ({ children, className = "" }: AppCardProps) => {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border border-black/5 bg-[var(--card)] p-6 shadow-soft ${className}`}
    >
      {children}
    </div>
  );
};
