# Greedy

## Concept

A greedy algorithm makes the **locally optimal choice** at each step with the hope that these local choices lead to a globally optimal solution. No backtracking.

## Complexity

Usually O(n) or O(n log n) (when sorting is required as a first step).

## When Greedy works

A greedy approach is correct when the problem has:
- **Greedy choice property**: a global optimum can be reached by making locally optimal choices
- **Optimal substructure**: an optimal solution contains optimal solutions to subproblems

## When to reach for Greedy

- Activity selection / interval scheduling
- Jump game (can you reach the end?)
- Gas station
- Minimum number of coins (canonical denominations)
- Huffman encoding
- Minimum spanning tree (Kruskal's, Prim's)

## Pattern — Jump Game

```ts
function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}
```

## Common pitfalls

- Greedy doesn't always work — verify with a proof or counter-example (DP may be needed)
- Coin change with arbitrary denominations is not greedy-solvable → use DP
