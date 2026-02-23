import { check } from "../utils";

// ─── Topological Sort Boilerplate ────────────────────────────────────────────
// Classic problem: Course Schedule.
// There are `numCourses` courses (0 to numCourses-1).
// `prerequisites[i] = [a, b]` means you must take course b before course a.
// Return a valid order to finish all courses, or [] if it's impossible (cycle).
// ─────────────────────────────────────────────────────────────────────────────

const courseOrder = (
  numCourses: number,
  prerequisites: [number, number][]
): number[] => {
  // TODO: implement using Kahn's algorithm (BFS-based topological sort)
  return [];
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Simple chain: 0 → 1 → 2
const order1 = courseOrder(3, [[1, 0], [2, 1]]);
check("Test 1", order1.length === 3);
check("Test 1b", order1.indexOf(0) < order1.indexOf(1) && order1.indexOf(1) < order1.indexOf(2));

// 2. Cycle — impossible
check("Test 2",
  courseOrder(2, [[0, 1], [1, 0]]).length === 0
);

// 3. No prerequisites
check("Test 3", courseOrder(3, []).length === 3);

// 4. Two independent chains
const order4 = courseOrder(4, [[1, 0], [3, 2]]);
check("Test 4",
  order4.length === 4 &&
  order4.indexOf(0) < order4.indexOf(1) &&
  order4.indexOf(2) < order4.indexOf(3)
);

// 5. Diamond dependency
const order5 = courseOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
check("Test 5",
  order5.length === 4 && order5.indexOf(0) < order5.indexOf(3)
);
