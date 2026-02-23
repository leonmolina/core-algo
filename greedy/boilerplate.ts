import { check } from "../utils";

// ─── Greedy Boilerplate ───────────────────────────────────────────────────────
// Classic problem: Jump Game.
// Given an array where nums[i] is the maximum jump length from index i,
// return true if you can reach the last index starting from index 0.
// ─────────────────────────────────────────────────────────────────────────────

const canJump = (nums: number[]): boolean => {
  // TODO: implement
  return false;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. Can reach — classic
check("Test 1", canJump([2, 3, 1, 1, 4]) === true);

// 2. Cannot reach — stuck at zero
check("Test 2", canJump([3, 2, 1, 0, 4]) === false);

// 3. Single element — already at the end
check("Test 3", canJump([0]) === true);

// 4. All ones
check("Test 4", canJump([1, 1, 1, 1]) === true);

// 5. Zero in the middle but reachable around it
check("Test 5", canJump([2, 0, 2, 0, 1]) === true);
