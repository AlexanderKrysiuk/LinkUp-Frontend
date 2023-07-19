/** @type {import('prettier').Config} */
module.exports = {
	tailwindConfig: './styles/tailwind.config.js',
	tailwindFunctions: ['clsx'],
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	pluginSearchDirs: false,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
};

