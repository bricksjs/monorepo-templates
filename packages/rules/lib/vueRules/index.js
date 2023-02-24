// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'import/no-unresolved': 'off',
    'vue/multi-word-component-names': ['off'],
    'import/extensions': ['error', 'never', {
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never',
      vue: 'always',
      less: 'always',
      css: 'always',
      scss: 'always',
      json: 'always',
      jpeg: 'always',
      png: 'always',
      gif: 'always',
      svg: 'always',
    }],
    'vue/no-mutating-props': 'off',
    'import/prefer-default-export': 'off',
    'prefer-const': 'off',
    'no-shadow': 'warn',
    'prefer-object-spread': 'off',
    'arrow-body-style': 'off',
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'no-useless-return': 'off',
  },
};
