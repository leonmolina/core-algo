import { check } from "@utils";

// ─── BFS Boilerplate ─────────────────────────────────────────────────────────
// Classic problem: find the shortest path length between `start` and `end`
// in an unweighted, undirected graph represented as an adjacency list.
// Return -1 if no path exists.
// ─────────────────────────────────────────────────────────────────────────────

const shortestPath = (
  graph: Map<number, number[]>,
  start: number,
  end: number
): number => {
  // TODO: implement
  return -1;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

const g1 = new Map([
  [0, [1, 2]],
  [1, [0, 3]],
  [2, [0, 3]],
  [3, [1, 2, 4]],
  [4, [3]],
]);

// 1. Direct neighbor
check("Test 1", shortestPath(g1, 0, 1) === 1);

// 2. Two hops
check("Test 2", shortestPath(g1, 0, 3) === 2);

// 3. Three hops
check("Test 3", shortestPath(g1, 0, 4) === 3);

// 4. Same node
check("Test 4", shortestPath(g1, 0, 0) === 0);

// 5. No path
const g2 = new Map([
  [0, [1]],
  [1, [0]],
  [2, [3]],
  [3, [2]],
]);
check("Test 5", shortestPath(g2, 0, 3) === -1);
