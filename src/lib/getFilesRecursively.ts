import * as fs from "fs";
import * as path from "path";

// Function to list all files in a directory recursively in a synchronous fashion
export const getFilesRecursively = (directoryPath: string): string[] => {
  let filesInDirectory = fs.readdirSync(directoryPath);
  let files: string[] = [];

  for (const file of filesInDirectory) {
    const absolutePath = path.join(directoryPath, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      files = [...files, ...getFilesRecursively(absolutePath)];
    } else {
      files.push(absolutePath);
    }
  }

  return files;
};
