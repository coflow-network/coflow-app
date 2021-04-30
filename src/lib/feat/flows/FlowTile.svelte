<script>
	import { IconTile } from '$lib/ui/tiles';

	export let flow;

	let color = "secondary";
</script>

<IconTile url="/flow/{flow.id}" {...flow} {color}/>