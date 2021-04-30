<script>
	import { onDestroy } from 'svelte';

	import { makeQueryStore } from '$lib/base';

	import { Grid } from '$lib/ui/blocks';

	import CreateSpaceTile from './CreateSpaceTile.svelte';
	import SpaceTile from './SpaceTile.svelte';
	import CreateSpaceForm from './CreateSpaceForm.svelte';

	import { CreateFlowTile, FlowTile } from '$lib/feat/flows';

	export let parent = 1;

	let fetchChildren = `parent.eq.${parent}`;
	let spaces = makeQueryStore('spaces', fetchChildren);
	let flows = makeQueryStore('flows', fetchChildren);
</script>

<Grid class="grid">
	<CreateSpaceTile {parent} />
	{#if parent}
		<CreateFlowTile space={parent} />
	{/if}
	{#each $spaces.data as space}
		<SpaceTile {space} />
	{/each}
	{#each $flows.data as flow}
		<FlowTile {flow} />
	{/each}
</Grid>

<style>
	.grid {
		@apply overflow-scroll;
	}
</style>

