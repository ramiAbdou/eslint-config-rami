module.exports = {
  env: { jest: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['jest', 'simple-import-sort', 'sort-keys-fix'],
  rules: {
    // Requires a newline after imports.
    'import/newline-after-import': 'error',

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      {
        blankLine: 'always',
        prev: '*',
        next: ['block-like', 'multiline-expression']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['function', 'multiline-const', 'multiline-expression']
      },
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-expression'],
        next: 'return'
      }
    ],

    // This groups 3rd-party packages together, then groups internal @
    // alias modules with "../" type files.
    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000'], ['^\\w'], ['^@?\\w', '^\\.']] }
    ],

    // Sorts objects' keys automatically.
    'sort-keys-fix/sort-keys-fix': 'error'
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'] },
      typescript: { project: './tsconfig.json' }
    }
  }
};
