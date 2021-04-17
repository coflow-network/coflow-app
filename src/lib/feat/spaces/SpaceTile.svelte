
<script>
    import { SplitTile } from '$lib/kit/tiles';
    
    export let space;
    export let action = () => {};
</script>


<SplitTile 
  name={space.name}
  desc={space.blurb}
  url="/space/{space.id}"
  {action}
/>