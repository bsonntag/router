module.exports = {
  env: {
    browser: 1,
  },
  extends: ['seegno', 'prettier'],
  plugins: ['react-hooks'],
  rules: {
    'no-eq-null': 'off',
    'react/jsx-no-literals': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
};
