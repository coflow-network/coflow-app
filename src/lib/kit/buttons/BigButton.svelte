<script>
  export let color;
  export let action;
  export let hover;
  export let text;
  export let shortcut;

  import { surface } from '$lib/kit/styles';
  $: styling = surface[color];
</script>

<style>
  .btn {
    @apply block w-full h-12
      lowercase font-semibold
      px-2 py-2
      shadow-lg rounded-xl;
  }
</style>

<button
  class="btn {styling}"
  on:click={action} 
  on:keydown="{event => event.key === {shortcut} && action()}"
  >
  {text}  
</button>