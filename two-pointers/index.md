# Two Pointers

## Concept

Two pointers maintains two indices (left and right, or slow and fast) that move through the data structure to reduce a brute-force O(n²) scan to O(n).

## Variants

- **Left/Right converging**: start at both ends, move inward (sorted arrays, palindromes)
- **Slow/Fast**: two pointers at different speeds (linked list cycle, middle node)
- **Sliding fixed window**: both move in the same direction

## Complexity

| | Value |
|---|---|
| Time | O(n) — each pointer moves at most n steps |
| Space | O(1) |

## When to reach for Two Pointers

- Two-sum / three-sum on a sorted array
- Removing duplicates in-place
- Container with most water
- Palindrome check
- Linked list: cycle detection, finding middle, nth-from-end

## Pattern

```ts
let lo = 0, hi = nums.length - 1;
while (lo < hi) {
  const sum = nums[lo] + nums[hi];
  if (sum === target) return [lo, hi];
  else if (sum < target) lo++;
  else hi--;
}
```

## Common pitfalls

- Array must be sorted for the converging variant to work
- Handling duplicate values when returning all unique pairs
- `lo < hi` vs `lo <= hi` — depends on whether the same element can be used twice
