# Sorting

## Concept

**Merge Sort** is the canonical divide-and-conquer sorting algorithm. It splits the array in half recursively, sorts each half, then merges the two sorted halves.

**Quick Sort** is often faster in practice (better cache locality) but has O(n²) worst case without randomization.

## Complexity

| Algorithm | Time (avg) | Time (worst) | Space |
|---|---|---|---|
| Merge Sort | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n²) | O(log n) |
| Tim Sort (JS default) | O(n log n) | O(n log n) | O(n) |

## When to reach for custom Sorting

- Need stable sort (Merge Sort)
- Custom comparator: sort objects by multiple keys
- K closest points, top-k frequency → partial sort via heap is faster

## Merge Sort pattern

```ts
function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const mid = nums.length >> 1;
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
}

function merge(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length)
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  return result.concat(a.slice(i), b.slice(j));
}
```

## Common pitfalls

- JS `.sort()` converts elements to strings by default — always provide a comparator for numbers: `nums.sort((a, b) => a - b)`
- Merge Sort creates many intermediate arrays — in-place version uses index ranges
