module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['standard', '@react-native-community'],
  plugins: ['react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'warn',
  },
};
