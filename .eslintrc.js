module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    // 절대 경로 설정을 위한 옵션
    'import/no-unresolved': 'off',
    // TODO : 아래 규칙은 추후 수정이 필요함
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
};
