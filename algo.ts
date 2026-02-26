#!/usr/bin/env tsx
import { existsSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import select from "@inquirer/select";
import { findLatestPracticeFile } from "./utils.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ALGORITHMS = [
  "dfs",
  "bfs",
  "binary-search",
  "two-pointers",
  "sliding-window",
  "sorting",
  "backtracking",
  "dynamic-programming",
  "greedy",
  "heap",
  "union-find",
  "topological-sort",
  "dijkstra",
  "trie",
];

function todayDate(): string {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function printHelp(): void {
  console.log(`
algo — algorithm practice CLI

USAGE
  npx algo add <algorithm>              Create today's practice file from boilerplate
  npx algo check <algorithm> [date]     Run a practice file (defaults to today)

EXAMPLES
  npx algo add dfs                      → creates dfs/${todayDate()}.ts
  npx algo check dfs                    → runs    dfs/${todayDate()}.ts
  npx algo check dfs 01-01-2026         → runs    dfs/01-01-2026.ts

ALGORITHMS
${ALGORITHMS.map((a) => `  ${a}`).join("\n")}

DATE FORMAT
  DD-MM-YYYY  (e.g. ${todayDate()})
`);
}

function assertValidAlgo(algo: string): void {
  if (!ALGORITHMS.includes(algo)) {
    console.error(`Unknown algorithm: "${algo}"`);
    console.error(`\nAvailable algorithms:\n${ALGORITHMS.map((a) => `  ${a}`).join("\n")}`);
    process.exit(1);
  }
}

async function promptAlgorithm(): Promise<string> {
  return select({
    message: "Select an algorithm",
    choices: ALGORITHMS.map((a) => ({ name: a, value: a })),
    pageSize: ALGORITHMS.length,
  });
}

const [subcommand, algo, dateArg] = process.argv.slice(2);

if (!subcommand || subcommand === "help" || subcommand === "--help" || subcommand === "-h") {
  printHelp();
  process.exit(0);
}

if (subcommand !== "add" && subcommand !== "check") {
  console.error(`Unknown command: "${subcommand}"\n`);
  printHelp();
  process.exit(1);
}

const selectedAlgo = algo ?? await promptAlgorithm();
if (algo) assertValidAlgo(selectedAlgo);

const algoDir = resolve(__dirname, "algorithms", selectedAlgo);
const date = dateArg ?? todayDate();

// ─── add ──────────────────────────────────────────────────────────────────────
if (subcommand === "add") {
  const boilerplate = resolve(algoDir, "boilerplate.ts");
  const dest = resolve(algoDir, `${date}.ts`);

  if (!existsSync(boilerplate)) {
    console.error(`Boilerplate not found: ${boilerplate}`);
    process.exit(1);
  }

  let effectiveDest = dest;
  let effectiveDate = date;
  if (existsSync(dest)) {
    let counter = 1;
    while (existsSync(resolve(algoDir, `${date}(${counter}).ts`))) {
      counter++;
    }
    effectiveDate = `${date}(${counter})`;
    effectiveDest = resolve(algoDir, `${effectiveDate}.ts`);
  }

  copyFileSync(boilerplate, effectiveDest);
  console.log(`Created: ${selectedAlgo}/${effectiveDate}.ts`);
  console.log(`\nWhen you're ready: npx algo check ${selectedAlgo} ${effectiveDate}`);
  execSync(`code "${effectiveDest}"`);
  process.exit(0);
}


// ─── check ────────────────────────────────────────────────────────────────────
const latestFilePath = findLatestPracticeFile(algoDir, date);

if (!latestFilePath || !existsSync(latestFilePath)) {
  console.error(`Practice file not found for: ${selectedAlgo}/${date}.ts`);
  if (!dateArg) {
    console.error(`\nCreate today's file first:\n  npx algo add ${selectedAlgo}`);
  }
  process.exit(1);
}

const shownFile = latestFilePath.split("/").pop();
console.log(`Checking: ${selectedAlgo}/${shownFile}\n`);
await import(latestFilePath);
