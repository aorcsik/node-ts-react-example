/* eslint-env amd, node, browser: false */

const rules = {
  "indent": ["warn", 2],
  "linebreak-style": ["error", "unix"],
  "quotes": ["warn", "double"],
  "semi": ["warn", "always"],

  "react/jsx-uses-vars": "error",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn"
};

const tsConfig = {
  parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
  extends:  [
    "eslint:recommended",
    "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    ecmaFeatures:  {
      experimentalObjectRestSpread: true,
      jsx:  true,  // Allows for the parsing of JSX
    },
    sourceType:  "module",  // Allows for the use of imports
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  rules:  rules,
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  settings:  {
    react:  {
      version:  "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};

module.exports = tsConfig;
