export function check(label: string, passed: boolean): void {
  if (passed) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label}`);
  }
}


import { readdirSync } from "fs";
import { resolve } from "path";

export function findLatestPracticeFile(algoDir: string, date: string): string | null {
  // List all files in the algorithm directory
  const files = readdirSync(algoDir);
  // Escape all regex special characters except parentheses
  const safeDate = date.replace(/[-/\\^$*+?.|[\]{}]/g, "\\$&");
  // Build the regex pattern as a string, not a template literal
  const pattern = "^" + safeDate + "(\\((\\d+)\\))?\\.ts$";
  // console.log('[DEBUG] Regex pattern:', pattern);
  const regex = new RegExp(pattern);
  let maxSuffix = -1;
  let latestFile: string | null = null;
  // Sort files for deterministic debug output
  for (const file of files.sort()) {
    const match = file.match(regex);
    if (match) {
      const suffix = match[2] ? parseInt(match[2], 10) : 0;
      // Debug output for each match
      // console.log(`[DEBUG] Matched file: ${file}, suffix: ${suffix}`);
      if (suffix > maxSuffix) {
        maxSuffix = suffix;
        latestFile = file;
      }
    } else {
      // Debug output for non-matches
      // console.log(`[DEBUG] Not matched: ${file}`);
    }
  }
  // if (latestFile) {
  //   console.log(`[DEBUG] Selected file: ${latestFile} (suffix: ${maxSuffix})`);
  // } else {
  //   console.log('[DEBUG] No matching file found');
  // }
  return latestFile ? resolve(algoDir, latestFile) : null;
}
