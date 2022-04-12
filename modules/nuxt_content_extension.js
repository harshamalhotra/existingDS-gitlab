/* eslint-disable import/no-default-export */
import { execSync } from 'child_process';
import path from 'path';

/**
 * This module extends metadata of our markdown files.
 * It currently:
 * - adds `lastGitUpdate`: the last modified date (via git)
 */
export default function NuxtContentExtension() {
  const baseDir = path.resolve(__dirname, `../contents/`);

  this.nuxt.hook('content:file:beforeInsert', (document) => {
    if (document.extension === '.md') {
      const filePath = path.join(baseDir, document.path + document.extension);

      try {
        document.lastGitUpdate = execSync(
          `git log -1 --pretty=format:%aI "${filePath}"`,
        ).toString();
      } catch (error) {
        /* eslint-disable no-console */
        console.error(`Could not retrieve last update date for ${filePath}`);
        console.error(error);
        /* eslint-enable no-console */
      }
    }
  });
}
