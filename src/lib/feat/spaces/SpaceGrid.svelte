<script>
  import { onMount, afterUpdate, tick } from 'svelte';

  import { fetchSpaces, makeSpacesSub } from './api.js'

  import { Modal } from '$lib/kit/forms';
  import { Grid } from '$lib/kit/blocks';
  import { SmallButton } from '$lib/kit/buttons'
 
  import CreateSpaceTile from './CreateSpaceTile.svelte'
  import SpaceTile from './SpaceTile.svelte'
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
    <SpaceTile {space}/>
  {/each}
</Grid>

<Modal show={createSpaceModal}>
  <CreateSpaceForm close={toggleCreateSpaceModal} bind:name bind:desc/>
</Modal>