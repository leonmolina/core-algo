# Sliding Window

## Concept

A sliding window maintains a contiguous subarray (or substring) and **slides** it along, expanding or shrinking from the edges to satisfy a constraint — avoiding the O(n²) cost of re-scanning subarrays from scratch.

## Variants

- **Fixed-size window**: both pointers advance together
- **Variable-size window**: right expands greedily, left shrinks to restore constraint

## Complexity

| | Value |
|---|---|
| Time | O(n) — each element enters and leaves the window at most once |
| Space | O(1) or O(k) for auxiliary structures (HashMap, Set) |

## When to reach for Sliding Window

- Maximum/minimum sum of k-length subarray
- Longest substring without repeating characters
- Minimum window substring
- Subarray with product/sum less than k

## Pattern — variable window

```ts
let lo = 0, best = 0;
const freq = new Map<string, number>();

for (let hi = 0; hi < s.length; hi++) {
  // expand: add s[hi] to window
  freq.set(s[hi], (freq.get(s[hi]) ?? 0) + 1);

  // shrink: restore constraint
  while (/* window invalid */) {
    freq.set(s[lo], freq.get(s[lo])! - 1);
    lo++;
  }

  best = Math.max(best, hi - lo + 1);
}
```

## Common pitfalls

- Fixed window: remember to remove the outgoing element before updating the answer
- Variable window: shrink condition must be checked with `while`, not `if`
- Off-by-one in window size: `hi - lo + 1`
