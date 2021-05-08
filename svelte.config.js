import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;