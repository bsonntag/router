module.exports = {
  '*.js': [
    'jest --findRelatedTests',
    'prettier --write',
    'eslint --fix',
    'git add',
  ],
  '*.json': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add'],
};
