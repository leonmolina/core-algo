import { check } from "../utils";

// ─── Binary Search Boilerplate ───────────────────────────────────────────────
// Classic problem: given a sorted array of distinct integers and a target,
// return the index of the target, or -1 if it does not exist.
// ─────────────────────────────────────────────────────────────────────────────

const binarySearch = (nums: number[], target: number): number => {
  if (!nums.length) return -1
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) { // if `<` instead of `<=` the case where nums.length = 1 would fail since they are equal indexes
    const mid = lo + Math.floor((hi - lo) / 2); // `+ lo` start of "window" + the rest is the offset to middle of window
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Target in the middle
check("Test 1", binarySearch([1, 3, 5, 7, 9], 5) === 2);

// 2. Target at the start
check("Test 2", binarySearch([1, 3, 5, 7, 9], 1) === 0);

// 3. Target at the end
check("Test 3", binarySearch([1, 3, 5, 7, 9], 9) === 4);

// 4. Target not found
check("Test 4", binarySearch([1, 3, 5, 7, 9], 4) === -1);

// 5. Single-element array, target present
check("Test 5", binarySearch([42], 42) === 0);
