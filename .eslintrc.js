module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',

    quotes: 1,

    semi: 'off',
    '@typescript-eslint/semi': 'off',

    '@typescript-eslint/member-delimiter-style': 'off',

    '@typescript-eslint/space-before-function-paren': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
