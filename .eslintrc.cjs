module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    quotes: ['error', 'double', { avoidEscape: true }],
    semi: ['error', 'always'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'SLOTS',
        'PROPS',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: false,
    }],
    'vue/order-in-components': ['error', { order: ['name', 'components', 'props', 'emits', 'setup', 'data', 'computed', 'methods', 'watch', 'lifeCycle'] }],
    'vue/html-self-closing': ['error', { html: { void: 'never', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }],
  },
}
