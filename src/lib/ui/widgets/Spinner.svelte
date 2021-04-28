<script>
	export let color = 'tertiary';
	export let action = () => {};

	import { onMount } from 'svelte';

	import { surface } from '$lib/ui/styles';
	$: surfaceStyling = surface[color];

	onMount(action);
</script>

<div class="wrapper">
	<div class="circle {surfaceStyling}" />
</div>

<style>
	.wrapper {
		@apply relative w-8 h-8 mt-48;
	}

	.circle {
		@apply absolute w-8 h-8 rounded-full
      opacity-60 top-0 left-0 animate-ping;
	}
</style>
