'use strict'

module.exports = {
  overrides: [
    {
      extends: [
        'plugin:prettier/recommended',
        'plugin:@graphql-eslint/recommended',
      ],
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        operations: './_graphql-eslint.graphql',
        schema: './schema-gateway/src/supergraph-gateway.graphql',
        // schema: '**/src/**/*.graphql',
      },
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/executable-definitions': 'off',
        '@graphql-eslint/known-directives': 'off',
        '@graphql-eslint/possible-type-extension': 'off',
        '@graphql-eslint/strict-id-in-types': 'off',

        // not part of "recommended" config setting:
        '@graphql-eslint/no-unreachable-types': 'error',
      },
    },
    {
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      files: ['*.js', '*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
    },
  ],
}
