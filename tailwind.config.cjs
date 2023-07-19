/** @type {import('tailwindcss').Config} */
export default {
	content: {
		relative: true,
		files: [
			'./src/components/**/*.{html,js,ts,jsx,tsx}',
			'./src/pages/**/*.{html,js,ts,jsx,tsx}',
			'./index.html',
		],
	},
	theme: {
		darkMode: 'class',
		extend: {},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
	rules: {
		'tailwindcss/classnames-order': 1,
		'tailwindcss/enforces-negative-arbitrary-values': 1,
		'tailwindcss/enforces-shorthand': 1,
		'tailwindcss/migration-from-tailwind-2': 0,
		'tailwindcss/no-arbitrary-value': 0,
		'tailwindcss/no-custom-classname': 0,
		'tailwindcss/no-contradicting-classname': 2,
	},
};
