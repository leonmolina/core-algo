# Backtracking

## Concept

Backtracking is a refined brute-force approach. It builds candidates incrementally and **abandons** ("backtracks") a path as soon as it determines that the path cannot possibly lead to a valid solution.

## Complexity

Highly problem-dependent. For permutations of n elements: O(n · n!). Pruning can dramatically reduce actual runtime.

## When to reach for Backtracking

- Generating all permutations / combinations / subsets
- Solving constraint-satisfaction problems (N-Queens, Sudoku)
- Word search on a grid
- Palindrome partitioning

## Pattern

```ts
function backtrack(path: number[], choices: number[]): void {
  if (/* base case */) {
    result.push([...path]);
    return;
  }
  for (const choice of choices) {
    if (/* invalid */) continue;      // prune
    path.push(choice);                 // choose
    backtrack(path, remaining);        // explore
    path.pop();                        // un-choose (backtrack)
  }
}
```

## Common pitfalls

- Forgetting to **clone** the path when pushing to results (`[...path]` not `path`)
- Not undoing side-effects after the recursive call (mutation of a grid, set, etc.)
- Missing pruning → TLE (Time Limit Exceeded)
- Duplicate results when input has repeated elements — sort first and skip duplicates
