import * as fs from "fs";
import * as path from "path";

export interface FileInfo {
  path: string;
  size: number;
}

// Function to list all files with their sizes in a directory recursively in a synchronous fashion
export const getFilesRecursively = (directoryPath: string): FileInfo[] => {
  let filesInDirectory = fs.readdirSync(directoryPath);
  let files: FileInfo[] = [];

  for (const file of filesInDirectory) {
    const absolutePath = path.join(directoryPath, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      files = [...files, ...getFilesRecursively(absolutePath)];
    } else {
      files.push({ path: absolutePath, size: fs.statSync(absolutePath).size });
    }
  }

  return files;
};
