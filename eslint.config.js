import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefreshEslint from 'eslint-plugin-react-refresh'
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  jsxA11y.flatConfigs.recommended,
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: { react: { version: "detect" } }
  },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 2024 },
      ...eslintPluginReact.configs.recommended.languageOptions,
    },
  },
  {
    plugins: {
      'react': eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': fixupPluginRules(reactRefreshEslint),
    },
  },
  { ignores: ['dist', 'eslint.config.js'], },
  {
    rules: {
      'no-fallthrough': 'error',
      "no-unused-vars": ["error", {
        "vars": "all",
        "args": "all",
        "caughtErrors": "all",
      }],
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
    },

  }
);