#!/usr/bin/env node
import { printDiagnostics, runChangesetWithWorkspacesHackForYarnV1 } from './lib/shared.mjs';

function main() {
  // eslint-disable-next-line no-unused-vars
  const [_nodeBinary, _scriptLocation, ...changesetArgs] = process.argv;

  runChangesetWithWorkspacesHackForYarnV1(changesetArgs);
}

try {
  main();
} catch (error) {
  process.exitCode = 1;
  printDiagnostics();
  console.error('Unhandled error (see above for diagnostics):', error);
}
