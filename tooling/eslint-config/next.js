const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"], // Internal packages.
          ["^(@|components)(/.*|$)"], // Side effect imports.
          ["^\\u0000"], // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.?(css)$"],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": 2,
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.cjs",
    ".*.js",
    "*.config.cjs",
    "*.config.mjs",
    "*.config.ts",
    "build/",
    "dist/",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
