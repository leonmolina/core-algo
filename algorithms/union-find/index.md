# Union Find (Disjoint Set Union)

## Concept

Union Find maintains a collection of **disjoint sets** and supports two operations efficiently:
- `find(x)`: which set does x belong to? (returns the root/representative)
- `union(x, y)`: merge the sets containing x and y

With **path compression** + **union by rank**, both operations are nearly O(1) amortized — technically O(α(n)) where α is the inverse Ackermann function.

## Complexity

| Operation | Time (with optimizations) |
|---|---|
| find | O(α(n)) ≈ O(1) |
| union | O(α(n)) ≈ O(1) |
| Build | O(n) |

## When to reach for Union Find

- Count connected components in a graph
- Detect cycle in an undirected graph
- Kruskal's MST algorithm
- Redundant connection
- Accounts merge / friend circles

## Pattern

```ts
class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false; // already connected
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    return true;
  }
}
```

## Common pitfalls

- Forgetting path compression → O(n) find in degenerate cases
- `union` returns `false` if already connected — use this to detect cycles
