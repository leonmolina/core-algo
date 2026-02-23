# Topological Sort

## Concept

Topological sort produces a **linear ordering** of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, u comes before v in the ordering. A cycle makes topological sort impossible.

## Algorithms

| Algorithm | Approach | Cycle detection |
|---|---|---|
| **Kahn's (BFS-based)** | Process nodes with in-degree 0 | Yes — if result.length < n, cycle exists |
| **DFS-based** | Post-order DFS, reverse at the end | Yes — track "in-stack" nodes |

## Complexity

| | Value |
|---|---|
| Time | O(V + E) |
| Space | O(V + E) |

## When to reach for Topological Sort

- Course schedule (can you finish all courses?)
- Task dependency ordering
- Build systems, package dependency resolution
- Alien dictionary (derive ordering of letters)

## Pattern — Kahn's algorithm

```ts
const inDegree = new Array(n).fill(0);
for (const [u, v] of edges) inDegree[v]++;
const queue = [...inDegree.map((d, i) => d === 0 ? i : -1).filter(i => i >= 0)];
const order: number[] = [];
while (queue.length) {
  const node = queue.shift()!;
  order.push(node);
  for (const nei of graph.get(node) ?? [])
    if (--inDegree[nei] === 0) queue.push(nei);
}
return order.length === n ? order : []; // empty = cycle
```

## Common pitfalls

- Topological sort only works on DAGs — always check for cycles
- Kahn's: initial queue must contain **all** zero-in-degree nodes
- Multiple valid orderings may exist
