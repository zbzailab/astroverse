import { statSync } from "fs";

export function remarkModifiedTime() {
  return function (_tree, file) {
    const filepath = file.history[0];
    const result = statSync(filepath);
    file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
  };
}