import {
  cleanDir,
  createDir,
  convertSvgFilesToIconComponents,
} from "@repo/build-tools";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgOriginalsDir = `${__dirname}/svg-originals`;
const buildDir = `${__dirname}/build`;
const buildIndexFile = `${__dirname}/build/react-icons.ts`;
const reactComponentsDir = `${__dirname}/build/react-icons`;
const reactComponentsDirName = "react-icons";

const build = async () => {
  await cleanDir(buildDir);
  await createDir(buildDir);
  await createDir(reactComponentsDir);
  await convertSvgFilesToIconComponents(
    svgOriginalsDir,
    buildIndexFile,
    reactComponentsDir,
    reactComponentsDirName,
    "Icon",
    "icon"
  );
};

build();
