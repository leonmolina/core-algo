import { check } from "@utils";

// ─── DFS Boilerplate ─────────────────────────────────────────────────────────
// Classic problem: count the number of islands in a 2-D grid.
// '1' = land, '0' = water. Connected land cells (4-directional) form one island.
//
// Approach: iterate every cell; when you hit an unvisited '1', increment the
// counter and DFS to mark the whole island as visited.
// ─────────────────────────────────────────────────────────────────────────────

const numIslands = (grid: string[][]): number => {
  if (!grid.length) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set<string>();
  let islands = 0;

  const visitedHelper = (r: number, c: number) => `${r}:${c}`;

  const dfs = (r: number, c: number) => {
    if (c < 0 || c >= cols || r < 0 || r >= rows || visited.has(visitedHelper(r, c)) || grid[r][c] === "0") {
      return; // out of matrix bounds OR already visited node OR node is water ("0")
    }

    visited.add(visitedHelper(r, c))
    dfs(r+1, c); // up
    dfs(r-1, c); // down
    dfs(r, c+1); // right
    dfs(r, c-1); // left
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visited.has(visitedHelper(r, c))) {
        dfs(r, c);
        islands++
      }
    }
  }
  return islands;
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
