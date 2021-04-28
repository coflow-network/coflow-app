const sveltePreprocess = require("svelte-preprocess");
const netlify = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		adapter: netlify(),
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

	}
};
