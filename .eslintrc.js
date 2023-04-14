module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'max-len': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-bind': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks'],
};
