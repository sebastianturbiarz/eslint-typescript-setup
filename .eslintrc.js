module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "prettier", "prettier/react", "plugin:react-hooks/recommended", "plugin:import/warnings"],
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: true,
        singleQuote: false,
        printWidth: 80,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },

      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["invalidHref", "preferButton"],
          },
        ], // NextJS link
        "@typescript-eslint/camelcase": 0,
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal", ["sibling", "parent"]],
            pathGroups: [
              {
                pattern: "react",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "pages/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "lib/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "components/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "modules/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "assets/**",
                group: "internal",
                position: "after",
              },
              {
                pattern: "types/**",
                group: "internal",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "never",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "prettier/prettier": [
          "error",
          {
            trailingComma: "es5",
            semi: true,
            singleQuote: false,
            printWidth: 80,
          },
        ],
      },
    },
  ],
};
