# Dynamic Programming (DP)

## Concept

DP solves problems by breaking them into **overlapping subproblems**, solving each once and storing the result (memoisation / tabulation) to avoid redundant computation.

## Approaches

| Approach | Description |
|---|---|
| **Top-down (memoisation)** | Recursive + cache. Natural, easy to write. |
| **Bottom-up (tabulation)** | Iterative, fills a table. Usually faster, no call-stack risk. |

## Complexity

Typically O(n) or O(n²) time and space, depending on the state space.

## When to reach for DP

- Optimal substructure + overlapping subproblems
- Count / max / min over all ways to do something
- Knapsack, coin change, longest common subsequence, edit distance
- Any "how many ways…" problem

## Pattern — 1-D DP (climbing stairs)

```ts
function climbStairs(n: number): number {
  if (n <= 2) return n;
  const dp = [0, 1, 2]; // dp[i] = ways to reach step i
  for (let i = 3; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}
```

## Common pitfalls

- Wrong base cases
- Off-by-one in loop bounds
- Not recognizing the problem has overlapping subproblems (try recursion first, then add memoisation)
- State definition is unclear — define `dp[i]` precisely before coding
