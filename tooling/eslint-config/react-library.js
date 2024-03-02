const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "turbo",
    "prettier",
  ],
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2017: true,
  },
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
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
