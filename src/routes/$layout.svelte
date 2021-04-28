<script>
	import '../global.css';

	import { TopNav } from '$lib/feat/nav';
</script>

<TopNav />

<main>
	<slot />
</main>

<style>
	main {
		@apply block flex justify-evenly h-full w-full relative;
	}
</style>
