<script>
  import { SquareTile } from '$lib/kit/tiles';

  export let action = () => {};
  export let color='primary';
  
  import { surface } from '$lib/kit/styles';
  $: surfaceStyling = surface[color];
</script>

<style>
  .filler { @apply block w-full h-full; }

  h1 {
    @apply block font-bold text-8xl text-white h-1/2 w-full
      flex justify-center align-bottom mt-8;
  }

  h2 {
    @apply block text-xl font-bold text-white h-1/2 w-full
      flex justify-center align-top;
  }
</style>

<SquareTile {color} {action}>
  <div class="filler">
    <h1>+</h1>
    <h2>Create new space</h2>
  </div>
</SquareTile>