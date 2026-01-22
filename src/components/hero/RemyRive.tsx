"use client";

import { useEffect, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

type RemyRiveProps = {
  isSleeping: boolean;
};

export const RemyRive = ({ isSleeping }: RemyRiveProps) => {
  const [isReady, setIsReady] = useState(() => remyLoaded);
  const { rive, RiveComponent } = useRive({
    src: "/rive/remy_home_sm.riv",
    stateMachines: "State Machine 2",
    autoplay: true,
  });

  const sleepInput = useStateMachineInput(
    rive,
    "State Machine 2",
    "isSleeping"
  );

  useEffect(() => {
    if (sleepInput) {
      sleepInput.value = isSleeping;
    }
  }, [isSleeping, sleepInput]);

  useEffect(() => {
    if (!rive) return;
    remyLoaded = true;
    setIsReady(true);
  }, [rive]);

  return (
    <RiveComponent
      className={`h-full w-full transition-opacity duration-300 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

let remyLoaded = false;
