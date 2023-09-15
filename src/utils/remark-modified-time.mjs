import { exec } from 'child_process';

export default function modifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    exec(`git log -1 --pretty='format:%cI' -- '${filepath}'`, (error, stdout, stderr) => {
      if (error) {
        console.error(`An error occurred: ${error}`);
        return;
      }
      file.data.astro.frontmatter.lastModified = stdout.toString();
    });
  };
}

