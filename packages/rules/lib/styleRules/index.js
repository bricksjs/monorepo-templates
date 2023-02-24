// .stylelintrc.js

const rules = {
  'block-no-empty': true,
};

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        ...rules,
      },
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        ...rules,
      },
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        ...rules,
      },
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        ...rules,
      },
    },
    {
      files: ['**/*.vue'],
      rules: {
        ...rules,
      },
    },
  ],
};
