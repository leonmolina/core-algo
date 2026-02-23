# Copilot Instructions

## Commit Messages

All commit messages must follow the Conventional Commits specification.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Practice File Rule — HIGHEST PRIORITY

> **If the committed file matches the pattern `<algorithm-folder>/<DD-MM-YYYY>.ts`, this rule overrides everything else. Do NOT read the file. Do NOT summarize its contents. Use only the folder name and the date.**

Pattern:

```
feat(<algorithm>): add practice on <date>
```

Example:

```
feat(sliding-window): add practice on 23-02-2026
```

### Examples (non-practice files)

```
feat(binary-search): add iterative binary search implementation
fix(heap): correct parent index calculation in heapify
docs(README): update installation instructions
refactor(utils): simplify array helper functions
test(dfs): add edge case tests for cyclic graphs
chore(deps): update TypeScript to v5.0
```

### Rules

1. Use lowercase for type and scope
2. No period at the end of the description
3. Description should be imperative mood ("add" not "added" or "adds")
4. Keep the first line under 72 characters
5. Scope should be the algorithm folder name when applicable (e.g., `binary-search`, `heap`, `dfs`)
