const consola = require('consola');

// gitlab.com pages tend to throw 503 errors against this sort of scan, so we cannot confidently
// rely on that error code to report broken links. For now, we only consider 404 errors to avoid
// false positives.
const FAILURE_CODES = [404];

async function checkLinks() {
  // eslint-disable-next-line import/no-unresolved
  const linkinator = await import('linkinator');
  const checker = new linkinator.LinkChecker();

  checker.on('pagestart', (url) => {
    consola.info(`Scanning ${url}`);
  });

  const result = await checker.check({
    path: 'http://localhost:8080/',
    recurse: true,
  });

  const brokenLinks = result.links.filter((link) => FAILURE_CODES.includes(link.status));
  const succeeded = brokenLinks.length === 0;

  if (succeeded) {
    consola.success('Links appear to be okay.');
    process.exitCode = 0;
  } else {
    consola.error('Some links appear to be broken:');
    brokenLinks.forEach((link) => {
      consola.log(`URL: ${link.url}`);
      consola.log(`Status code: ${link.status}`);
      consola.log(`Parent: ${link.parent}\n`);
    });
    process.exitCode = 1;
  }
}

checkLinks();
