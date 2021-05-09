<script context="module">
	import { makeRecordStore } from '$lib/base';
	let flow = makeRecordStore('flows');

	export async function load({ page }) {
		const { id } = page.params;

		const result = await flow.read({ id });

		return {
			props: { flow: result.data }
		};
	}

	let cards = [
		{ id: 3, text: 'hello,', color: 'bg-red-600' },
		{ id: 1, text: 'is', color: 'bg-yellow-600' },
		{ id: 12, text: 'it', color: 'bg-green-600' },
		{ id: 4, text: 'me', color: 'bg-blue-600' },
		{ id: 21, text: "you're", color: 'bg-indigo-600' },
		{ id: 98, text: 'looking', color: 'bg-purple-600' },
		{ id: 2, text: 'for?', color: 'bg-pink-600' }
	];

	import { FlowViewer } from '$lib/feat/flows';
</script>

<script>
	export let flow;
</script>

<FlowViewer {flow} {cards} />