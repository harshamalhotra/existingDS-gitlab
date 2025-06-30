/* eslint-disable import/no-default-export */
import path from 'node:path';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginCypress from 'eslint-plugin-cypress';
import pluginStorybook from 'eslint-plugin-storybook';

const { dirname } = import.meta;
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const jestConfig = compat
  .extends('plugin:@gitlab/jest')
  .reduce((acc, config) => ({ ...acc, ...config }), {});
const cypressConfig = pluginCypress.configs.recommended;
cypressConfig.languageOptions.ecmaVersion = 'latest';

const PACKAGE_GITLAB_UI = 'packages/gitlab-ui';

const JEST_MOCKS = 'tests/__mocks__/**/*.js';

/**
 * Returns a new array of configuration objects with the given `basePath`.
 *
 * @param {string} basePath
 * @param {Object[]} configurationObjects
 * @returns {Object[]}
 */
function setBasePath(basePath, configurationObjects) {
  return configurationObjects.map((object) => ({ ...object, basePath }));
}

const noRestrictedImportsNoBarrelImports = {
  group: ['**/index'],
  message: 'Import components and directives directly rather than via the top-level barrel file.',
};

/** @type { import("eslint").Linter.FlatConfig } */
export default [
  {
    ignores: [
      'public/',
      '.nuxt/',
      `${PACKAGE_GITLAB_UI}/node_modules/`,
      `${PACKAGE_GITLAB_UI}/storybook/`,
      `${PACKAGE_GITLAB_UI}/dist/`,
      `${PACKAGE_GITLAB_UI}/public/`,
      `${PACKAGE_GITLAB_UI}/**/.cypress_cache`,
      `${PACKAGE_GITLAB_UI}/src/vendor/`,
      `${PACKAGE_GITLAB_UI}/.storybook/docs/`,
    ],
  },
  ...pluginStorybook.configs['flat/csf'],
  ...compat.extends('plugin:@gitlab/default'),
  {
    rules: {
      'import/no-extraneous-dependencies': 'off',
      '@gitlab/tailwind-no-interpolation': 'error',

      'no-restricted-imports': [
        'error',
        {
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
    },
  },
  {
    files: ['pages/**/*.vue', 'components/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ...jestConfig,
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

  // Begin packages/gitlab-ui config
  ...setBasePath(PACKAGE_GITLAB_UI, [
    {
      files: ['**/*.{js,vue}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [noRestrictedImportsNoBarrelImports],
          },
        ],
      },
    },
    {
      files: ['**/*.spec.js', 'tests/jest_setup.js', 'tests/__helpers__/*.js'],

      ...jestConfig,

      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(dirname, `${PACKAGE_GITLAB_UI}/jest.config.js`),
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

            patterns: [noRestrictedImportsNoBarrelImports],
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
      ...cypressConfig,
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
    {
      files: ['src/**/*.{js,vue}'],
      rules: {
        // Ignore vendored bootstrap-vue imports
        'import/no-relative-packages': 'off',
      },
    },
  ]),
];
