<script>
	export let title;
	export let color = 'primary';

	export let extraClass = '';

	import { surface } from '$lib/ui/styles';
	$: boxSurface = surface[color];
</script>

<div class="box" {extraClass}>
	<div class="header {boxSurface}">
		<h1 class="">{title}</h1>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.box {
		@apply relative block rounded-xl
      w-full md:w-96 shadow-2xl
      mt-16 mb-4 ml-4 mr-4;
	}

	.header {
		@apply block w-full h-16 rounded-t-xl px-8
      flex justify-start items-center;
	}

	.content {
		@apply py-6 px-6 rounded-b-xl bg-white;
	}

	h1 {
		@apply block font-bold;
	}
</style>
