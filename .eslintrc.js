module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['src'],
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },
  //   react: {
  //     version: 'detect',
  //   },
  // },

  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    quotes: ['warn', 'single'],
    'prefer-const': 'error',
    'react/no-children-prop': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-unused-vars': 'warn',

    // quotes: ['warn', 'single'],

    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-unsafe-return': 'off',
    // '@typescript-eslint/no-unsafe-member-access': 'off',
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/no-unsafe-argument': 'off',
    // '@typescript-eslint/restrict-plus-operands': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    // '@typescript-eslint/no-unsafe-call': 'off',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/restrict-template-expressions': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/require-await': 'off',
    // '@typescript-eslint/unbound-method': 'off',
    // '@typescript-eslint/no-misused-promises': 'off',
    // 'react/no-children-prop': 'off',
    // 'react/no-unescaped-entities': 'off',
    // 'react/display-name': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'error',
    // 'prefer-const': 'warn',
    // 'no-unused-vars': 'error',
  },
  //this contains list of all plugin that provide the linting rules
  //@typescript-eslint integrates eslint with typescript specific linting rules
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks', 'prettier'],
};
// "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\""
