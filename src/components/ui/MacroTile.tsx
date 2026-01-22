import { ReactNode } from "react";

const TONES = {
  protein: "bg-[#FEE4DA] text-[#5C2C20]",
  carbs: "bg-[#DCEBFF] text-[#1F3551]",
  fat: "bg-[#D9F2E3] text-[#1B3A2C]",
} as const;

type MacroTileProps = {
  label: string;
  value: string;
  target: string;
  icon: ReactNode;
  tone: keyof typeof TONES;
};

export const MacroTile = ({
  label,
  value,
  target,
  icon,
  tone,
}: MacroTileProps) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-[24px] border border-black/5 px-4 py-5 shadow-soft ${TONES[tone]}`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sm">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-xs uppercase tracking-[0.12em] opacity-70">
          {label}
        </p>
      </div>
      <p className="text-xs opacity-60">Target {target}</p>
    </div>
  );
};
