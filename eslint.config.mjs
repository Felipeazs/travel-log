import antfu from "@antfu/eslint-config"
import pluginVue from "eslint-plugin-vue"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	antfu(
		{
			type: "app",
			vue: true,
			typescript: true,
			formatters: true,
			stylistic: {
				indent: "tab",
				semi: false,
				quotes: "double",
			},
		},
		...pluginVue.configs["flat/recommended"],
		{
			rules: {
				"vue/html-indent": ["error", "tab"],
				"ts/consistent-type-definitions": ["error", "type"],
				"no-console": ["warn"],
				"antfu/no-top-level-await": ["off"],
				"@typescript-eslint/no-empty-object-type": "off",
				"node/prefer-global/process": ["off"],
				"@typescript-eslint/consistent-type-definitions": "off",
				"style/arrow-parens": "off",
				"style/quote-props": "off",
				"style/brace-style": "off",
				"style/operator-linebreak": "off",
				"style/multiline-ternary": "off",
				"unused-imports/no-unused-vars": "off",
				"no-unused-vars": "off",
				"antfu/consistent-list-newline": "off",
				"@typescript-eslint/no-unused-vars": [
					"warn",
					{
						args: "all",
						argsIgnorePattern: "^_",
						caughtErrors: "all",
						caughtErrorsIgnorePattern: "^_",
						destructuredArrayIgnorePattern: "^_",
						varsIgnorePattern: "^_",
						ignoreRestSiblings: true,
					},
				],
				"perfectionist/sort-imports": [
					"error",
					{
						tsconfigRootDir: ".",
					},
				],
				"unicorn/filename-case": [
					"error",
					{
						case: "kebabCase",
						ignore: ["README.md"],
					},
				],
			},
		},
	),
)
