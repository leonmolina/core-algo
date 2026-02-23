import { check } from "../utils";

// ─── Trie Boilerplate ─────────────────────────────────────────────────────────
// Classic problem: implement a Trie (Prefix Tree) with:
//   - insert(word): insert a word into the trie
//   - search(word): return true if the exact word exists
//   - startsWith(prefix): return true if any inserted word starts with prefix
// ─────────────────────────────────────────────────────────────────────────────

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string): void {
    // TODO: implement
  }

  search(word: string): boolean {
    // TODO: implement
    return false;
  }

  startsWith(prefix: string): boolean {
    // TODO: implement
    return false;
  }
}

// ─── Test cases ──────────────────────────────────────────────────────────────

const trie = new Trie();
trie.insert("apple");
trie.insert("app");

// 1. Exact search — word that was inserted
check("Test 1", trie.search("apple") === true);

// 2. Exact search — shorter inserted word
check("Test 2", trie.search("app") === true);

// 3. Exact search — word not inserted
check("Test 3", trie.search("ap") === false);

// 4. Prefix match — valid prefix
check("Test 4", trie.startsWith("app") === true);

// 5. Prefix match — non-existent prefix
check("Test 5", trie.startsWith("banana") === false);
