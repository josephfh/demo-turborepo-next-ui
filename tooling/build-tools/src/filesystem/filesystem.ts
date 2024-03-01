import fs from "fs";

export const createDir = async (dir: string) => {
  try {
    fs.mkdirSync(dir);
  } catch (err: unknown) {
    throw new Error(err?.toString());
  }
};

export const cleanDir = async (dir: string) => {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (err: unknown) {
    throw new Error(err?.toString());
  }
};

export const getFilesInDir = async (dir: string) => {
  const allFilesList: string[] = [];
  const files = fs.readdirSync(dir);
  files.map((file) => {
    const name = dir + "/" + file;
    if (fs.statSync(name).isFile()) {
      allFilesList.push(name);
    }
  });
  return allFilesList;
};

export const writeToFile = async (targetFile: string, data: unknown) => {
  try {
    if (typeof data === "string") fs.writeFileSync(targetFile, data);
    if (typeof data !== "string")
      fs.writeFileSync(targetFile, JSON.stringify(data));
  } catch (err: unknown) {
    throw new Error(err?.toString());
  }
};
