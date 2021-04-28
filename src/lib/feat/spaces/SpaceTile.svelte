<script>
	import { SplitTile } from '$lib/ui/tiles';

	export let space;
	export let action = () => {};
</script>

<SplitTile name={space.name} desc={space.blurb} url="/space/{space.id}" {action} />
