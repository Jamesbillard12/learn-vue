module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'warn',
    semi: ['warn', 'always'],
    'vue/attributes-order': 'warn',
    'vue/html-indent': ['warn', 4],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/order-in-components': [
      'warn',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          ['template', 'render'],
          'renderError',
          'LIFECYCLE_HOOKS',
        ],
      },
    ],
    'vue/script-indent': 'off', // rely on prettier to handle correctly
  },
};