// module.exports = {
//   root: true,
//   extends: '@react-native',
// };


module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
};