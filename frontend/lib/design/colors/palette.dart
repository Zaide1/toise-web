// import 'package:flutter/material.dart';

// class AppPalette {
//   // SKY
//   static const nightSky = Color(0xFF293E4C);
//   static const daySky = Color(0xFF7FCBFF);

//   // GROUND / BELOW HERO
//   static const nightGround = Color(0xFF1F2F3B);
//   static const dayGround = Color(0xFFA0E4A5);

//   // HILL / SHAPE
//   static const nightHill = Color(0xFF1F2F3B);
//   static const dayHill = Color(0xFF7DDC86);
//   static const hillHorizonNight = Color(0xFF263843);
//   static const hillHorizonDay = Color(0xFF7CB28E);
//   static const hillHighNight = Color(0xFF1F2F3B);
//   static const hillHighDay = Color(0xFF639894);
//   static const hillLowNight = Color(0xFF23373F);
//   static const hillLowDay = Color.fromARGB(255, 168, 221, 161);

//   // HERO (Cards)
//   static const pillSolid = Colors.white70;
//   // Optional: Use this if you want the "Green Card" look in the day
//   //static const pillDayMatcha = Color(0xFFE3F7E5);
//   static const pillDayMatcha = Color(0xFFF3F5F7);

//   static const glassTint = Color(0xFFEAEAEA);

//   static const double glassNightA = 0.10;
//   static const double glassDayA = 0.16;

//   // --- NEW ADDITIONS FOR REVIEW PAGE ---
//   static const forestText = Color(0xFF2F3E35); // Deep Slate Green (Day Text)
//   static const boneWhite = Color(0xFFF1F3F2); // Button Background
// }
import 'package:flutter/material.dart';

class AppPalette {
  // =========================
  // SKY (ONLY thing that changes)
  // =========================
  static const nightSkyTop = Color(0xFF2F4B63);
  static const nightSkyBottom = Color(0xFF4D6A82);

  static const dawnSkyTop = Color(0xFF3E6FA3);
  static const dawnSkyBottom = Color(0xFFA9D7FF);

  static const daySkyTop = Color(0xFF7FCBFF);
  static const daySkyBottom = Color(0xFFD8F2FF);

  static const duskSkyTop = Color(0xFF2E4E76);
  static const duskSkyBottom = Color(0xFF6B86A0);

  // ---- Backwards-compatible names (your old code uses these)
  static const nightSky = nightSkyBottom;
  static const daySky = daySkyTop;

  // =========================
  // STAGE (CONSTANT all day)
  // =========================
  static const stageGround = Color(0xFF6FAF7A);

  static const hillHorizon = Color(0xFF3F6E56);
  static const hillHigh = Color(0xFF4F8660);
  static const hillLow = Color(0xFF5E9B6B);

  //   static const stageGround = Color(0xFF6FAF7A);

  // static const hillHorizon = Color(0xFF4F8660);
  // static const hillHigh = Color(0xFF5E9B6B);
  // static const hillLow = Color(0xFF3F6E56);

  // ---- Backwards-compatible names (freeze to stage)
  static const nightGround = stageGround;
  static const dayGround = stageGround;

  static const nightHill = stageGround;
  static const dayHill = stageGround;

  static const hillHorizonNight = hillHorizon;
  static const hillHorizonDay = hillHorizon;

  static const hillHighNight = hillHigh;
  static const hillHighDay = hillHigh;

  static const hillLowNight = hillLow;
  static const hillLowDay = hillLow;

  // =========================
  // UI (CONSTANT)
  // =========================
  static const appBackground = Color(0xFFDCE7F2);

  // Keep your existing tokens so other screens compile
  static const pillSolid = Colors.white70;
  static const pillDayMatcha = Color(0xFFF3F5F7);

  static const glassTint = Color(0xFFEAEAEA);
  static const double glassNightA = 0.10;
  static const double glassDayA = 0.16;

  static const forestText = Color(0xFF2F3E35);
  static const boneWhite = Color(0xFFF1F3F2);
  static const sectionLabel = Color(0x592F3E35);

  static const macroProtein = Color(0xFFFF9E80);
  static const macroCarbs = Color(0xFF90CAF9);
  static const macroFat = Color(0xFF4EA97A);
}
