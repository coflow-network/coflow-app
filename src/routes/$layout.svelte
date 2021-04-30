<script>
	import '../app.postcss';

	import { TopNav } from '$lib/feat/nav';
</script>

<TopNav />

<main>
  <slot />
</main>

<style>
	main {
		@apply w-full h-auto;
	}
</style>
