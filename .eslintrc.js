module.exports = {
  extends: ['plugin:@gitlab/default'],
  rules: {
    'filenames/match-regex': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
