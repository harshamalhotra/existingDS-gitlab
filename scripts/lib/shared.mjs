import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';

export const ROOT = resolve(import.meta.dirname, '..', '..');
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

export function printDiagnostics() {
  console.log('Beginning diagnostics:');
  run('npm', ['config', 'ls'], { throwOnFailure: false });
  run('git', ['status', '--porcelain=v2', '--branch'], { throwOnFailure: false });
  run('git', ['diff'], { throwOnFailure: false });
  run('ls', ['-la', CHANGESET_DIR], { throwOnFailure: false });
}
