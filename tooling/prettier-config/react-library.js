const baseConfig = require("./index.js");

/** @type {import('prettier').Config} */
module.exports = {
  ...baseConfig,
  plugins: ["plugin-prettier-sort-destructure", "prettier-plugin-tailwindcss"],
};
