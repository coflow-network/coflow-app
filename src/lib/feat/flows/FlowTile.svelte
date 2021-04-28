
<script>
    import { SplitTile } from '$lib/ui/tiles';
    
    export let flow;
</script>


<SplitTile 
  name={flow.name}
  desc={flow.blurb}
  url="/flow/{flow.id}"
  color="secondary"
/>