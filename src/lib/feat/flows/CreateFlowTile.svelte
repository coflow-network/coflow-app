<script>
  import { SquareTile } from '$lib/kit/tiles';

  export let action = () => {};
  export let color='secondary';
  export let space = null;
  
  import { surface } from '$lib/kit/styles';
  $: surfaceStyling = surface[color];

  var query = '';
  if ( space ) {
    query = `?s=${space}`;
  };
  
  let url = `/flow/create${query}`;
</script>

<style>
  .filler { @apply block absolute w-full h-full; }

  h1 {
    @apply block font-bold text-8xl text-white h-1/2 w-full
      flex justify-center align-bottom mt-8;
  }

  h2 {
    @apply block text-xl font-bold text-white h-1/2 w-full
      flex justify-center align-top;
  }
</style>

<SquareTile {color} {url}>
  <div class="filler">
    <h1>+</h1>
    <h2>Create new flow</h2>
  </div>
</SquareTile>