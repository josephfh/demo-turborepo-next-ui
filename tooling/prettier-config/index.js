/** @type {import('prettier').Config} */
module.exports = {
  jsxSingleQuote: false,
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 90,
      },
    },
  ],
  printWidth: 110,
  proseWrap: "always",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
};
