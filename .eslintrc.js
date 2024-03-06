module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'react', 'react-native'],
  rules: {
    'prettier/prettier': [2, { endOfLine: 'auto' }],
    'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
    'no-const-assign': 2,
    'no-var': 2,
    'react/self-closing-comp': 2,
    'prefer-const': 2,
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    eqeqeq: [2, 'smart'],
    curly: [2, 'all'],
    'react-hooks/exhaustive-deps': 2,
    'react/display-name': 'off',
    'newline-before-return': 2,
    'newline-after-var': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/consistent-indexed-object-style': 2,
    'no-duplicate-imports': 2,
    'arrow-body-style': [2, 'as-needed'],
    'object-shorthand': [2, 'always'],
    'react/jsx-boolean-value': [2, 'never'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. react related packages come first.
          ['^react', '@react', 'react-native', '@testing', '^@?\\w'],
          // Internal packages.
          ['^("|components|consts|context|hooks|lib|pages|styles|public|types|utils|")(/.*|$)'],
          // Other relative imports. Put same-folder imports and . last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put .. last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$']
        ]
      }
    ]
  }
};
