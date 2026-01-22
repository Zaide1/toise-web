import { PHASE_RULES } from "@/lib/generated/flutterTokens";

export type ScenePhase = "day" | "night";

const toMinutes = (h: number, m: number) => h * 60 + m;

export const resolveScenePhase = (date: Date): ScenePhase => {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const nightStart = toMinutes(PHASE_RULES.nightStart.h, PHASE_RULES.nightStart.m);
  const nightEnd = toMinutes(PHASE_RULES.nightEnd.h, PHASE_RULES.nightEnd.m);

  if (nightStart < nightEnd) {
    return minutes >= nightStart && minutes < nightEnd ? "night" : "day";
  }

  return minutes >= nightStart || minutes < nightEnd ? "night" : "day";
};
