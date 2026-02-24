import { check } from "../utils";

// ─── Sliding Window Boilerplate ───────────────────────────────────────────────
// Classic problem: given an integer array `nums` and integer `k`,
// return the maximum sum of any contiguous subarray of length exactly k.
// ─────────────────────────────────────────────────────────────────────────────

const maxSubarraySum = (nums: number[], k: number): number => {
  if (!nums.length) return 0;
  let left = 0, right = k-1;
  let max = -Infinity; // I was starting it at 0, but then the negatives were failing (Test 4)
  while (right <= nums.length - 1) { // TODO this is not optimal solution, check next time
    let windowSum = 0;
    for (let i = left; i <= right; i++) {
      windowSum += nums[i]
    }
    max = Math.max(max, windowSum)
    right++
    left++
  }
  return max;
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
