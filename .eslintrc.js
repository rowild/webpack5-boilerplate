module.exports = {
  ignorePatterns: ['dist', 'build', 'node_modules'],
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Accelerometer: true,
    Gyroscope: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'camelcase': 'warn',
    'cirly': 'off',
    'eol-last': 1,
    'indent': ['warn', 2, {'SwitchCase': 1}],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-extend-native': 'off',
    'no-multiple-empty-lines': 'warn',
    // 'no-tabs': ['off', { allowIndentationTabs: true }],
    'no-tabs': 1,
    'no-unreachable': 'off',
    'vue/no-unused-components': 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 0,
    'space-before-function-paren': 1
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: "config/webpack.common.js"
      }
    }
  }
}
