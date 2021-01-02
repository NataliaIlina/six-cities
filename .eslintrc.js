module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react-hooks/exhaustive-deps': 1,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['**/*.styled.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
