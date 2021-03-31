<script>
  import { onMount, afterUpdate, tick } from 'svelte';

  import { fetchSpaces, makeSpacesSub } from './state.js'

  import { Modal } from '$lib/kit/forms';
  import { Grid } from '$lib/kit/blocks';
  import { SmallButton } from '$lib/kit/buttons'
  import { SplitTile } from '$lib/kit/tiles';
 
  import CreateSpaceTile from './tiles/CreateSpaceTile.svelte'
  import CreateSpaceForm from './CreateSpaceForm.svelte'

  let name;
  let desc;
  let parent = null;

  let createSpaceModal = false;

  const toggleCreateSpaceModal = () => { createSpaceModal = !createSpaceModal };

  let requestFetchSpaces = () => {fetchSpaces.request({parent})};
  let fetchOnChangeSub = makeSpacesSub(requestFetchSpaces);

  onMount(()=>{ requestFetchSpaces(); });

  const fetchSpacesContext = fetchSpaces.context;
</script>

<Grid>
  <CreateSpaceTile action={toggleCreateSpaceModal}/>
  {#each $fetchSpacesContext.data as space}
    <SplitTile name={space.name} desc={space.blurb}/>
  {/each}
</Grid>

<Modal show={createSpaceModal}>
  <CreateSpaceForm close={toggleCreateSpaceModal} bind:name bind:desc/>
</Modal>