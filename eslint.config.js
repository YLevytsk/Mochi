import js from "@eslint/js";
const { configs: jsConfigs } = js;

import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default {
  files: ["**/*.{js,jsx,ts,tsx}"],
  ignores: ["dist", "node_modules"],
  languageOptions: {
    ecmaVersion: 2024,
    globals: {
      ...globals.browser,
      process: "readonly" // ✅ Теперь `process` не будет вызывать ошибку
    },
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
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn"
  },
};


