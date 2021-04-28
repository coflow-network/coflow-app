<script context="module">
	export async function load({ page }) {
		let parent = page.query.get('p');

		return {
			props: { parent }
		};
	}
</script>

<script>
	export let parent;

	import { CreateFlowForm } from '$lib/feat/flows';
</script>

<CreateFlowForm {parent} />
