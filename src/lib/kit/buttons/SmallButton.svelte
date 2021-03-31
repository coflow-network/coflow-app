<script>
  export let color;
  export let action;
  export let text;

  import { surface } from '$lib/kit/styles';
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

<button class="effect {styling}" on:click|once={action}>
  {text}  
</button>