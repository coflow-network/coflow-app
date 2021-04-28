<script>
	export let color;
	export let action;
	export let text;
	export let shortcut = null;

	import { surface } from '$lib/ui/styles';
	$: styling = surface[color];
</script>

<button
	class="btn {styling}"
	on:click|preventDefault={action}
	on:keydown={(event) => event.key === { shortcut } && action()}
>
	{text}
</button>

<style>
	.btn {
		@apply block w-full h-12
      lowercase font-semibold
      px-2 py-2
      shadow-lg rounded-xl;
	}
</style>
