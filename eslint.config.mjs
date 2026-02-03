import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Recognize Astro files
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      extraFileExtensions: [".astro"],
      // Allow parsing of TS inside the Astro frontmatter
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  eslintConfigPrettier,
];