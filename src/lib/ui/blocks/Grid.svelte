<div class="tile-wrapper">
	<div class="tile-container">
		<slot />
	</div>
</div>

<style>
	.tile-wrapper {
		@apply block relative w-full sm:w-5/6;
	}
	.tile-container {
		@apply flex flex-wrap;
	}
</style>
