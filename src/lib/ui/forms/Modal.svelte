<script>
	export let show = false;
	export let zindex = 50;
	export let duration = 300;
</script>

{#if show}
	<div class="modal z-{zindex} transition duration-{duration}">
		<slot />
	</div>
{/if}

<style>
	.modal {
		@apply fixed;
	}
</style>
