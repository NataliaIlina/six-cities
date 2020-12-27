module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
