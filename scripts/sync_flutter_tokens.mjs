import fs from "node:fs";
import path from "node:path";

const flutterRoot = process.env.FLUTTER_ROOT
  ? path.resolve(process.env.FLUTTER_ROOT)
  : path.resolve(process.cwd(), "../frontend");

const palettePath = path.join(
  flutterRoot,
  "lib/design/colors/palette.dart"
);
const dayPhasePath = path.join(
  flutterRoot,
  "lib/design/colors/day_phase.dart"
);
const dayPhaseProviderPath = path.join(
  flutterRoot,
  "lib/design/colors/day_phase_provider.dart"
);

const missingFiles = [palettePath, dayPhasePath].filter(
  (filePath) => !fs.existsSync(filePath)
);

if (missingFiles.length > 0) {
  console.error("[sync_flutter_tokens] Missing Dart files:");
  for (const filePath of missingFiles) {
    console.error(`- ${filePath}`);
  }
  process.exit(1);
}

const stripLineComments = (text) => text.replace(/\/\/.*$/gm, "");

const paletteText = stripLineComments(
  fs.readFileSync(palettePath, "utf8")
);
const dayPhaseText = stripLineComments(
  fs.readFileSync(dayPhasePath, "utf8")
);

const palette = {};
const paletteRegex =
  /(?:static\s+const|const|final)\s+(\w+)\s*=\s*Color\(\s*0xFF([0-9A-Fa-f]{6})\s*\)/g;
let match;
while ((match = paletteRegex.exec(paletteText)) !== null) {
  palette[match[1]] = `#${match[2].toUpperCase()}`;
}

if (Object.keys(palette).length === 0) {
  console.error(
    "[sync_flutter_tokens] No palette colors found. Expected Color(0xFFRRGGBB) entries in palette.dart."
  );
  process.exit(1);
}

const parseTimeConst = (text, name) => {
  const regex = new RegExp(
    `const\\s+${name}\\s*=\\s*(\\d+)\\s*\\*\\s*60\\s*\\+\\s*(\\d+)\\s*;`
  );
  const result = text.match(regex);
  if (!result) return null;
  return { h: Number(result[1]), m: Number(result[2]) };
};

let nightStart = parseTimeConst(dayPhaseText, "nightStart");
let nightEnd = parseTimeConst(dayPhaseText, "dawnStart");

if (!nightStart || !nightEnd) {
  if (fs.existsSync(dayPhaseProviderPath)) {
    const providerText = stripLineComments(
      fs.readFileSync(dayPhaseProviderPath, "utf8")
    );
    nightStart = nightStart ?? parseTimeConst(providerText, "nightStart");
    nightEnd = nightEnd ?? parseTimeConst(providerText, "dawnStart");
  }
}

const missingPhase = [];
if (!nightStart) missingPhase.push("nightStart");
if (!nightEnd) missingPhase.push("dawnStart");

if (missingPhase.length > 0) {
  console.warn(
    `[sync_flutter_tokens] Missing ${missingPhase.join(
      ", "
    )} in Dart. Using fallback night window.`
  );
}

nightStart = nightStart ?? { h: 22, m: 10 };
nightEnd = nightEnd ?? { h: 6, m: 30 };

const outputDir = path.join(process.cwd(), "src/lib/generated");
const outputPath = path.join(outputDir, "flutterTokens.ts");

fs.mkdirSync(outputDir, { recursive: true });

const paletteEntries = Object.keys(palette)
  .sort()
  .map((key) => `  ${key}: "${palette[key]}"`)
  .join(",\n");

const output = `// AUTO-GENERATED — do not edit\nexport const PHASE_RULES = { nightStart: { h: ${nightStart.h}, m: ${nightStart.m} }, nightEnd: { h: ${nightEnd.h}, m: ${nightEnd.m} } };\nexport const PALETTE = {\n${paletteEntries}\n};\n`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`[sync_flutter_tokens] Wrote ${outputPath}`);
