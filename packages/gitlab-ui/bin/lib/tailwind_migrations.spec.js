import { parseMigrations, runMigrations } from './tailwind_migrations.mjs';
import bootstrapEquivalents from './bootstrap_tailwind_equivalents.json';

describe('runMigrations', () => {
  let migrationsToDo;
  beforeAll(async () => {
    migrationsToDo = await parseMigrations(bootstrapEquivalents);
  });

  it.each([
    ['<div class="align-baseline">', '<div class="!gl-align-baseline">'],
    [
      '<div class="align-items-md-stretch d-xl-table">',
      '<div class="md:!gl-items-stretch xl:!gl-table">',
    ],
  ])('migrates classes properly', (input, output) => {
    expect(runMigrations(input, migrationsToDo)).toBe(output);
  });
});
