"use client";

import { useEffect, useRef } from "react";

type CloudOverlayProps = {
  isActive: boolean;
  opacity: number;
};

const CLOUDS_MIN = 3;
const CLOUDS_EXTRA = 3;
const CLOUD_Y_MIN = 0.05;
const CLOUD_Y_RANGE = 0.25;
const CLOUD_SCALE_MIN = 0.6;
const CLOUD_SCALE_RANGE = 0.6;
const CLOUD_SPEED_MIN = 0.002;
const CLOUD_SPEED_RANGE = 0.005;
const CLOUD_OPACITY_MIN = 0.3;
const CLOUD_OPACITY_RANGE = 0.3;
const CLOUD_MAX_X = 1.2;
const CLOUD_RESET_X = -0.4;
const CLOUD_SCALE_FACTOR = 0.6;
const CLOUD_BASE_WIDTH = 100;
const CLOUD_BASE_HEIGHT = 50;

type Cloud = {
  x: number;
  y: number;
  scale: number;
  speed: number;
  opacity: number;
};

const seededRandom = (seed: number) => {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

export const CloudOverlay = ({ isActive, opacity }: CloudOverlayProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const cloudsRef = useRef<Cloud[]>([]);
  const lastTimeRef = useRef<number | null>(null);

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

    const cloudCount = CLOUDS_MIN + Math.floor(rand() * CLOUDS_EXTRA);
    cloudsRef.current = Array.from({ length: cloudCount }, () => ({
      x: rand(),
      y: CLOUD_Y_MIN + rand() * CLOUD_Y_RANGE,
      scale: CLOUD_SCALE_MIN + rand() * CLOUD_SCALE_RANGE,
      speed: CLOUD_SPEED_MIN + rand() * CLOUD_SPEED_RANGE,
      opacity: CLOUD_OPACITY_MIN + rand() * CLOUD_OPACITY_RANGE,
    }));

    const drawCloud = (cloud: Cloud, width: number, height: number) => {
      const dx = cloud.x * width;
      const dy = cloud.y * height;
      const scale = cloud.scale * CLOUD_SCALE_FACTOR;
      const baseW = CLOUD_BASE_WIDTH;
      const baseH = CLOUD_BASE_HEIGHT;

      ctx.save();
      ctx.translate(dx, dy);
      ctx.scale(scale, scale);

      ctx.beginPath();
      ctx.moveTo(baseW * 0.2, baseH);
      ctx.lineTo(baseW * 0.8, baseH);
      ctx.bezierCurveTo(
        baseW * 1.15,
        baseH,
        baseW * 1.15,
        baseH * 0.4,
        baseW * 0.85,
        baseH * 0.3
      );
      ctx.bezierCurveTo(
        baseW * 0.8,
        -baseH * 0.2,
        baseW * 0.2,
        -baseH * 0.2,
        baseW * 0.15,
        baseH * 0.3
      );
      ctx.bezierCurveTo(
        -baseW * 0.15,
        baseH * 0.4,
        -baseW * 0.15,
        baseH,
        baseW * 0.2,
        baseH
      );
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
      ctx.fill();
      ctx.restore();
    };

    const render = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);
      const logicalWidth = width / dpr;
      const logicalHeight = height / dpr;

      for (const cloud of cloudsRef.current) {
        cloud.x += cloud.speed * dt;
        if (cloud.x > CLOUD_MAX_X) {
          cloud.x = CLOUD_RESET_X;
        }
        drawCloud(cloud, logicalWidth, logicalHeight);
      }

      ctx.restore();
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = null;
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
