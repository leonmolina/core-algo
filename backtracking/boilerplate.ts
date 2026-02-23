import { check } from "../utils";

// ─── Backtracking Boilerplate ─────────────────────────────────────────────────
// Classic problem: given an array of distinct integers, return all permutations.
// ─────────────────────────────────────────────────────────────────────────────

const permutations = (nums: number[]): number[][] => {
  // TODO: implement
  return [];
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Three elements — 6 permutations
check("Test 1",
  permutations([1, 2, 3]).length === 6
);

// 2. Contains the specific permutation [3, 1, 2]
check("Test 2",
  permutations([1, 2, 3]).some((p) => JSON.stringify(p) === JSON.stringify([3, 1, 2]))
);

// 3. Two elements — 2 permutations
check("Test 3",
  permutations([1, 2]).length === 2
);

// 4. Single element — 1 permutation
check("Test 4",
  JSON.stringify(permutations([5])) === JSON.stringify([[5]])
);

// 5. No duplicates in result
const result5 = permutations([1, 2, 3]).map((p) => p.join(","));
check("Test 5",
  new Set(result5).size === result5.length
);
