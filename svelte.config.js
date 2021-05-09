import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import svelteSVG from "rollup-plugin-svelte-svg";
import svg from '@netulip/rollup-plugin-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),
	extensions: ['.svelte', '.svg'],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			plugins: [
				svg.default({ enforce: 'pre' }),
				//svelteSVG({ generate: "ssr" })
			]
		}
	},
};

export default config;