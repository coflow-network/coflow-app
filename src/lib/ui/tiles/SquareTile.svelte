<script>
	import { Emoji } from '$lib/ui/widgets';

	export let url = 'javascript:;';
	export let action = () => {};
	export let color = 'neutral';

	import { surface } from '$lib/ui/styles';
	$: styling = surface[color];
</script>

<a sveltekit:prefetch href={url}>
	<div class="tile mobile-size hover-effect {styling}" on:click={action}>
		<slot />
	</div>
</a>

<style>
	.mobile-size {
		width: 90vw;
		height: 90vw;
	}

	.tile {
		@apply shadow-2xl sm:h-64 sm:w-64 m-4
      rounded-xl opacity-90;
	}

	.hover-effect {
		@apply transition duration-500 ease-in-out transform
      sm:hover:scale-110 hover:opacity-100;
	}
</style>
