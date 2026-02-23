import { check } from "../utils";

// ─── Heap Boilerplate ─────────────────────────────────────────────────────────
// Classic problem: find the k-th largest element in an unsorted array.
// Constraint: solve it in better than O(n log n) using a heap.
// ─────────────────────────────────────────────────────────────────────────────

// Minimal min-heap implementation — feel free to expand or replace.
class MinHeap {
  private data: number[] = [];

  get size() { return this.data.length; }
  peek(): number | undefined { return this.data[0]; }

  push(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
    if (!this.size) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.size) { this.data[0] = last; this.siftDown(0); }
    return top;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }

  private siftDown(i: number): void {
    while (true) {
      let min = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < this.size && this.data[l] < this.data[min]) min = l;
      if (r < this.size && this.data[r] < this.data[min]) min = r;
      if (min === i) break;
      [this.data[min], this.data[i]] = [this.data[i], this.data[min]];
      i = min;
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────

const findKthLargest = (nums: number[], k: number): number => {
  // TODO: implement using MinHeap above
  return 0;
};

// ─── Test cases ──────────────────────────────────────────────────────────────

// 1. k = 2
check("Test 1", findKthLargest([3, 2, 1, 5, 6, 4], 2) === 5);

// 2. k = 4
check("Test 2", findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) === 4);

// 3. k = 1 (maximum)
check("Test 3", findKthLargest([1, 2, 3], 1) === 3);

// 4. k = length (minimum)
check("Test 4", findKthLargest([1, 2, 3], 3) === 1);

// 5. Array with duplicates
check("Test 5", findKthLargest([5, 5, 5, 5], 2) === 5);
