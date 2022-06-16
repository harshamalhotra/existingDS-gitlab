/* eslint-disable no-console */
// const linkinator = await import('linkinator');
import { LinkChecker } from 'linkinator'

// gitlab.com pages tend to throw 503 errors against this sort of scan, so we cannot confidently
// rely on that error code to report broken links. For now, we only consider 404 errors to avoid
// false positives.
const FAILURE_CODES = [404];

async function checkLinks() {
  // eslint-disable-next-line import/no-unresolved
  const checker = new LinkChecker();

  checker.on('pagestart', (url) => {
    console.log(`Scanning ${url}`);
  });

  const result = await checker.check({
    path: 'http://localhost:8080/',
    recurse: true,
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
