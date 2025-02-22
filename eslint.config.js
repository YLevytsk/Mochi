import js from "@eslint/js";
const { configs: jsConfigs } = js;

import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default {
  files: ["**/*.{js,jsx,ts,tsx}"], // ✅ Проверять все JS/TS файлы
  ignores: ["dist", "node_modules"], // ✅ Игнорировать ненужные папки
  languageOptions: {
    ecmaVersion: 2024,
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      sourceType: "module",
    },
  },
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...jsConfigs.recommended.rules,
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    ...reactHooks.configs.recommended.rules,
    "react/prop-types": 0,
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": "off" // ✅ Разрешает `console.log` во всех файлах
  },
};


