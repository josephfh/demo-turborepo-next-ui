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

const buildDir = `${__dirname}/build`;
const targetFile = `${__dirname}/build/theme.css`;

const build = async () => {
  const designTokens = await import("./cache/design-tokens.json");
  const css = covertDesignTokensToCss(designTokens);
  await cleanDir(buildDir);
  await createDir(buildDir);
  await writeToFile(targetFile, css);
};

build();
