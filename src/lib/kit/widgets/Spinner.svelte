<script>
  export let color = 'tertiary';
  
  import { surface } from '$lib/kit/styles';
  $: surfaceStyling = surface[color];
</script>

<style>
  .wrapper { @apply relative w-8 h-8 mt-48; }

  .circle {
    @apply absolute w-8 h-8 rounded-full
      opacity-60 top-0 left-0 animate-ping;
  }
</style>

<div class="wrapper">
  <div class="circle {surfaceStyling}"></div>
</div>
