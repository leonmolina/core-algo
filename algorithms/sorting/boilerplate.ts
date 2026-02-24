import { check } from "@utils";

// ─── Sorting Boilerplate ──────────────────────────────────────────────────────
// Classic problem: implement merge sort.
// Given an unsorted array of integers, return a new sorted array (ascending).
// ─────────────────────────────────────────────────────────────────────────────

const mergeSort = (nums: number[]): number[] => {
  // TODO: implement
  return nums;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Basic unsorted array
check("Test 1",
  JSON.stringify(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])) ===
    JSON.stringify([1, 1, 2, 3, 4, 5, 6, 9])
);

// 2. Already sorted
check("Test 2",
  JSON.stringify(mergeSort([1, 2, 3])) === JSON.stringify([1, 2, 3])
);

// 3. Reverse sorted
check("Test 3",
  JSON.stringify(mergeSort([5, 4, 3, 2, 1])) === JSON.stringify([1, 2, 3, 4, 5])
);

// 4. Single element
check("Test 4",
  JSON.stringify(mergeSort([7])) === JSON.stringify([7])
);

// 5. Negative numbers
check("Test 5",
  JSON.stringify(mergeSort([-3, 0, -1, 2])) === JSON.stringify([-3, -1, 0, 2])
);
