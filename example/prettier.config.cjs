/**
 * @see https://prettier.io/docs/en/configuration.html
 */
const config = {
  tabWidth: 2,
  printWidth: 80,
  plugins: [
    // require("prettier-plugin-sql"),
    require("@prettier/plugin-xml"),
    require("prettier-plugin-gherkin"),
  ],
  overrides: [
    {
      files: ["**/*.sql"],
      // For my local config this is the minimal pattern that works
      // files: ["../../../../../../../../../../../../../**/*.sql"],
      options: {
        parser: 'sql',
        language: 'postgresql',
        plugins: [require("prettier-plugin-sql"),],
      },
    }
  ]
};

module.exports = config;
