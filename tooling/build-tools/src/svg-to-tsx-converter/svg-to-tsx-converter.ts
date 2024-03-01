import fs from "fs";
import path from "path";

import { toKebabCase, toPascalCase } from "@repo/utils";

import { transform } from "@svgr/core";
import { getFilesInDir } from "../filesystem/filesystem.ts";
import { iconTemplate } from "./icon.template.ts";

const addIconsToIndexFile = async (
  indexFile: string,
  componentsDirName: string,
  svgFiles: string[]
) => {
  try {
    svgFiles.map((svgFile) =>
      fs.appendFileSync(
        indexFile,
        `export { default as ${toPascalCase(
          path.parse(svgFile).name
        )}Icon } from './${componentsDirName}/${toKebabCase(
          path.parse(svgFile).name
        )}'\n`
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
 * @param reactIconComponentsDirName
 * @param suffix
 */
export const convertSvgFilesToIconComponents = async (
  inputDir: string,
  indexFile: string,
  componentsDir: string,
  reactIconComponentsDirName: string,
  suffix: string
) => {
  const files = await getFilesInDir(inputDir);
  const svgFiles = files.filter((file) => file.endsWith(".svg"));

  svgFiles.map(async (svgFile) => {
    const svg = await fs.readFileSync(svgFile, { encoding: "utf8", flag: "r" });

    try {
      const fileData = transform.sync(
        svg,
        {
          icon: true,
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          template: iconTemplate,
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
  await addIconsToIndexFile(indexFile, reactIconComponentsDirName, svgFiles);
};
