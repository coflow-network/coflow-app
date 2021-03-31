<script>
  import { Box } from '$lib/kit/blocks'

  export let title;
  export let color='primary';
  
  export let extraClass = '';
</script>

<Box {title} {color} {extraClass}>
  <form>
    <slot></slot>
  </form>
</Box>