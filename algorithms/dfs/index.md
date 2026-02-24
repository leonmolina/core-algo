# Depth-First Search (DFS)

## Concept

DFS explores as far as possible along each branch before backtracking. It uses a **stack** — either the call stack (recursion) or an explicit one (iterative).

## Variants

- **Pre-order**: process node → recurse children
- **In-order** (trees): recurse left → process → recurse right
- **Post-order**: recurse children → process node

## Complexity

| | Value |
|---|---|
| Time | O(V + E) — vertices + edges |
| Space | O(V) — recursion stack / visited set |

## When to reach for DFS

- Detecting cycles in a graph
- Finding connected components
- Topological sort
- Path existence between two nodes
- Tree traversals (pre/in/post-order)
- Flood fill / island counting

## Pattern (graph, iterative)

```ts
function dfs(graph: Map<number, number[]>, start: number): number[] {
  const visited = new Set<number>();
  const stack = [start];
  const result: number[] = [];

  while (stack.length) {
    const node = stack.pop()!;
    if (visited.has(node)) continue;
    visited.add(node);
    result.push(node);
    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return result;
}
```

## Common pitfalls

- Forgetting to track visited nodes → infinite loop
- Off-by-one in index-based grid traversal
- Not handling disconnected graphs (loop over all nodes)
