# Breadth-First Search (BFS)

## Concept

BFS explores all neighbors at the current depth before moving to the next level. It uses a **queue** (FIFO) and is the go-to algorithm for finding the **shortest path** in an unweighted graph.

## Complexity

| | Value |
|---|---|
| Time | O(V + E) |
| Space | O(V) — queue + visited set |

## When to reach for BFS

- Shortest path in an unweighted graph or grid
- Level-order tree traversal
- Finding all nodes within a given distance
- Multi-source BFS (start from multiple nodes simultaneously)
- Word ladder / transformation sequences

## Pattern

```ts
function bfs(graph: Map<number, number[]>, start: number): number[] {
  const visited = new Set([start]);
  const queue = [start];
  const result: number[] = [];

  while (queue.length) {
    const node = queue.shift()!;
    result.push(node);
    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}
```

## Common pitfalls

- Using `.shift()` on a plain array is O(n) — use a proper queue / index pointer for large inputs
- Marking nodes as visited when **enqueued** (not when dequeued) to avoid duplicates
- Forgetting to handle disconnected graphs
