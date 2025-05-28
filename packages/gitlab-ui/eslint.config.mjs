import path from 'node:path';

import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
// eslint-disable-next-line import/no-unresolved
import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginStorybook from 'eslint-plugin-storybook';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  pluginCypress.configs.recommended,
  {
    ignores: [
      'node_modules/',
      'storybook/',
      'dist/',
      'public/',
      '**/.cypress_cache',
      'src/vendor/',
      '.storybook/docs/',
    ],
  },
  ...pluginStorybook.configs['flat/csf'],
  ...compat.extends('plugin:@gitlab/default', 'plugin:@gitlab/jest'),
  {
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/no-relative-packages': 'off',
      'import/no-deprecated': 'off',
      '@gitlab/tailwind-no-interpolation': 'error',

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/index'],
              message:
                'Import components and directives directly rather than via the top-level barrel file.',
            },
          ],

          paths: [
            {
              name: 'lodash',
              message: 'Import <function> from lodash/<function> instead for better tree-shaking.',
            },
            {
              name: 'lodash/isArray',
              message: 'Prefer native Array.isArray method.',
            },
            {
              name: 'lodash/isFinite',
              message: 'Prefer native Number.isFinite method.',
            },
          ],
        },
      ],

      'vue/no-v-html': 'error',

      'max-params': [
        'error',
        {
          max: 3,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.js', 'tests/jest_setup.js', 'tests/__helpers__/*.js'],

    settings: {
      'import/resolver': {
        jest: {
          jestConfigFile: path.join(dirname, 'jest.config.js'),
        },
      },
    },

    rules: {
      'promise/always-return': 'off',

      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: ['expect*'],
        },
      ],

      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.name='afterEach'] CallExpression MemberExpression[object.name='wrapper'][property.name='destroy']",
          message:
            'No need to call wrapper.destroy() in afterEach due to enableAutoDestroy being enabled suite-wide.',
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@vue/test-utils',
              importNames: ['createLocalVue'],
              message:
                'createLocalVue should be avoided. Perform operations on global Vue instance instead',
            },
          ],

          patterns: [
            {
              group: ['**/index'],
              message:
                'Import components and directives directly rather than via the top-level barrel file.',
            },
          ],
        },
      ],

      '@gitlab/tailwind-no-interpolation': 'off',
    },
  },
  {
    files: ['**/*.stories.js'],

    rules: {
      'no-restricted-globals': [
        'error',
        {
          name: 'setTimeout',
          message: 'use setStoryTimeout from the utils/test_utils instead.',
        },
      ],
    },
  },
  {
    files: ['**/config.js', '**/rollup.config.js', '**/index.js', '**/*.stories.js'],

    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.vue'],

    rules: {
      'vue/require-name-property': 'error',
    },
  },
  {
    files: ['cypress/**/*.js'],
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      'jest/expect-expect': 'off',
      'jest/no-identical-title': 'off',
      'jest/valid-describe-callback': 'off',
      'jest/valid-expect': 'off',
    },
  },
  {
    files: ['bin/**/*.{js,mjs}'],
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'no-param-reassign': 'off',
    },
  },
];
