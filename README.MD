# LeetCode Solutions

TypeScript solutions for LeetCode problems, generated and run with the VS Code
LeetCode extension / `leetcode` CLI.

## Running Tests

Run the default/sample test case for a solution:

```sh
leetcode test 13.roman-to-integer.ts
```

Run a custom test case with `-t`. The input format matches the function
arguments, one argument per line:

```sh
leetcode test 1.two-sum.ts -t "[2,7,11,15]\n9"
leetcode test 13.roman-to-integer.ts -t '"MCMXCIV"'
```

Use interactive mode when you want to paste or edit a case manually:

```sh
leetcode test 13.roman-to-integer.ts -i
```

Submit to run against LeetCode's hidden tests:

```sh
leetcode submit 13.roman-to-integer.ts
```
