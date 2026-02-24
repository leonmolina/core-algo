# Binary Search

## Concept

Binary search works on a **sorted** collection. At each step it halves the search space by comparing the middle element to the target.

## Complexity

| | Value |
|---|---|
| Time | O(log n) |
| Space | O(1) iterative / O(log n) recursive |

## When to reach for Binary Search

- Searching in a sorted array
- Finding the first/last position of a value
- Answer is monotonic ("find minimum X such that condition holds") → **binary search on the answer**
- Rotated sorted arrays, search in matrix

## Template — find exact target

```ts
let lo = 0, hi = nums.length - 1;
while (lo <= hi) {
  const mid = (lo + hi) >> 1;
  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) lo = mid + 1;
  else hi = mid - 1;
}
return -1;
```

## Template — leftmost insertion point (lower bound)

```ts
let lo = 0, hi = nums.length;
while (lo < hi) {
  const mid = (lo + hi) >> 1;
  if (nums[mid] < target) lo = mid + 1;
  else hi = mid;
}
return lo; // first index where nums[lo] >= target
```

## Common pitfalls

- `mid = (lo + hi) / 2` can overflow in some languages — prefer `lo + ((hi - lo) >> 1)`
- Off-by-one: `hi = mid - 1` vs `hi = mid` depending on invariant
- Forgetting to handle empty arrays
