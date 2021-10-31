'use strict'

module.exports = {
  overrides: [
    {
      extends: ['plugin:prettier/recommended'],
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        // TODO FIXME add more rules
        '@graphql-eslint/alphabetize': [
          'error',
          {
            arguments: [
              'Field',
              'FieldDefinition',
              'Directive',
              'DirectiveDefinition',
            ],
            fields: [
              'InterfaceTypeDefinition',
              'InputObjectTypeDefinition',
              'ObjectTypeDefinition',
            ],
            values: ['EnumTypeDefinition'],
          },
        ],
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
