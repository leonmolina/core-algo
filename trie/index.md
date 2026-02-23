# Trie (Prefix Tree)

## Concept

A Trie is a tree where each node represents a **character**. Strings sharing a common prefix share the same path from the root. It is the go-to structure for prefix-based operations on strings.

## Complexity

| Operation | Time | Space |
|---|---|---|
| insert | O(m) — m = word length | O(m) |
| search | O(m) | O(1) extra |
| startsWith | O(m) | O(1) extra |

Total space: O(alphabet_size × max_depth × n_words) — in practice much smaller due to shared prefixes.

## When to reach for Trie

- Autocomplete / typeahead
- Spell checker
- IP routing (longest prefix match)
- Word search II (combine Trie + DFS/backtracking)
- Count words with a given prefix

## Pattern

```ts
class TrieNode {
  children = new Map<string, TrieNode>();
  isEnd = false;
}

class Trie {
  root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch))
        node.children.set(ch, new TrieNode());
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this.traverse(word);
    return node?.isEnd === true;
  }

  startsWith(prefix: string): boolean {
    return this.traverse(prefix) !== null;
  }

  private traverse(str: string): TrieNode | null {
    let node: TrieNode = this.root;
    for (const ch of str) {
      if (!node.children.has(ch)) return null;
      node = node.children.get(ch)!;
    }
    return node;
  }
}
```

## Common pitfalls

- Forgetting to set `isEnd = true` on the last character of insert
- Confusing `search` (exact match) with `startsWith` (prefix match)
- Using a fixed-size array for children (size 26) vs a Map — Map is safer for unicode
