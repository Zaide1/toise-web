import { PALETTE } from "@/lib/generated/flutterTokens";

type SkyPhase = {
  skyTop: string;
  skyBottom: string;
  starsOpacity: number;
  cloudsOpacity: number;
  showSunGlow: boolean;
};

const FALLBACKS = {
  nightSkyTop: "#2F4B63",
  nightSkyBottom: "#4D6A82",
  dawnSkyTop: "#3E6FA3",
  dawnSkyBottom: "#A9D7FF",
  daySkyTop: "#7FCBFF",
  daySkyBottom: "#D8F2FF",
  dayMidSkyTop: "#86CFFF",
  dayMidSkyBottom: "#D2EEFF",
  dayLateSkyTop: "#7ABFF5",
  dayLateSkyBottom: "#CAE6FF",
  duskSkyTop: "#2E4E76",
  duskSkyBottom: "#6B86A0",
};

const toMinutes = (h: number, m: number) => h * 60 + m;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return null;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${[r, g, b]
    .map((value) => Math.round(value).toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();

const lerpColor = (a: string, b: string, t: number) => {
  const rgbA = hexToRgb(a) ?? hexToRgb(FALLBACKS.daySkyTop)!;
  const rgbB = hexToRgb(b) ?? hexToRgb(FALLBACKS.daySkyBottom)!;
  return rgbToHex(
    lerp(rgbA.r, rgbB.r, t),
    lerp(rgbA.g, rgbB.g, t),
    lerp(rgbA.b, rgbB.b, t)
  );
};

const computeLuminance = (hex: string) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const normalize = (value: number) => {
    const v = value / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const r = normalize(rgb.r);
  const g = normalize(rgb.g);
  const b = normalize(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const approxSkyLuminance = (top: string, bottom: string) =>
  computeLuminance(top) * 0.65 + computeLuminance(bottom) * 0.35;

export const resolveSkyPhase = (date: Date): SkyPhase => {
  const minutes = date.getHours() * 60 + date.getMinutes();

  const dawnStart = toMinutes(6, 30);
  const dayStart = toMinutes(9, 30);
  const dayMid = toMinutes(13, 30);
  const duskStart = toMinutes(17, 30);
  const eveningMid = toMinutes(19, 30);
  const nightStart = toMinutes(22, 10);

  const skyTokens = {
    nightTop: PALETTE.nightSkyTop ?? FALLBACKS.nightSkyTop,
    nightBottom: PALETTE.nightSkyBottom ?? FALLBACKS.nightSkyBottom,
    dawnTop: PALETTE.dawnSkyTop ?? FALLBACKS.dawnSkyTop,
    dawnBottom: PALETTE.dawnSkyBottom ?? FALLBACKS.dawnSkyBottom,
    dayTop: PALETTE.daySkyTop ?? FALLBACKS.daySkyTop,
    dayBottom: PALETTE.daySkyBottom ?? FALLBACKS.daySkyBottom,
    dayMidTop: FALLBACKS.dayMidSkyTop,
    dayMidBottom: FALLBACKS.dayMidSkyBottom,
    dayLateTop: FALLBACKS.dayLateSkyTop,
    dayLateBottom: FALLBACKS.dayLateSkyBottom,
    duskTop: PALETTE.duskSkyTop ?? FALLBACKS.duskSkyTop,
    duskBottom: PALETTE.duskSkyBottom ?? FALLBACKS.duskSkyBottom,
  };

  let aTop = skyTokens.nightTop;
  let aBottom = skyTokens.nightBottom;
  let bTop = skyTokens.nightTop;
  let bBottom = skyTokens.nightBottom;
  let t = 1;

  if (minutes < dawnStart) {
    aTop = skyTokens.nightTop;
    aBottom = skyTokens.nightBottom;
    bTop = skyTokens.dawnTop;
    bBottom = skyTokens.dawnBottom;

    const total = (24 * 60 - nightStart) + dawnStart;
    const passed = minutes >= nightStart
      ? minutes - nightStart
      : (24 * 60 - nightStart) + minutes;
    t = passed / total;
  } else if (minutes < dayStart) {
    aTop = skyTokens.dawnTop;
    aBottom = skyTokens.dawnBottom;
    bTop = skyTokens.dayTop;
    bBottom = skyTokens.dayBottom;
    t = (minutes - dawnStart) / (dayStart - dawnStart);
  } else if (minutes < dayMid) {
    aTop = skyTokens.dayTop;
    aBottom = skyTokens.dayBottom;
    bTop = skyTokens.dayMidTop;
    bBottom = skyTokens.dayMidBottom;
    t = (minutes - dayStart) / (dayMid - dayStart);
  } else if (minutes < duskStart) {
    aTop = skyTokens.dayMidTop;
    aBottom = skyTokens.dayMidBottom;
    bTop = skyTokens.dayLateTop;
    bBottom = skyTokens.dayLateBottom;
    t = (minutes - dayMid) / (duskStart - dayMid);
  } else if (minutes < eveningMid) {
    aTop = skyTokens.dayLateTop;
    aBottom = skyTokens.dayLateBottom;
    bTop = skyTokens.duskTop;
    bBottom = skyTokens.duskBottom;
    t = (minutes - duskStart) / (eveningMid - duskStart);
  } else if (minutes < nightStart) {
    aTop = skyTokens.duskTop;
    aBottom = skyTokens.duskBottom;
    bTop = skyTokens.nightTop;
    bBottom = skyTokens.nightBottom;
    t = (minutes - eveningMid) / (nightStart - eveningMid);
  }

  const k = easeInOutCubic(clamp(t, 0, 1));
  const skyTop = lerpColor(aTop, bTop, k);
  const skyBottom = lerpColor(aBottom, bBottom, k);

  const lum = approxSkyLuminance(skyTop, skyBottom);
  const stars = clamp(((0.26 - lum) / 0.16), 0, 1);
  const starsOpacity = clamp(stars * 1.15, 0, 1);
  const cloudsOpacity = clamp(1 - starsOpacity, 0, 1);
  const showSunGlow = lum > 0.15;

  return { skyTop, skyBottom, starsOpacity, cloudsOpacity, showSunGlow };
};
