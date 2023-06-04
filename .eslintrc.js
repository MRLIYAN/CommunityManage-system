module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'space-before-function-paren':'off',
    'indent':'off',
    'eol-last':'off',
    'no-trailing-spaces':'off',
    'key-spacing':'off',
    'comma-dangle':'off',
    'comma-spacing':'off',
    'no-multiple-empty-lines':'off',
    'semi':'off',
    'space-infix-ops':'off',
    'quotes':'off',
    'eqeqeq':'off',
    'spaced-comment':'off',
    'no-unused-vars':'off',
    'space-before-blocks.':'off',
    'keyword-spacing':'off',
    'padded-blocks':'off',
    'object-curly-spacing':'off',
    'vue/no-unused-vars':'off',
    'vue/no-unused-components':'off',
    'space-before-blocks':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
