<script>
  export let color;
  export let action = () => {};
  export let text;
  export let url = "javascript:;";

  import { surface } from '$lib/ui/styles';
  $: styling = surface[color];
</script>

<style>
  button {
    @apply block lowercase font-semibold
      mx-2 px-1 py-1 shadow-lg rounded;
  }

  .effect {
    @apply transition
      duration-500 ease-in-out
      transform hover:scale-110;
  }
</style>

<a href="{url}">
  <button
    class="effect {styling}"
    on:click={action}>
    {text}  
  </button>
</a>