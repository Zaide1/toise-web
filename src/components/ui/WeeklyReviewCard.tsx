type WeeklyReviewCardProps = {
  className?: string;
};

const DEFAULT_BARS = [0, 0, 0, 0, 0.6, 1, 0.35];
const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

export const WeeklyReviewCard = ({ className = "" }: WeeklyReviewCardProps) => {
  return (
    <div
      className={`rounded-[28px] border border-black/5 bg-white p-5 shadow-soft ${className}`}
    >
      <div className="flex items-center gap-2 text-[var(--text)]">
        <p className="text-base font-semibold">Weekly review</p>
        <span className="text-lg text-[var(--muted)]">›</span>
      </div>

      <div className="mt-3 flex items-end gap-2">
        <p className="text-4xl font-black text-[var(--text)]">3</p>
        <p className="text-lg font-semibold text-[var(--muted)]">/7 logged</p>
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
        Week of Jan 12
      </p>

      <div className="mt-6 flex items-end gap-3">
        {DEFAULT_BARS.map((value, index) => (
          <div
            key={`${DAY_LABELS[index]}-${index}`}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="relative h-32 w-4 rounded-full bg-black/10">
              <div
                className="absolute bottom-0 w-full rounded-full bg-[#4CAF50]"
                style={{ height: `${Math.round(value * 100)}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-[var(--muted)]">
              {DAY_LABELS[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
