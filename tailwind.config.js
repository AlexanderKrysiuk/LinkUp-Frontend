/** @type {import('tailwindcss').Config} */
export default {
    content: {
        relative: true,
        files: [
            "./src/components/**/*.{html,js,ts,jsx,tsx}",
            "./src/pages/**/*.{html,js,ts,jsx,tsx}",
            "./index.html",
        ],
    },
    theme: {
        extend: {},
    },
	plugins: [require('prettier-plugin-tailwindcss')],
};
