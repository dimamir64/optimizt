import fs from 'node:fs';
import path from 'node:path';

export default function lookItUp(fileName, directory = process.cwd()) {
  const currentPath = path.join(directory, fileName);

  if (fs.existsSync(currentPath)) {
    return currentPath;
  }

  const isRoot = directory === path.dirname(directory);

  return isRoot
    ? null
    : lookItUp(fileName, path.dirname(directory));
}
