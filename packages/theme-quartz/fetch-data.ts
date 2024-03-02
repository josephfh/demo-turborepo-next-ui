import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { cleanDir, createDir, fetchJson, writeToFile } from "@repo/build-tools";

const cacheDir = `${__dirname}/cache`;
const designTokensFile = `${__dirname}/cache/design-tokens.json`;

export const fetchData = async () => {
  // TODO: fetching, caching and providing mock data should be its own build tool
  await cleanDir(cacheDir);
  await createDir(cacheDir);
  const designTokens = await fetchJson("http://localhost:5001/design-tokens");
  await writeToFile(designTokensFile, designTokens);
  return designTokens;
};

fetchData();
