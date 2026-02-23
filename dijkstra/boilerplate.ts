import { check } from "../utils";

// ─── Dijkstra Boilerplate ─────────────────────────────────────────────────────
// Classic problem: single-source shortest path.
// Given a weighted directed graph as an adjacency list
//   graph: Map<node, [neighbor, weight][]>
// and a start node, return a Map of shortest distances from start to every node.
// Unreachable nodes should not appear in the result (or map to Infinity).
// ─────────────────────────────────────────────────────────────────────────────

// Minimal min-heap keyed on the first element of a tuple.
class MinHeap<T extends [number, ...unknown[]]> {
  private data: T[] = [];
  get size() { return this.data.length; }
  push(val: T) { this.data.push(val); this.bubbleUp(this.data.length - 1); }
  pop(): T | undefined {
    if (!this.size) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.size) { this.data[0] = last; this.siftDown(0); }
    return top;
  }
  private bubbleUp(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p][0] <= this.data[i][0]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  private siftDown(i: number) {
    while (true) {
      let min = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < this.size && this.data[l][0] < this.data[min][0]) min = l;
      if (r < this.size && this.data[r][0] < this.data[min][0]) min = r;
      if (min === i) break;
      [this.data[min], this.data[i]] = [this.data[i], this.data[min]];
      i = min;
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────

const shortestPath = (
  graph: Map<number, [number, number][]>,
  start: number
): Map<number, number> => {
  // TODO: implement
  return new Map();
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// Graph:  0 --(1)--> 1 --(2)--> 3
//         |                    ^
//         +---(4)--> 2 --(1)---+
const g1 = new Map<number, [number, number][]>([
  [0, [[1, 1], [2, 4]]],
  [1, [[3, 2]]],
  [2, [[3, 1]]],
  [3, []],
]);

const d1 = shortestPath(g1, 0);

// 1. Distance to start is 0
check("Test 1", d1.get(0) === 0);

// 2. Direct edge
check("Test 2", d1.get(1) === 1);

// 3. Shortest via 0→1→3 (cost 3), not 0→2→3 (cost 5)
check("Test 3", d1.get(3) === 3);

// 4. Unreachable node returns Infinity or is absent
const g2 = new Map<number, [number, number][]>([[0, []], [1, []]]);
const d2 = shortestPath(g2, 0);
check("Test 4",
  d2.get(1) === undefined || d2.get(1) === Infinity
);

// 5. Single node graph
const g3 = new Map<number, [number, number][]>([[0, []]]);
check("Test 5", shortestPath(g3, 0).get(0) === 0);
