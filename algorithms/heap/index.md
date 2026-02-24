# Heap / Priority Queue

## Concept

A **heap** is a complete binary tree where every parent satisfies the heap property:
- **Min-heap**: parent ≤ children → `peek()` returns the minimum
- **Max-heap**: parent ≥ children → `peek()` returns the maximum

JavaScript has no built-in heap — you either implement one or simulate with a sorted structure. In interviews, it's acceptable to say "use a min-heap library" and implement the logic.

## Complexity

| Operation | Time |
|---|---|
| Insert | O(log n) |
| Extract min/max | O(log n) |
| Peek min/max | O(1) |
| Build heap | O(n) |

## When to reach for Heap

- K-th largest / smallest element
- Merge K sorted lists
- Top K frequent elements
- Dijkstra's shortest path (min-heap on distance)
- Median from a data stream (two heaps)
- Task scheduler

## Min-Heap skeleton (array-based)

```ts
class MinHeap {
  private data: number[] = [];
  push(val: number) { this.data.push(val); this.bubbleUp(); }
  pop(): number | undefined { /* swap root with last, sift down */ }
  peek(): number | undefined { return this.data[0]; }
  get size() { return this.data.length; }
  private bubbleUp() { /* ... */ }
  private siftDown() { /* ... */ }
}
```

## Common pitfalls

- Off-by-one in parent/child index arithmetic: parent of i = `(i - 1) >> 1`, children = `2i + 1`, `2i + 2`
- Forgetting to restore the heap property after pop (sift-down)
- Using a max-heap when a min-heap is needed (negate values as a workaround)
