module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    soruceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
}
