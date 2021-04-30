<script>
	import MainMenu from './MainMenu.svelte';
	import UserMenu from './UserMenu.svelte';
</script>

<nav>
	<MainMenu />
	<UserMenu />
</nav>

<style>
	nav {
		@apply font-bold px-0 py-2 flex justify-between items-center;
	}
</style>
