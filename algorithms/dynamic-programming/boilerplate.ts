import { check } from "@utils";

// ─── Dynamic Programming Boilerplate ─────────────────────────────────────────
// Classic problem: climbing stairs.
// You are climbing a staircase with `n` steps. Each time you can climb 1 or 2
// steps. Return the number of distinct ways to reach the top.
// ─────────────────────────────────────────────────────────────────────────────

const climbStairs = (n: number): number => {
  // TODO: implement
  return 0;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. n = 1 → 1 way
check("Test 1", climbStairs(1) === 1);

// 2. n = 2 → 2 ways (1+1 or 2)
check("Test 2", climbStairs(2) === 2);

// 3. n = 3 → 3 ways
check("Test 3", climbStairs(3) === 3);

// 4. n = 5 → 8 ways
check("Test 4", climbStairs(5) === 8);

// 5. n = 10 → 89 ways
check("Test 5", climbStairs(10) === 89);
