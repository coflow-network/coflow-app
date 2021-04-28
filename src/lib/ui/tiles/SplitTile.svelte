<script>
	import SquareTile from './SquareTile.svelte';

	import { Emoji } from '$lib/ui/widgets';

	export let name = 'Magical Community Space';
	export let desc = 'Home of the magical sparkly rainbow unicorn poop!';
	export let color = 'primary';
	export let url = 'javascript:;';
	export let action = () => {};

	import { surface } from '$lib/ui/styles';
	$: surfaceStyling = surface[color];
</script>

<SquareTile {url} {action}>
	<div class="pic mobile-size" />
	<div class="blurb mobile-size {surfaceStyling}">
		<h1>{name}</h1>
		<p>{desc}</p>
	</div>
</SquareTile>

<style>
	.mobile-size {
		height: 50vw;
		flex-shrink: 0;
	}
	.pic {
		@apply block w-full sm:w-64 sm:h-32 rounded-t-xl;
	}
	.blurb {
		@apply block w-full sm:w-64 sm:h-32 p-2 rounded-b-xl;
	}
	h1 {
		@apply block font-bold;
	}
</style>
