// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2023,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",
    "import/no-commonjs": "error",
    "import/no-named-as-default-member": "off",
    "no-console": [
      "error",
      { allow: ["info", "warn", "error", "time", "timeLog", "timeEnd"] },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
        moduleDirectory: ["node_modules"],
      },
    },
  },
};
