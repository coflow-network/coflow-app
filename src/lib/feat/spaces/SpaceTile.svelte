
<script>
    import { goto } from '$app/navigation';
    
    import { SplitTile } from '$lib/kit/tiles';
    
    export let space;

    let gotoSpace = () => { goto(`/s${space.id}`) };
</script>


<SplitTile name={space.name} desc={space.blurb} action={gotoSpace}/>