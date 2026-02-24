import { check } from "@utils";

// ─── Two Pointers Boilerplate ─────────────────────────────────────────────────
// Classic problem: given a sorted array and a target sum, return the indices
// [i, j] of the two numbers that add up to the target, or [] if none exist.
// Each input has at most one solution. You may not use the same element twice.
// ─────────────────────────────────────────────────────────────────────────────

const twoSum = (nums: number[], target: number): number[] => {
  // TODO: implement
  return [];
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Basic case
check("Test 1",
  JSON.stringify(twoSum([1, 2, 3, 4, 6], 6)) === JSON.stringify([1, 3])
);

// 2. Target at the boundaries
check("Test 2",
  JSON.stringify(twoSum([1, 3, 5, 7, 12], 13)) === JSON.stringify([0, 4])
);

// 3. Adjacent elements
check("Test 3",
  JSON.stringify(twoSum([1, 2, 3], 3)) === JSON.stringify([0, 1])
);

// 4. No solution
check("Test 4",
  JSON.stringify(twoSum([1, 2, 3], 100)) === JSON.stringify([])
);

// 5. Larger array
check("Test 5",
  JSON.stringify(twoSum([-3, -1, 0, 2, 4, 7], 1)) === JSON.stringify([1, 3])
);
