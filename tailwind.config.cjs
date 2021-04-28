const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

const twColors = require('tailwindcss/colors');

let alias = (color) => {
	return {
		1: color[100],
		2: color[300],
		3: color[500],
		4: color[700],
		5: color[900],
		DEFAULT: color[500]
		// ...color
	};
};

module.exports = {
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			],
			keyframes: true
		}
	},
	theme: {
		extend: {
			colors: {
				primary: alias(twColors.cyan),
				secondary: alias(twColors.lime),
				tertiary: alias(twColors.violet),
				neutral: alias(twColors.blueGray),
				warning: alias(twColors.amber),
				error: alias(twColors.red)
			},
			boxShadow: {
				neumorphic: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff;'
			},
			spacing: {
				full: '100%'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
