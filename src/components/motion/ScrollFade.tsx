"use client";

import { useEffect, useRef, useState } from "react";

type ScrollFadeProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollFade = ({ children, className = "" }: ScrollFadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-slow ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
