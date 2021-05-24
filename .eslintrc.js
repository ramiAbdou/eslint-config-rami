module.exports = {
  env: { jest: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['import', 'jest', 'simple-import-sort', 'sort-keys-fix'],
  rules: {
    // Fixes the "missing file extension" error.
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', ts: 'never', tsx: 'never' }
    ],

    // Requires a newline after imports.
    'import/newline-after-import': 'error',

    // Don't require modules in .test files to be listed in "dependencies".
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }
    ],

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
