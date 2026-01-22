"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    const legacyMedia = media as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };
    if (typeof legacyMedia.addListener === "function") {
      legacyMedia.addListener(update);
      return () => legacyMedia.removeListener?.(update);
    }
  }, []);

  return reduced;
};

type RouteFadeProps = {
  children: React.ReactNode;
};

export const RouteFade = ({ children }: RouteFadeProps) => {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setVisible(true);
      return;
    }

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [pathname, prefersReducedMotion]);

  return (
    <>
      {pathname === "/" ? (
        children
      ) : (
        <div
          className={`transition-opacity duration-150 ease-out ${
            visible || prefersReducedMotion ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};
