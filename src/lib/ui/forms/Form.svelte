<script>
  import { Box } from '$lib/ui/blocks'

  export let title;
  export let color = 'primary';
</script>

  <Box {title} {color}>
    <form>
      <slot></slot>
    </form>
  </Box>