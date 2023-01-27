module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],

  plugins: ['nuxt'],

  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '',
      },
    ],
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],

    // import
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    // eslint-plugin-vuejs-accessibility
    'vuejs-accessibility/alt-text': 0,
    'vuejs-accessibility/anchor-has-content': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'vuejs-accessibility/form-control-has-label': 0,
    'vuejs-accessibility/iframe-has-title': 0,
    'vuejs-accessibility/interactive-supports-focus': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/mouse-events-have-key-events': 0,
    'vuejs-accessibility/no-onchange': 0,
    'vuejs-accessibility/tabindex-no-positive': 0,
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
}
