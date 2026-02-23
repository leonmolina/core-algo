import { check } from "../utils";

// ─── Union Find Boilerplate ───────────────────────────────────────────────────
// Classic problem: number of connected components.
// Given n nodes (0 to n-1) and a list of undirected edges,
// return the number of connected components in the graph.
// ─────────────────────────────────────────────────────────────────────────────

const countComponents = (n: number, edges: [number, number][]): number => {
  // TODO: implement using Union Find
  return 0;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Two components
check("Test 1",
  countComponents(5, [[0, 1], [1, 2], [3, 4]]) === 2
);

// 2. All connected
check("Test 2",
  countComponents(4, [[0, 1], [1, 2], [2, 3]]) === 1
);

// 3. No edges — every node is its own component
check("Test 3",
  countComponents(4, []) === 4
);

// 4. Single node
check("Test 4",
  countComponents(1, []) === 1
);

// 5. Three separate edges (6 nodes, 3 components)
check("Test 5",
  countComponents(6, [[0, 1], [2, 3], [4, 5]]) === 3
);
