#!/usr/bin/env node
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import defaultChangelogFunctions from '@changesets/changelog-git';
import {
  ROOT,
  printDiagnostics,
  run,
  runChangesetWithWorkspacesHackForYarnV1,
} from './lib/shared.mjs';

const CHANGESET_DIR = join(ROOT, '.changeset');

// Changesets fails if this is an absolute path.
const CHANGESET_RELEASE_PLAN_FILE = relative(
  process.cwd(),
  join(CHANGESET_DIR, 'release_plan.json'),
);

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

function getReleasePlan() {
  const changesetFiles = readdirSync(CHANGESET_DIR).filter(
    (name) => name.endsWith('.md') && name !== 'README.md',
  );

  if (changesetFiles.length > 0) {
    console.log(`Found changeset files:\n${changesetFiles.join('\n')}`);
  } else {
    console.log('No changesets found.');
    return null;
  }

  // We know there are changeset files, so we expect this command to succeed.
  runChangesetWithWorkspacesHackForYarnV1(['status', `--output=${CHANGESET_RELEASE_PLAN_FILE}`]);

  const releasePlan = JSON.parse(readFileSync(CHANGESET_RELEASE_PLAN_FILE, 'utf8'));

  console.log('Changesets release plan:', releasePlan);

  return releasePlan;
}

function releaseSection(type, lines) {
  const typeCapitalized = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;

  return `### ${typeCapitalized} changes\n\n${lines.join('\n')}`;
}

async function createRelease({ tag, description }) {
  const { env } = process;
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
  const refspec = `HEAD:${process.env.CI_COMMIT_BRANCH}`;

  run('git', ['push', '--follow-tags', gitUrl(), refspec]);
}

function publish() {
  run('npm', ['config', 'set', `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`]);
  run('npm', [
    'config',
    'set',
    `//gitlab.com/api/v4/projects/4456656/packages/npm/:_authToken=${process.env.GITLAB_TOKEN}`,
  ]);
  runChangesetWithWorkspacesHackForYarnV1(['publish']);
}

async function main() {
  if (!isEnvironmentOkay()) {
    process.exitCode = 1;
    return;
  }

  ensureDefaultBranch();

  const releasePlan = getReleasePlan();
  if (!releasePlan || releasePlan.releases.length === 0) {
    console.log('Nothing to publish.');
    return;
  }

  // Process changeset files and update package changelogs
  runChangesetWithWorkspacesHackForYarnV1(['version']);

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
