import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';

export const ROOT = resolve(import.meta.dirname, '..', '..');
const ROOT_PACKAGE_JSON = join(ROOT, 'package.json');
const CHANGESET_BIN = join(ROOT, 'node_modules', '.bin', 'changeset');
const CHANGESET_DIR = join(ROOT, '.changeset');

export function run(executable, args = [], { throwOnFailure = true, ...options } = {}) {
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
export function runChangesetWithWorkspacesHackForYarnV1(args, options) {
  console.log('Applying workspaces hack...');
  run('npm', ['pkg', 'set', '--json', 'workspaces=["packages/*"]']);
  run('git', ['diff', ROOT_PACKAGE_JSON]);

  try {
    return run(CHANGESET_BIN, args, options);
  } finally {
    run('npm', ['pkg', 'delete', '--json', 'workspaces']);
    console.log('Undone workspaces hack');
  }
}

export function printDiagnostics() {
  console.log('Beginning diagnostics:');
  run('npm', ['config', 'ls'], { throwOnFailure: false });
  run('git', ['status', '--porcelain=v2', '--branch'], { throwOnFailure: false });
  run('git', ['diff'], { throwOnFailure: false });
  run('ls', ['-la', CHANGESET_DIR], { throwOnFailure: false });
}
