import { check } from "@utils";

// ─── Sliding Window Boilerplate ───────────────────────────────────────────────
// Classic problem: given an integer array `nums` and integer `k`,
// return the maximum sum of any contiguous subarray of length exactly k.
// ─────────────────────────────────────────────────────────────────────────────

const maxSubarraySum = (nums: number[], k: number): number => {
  // TODO: implement
  return 0;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Basic
check("Test 1", maxSubarraySum([2, 1, 5, 1, 3, 2], 3) === 9);

// 2. Max at the start
check("Test 2", maxSubarraySum([10, 1, 1, 1], 2) === 11);

// 3. All equal
check("Test 3", maxSubarraySum([3, 3, 3, 3], 2) === 6);

// 4. Negative numbers
check("Test 4", maxSubarraySum([-1, -2, -3, -4], 2) === -3);

// 5. k equals array length
check("Test 5", maxSubarraySum([1, 2, 3, 4], 4) === 10);
