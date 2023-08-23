/** @type {import('eslint').Linter.Config} */

const react = require('eslint-plugin-react');
const reactRecommended = require('eslint-plugin-react/configs/recommended');
const globals = require('globals');

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
	...reactRecommended,
	languageOptions: {
		...reactRecommended.languageOptions,
		globals: {
			...globals.serviceworker,
			...globals.browser,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react-hooks/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	reactRecommended,
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslint.config.js', '*.ts', '*.tsx', '*.js'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.ts', '*.tsx', '*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
	languageOptions: {
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			project: ['./tsconfig.json'],
			createDefaultProgram: true,
			tsconfigRootDir: __dirname,
			ecmaFeatures: {
				jsx: true,
			},
		},
		globals: { ...globals.browser },
	},
	plugins: [
		'react',
		'import',
		'react-refresh',
		'@typescript-eslint',
		'prettier',
	],
	rules: {
		indent: ['error', 'tab'],
		// linebreakStyle: ['error', 'windows'],
		linebreakStyle: 0,
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/strict-boolean-expressions': [
			2,
			{
				allowString: false,
				allowNumber: false,
			},
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: '<root>/tsconfig.json',
			},
		},
		tailwindcss: {
			// These are the default values but feel free to customize
			callees: ['classnames', 'clsx', 'ctl'],
			config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
			cssFiles: [
				'**/*.css',
				'!**/node_modules',
				'!**/.*',
				'!**/dist',
				'!**/build',
			],
			cssFilesRefreshRate: 5_000,
			removeDuplicates: true,
			skipClassAttribute: false,
			prependCustom: true,
			whitelist: [],
			tags: [],
			classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. '^tw$' for `twin.macro`
		},
	},
};
