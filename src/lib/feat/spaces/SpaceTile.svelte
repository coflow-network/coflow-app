
<script>
    import { SplitTile } from '$lib/kit/tiles';
    
    export let space;
</script>


<SplitTile 
  name={space.name}
  desc={space.blurb}
  url="/s{space.id}"
/>