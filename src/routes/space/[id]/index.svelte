<script context="module">
	import { makeRecordStore } from '$lib/base';
	let space = makeRecordStore('spaces');

	export async function load({ page, fetch }) {
		const { id } = page.params;

		const result = await space.read({ id });

		console.log(result)
		return {
			props: { space: result.data }
		};
	}
</script>

<script>
	export let space;

	import { SpaceGrid } from '$lib/feat/spaces';
</script>

<svelte:head>
	<title>{space.name}</title>
</svelte:head>

<SpaceGrid parent={space.id} />