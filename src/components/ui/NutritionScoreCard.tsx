type NutritionFactor = {
  label: string;
  status: string;
  color: string;
  icon: React.ReactNode;
};

type NutritionScoreCardProps = {
  score?: number;
  factors?: NutritionFactor[];
  className?: string;
};

const LeafIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M6 13.2c0 3.4 2.7 6.1 6.1 6.1 4.8 0 7.9-4.5 7.9-10.2-4.7 0-10.1 2.7-10.1 7.1z"
      fill="currentColor"
    />
    <path
      d="M8 14.2c2.4-.8 4.5-2.5 6.2-4.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const SugarIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M7.5 7.5h9v9h-9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 5.5h5M9.5 18.5h5M5.5 9.5v5M18.5 9.5v5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const SodiumIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M6.5 9.5h11a2 2 0 0 1 1.9 2.6l-1.2 4A3.5 3.5 0 0 1 14.8 19H9.2a3.5 3.5 0 0 1-3.4-2.9l-1.2-4a2 2 0 0 1 1.9-2.6z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M8 6.2c.6-.5 1.3-.8 2.2-.8 1.1 0 2 .4 2.8 1.1.6-.7 1.5-1.1 2.6-1.1 1 0 1.9.3 2.6.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const FiberIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M6.5 19.5c5.5-1.5 9-5.8 11-11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 7.5c1.2 1.8 1.2 4.4 0 6.2M12 6c1.4 2.1 1.4 5.1 0 7.2M16 4.5c1.6 2.3 1.6 5.7 0 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const DEFAULT_FACTORS: NutritionFactor[] = [
  { label: "Sugar", status: "Good", color: "#16a34a", icon: <SugarIcon className="h-5 w-5" /> },
  { label: "Sodium", status: "High", color: "#f97316", icon: <SodiumIcon className="h-5 w-5" /> },
  { label: "Fiber", status: "Low", color: "#ef4444", icon: <FiberIcon className="h-5 w-5" /> },
];

export const NutritionScoreCard = ({
  score = 62,
  factors = DEFAULT_FACTORS,
  className = "",
}: NutritionScoreCardProps) => {
  const clamped = Math.max(0, Math.min(100, score));
  const progress = `${clamped}%`;

  return (
    <div
      className={`rounded-[36px] border border-black/5 bg-[var(--card)] p-4 shadow-soft ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--muted)]">
            Nutrition Score
          </p>
          <p className="mt-1 text-3xl font-black text-[var(--text)]">
            {clamped}
            <span className="ml-1 text-base font-semibold text-[var(--muted)]">
              /100
            </span>
          </p>
        </div>
        <div className="relative h-12 w-12">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e ${progress}, rgba(0,0,0,0.08) 0)`,
            }}
          />
          <div className="absolute inset-[6px] rounded-full bg-[var(--card)]" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {factors.map((factor) => (
          <div
            key={factor.label}
            className="rounded-[18px] border p-2 text-center"
            style={{
              backgroundColor: `${factor.color}0D`,
              borderColor: `${factor.color}33`,
            }}
          >
            <p className="text-[11px] font-semibold text-[var(--text)]/70">
              {factor.label}
            </p>
            <p className="text-[12px] font-bold" style={{ color: factor.color }}>
              {factor.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
