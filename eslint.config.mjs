// import globals from 'globals';
// import pluginJs from '@eslint/js';
// // import tseslint from 'typescript-eslint';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
// import eslintPluginReact from 'eslint-plugin-react';
//
// export default [
//   {
//     files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
//     languageOptions: {
//       globals: globals.browser,
//       ecmaVersion: 'latest', // Поддержка современных возможностей JavaScript
//       sourceType: 'module', // Использование ES-модулей
//     },
//     plugins: [
//       eslintPluginReact, // Подключение плагина React
//     ],
//     rules: {
//       'react/react-in-jsx-scope': 'off', // Отключаем правило для React 17+
//     },
//     settings: {
//       react: {
//         version: 'detect', // Автоматическое определение версии React
//       },
//     },
//   },
//   pluginJs.configs.recommended, // Базовые правила ESLint
//   ...tseslint.configs.recommended, // Правила для TypeScript
//   pluginReactConfig, // Рекомендации для React
// ];
