// import 'dart:ui' show lerpDouble;
// import 'package:flutter/material.dart';
// import 'palette.dart'; // Ensure this points to your actual palette file

// class DayPhaseColors {
//   const DayPhaseColors({
//     required this.sky,
//     required this.ground,
//     required this.pill,
//     required this.hillHorizon,
//     required this.hillHigh,
//     required this.hillLow,
//     required this.cardSurface,
//     required this.cardStroke,
//     required this.cardText, // <--- Logic for this is fixed below
//     required this.cardTextMuted,
//     required this.cardBubble,
//   });

//   final Color sky;
//   final Color ground;
//   final Color pill;
//   final Color hillHorizon;
//   final Color hillHigh;
//   final Color hillLow;

//   final Color cardSurface;
//   final Color cardStroke;
//   final Color cardText;
//   final Color cardTextMuted;
//   final Color cardBubble;
// }

// class DayPhaseLogic {
//   static DayPhaseColors colorsAt(DateTime now) {
//     final minutes = now.hour * 60 + now.minute;

//     // Define phase start times in minutes
//     const dawnStart = 5 * 60 + 30; // 5:30 AM
//     const dayStart = 9 * 60 + 30; // 9:30 AM
//     const duskStart = 17 * 60 + 30; // 5:30 PM
//     const nightStart = 21 * 60 + 30; // 9:30 PM

//     double k;
//     if (minutes < dawnStart) {
//       k = 0.0; // Night
//     } else if (minutes < dayStart) {
//       k = _remap(minutes, dawnStart, dayStart); // Sunrise
//     } else if (minutes < duskStart) {
//       k = 1.0; // Day
//     } else if (minutes < nightStart) {
//       k = 1.0 - _remap(minutes, duskStart, nightStart); // Sunset
//     } else {
//       k = 0.0; // Night
//     }

//     // Apply cubic curve for smooth background transitions
//     k = Curves.easeInOutCubic.transform(k);

//     // --- THE FIX: Delayed Text Color Snap ---
//     // Problem: If we use 'k', text turns gray (unreadable) at 50% sunrise.
//     // Solution: Keep text WHITE until 75% sunrise, then fast-fade to Dark.
//     // Result: Text stays legible on the mid-tone background.
//     double textK = (k - 0.75) * 10.0;
//     textK = textK.clamp(0.0, 1.0);

//     // 1. SKY & GROUND (Smooth transition using k)
//     final sky = Color.lerp(AppPalette.nightSky, AppPalette.daySky, k)!;
//     final ground = Color.lerp(AppPalette.nightGround, AppPalette.dayGround, k)!;

//     // 2. GLASS & CARD SURFACE
//     final glassA = lerpDouble(AppPalette.glassNightA, AppPalette.glassDayA, k)!;

//     // Darker night background (0.65) ensures white text pops during twilight
//     final cardSurface = Color.lerp(
//       Colors.black.withValues(alpha: 0.65),
//       AppPalette.glassTint.withValues(alpha: glassA),
//       k,
//     )!;

//     final strokeA = lerpDouble(0.14, 0.22, k)!;
//     final cardStroke = Color.lerp(
//       Colors.white.withValues(alpha: 0.15),
//       Colors.white.withValues(alpha: strokeA),
//       k,
//     )!;

//     // 3. TEXT COLORS (Use the corrected textK curve)
//     final cardText = Color.lerp(
//       Colors.white,
//       AppPalette.forestText,
//       textK, // <--- Using the delayed snap here
//     )!;

//     final cardTextMuted = Color.lerp(
//       Colors.white.withValues(alpha: 0.70),
//       AppPalette.forestText.withValues(alpha: 0.60),
//       textK, // <--- And here
//     )!;

//     final bubbleA = lerpDouble(0.20, 0.26, k)!;
//     final cardBubble = Colors.white.withValues(alpha: bubbleA);

//     // 4. HILLS
//     final hillHorizon = Color.lerp(
//       AppPalette.hillHorizonNight,
//       AppPalette.hillHorizonDay,
//       k,
//     )!;
//     final hillHigh = Color.lerp(
//       AppPalette.hillHighNight,
//       AppPalette.hillHighDay,
//       k,
//     )!;
//     final hillLow = Color.lerp(
//       AppPalette.hillLowNight,
//       AppPalette.hillLowDay,
//       k,
//     )!;

