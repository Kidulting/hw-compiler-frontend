module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    // TODO : 아래 규칙은 추후 수정이 필요함
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  extends: ['airbnb'],
};
