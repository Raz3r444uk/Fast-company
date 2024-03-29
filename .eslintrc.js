module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        skipBlankLines: 0,
        indent: ["off"],
        semi: [2, "always"],
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "multiline-ternary": ["off"],
        "no-trailing-spaces": ["off"]
    }
};