//     // 5. PILL
//     final pill = Color.lerp(
//       AppPalette.glassTint.withValues(alpha: AppPalette.glassNightA),
//       AppPalette.pillDayMatcha,
//       k,
//     )!;

//     return DayPhaseColors(
//       sky: sky,
//       ground: ground,
//       pill: pill,
//       hillHorizon: hillHorizon,
//       hillHigh: hillHigh,
//       hillLow: hillLow,
//       cardSurface: cardSurface,
//       cardStroke: cardStroke,
//       cardText: cardText,
//       cardTextMuted: cardTextMuted,
//       cardBubble: cardBubble,
//     );
//   }

//   // Helper to map time ranges to 0.0 - 1.0
//   static double _remap(int x, int a, int b) {
//     final t = (x - a) / (b - a);
//     return t.clamp(0.0, 1.0);
//   }
// }

import 'package:flutter/material.dart';
import 'palette.dart';

class DayPhaseColors {
  const DayPhaseColors({
    required this.sky,         // old: solid sky color
     Color? skyTop,             // optional (compat)
    Color? skyBottom,          // optional (compat)
    this.starsOpacity = 0.0,   // optional (compat)
    this.cloudsOpacity = 1.0,  // optional (compat)
    required this.ground,
    required this.pill,
    required this.hillHorizon,
    required this.hillHigh,
    required this.hillLow,
    required this.cardSurface,
    required this.cardStroke,
    required this.cardText,
    required this.cardTextMuted,
    required this.cardBubble,

  }) : skyTop = skyTop ?? sky,
        skyBottom = skyBottom ?? sky;

  // SKY
  final Color sky;
  final Color skyTop;
  final Color skyBottom;

  // STAGE (constant)
  final Color ground;
  final Color hillHorizon;
  final Color hillHigh;
  final Color hillLow;

  // UI (constant)
  final Color pill;
  final Color cardSurface;
  final Color cardStroke;
  final Color cardText;
  final Color cardTextMuted;
  final Color cardBubble;

  // effects helpers
  final double starsOpacity;
  final double cloudsOpacity;
}

class DayPhaseLogic {
  static DayPhaseColors colorsAt(DateTime now) {
    final minutes = now.hour * 60 + now.minute;

    // Sky keyframes only
    const dawnStart = 6 * 60 + 30;   // 06:30
    const dayStart  = 9 * 60 + 30;   // 09:30
    const duskStart = 17 * 60 + 30;  // 17:30
    const eveningMid  = 19 * 60 + 30;  // 19:30  <-- NEW
    const nightStart = 22 * 60 + 10; // 22:10

    late Color aTop, aBot, bTop, bBot;
    late double t;

    if (minutes < dawnStart) {
      // Night -> Dawn (wrap)
      aTop = AppPalette.nightSkyTop;
      aBot = AppPalette.nightSkyBottom;
      bTop = AppPalette.dawnSkyTop;
      bBot = AppPalette.dawnSkyBottom;

      final total = (24 * 60 - nightStart) + dawnStart;
      final passed = minutes >= nightStart
          ? (minutes - nightStart)
          : (24 * 60 - nightStart) + minutes;

      t = passed / total;
    } else if (minutes < dayStart) {
      // Dawn -> Day
      aTop = AppPalette.dawnSkyTop;
      aBot = AppPalette.dawnSkyBottom;
      bTop = AppPalette.daySkyTop;
      bBot = AppPalette.daySkyBottom;
      t = _remap(minutes, dawnStart, dayStart);
    }  else if (minutes < duskStart) {
    // Day hold
    aTop = AppPalette.daySkyTop;
    aBot = AppPalette.daySkyBottom;
    bTop = AppPalette.daySkyTop;
    bBot = AppPalette.daySkyBottom;
    t = 1.0;

  } else if (minutes < eveningMid) {
    // ✅ Day -> Dusk (no snap)
    aTop = AppPalette.daySkyTop;
    aBot = AppPalette.daySkyBottom;
    bTop = AppPalette.duskSkyTop;
    bBot = AppPalette.duskSkyBottom;
    t = _remap(minutes, duskStart, eveningMid);

  } else if (minutes < nightStart) {
    // ✅ Dusk -> Night
    aTop = AppPalette.duskSkyTop;
    aBot = AppPalette.duskSkyBottom;
    bTop = AppPalette.nightSkyTop;
    bBot = AppPalette.nightSkyBottom;
    t = _remap(minutes, eveningMid, nightStart);

  } else {
    // Night hold
    aTop = AppPalette.nightSkyTop;
    aBot = AppPalette.nightSkyBottom;
    bTop = AppPalette.nightSkyTop;
    bBot = AppPalette.nightSkyBottom;
    t = 1.0;
  }
    final k = Curves.easeInOutCubic.transform(t.clamp(0.0, 1.0));

    // ✅ Only sky changes
    final skyTop = Color.lerp(aTop, bTop, k)!;
    final skyBottom = Color.lerp(aBot, bBot, k)!;

    // Old code expects a single sky color too
    final sky = skyTop;

    // Stars/clouds helpers
    final lum = _approxSkyLuminance(skyTop, skyBottom);
    final stars = (((0.26 - lum) / 0.16).clamp(0.0, 1.0) * 1.15).clamp(0.0, 1.0);
    final clouds = (1.0 - stars).clamp(0.0, 1.0);


    // ✅ Everything else is stable (UI never “themes”)
    const ground = AppPalette.stageGround;

    const hillHorizon = AppPalette.hillHorizon;
    const hillHigh = AppPalette.hillHigh;
    const hillLow = AppPalette.hillLow;

    // Stable UI tokens (tweak later, but keep constant)
    const pill = AppPalette.pillDayMatcha;

    final cardSurface = Colors.white; // fully stable
    final cardStroke = Colors.black.withValues(alpha: 0.06);

    const cardText = AppPalette.forestText;
    final cardTextMuted = AppPalette.forestText.withValues(alpha: 0.60);
    final cardBubble = Colors.white.withValues(alpha: 0.26);

    return DayPhaseColors(
      sky: sky,
      skyTop: skyTop,
      skyBottom: skyBottom,
      ground: ground,
      pill: pill,
      hillHorizon: hillHorizon,
      hillHigh: hillHigh,
      hillLow: hillLow,
      cardSurface: cardSurface,
      cardStroke: cardStroke,
      cardText: cardText,
      cardTextMuted: cardTextMuted,
      cardBubble: cardBubble,
      starsOpacity: stars,
      cloudsOpacity: clouds,
    );
  }

