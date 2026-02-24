import { check } from "@utils";

// ─── DFS Boilerplate ─────────────────────────────────────────────────────────
// Classic problem: count the number of islands in a 2-D grid.
// '1' = land, '0' = water. Connected land cells (4-directional) form one island.
//
// Approach: iterate every cell; when you hit an unvisited '1', increment the
// counter and DFS to mark the whole island as visited.
// ─────────────────────────────────────────────────────────────────────────────

const numIslands = (grid: string[][]): number => {
  // TODO: implement
  return 0;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Single island
check("Test 1",
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ]) === 1
);

// 2. Three separate islands
check("Test 2",
  numIslands([
    ["1", "0", "1"],
    ["0", "0", "0"],
    ["1", "0", "1"],
  ]) === 4
);

// 3. No land
check("Test 3",
  numIslands([
    ["0", "0"],
    ["0", "0"],
  ]) === 0
);

// 4. All land
check("Test 4",
  numIslands([
    ["1", "1"],
    ["1", "1"],
  ]) === 1
);

// 5. Classic LeetCode example
check("Test 5",
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]) === 3
);
