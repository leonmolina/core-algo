# core-algo

A personal practice repository for the core algorithms that appear most frequently in coding interviews.

## Algorithms

| Folder | Topic |
|---|---|
| [`dfs/`](./dfs/) | Depth-First Search |
| [`bfs/`](./bfs/) | Breadth-First Search |
| [`binary-search/`](./binary-search/) | Binary Search |
| [`two-pointers/`](./two-pointers/) | Two Pointers |
| [`sliding-window/`](./sliding-window/) | Sliding Window |
| [`sorting/`](./sorting/) | Sorting (Merge Sort) |
| [`backtracking/`](./backtracking/) | Backtracking |
| [`dynamic-programming/`](./dynamic-programming/) | Dynamic Programming |
| [`greedy/`](./greedy/) | Greedy |
| [`heap/`](./heap/) | Heap / Priority Queue |
| [`union-find/`](./union-find/) | Union Find (Disjoint Set) |
| [`topological-sort/`](./topological-sort/) | Topological Sort |
| [`dijkstra/`](./dijkstra/) | Dijkstra's Shortest Path |
| [`trie/`](./trie/) | Trie (Prefix Tree) |

## Setup

```bash
npm install
```

## Workflow

Each algorithm folder contains:
- `index.md` — concept explanation, time/space complexity, common patterns
- `boilerplate.ts` — starter code with typed function signatures and test cases

### Starting a new practice session

```bash
npx algo add bfs
```

This creates `bfs/23-02-2026.ts` (today's date) from the boilerplate. Open it, solve the problem, then check your solution:

```bash
npx algo check bfs
```

You can also omit the algorithm name and the CLI will prompt you to select one interactively:

```bash
npx algo add
npx algo check
```

To run a specific past session:

```bash
npx algo check bfs 01-01-2026
```

The runner prints the output of all your `console.log` / `console.assert` calls.

### CLI reference

| Command | Description |
|---|---|
| `npx algo add [algo]` | Create today's practice file from boilerplate (prompts if omitted) |
| `npx algo check [algo]` | Run today's practice file (prompts if omitted) |
| `npx algo check <algo> <date>` | Run a specific date's file |
| `npx algo help` | Print usage and algorithm list |

### Date format

Files follow `DD-MM-YYYY.ts` — managed automatically by `npx algo add`.
