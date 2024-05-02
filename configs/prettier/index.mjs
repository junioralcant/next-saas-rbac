/** @typedef {import("prettier").Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  bracketSpacing: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  andOfLine: 'auto',
  bracketSameLine: false,
};

export default config;
