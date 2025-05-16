import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const ROOT_PACKAGE_JSON = join(ROOT, 'package.json');

const CHANGESET_BIN = join(ROOT, 'node_modules', '.bin', 'changeset');
const CHANGESET_DIR = join(ROOT, '.changeset');

// Changesets fails if this is an absolute path.
const CHANGESET_STATUS_FILE = relative(process.cwd(), join(CHANGESET_DIR, 'status.json'));

function isEnvironmentOkay() {
  const { env } = process;
  const messages = [];

  if (!env.CI) {
    messages.push('This script should only be run in CI.');
  }

  if (!env.CI_COMMIT_BRANCH) {
    messages.push('This script should only run in branch pipelines.');
  }

  if (env.CI_COMMIT_BRANCH !== env.CI_DEFAULT_BRANCH) {
    messages.push(
      `This script should only run on pipelines for the default branch: CI_COMMIT_BRANCH=${env.CI_COMMIT_BRANCH}, CI_DEFAULT_BRANCH=${env.CI_DEFAULT_BRANCH}`,
    );
  }

  if (!env.GITLAB_TOKEN) {
    messages.push('GITLAB_TOKEN is not defined.');
  }

  if (!env.NPM_TOKEN) {
    messages.push('NPM_TOKEN is not defined.');
  }

  messages.forEach((message) => {
    console.warn(message);
  });

  return messages.length === 0;
}

function run(executable, args = [], { throwOnFailure = true, ...options } = {}) {
  const commandLine = `${executable} ${args.join(' ')}`;
  console.log(`Running: ${commandLine}`);

  const child = spawnSync(executable, args, {
    stdio: 'inherit',
    encoding: 'utf8',
    ...options,
  });

  if (child.status === 0) {
    console.log(`Success: "${commandLine}"`);
  } else {
    const message = `Failure: "${commandLine}" exited with:\n  code=${child.status}\n  signal=${child.signal}\n  error=${child.error}`;
    if (throwOnFailure) throw new Error(message);
    else console.warn(message);
  }

  return child;
}

function gitUrl() {
  return `https://gitlab-bot:${process.env.GITLAB_TOKEN}@gitlab.com/${process.env.CI_PROJECT_PATH}.git`;
}

/**
 * Changesets needs git to be checked out on the default branch, not on a
 * detached commit sha.
 */
function ensureDefaultBranch() {
  run('git', ['fetch', gitUrl(), process.env.CI_DEFAULT_BRANCH]);
  run('git', ['checkout', process.env.CI_DEFAULT_BRANCH]);
}

/**
 * Runs the changeset binary with given arguments and spawn options.
 *
 * This also wraps the call such that the workspaces property of the root
 * package.json file is set before running, and unset after.
 *
 * If we didn't do this, changesets would incorrectly assume that we want to
 * publish the root project, design.gitlab.com, rather than one of the packages
 * within.
 *
 * So, why haven't we committed the workspaces property? Because we're using
 * yarn@1.x, and the particular {d,devD,peerD}ependencies we have in
 * design.gitlab.com and GitLab UI make yarn throw a nonsense error when we
 * try:
 *
 *     warning Workspaces can only be enabled in private projects.
 *     error An unexpected error occurred: "expected workspace package to exist for \"webpack\"".
 *
 * The first line is nonsense because the root package.json already has
 * `private: true` set.
 *
 * The second line is nonsense because it has no reason to expect there to be a
 * workspace package for webpack.
 *
 * To fix this properly, we will need to move to a modern, supported package
 * manager. All the latest versions of npm, yarn and pnpm correctly install
 * this project with GitLab UI as a workspace package.
 */
function runChangesetWithWorkspacesHackForYarnV1(args, options) {
  console.log('Applying workspaces hack...');
  run('npm', ['pkg', 'set', '--json', 'workspaces=["packages/*"]']);
  run('git', ['diff', ROOT_PACKAGE_JSON]);

  try {
    return run(CHANGESET_BIN, args, options);
  } finally {
    run('git', ['checkout', '--', ROOT_PACKAGE_JSON], { throwOnFailure: false });
    console.log('Undone workspaces hack');
  }
}

function getReleases() {
  const changesetFiles = readdirSync(CHANGESET_DIR).filter(
    (name) => name.endsWith('.md') && name !== 'README.md',
  );

  if (changesetFiles.length > 0) {
    console.log(`Found changeset files:\n${changesetFiles.join('\n')}`);
  } else {
    console.log('No changesets found.');
    return [];
  }

  // We know there are changeset files, so we expect this command to succeed.
  runChangesetWithWorkspacesHackForYarnV1(['status', `--output=${CHANGESET_STATUS_FILE}`]);

  const status = JSON.parse(readFileSync(CHANGESET_STATUS_FILE, 'utf8'));

  console.log('Changeset status:', status);

  return status.releases;
}

function gitCommit({ message = 'Update packages for release [skip ci]', pathspec = '.' } = {}) {
  run('git', ['config', '--global', 'user.email', 'gitlab-bot@gitlab.com']);
  run('git', ['config', '--global', 'user.name', 'GitLab Bot']);

  run('git', ['add', pathspec]);
  run('git', ['status']);
  run('git', ['commit', '-m', message]);
}

function gitPush() {
  const refspec = `HEAD:${process.env.CI_COMMIT_BRANCH}`;

  run('git', ['push', '--follow-tags', gitUrl(), refspec]);
}

function publish() {
  run('npm', ['config', 'set', `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`]);
  runChangesetWithWorkspacesHackForYarnV1(['publish']);
}

function printDiagnostics() {
  console.log('Beginning diagnostics:');
  run('npm', ['config', 'ls'], { throwOnFailure: false });
  run('git', ['status', '--porcelain=v2', '--branch'], { throwOnFailure: false });
  run('git', ['diff'], { throwOnFailure: false });
  run('ls', ['-la', CHANGESET_DIR], { throwOnFailure: false });
}

function main() {
  if (!isEnvironmentOkay()) {
    process.exitCode = 1;
    return;
  }

  ensureDefaultBranch();

  if (getReleases().length === 0) {
    console.log('Nothing to publish.');
    return;
  }

  // Process changeset files and update package changelogs
  runChangesetWithWorkspacesHackForYarnV1(['version']);

  gitCommit();

  publish();

  gitPush();
}

try {
  main();
} catch (error) {
  process.exitCode = 1;
  printDiagnostics();
  console.error('Unhandled error (see above for diagnostics):', error);
}
