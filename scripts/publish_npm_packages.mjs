#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import defaultChangelogFunctions from '@changesets/changelog-git';
import chalk from 'chalk';
import {
  ROOT,
  printDiagnostics,
  run,
  runChangesetWithWorkspacesHackForYarnV1,
} from './lib/shared.mjs';

const { env } = process;

const CHANGESET_DIR = join(ROOT, '.changeset');

// Changesets fails if this is an absolute path.
const CHANGESET_RELEASE_PLAN_FILE = relative(
  process.cwd(),
  join(CHANGESET_DIR, 'release_plan.json'),
);

function isEnvironmentOkay() {
  const messages = [];

  if (!env.CI) {
    messages.push('This script should only be run in CI.');
  }

  if (env.DRY_RUN) {
    if (!env.CI_MERGE_REQUEST_IID) {
      messages.push('This script should only run in merge request pipelines.');
    }

    if (!env.GITLAB_TOKEN_MR) {
      messages.push('GITLAB_TOKEN_MR is not defined.');
    }
  } else {
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
  }

  messages.forEach((message) => {
    console.warn(message);
  });

  return messages.length === 0;
}

function gitUrl() {
  const token = env.GITLAB_TOKEN || env.GITLAB_TOKEN_MR;
  return `https://gitlab-bot:${token}@gitlab.com/${env.CI_PROJECT_PATH}.git`;
}

/**
 * Changesets needs git to be checked out on the branch, not on a detached
 * commit sha. In other words, HEAD must point to the branch name, not its
 * commit sha.
 *
 * For dry runs, there also needs to exist a local branch for the default
 * branch so that it can compare the source branch against it.
 */
function ensureBranches() {
  let branch = env.CI_DEFAULT_BRANCH;

  if (env.DRY_RUN) {
    // Ensure a local default branch exists and points to the remote default branch.
    run('git', ['branch', env.CI_DEFAULT_BRANCH, `origin/${env.CI_DEFAULT_BRANCH}`]);
    branch = env.CI_MERGE_REQUEST_SOURCE_BRANCH_NAME;
  }

  // Ensure HEAD points to the actual branch.
  run('git', ['fetch', gitUrl(), branch]);
  run('git', ['checkout', branch]);
}

function getReleasePlan() {
  const changesetFiles = readdirSync(CHANGESET_DIR).filter(
    (name) => name.endsWith('.md') && name !== 'README.md',
  );

  if (changesetFiles.length > 0) {
    console.log(`Found changeset files:\n${changesetFiles.join('\n')}`);
  } else {
    // Create an empty release plan file anyway, to avoid a spurious warning in
    // job log about missing artifacts.
    writeFileSync(CHANGESET_RELEASE_PLAN_FILE, '');
    console.log('No changesets found.');
    return null;
  }

  // We know there are changeset files, so we expect this command to succeed.
  runChangesetWithWorkspacesHackForYarnV1(['status', `--output=${CHANGESET_RELEASE_PLAN_FILE}`]);

  const releasePlan = JSON.parse(readFileSync(CHANGESET_RELEASE_PLAN_FILE, 'utf8'));

  console.log('Changesets release plan:', releasePlan);

  return releasePlan;
}

/**
 * Pretty-print the release plan JSON.
 * @param {object} releasePlan The release plan.
 */
function printReleasePlan({ releases }) {
  const releaseLines = releases.map(
    ({ name, type, oldVersion, newVersion }) =>
      `${chalk.bold(name)} ${chalk.yellow(oldVersion)} ⟶ ${chalk.green(newVersion)} (${type})`,
  );
  console.log(releaseLines.join('\n'));
}

function releaseSection(type, lines) {
  const typeCapitalized = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;

  return `### ${typeCapitalized} changes\n\n${lines.join('\n')}`;
}

async function createRelease({ tag, description }) {
  const url = `${env.CI_API_V4_URL}/projects/${env.CI_PROJECT_ID}/releases`;

  console.log(`Creating release via ${url}...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'private-token': env.GITLAB_TOKEN },
    body: JSON.stringify({ tag_name: tag, description }),
  });

  if (!response.ok) {
    const responseBody = JSON.stringify(await response.json(), null, 2);

    throw new Error(
      `Failed to create release for tag ${tag}: ${response.status}: ${response.statusText}, body: ${responseBody}`,
    );
  }

  console.log(`Successfully created release at ${url}/${encodeURIComponent(tag)}`);
}

async function createReleases({ changesets, releases }) {
  for (const release of releases) {
    const releaseDescriptionObject = {
      major: [],
      minor: [],
      patch: [],
    };

    for (const changeset of changesets) {
      const { type } =
        changeset.releases.find((rel) => rel.name === release.name && rel.type !== 'none') ?? {};

      if (type) {
        releaseDescriptionObject[type].push(
          // eslint-disable-next-line no-await-in-loop
          await defaultChangelogFunctions.getReleaseLine(changeset, type),
        );
      }
    }

    const description = Object.entries(releaseDescriptionObject)
      .filter(([, lines]) => lines.length > 0)
      .map(([type, lines]) => releaseSection(type, lines))
      .join('\n\n');

    // eslint-disable-next-line no-await-in-loop
    await createRelease({ tag: `${release.name}@${release.newVersion}`, description });
  }
}

function gitCommit({ message = 'Update packages for release [skip ci]' } = {}) {
  run('git', ['config', '--global', 'user.email', 'gitlab-bot@gitlab.com']);
  run('git', ['config', '--global', 'user.name', 'GitLab Bot']);

  // Stage modified and deleted files only.
  run('git', ['add', '--update']);

  // Stage new package changelog files, if any.
  run('git', ['add', 'packages/*/CHANGELOG.md'], { throwOnFailure: false });

  run('git', ['status']);
  run('git', ['commit', '-m', message]);
}

function gitPush() {
  const refspec = `HEAD:${env.CI_COMMIT_BRANCH}`;

  run('git', ['push', '--follow-tags', gitUrl(), refspec]);
}

function publish() {
  run('npm', ['config', 'set', `//registry.npmjs.org/:_authToken=${env.NPM_TOKEN}`]);
  run('npm', [
    'config',
    'set',
    `//gitlab.com/api/v4/projects/4456656/packages/npm/:_authToken=${env.GITLAB_TOKEN}`,
  ]);
  runChangesetWithWorkspacesHackForYarnV1(['publish']);
}

async function main() {
  if (!isEnvironmentOkay()) {
    process.exitCode = 1;
    return;
  }

  ensureBranches();

  const releasePlan = getReleasePlan();
  if (!releasePlan || releasePlan.releases.length === 0) {
    console.log('Nothing to publish.');
    return;
  }

  // Process changeset files and update package changelogs
  runChangesetWithWorkspacesHackForYarnV1(['version']);

  if (env.DRY_RUN) {
    console.log('Diff of changes that would be made if this were on the default branch:');
    run('git', ['diff', '--color=always']);
    console.log('The following packages would be released:');
    printReleasePlan(releasePlan);
    return;
  }

  gitCommit();

  publish();

  gitPush();

  await createReleases(releasePlan);
}

try {
  await main();
} catch (error) {
  process.exitCode = 1;
  printDiagnostics();
  console.error('Unhandled error (see above for diagnostics):', error);
}
