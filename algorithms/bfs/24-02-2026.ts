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
  if (!graph.size) return -1;
  if (start === end) return 0;
  const visited = new Set([start]);
  let queue: [number, number][] = [[start, 0]];
  let head = 0;

  // This change was suggested by AI since Array.shift is O(n)
  // while (queue.length) {
    // const [node, distance] = queue.shift()!;
  while (head < queue.length) {
    const [node, distance] = queue[head++];
    for (const neighbor of graph.get(node) ?? []) {
      if (neighbor === end) return distance + 1;

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
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
