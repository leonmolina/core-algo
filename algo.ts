#!/usr/bin/env tsx
import { existsSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import select from "@inquirer/select";

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

const algoDir = resolve(__dirname, selectedAlgo);
const date = dateArg ?? todayDate();

// ─── add ──────────────────────────────────────────────────────────────────────
if (subcommand === "add") {
  const boilerplate = resolve(algoDir, "boilerplate.ts");
  const dest = resolve(algoDir, `${date}.ts`);

  if (!existsSync(boilerplate)) {
    console.error(`Boilerplate not found: ${boilerplate}`);
    process.exit(1);
  }

  if (existsSync(dest)) {
    console.log(`Already exists: ${selectedAlgo}/${date}.ts`);
    console.log(`Run it with: npx algo check ${selectedAlgo} ${date}`);
    process.exit(0);
  }

  copyFileSync(boilerplate, dest);
  console.log(`Created: ${selectedAlgo}/${date}.ts`);
  console.log(`\nWhen you're ready: npx algo check ${selectedAlgo}`);
  process.exit(0);
}

// ─── check ────────────────────────────────────────────────────────────────────
const filePath = resolve(algoDir, `${date}.ts`);

if (!existsSync(filePath)) {
  console.error(`Practice file not found: ${selectedAlgo}/${date}.ts`);
  if (!dateArg) {
    console.error(`\nCreate today's file first:\n  npx algo add ${selectedAlgo}`);
  }
  process.exit(1);
}

console.log(`Checking: ${selectedAlgo}/${date}.ts\n`);
await import(filePath);
