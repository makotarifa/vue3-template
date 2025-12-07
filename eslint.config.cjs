// eslint.config.cjs - Flat ESLint v9 config
const js = require('@eslint/js')
const vuePlugin = require('eslint-plugin-vue')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')
const vueParser = require('vue-eslint-parser')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
  { ignores: ['node_modules', 'dist', 'public', '*.config.js', '*.config.cjs', '**/*.d.ts'] },
  // JS recommended rules from @eslint/js
  js.configs.recommended,
  // Vue plugin flat recommended configs
  ...((vuePlugin && vuePlugin.configs && vuePlugin.configs['flat/recommended']) || []),
  // Base JS/TS rules with Prettier plugin
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        localStorage: 'readonly',
      },
    },
    plugins: { prettier: prettierPlugin },
    rules: {
      quotes: ['error', 'double', { avoidEscape: true }],
      semi: ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  // Vue SFC files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      globals: { console: 'readonly', window: 'readonly', document: 'readonly', localStorage: 'readonly' },
    },
    plugins: { vue: vuePlugin, prettier: prettierPlugin },
    rules: {
      'vue/multi-word-component-names': 'off',
      // Keep attributes order as per plugin recommended (avoid overriding with invalid groups)
      'vue/order-in-components': ['error', { order: ['name', 'components', 'props', 'emits', 'setup', 'data', 'computed', 'methods', 'watch', 'lifeCycle'] }],
      'vue/html-self-closing': ['error', { html: { void: 'never', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }],
      quotes: ['error', 'double', { avoidEscape: true }],
      semi: ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  // Disable conflicting stylistic rules via eslint-config-prettier
  { rules: prettierConfig.rules },
]
// (duplicate removed) keep the single flat config definition at the top of the file