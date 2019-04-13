module.exports = {
  linters: {
    '*.js': [
      'jest --findRelatedTests',
      'prettier --write',
      'eslint --fix',
      'git add',
    ],
    '*.json': ['prettier --write', 'git add'],
  },
};
