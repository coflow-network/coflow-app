<script>
	import "../global.css";
  
  import { TopNav } from '$lib/feat/nav';
</script>
  
<style>
  main { @apply block flex justify-evenly h-full w-full relative; }
</style>
  
<TopNav/>
  
<main>
  <slot></slot>
</main>