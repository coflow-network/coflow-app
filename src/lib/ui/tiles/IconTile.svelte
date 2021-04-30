<script>
	import SquareTile from './SquareTile.svelte';

    export let icon;
    export let name;
	export let blurb;
	export let url;
	export let action = () => {};
	export let color = "neutral";
</script>

<SquareTile {url} {action} {color}>
  <div class="top">
	{#if icon}
	  <p>{icon}</p>
	{/if}
  </div>
  <div class="bottom">
    <h1>{name}</h1>
    <h2>{blurb}</h2>
  </div>
</SquareTile>

<style>
	.top {
		@apply h-2/3 w-full;
	}

	.bottom {
		@apply h-1/3 w-full;
	}
	h1 {
		@apply block font-bold text-3xl text-white w-full text-center;
	}

	h2 {
		@apply block text-xl font-bold text-white w-full text-center;
	}
</style>