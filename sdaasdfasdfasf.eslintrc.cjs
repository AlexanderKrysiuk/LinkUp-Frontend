/** @type {import('eslint').Linter.Config} */

module.exports = {
	root: true,
	env: { browser: true, esnext: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react-hooks/recommended",
		"plugin:tailwindcss/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["import", "react-refresh", "@typescript-eslint", "prettier"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
		],
		"import/no-unresolved": "error"
	},
	"settings": {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			"typescript": {
				"alwaysTryTypes": true,
				"project": "<root>/tsconfig.json",
			}
		}
	},
	tailwindcss: {
		// These are the default values but feel free to customize
		callees: ["classnames", "clsx", "ctl"],
		config: "tailwind.config.js", // returned from `loadConfig()` utility if not provided
		cssFiles: [
			"**/*.css",
			"!**/node_modules",
			"!**/.*",
			"!**/dist",
			"!**/build",
		],
		cssFilesRefreshRate: 5_000,
		removeDuplicates: true,
		skipClassAttribute: false,
		whitelist: [],
		tags: [],
		classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.js"],
			parser: "@typescript-eslint/parser",
		},
	],
};
