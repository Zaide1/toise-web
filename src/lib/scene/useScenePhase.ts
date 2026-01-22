"use client";

import { useEffect, useState } from "react";

import { resolveScenePhase, type ScenePhase } from "@/lib/scene/phase";

const DEV_OVERRIDE = false;
const DEV_OVERRIDE_PHASE: ScenePhase = "night";

export const useScenePhase = (): ScenePhase => {
  const [phase, setPhase] = useState<ScenePhase>(() =>
    resolveScenePhase(new Date())
  );

  useEffect(() => {
    if (DEV_OVERRIDE) {
      setPhase(DEV_OVERRIDE_PHASE);
      return;
    }

    const updatePhase = () => setPhase(resolveScenePhase(new Date()));
    updatePhase();

    const interval = setInterval(updatePhase, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return DEV_OVERRIDE ? DEV_OVERRIDE_PHASE : phase;
};
