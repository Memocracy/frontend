module.exports = {
  rules: {
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "quote-props": ["error", "as-needed"],
    "import/prefer-default-export": "off"
  },
  extends: ["gatsby-standard", "airbnb-base", "react-app", "prettier"],
};
