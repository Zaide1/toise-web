import { PALETTE } from "@/lib/generated/flutterTokens";

type Macro = {
  label: string;
  value: string;
  color: string;
  icon: React.ReactNode;
};

type MealSummaryCardProps = {
  calories: string;
  macros: Macro[];
  className?: string;
};

const withAlpha = (color: string, alpha: number) => {
  if (!color.startsWith("#") || color.length !== 7) return color;
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const EggIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
    <path
      d="M12 3c-3.5 0-6.2 4.3-6.2 8.2C5.8 16.2 8.7 20 12 20s6.2-3.8 6.2-8.8C18.2 7.3 15.5 3 12 3z"
      fill="currentColor"
    />
  </svg>
);

const RiceIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
    <path
      d="M6.5 9.5h11a2 2 0 0 1 1.9 2.6l-1.2 4A3.5 3.5 0 0 1 14.8 19H9.2a3.5 3.5 0 0 1-3.4-2.9l-1.2-4a2 2 0 0 1 1.9-2.6z"
      fill="currentColor"
    />
    <path
      d="M8 5.8c.6-.5 1.3-.8 2.2-.8 1.1 0 2 .4 2.8 1.1.6-.7 1.5-1.1 2.6-1.1 1 0 1.9.3 2.6.9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const DropIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
    <path
      d="M12 3c-3.2 4-5 6.6-5 9.2A5 5 0 0 0 12 17a5 5 0 0 0 5-4.8C17 9.6 15.2 7 12 3z"
      fill="currentColor"
    />
  </svg>
);

export const DEFAULT_MEAL_MACROS: Macro[] = [
  { label: "Protein", value: "12g", color: PALETTE.macroProtein, icon: <EggIcon /> },
  { label: "Carbs", value: "12g", color: PALETTE.macroCarbs, icon: <RiceIcon /> },
  { label: "Fat", value: "21g", color: PALETTE.macroFat, icon: <DropIcon /> },
];

export const MealSummaryCard = ({
  calories,
  macros,
  className = "",
}: MealSummaryCardProps) => {
  return (
    <div
      className={`relative aspect-[1.25] w-full overflow-visible rounded-[40px] border border-black/5 bg-[var(--card)] p-[18px_14px_28px_20px] shadow-soft ${className}`}
    >
      <div className="relative z-10 flex h-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[var(--text)]">
              Calories
            </p>
            <span className="rounded-[13px] border border-black/10 bg-white/70 px-3 py-1 text-[10px] font-semibold text-[var(--text)]">
              Edit
            </span>
          </div>
          <div className="-mt-4 flex items-end gap-2">
            <p className="text-[32px] font-black leading-none text-[var(--text)]">
              {calories}
            </p>
            <span className="text-[14px] font-semibold text-[var(--muted)]">
              kcal
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 pb-8">
            {macros.map((macro) => (
              <div
                key={macro.label}
                className="flex min-h-[58px] flex-col justify-between rounded-[12px] p-2 text-center"
                style={{ backgroundColor: withAlpha(macro.color, 0.2) }}
              >
                <div className="flex justify-center" style={{ color: macro.color }}>
                  {macro.icon}
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-none text-[var(--text)]">
                    {macro.value}
                  </p>
                  <p className="text-[9px] font-semibold text-[var(--muted)]">
                    {macro.label}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
