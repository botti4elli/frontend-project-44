import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest', // поддержка современных возможностей JavaScript
      sourceType: 'module',  // использование ES-модулей
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // если нужно отключить правило
    },
    settings: {
      react: {
        version: 'detect', // автоматическое определение версии React
      },
    },
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // файлы, которые будет проверять ESLint
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
