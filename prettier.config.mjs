/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	useTabs: true,
	trailingComma: "all",
	semi: false,
	bracketSameLine: true,
	endOfLine: "auto",
	singleAttributePerLine: true,
	plugins: ["prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["**/*.yml"],
			options: {
				parser: "yaml",
			},
		},
	],
}
