import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At midnight the fridge beeped, locked, and showed a photo of me at 2 a.m. last Tuesday holding the ice-cream tub like a trophy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote entry (${line.length} chars) to ${join(outDir, "entry.txt")}`);