  static Color homeHeroCircadianPillAt(DateTime now) {
    final minutes = now.hour * 60 + now.minute;

    const dawnStart = 5 * 60 + 30; // 05:30
    const dayStart = 9 * 60 + 30; // 09:30
    const duskStart = 17 * 60 + 30; // 17:30
    const nightStart = 21 * 60 + 30; // 21:30

    double k;
    if (minutes < dawnStart) {
      k = 0.0; // Night
    } else if (minutes < dayStart) {
      k = _remap(minutes, dawnStart, dayStart); // Sunrise
    } else if (minutes < duskStart) {
      k = 1.0; // Day
    } else if (minutes < nightStart) {
      k = 1.0 - _remap(minutes, duskStart, nightStart); // Sunset
    } else {
      k = 0.0; // Night
    }

    k = Curves.easeInOutCubic.transform(k);

    final nightPill =
        AppPalette.glassTint.withValues(alpha: AppPalette.glassNightA);
    return Color.lerp(nightPill, AppPalette.pillDayMatcha, k)!;
  }

  static Color homeHeroCircadianPillTextAt(DateTime now) {
    final minutes = now.hour * 60 + now.minute;

    const dawnStart = 5 * 60 + 30; // 05:30
    const dayStart = 9 * 60 + 30; // 09:30
    const duskStart = 17 * 60 + 30; // 17:30
    const nightStart = 21 * 60 + 30; // 21:30

    double k;
    if (minutes < dawnStart) {
      k = 0.0;
    } else if (minutes < dayStart) {
      k = _remap(minutes, dawnStart, dayStart);
    } else if (minutes < duskStart) {
      k = 1.0;
    } else if (minutes < nightStart) {
      k = 1.0 - _remap(minutes, duskStart, nightStart);
    } else {
      k = 0.0;
    }

    k = Curves.easeInOutCubic.transform(k);
    return Color.lerp(Colors.white, AppPalette.forestText, k)!;
  }

  static double _remap(int x, int a, int b) {
    final t = (x - a) / (b - a);
    return t.clamp(0.0, 1.0);
  }

  static double _approxSkyLuminance(Color top, Color bottom) {
    final lt = top.computeLuminance();
    final lb = bottom.computeLuminance();
    return (lt * 0.65) + (lb * 0.35);
  }
}
