import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  cleanDir,
  covertDesignTokensToCss,
  createDir,
  fetchJson,
  writeToFile,
} from "@repo/build-tools";
import { fetchData } from "./fetch-data.ts";

const buildDir = `${__dirname}/build`;
const targetFile = `${__dirname}/build/theme.css`;

const build = async () => {
  // TODO: fetching, caching and providing mock data should be its own build tool
  let designTokens = undefined;
  try {
    designTokens = await import("./cache/design-tokens.json");
  } catch (err) {
    console.log(err);
  }
  if (!designTokens) {
    designTokens = await fetchData();
  }
  const css = covertDesignTokensToCss(designTokens);
  await cleanDir(buildDir);
  await createDir(buildDir);
  await writeToFile(targetFile, css);
};

build();
