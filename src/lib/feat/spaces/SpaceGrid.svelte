<script>
  import { onMount } from 'svelte';

  import { Grid } from '$lib/kit/blocks';
  import { SmallButton } from '$lib/kit/buttons'
 
  import { fetchSpaces, makeSpacesSub } from './api.js'
  import CreateSpaceTile from './CreateSpaceTile.svelte'
  import SpaceTile from './SpaceTile.svelte'
  import CreateSpaceForm from './CreateSpaceForm.svelte'

  let parent = null;

  let requestFetchSpaces = () => {fetchSpaces.request({parent})};
  let fetchOnChangeSub = makeSpacesSub(requestFetchSpaces);

  onMount(()=>{ requestFetchSpaces(); });

  const fetchSpacesContext = fetchSpaces.context;
</script>

<Grid>
  <CreateSpaceTile/>
  {#each $fetchSpacesContext.data as space}
    <SpaceTile {space}/>
  {/each}
</Grid>