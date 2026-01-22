"use client";

import { useEffect, useRef } from "react";

type StarOverlayProps = {
  isActive: boolean;
  opacity: number;
};

const STAR_TWINKLE_MS = 4000;
const STAR_MIN = 12;
const STAR_EXTRA = 5;
const STAR_MIN_SIZE = 1.0;
const STAR_SIZE_RANGE = 1.5;
const STAR_MIN_OPACITY = 0.2;
const STAR_OPACITY_RANGE = 0.3;
const STAR_Y_EXPONENT = 1.25;
const STAR_GLOW_THRESHOLD = 2.5;
const STAR_GLOW_SCALE = 1.5;

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleOffset: number;
};

const seededRandom = (seed: number) => {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

export const StarOverlay = ({ isActive, opacity }: StarOverlayProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement as Element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const now = new Date();
    const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const rand = seededRandom(seed);

    const count = STAR_MIN + Math.floor(rand() * STAR_EXTRA);
    starsRef.current = Array.from({ length: count }, () => {
      const yBase = rand();
      const y = Math.pow(yBase, STAR_Y_EXPONENT);
      return {
        x: rand(),
        y,
        size: STAR_MIN_SIZE + rand() * STAR_SIZE_RANGE,
        opacity: STAR_MIN_OPACITY + rand() * STAR_OPACITY_RANGE,
        twinkleOffset: rand() * Math.PI * 2,
      };
    });

    const render = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const phase = (elapsed % STAR_TWINKLE_MS) / STAR_TWINKLE_MS;
      const animValue = phase;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const dpr = window.devicePixelRatio || 1;
      const logicalWidth = width / dpr;
      const logicalHeight = height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      for (const star of starsRef.current) {
        const twinkle = Math.sin(animValue * Math.PI * 2 + star.twinkleOffset);
        const scale = 0.7 + 0.3 * (twinkle * 0.5 + 0.5);
        const currentOpacity = Math.min(1, Math.max(0, star.opacity * scale));
        const dx = star.x * logicalWidth;
        const dy = star.y * logicalHeight;
        const size = star.size * scale;

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, size, 0, Math.PI * 2);
        ctx.fill();

        if (star.size > STAR_GLOW_THRESHOLD) {
          const glowSize = star.size * STAR_GLOW_SCALE;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dx - glowSize, dy);
          ctx.lineTo(dx + glowSize, dy);
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity})`;
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(dx, dy - glowSize);
          ctx.lineTo(dx, dy + glowSize);
          ctx.stroke();
        }
      }

      ctx.restore();
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startTimeRef.current = null;
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity }}
      aria-hidden
    />
  );
};
