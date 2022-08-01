module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    "linebreak-style": 0,
  },
};
