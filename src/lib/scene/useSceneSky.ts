"use client";

import { useEffect, useState } from "react";

import { resolveSkyPhase } from "@/lib/scene/skyPhase";

type SkyPhase = ReturnType<typeof resolveSkyPhase>;

export const useSceneSky = (): SkyPhase => {
  const [phase, setPhase] = useState(() => resolveSkyPhase(new Date()));

  useEffect(() => {
    const update = () => setPhase(resolveSkyPhase(new Date()));
    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return phase;
};
