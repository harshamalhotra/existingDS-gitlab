#!/usr/bin/env node

/**
 * A simple commit linter commit-msg git hook.
 *
 * This intentionally only (poorly) implements a subset of rules that
 * [gitlab-dangerfiles]() implements, as it's not practical to keep them in sync.
 * It's just supposed to catch the most obvious errors, fast.
 *
 * This project doesn't use Ruby, and installing that just to lint commit messages
 * locally isn't practical.
 */

import { readFileSync } from 'node:fs';

const GUIDELINES_URL =
  'https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#commit-messages-guidelines';

const commitMessageFile = process.argv[2];
const commitMessage = readFileSync(commitMessageFile, 'utf-8');
const commitMessageSubjectLine = commitMessage.split('\n')[0];

if (!/^[A-Z]/.test(commitMessageSubjectLine)) {
  console.warn('The commit subject must start with a capital letter.');
  console.warn('For more information, take a look at our commit message guidelines:');
  console.warn(GUIDELINES_URL);
  process.exitCode = 1;
}
