// import 'dart:async';
// import 'package:flutter_riverpod/flutter_riverpod.dart';
// import 'day_phase.dart';

// final dayPhaseColorsProvider = Provider<DayPhaseColors>((ref) {
//   // Recompute when the ticker emits
//   ref.watch(_minuteTickerProvider.select((a) => a.value));
//   return DayPhaseLogic.colorsAt(DateTime.now());
// });

// final _minuteTickerProvider = StreamProvider<void>((ref) {
//   final controller = StreamController<void>();

//   controller.add(null);
//   final timer = Timer.periodic(const Duration(minutes: 1), (_) {
//     controller.add(null);
//   });

//   ref.onDispose(() {
//     timer.cancel();
//     controller.close();
//   });

//   return controller.stream;
// });

import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'day_phase.dart';

class DayPhaseOverrideNotifier extends Notifier<DateTime?> {
  @override
  DateTime? build() => null;

  void setOverride(DateTime? value) {
    state = value;
  }
}

final dayPhaseOverrideProvider =
    NotifierProvider<DayPhaseOverrideNotifier, DateTime?>(
  DayPhaseOverrideNotifier.new,
);

final dayPhaseColorsProvider = Provider<DayPhaseColors>((ref) {
  ref.watch(_minuteTickerProvider.select((a) => a.value));
  final override = ref.watch(dayPhaseOverrideProvider);
  return DayPhaseLogic.colorsAt(override ?? DateTime.now());
});

final homeHeroCircadianPillProvider = Provider<Color>((ref) {
  ref.watch(_minuteTickerProvider.select((a) => a.value));
  final override = ref.watch(dayPhaseOverrideProvider);
  return DayPhaseLogic.homeHeroCircadianPillAt(override ?? DateTime.now());
});

final homeHeroCircadianPillTextProvider = Provider<Color>((ref) {
  ref.watch(_minuteTickerProvider.select((a) => a.value));
  final override = ref.watch(dayPhaseOverrideProvider);
  return DayPhaseLogic.homeHeroCircadianPillTextAt(override ?? DateTime.now());
});

final _minuteTickerProvider = StreamProvider<void>((ref) {
  final controller = StreamController<void>();
  controller.add(null);

  final timer = Timer.periodic(const Duration(minutes: 1), (_) {
    controller.add(null);
  });

  ref.onDispose(() {
    timer.cancel();
    controller.close();
  });

  return controller.stream;
});
