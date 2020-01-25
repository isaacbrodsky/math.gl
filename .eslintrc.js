module.exports = {
  extends: ['./node_modules/ocular-dev-tools/templates/.eslintrc'],
  parserOptions: {
    ecmaVersion: 2018
  }
};

/** TODO typescript lint integration - quite slow
 *
const FAST = Boolean(process.env.fast); // eslint-disable-line
console.log('eslint running in FAST mode: ', FAST);
module.exports = {
  extends: [
    './node_modules/ocular-dev-tools/templates/.eslintrc',
    'plugin:@typescript-eslint/recommended',
    // slower rules, caution for large code bases
    !FAST && 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ].filter(Boolean),
  parser: '@typescript-eslint/parser',
  // Note: loads typescfipt options in `tsconfig.json`
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Deliberately disabled rules to match our current coding conventions
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // Disable rules that are specifically for TypeScript files
    '@typescript-eslint/explicit-function-return-type': 'off',
    // TODO - Gradually remove these exceptions
    '@typescript-eslint/camelcase': 'off'
  },
  overrides: [
    {
      // Typescript only rules
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        // TODO - gradually remove these exceptions
        // Allow typescript overloads: https://github.com/typescript-eslint/typescript-eslint/issues/291
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
*/
