<script>
  import { onMount } from 'svelte';

  import { Grid } from '$lib/kit/blocks';
  import { SmallButton } from '$lib/kit/buttons'
 
  import { fetchSpaces, makeSpacesSub } from './api.js'
  import CreateSpaceTile from './CreateSpaceTile.svelte'
  import SpaceTile from './SpaceTile.svelte'
  import CreateSpaceForm from './CreateSpaceForm.svelte'

  import { fetchFlows, makeFlowsSub } from '$lib/feat/flows/api'
  import { CreateFlowTile, FlowTile } from '$lib/feat/flows'

  export let parent = null;

  let requestFetchSpaces = () => {fetchSpaces.request({parent})};
  let refetchSpacesSub = makeSpacesSub(requestFetchSpaces);

  let requestFetchFlows = () => {fetchFlows.request({space: parent})};
  let refetchFlowsSub = makeFlowsSub(requestFetchFlows);

  onMount(()=>{ 
    requestFetchSpaces(); 
    requestFetchFlows();
  });

  const fetchSpacesContext = fetchSpaces.context;
  const fetchFlowsContext = fetchFlows.context;
</script>

<Grid>
  <CreateSpaceTile {parent}/>
  {#if parent}
    <CreateFlowTile space={parent}/>
  {/if}
  {#each $fetchSpacesContext.data as space}
    <SpaceTile {space}/>
  {/each}
  {#each $fetchFlowsContext.data as flow}
    <FlowTile {flow}/>
  {/each}
</Grid>