module.exports = {
  extends: ['plugin:@gitlab/default'],
  rules: {
    'filenames/match-regex': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.js', 'tests/jest_setup.js'],
      extends: ['plugin:@gitlab/jest'],
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
  ],
};
