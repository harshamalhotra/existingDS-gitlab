/* eslint-disable import/no-default-export */
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const { dirname } = import.meta;
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const JEST_MOCKS = 'tests/__mocks__/**/*.js';

const jestConfig = compat.extends('plugin:@gitlab/jest');

/** @type { import("eslint").Linter.FlatConfig } */
export default [
  {
    ignores: ['packages/', 'public/', '.nuxt/'],
  },
  ...compat.extends('plugin:@gitlab/default'),
  {
    rules: {
      'filenames/match-regex': 'off',
      'import/no-extraneous-dependencies': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ...jestConfig.reduce((acc, config) => ({ ...acc, ...config }), {}),
    files: ['**/*.spec.js', 'tests/jest_setup.js', JEST_MOCKS],

    rules: {
      'promise/always-return': 'off',

      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: ['expect*'],
        },
      ],
    },
  },
  {
    files: [JEST_MOCKS],

    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['scripts/**/*'],

    rules: {
      'no-console': 'off',

      'import/extensions': [
        'error',
        'never',
        {
          mjs: 'always',
        },
      ],
    },
  },
];
