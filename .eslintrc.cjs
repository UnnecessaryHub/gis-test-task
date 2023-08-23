const { configure, presets } = require('eslint-kit')


/**
 * Eslint config
 */

module.exports = configure({
  mode: 'only-errors',
  allowDebug: process.env.NODE_ENV !== "production",
  root: __dirname,
  presets: [
    presets.node(),
    presets.prettier({
      singleQuote: true,
      trailingComma: "none",
      endOfLine: "auto"
    }),
    presets.typescript({
      root: './'
    }),
    presets.react(),
  ],
  extend: {
    root: true,
    ignorePatterns: ["!**/*"],
    plugins: ["prefer-arrow"],
    // My custom config
    extends: ["gearonix"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "quotes": [2, "single", { "avoidEscape": true }],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/member-delimiter-style": ["error",  {"multiline" : {"delimiter": "none"}}],
      "import/no-unresolved": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "import/extensions": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-array-index-key": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "dot-notation": "off",
      "prefer-arrow/prefer-arrow-functions": "error"
    }
  }
})
