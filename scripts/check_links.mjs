/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { LinkChecker } from 'linkinator';

// gitlab.com pages tend to throw 503 errors against this sort of scan, so we cannot confidently
// rely on that error code to report broken links. For now, we only consider 404 errors to avoid
// false positives.
const FAILURE_CODES = [404];
const SITE_HOST = 'localhost:8080';
const ALLOWED_HOST_PATTERNS = [SITE_HOST, /gitlab\.io$/, /gitlab\.com$/];

async function checkLinks() {
  const checker = new LinkChecker();

  checker.on('pagestart', (url) => {
    console.log(`Scanning ${url}`);
  });

  const result = await checker.check({
    path: `http://${SITE_HOST}`,
    recurse: true,
    linksToSkip: async (rawUrl) => {
      const url = new URL(rawUrl);
      return !ALLOWED_HOST_PATTERNS.some((pattern) => url.host.match(pattern));
    },
  });

  const brokenLinks = result.links.filter((link) => FAILURE_CODES.includes(link.status));
  const succeeded = brokenLinks.length === 0;

  if (succeeded) {
    console.log('Links appear to be okay.');
    process.exitCode = 0;
  } else {
    const linksString = brokenLinks.length > 1 ? 'links appear' : 'link appears';
    console.error(`\n${brokenLinks.length} ${linksString} to be broken:\n`);
    brokenLinks.forEach((link) => {
      console.log(`Broken URL: ${link.url}`);
      console.log(`  Status code: ${link.status}`);
      console.log(`  Appears in: ${link.parent}\n`);
    });
    process.exitCode = 1;
  }
}

checkLinks();
