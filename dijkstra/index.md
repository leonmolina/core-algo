# Dijkstra's Algorithm

## Concept

Dijkstra's finds the **shortest path** from a single source to all other nodes in a graph with **non-negative** edge weights. It uses a **min-heap** to always process the unvisited node with the smallest known distance.

## Complexity

| Implementation | Time | Space |
|---|---|---|
| Min-heap (binary) | O((V + E) log V) | O(V) |
| Array (dense graphs) | O(V²) | O(V) |

## When to reach for Dijkstra

- Shortest path with weighted edges (non-negative)
- Network routing, GPS navigation
- Cheapest flight with limited stops (modified Dijkstra)

> For **negative** edge weights → use **Bellman-Ford**.
> For **unweighted** graphs → use **BFS** (simpler, O(V+E)).

## Pattern

```ts
function dijkstra(graph: Map<number, [number, number][]>, start: number): Map<number, number> {
  const dist = new Map<number, number>();
  const heap = new MinHeap<[number, number]>(); // [distance, node]

  heap.push([0, start]);
  dist.set(start, 0);

  while (heap.size) {
    const [d, u] = heap.pop()!;
    if (d > (dist.get(u) ?? Infinity)) continue; // stale entry
    for (const [v, w] of graph.get(u) ?? []) {
      const newDist = d + w;
      if (newDist < (dist.get(v) ?? Infinity)) {
        dist.set(v, newDist);
        heap.push([newDist, v]);
      }
    }
  }
  return dist;
}
```

## Common pitfalls

- Using Dijkstra with negative weights — it will produce wrong results
- Not skipping stale heap entries (same node with an outdated larger distance)
- Forgetting to initialize all distances to Infinity
