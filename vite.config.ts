/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
// import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: './test/setup.ts',
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
	},
	resolve: {
		alias: [
			{
				find: '@components',
				replacement: resolve(__dirname, './src/components/'),
			},
			{
				find: '@hooks',
				replacement: resolve(__dirname, './src/hooks/'),
			},
			{
				find: '@assets',
				replacement: resolve(__dirname, './src/assets/'),
			},
			{
				find: '@layouts',
				replacement: resolve(__dirname, './src/layouts/'),
			},
			{
				find: '@middleware',
				replacement: resolve(__dirname, './src/middleware/'),
			},
			{
				find: '@pages',
				replacement: resolve(__dirname, './src/pages/'),
			},
			{
				find: '@utils',
				replacement: resolve(__dirname, './src/utils/'),
			},
			{
				find: '@scripts',
				replacement: resolve(__dirname, './src/scripts/'),
			},
			{
				find: '@icons',
				replacement: resolve(__dirname, './src/assets/icons/'),
			},
			{
				find: '@contexts',
				replacement: resolve(__dirname, './src/contexts/'),
			},
		],
	},
});
