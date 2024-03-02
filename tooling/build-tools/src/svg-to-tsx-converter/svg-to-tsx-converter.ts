import fs from "fs";
import path from "path";

import { toKebabCase, toPascalCase } from "@repo/utils";
import { transform } from "@svgr/core";
import { getFilesInDir } from "../filesystem/filesystem.ts";
import { defaultTemplate } from "./default.template.ts";
import { iconTemplate } from "./icon.template.ts";

const addComponentToIndexFile = async (
  indexFile: string,
  componentsDirName: string,
  svgFiles: string[],
  suffix: string
) => {
  try {
    svgFiles.map((svgFile) =>
      fs.appendFileSync(
        indexFile,
        `export { default as ${toPascalCase(
          path.parse(svgFile).name
        )}${toPascalCase(suffix)} } from './${componentsDirName}/${toKebabCase(
          path.parse(svgFile).name
        )}.tsx'\n`
      )
    );
  } catch (err) {
    throw new Error();
  }
};

/**
 * Writes SVG files and index file to the filesystem
 *
 * @param inputDir
 * @param indexFile
 * @param componentsDir
 * @param reactComponentsDirName
 * @param suffix
 */
export const convertSvgFilesToIconComponents = async (
  inputDir: string,
  indexFile: string,
  componentsDir: string,
  reactComponentsDirName: string,
  suffix: string,
  type: "icon" | "default"
) => {
  const files = await getFilesInDir(inputDir);
  if (!files) throw new Error("No files");
  const svgFiles = files.filter((file) => file.endsWith(".svg"));
  if (!svgFiles) throw new Error("No svg files");

  svgFiles.map(async (svgFile) => {
    const svg = await fs.readFileSync(svgFile, { encoding: "utf8", flag: "r" });

    try {
      const fileData = transform.sync(
        svg,
        {
          icon: type === "icon",
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          template: type === "icon" ? iconTemplate : defaultTemplate,
          typescript: true,
        },
        {
          componentName: `${toPascalCase(
            path.parse(svgFile).name
          )}${toPascalCase(suffix)}`,
        }
      );
      fs.appendFileSync(
        `${componentsDir}/${toKebabCase(path.parse(svgFile).name)}.tsx`,
        fileData
      );
    } catch (err: unknown) {
      throw new Error(err?.toString());
    }
  });
  await addComponentToIndexFile(
    indexFile,
    reactComponentsDirName,
    svgFiles,
    suffix
  );
};
