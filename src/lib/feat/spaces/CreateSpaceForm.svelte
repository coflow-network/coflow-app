<script>
  import { afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';

  import { callOnKeystroke, wait } from '$lib/kit/utils';

  import { Form, TextField } from '$lib/kit/forms';
  import { Box } from '$lib/kit/blocks';
  import { BigButton } from '$lib/kit/buttons';
  import { Spinner } from '$lib/kit/widgets';

  import { createSpace, makeSpacesSub } from './api.js';

  export let color = 'primary';
  export let name = '';
  export let blurb = '';
  export let parent = null;

  let requestCreateSpace = () => {
    createSpace.request({name, blurb, parent})
  };

  const createSpaceStatus = createSpace.status;
  const createSpaceContext = createSpace.context;

  let createOnEnter = callOnKeystroke(createSpace.request);

  let gotoHome = () => {
    createSpace.reset();
    goto('/');
  };

  let gotoSpace = () => {
    createSpace.reset();
    goto(`/space/${$createSpaceContext.data.id}`)
  }
</script>

{#if $createSpaceStatus === 'idle'}
  <Form title='Create a new space' {color}>
    <TextField
      name="Name:" placeholder="enter the name of your space"
      bind:data={name} on:keyup={createOnEnter} required=true {color}
    />
    <TextField
      name="Description:" placeholder="describe the purpose of your space"
      bind:data={blurb} on:keyup={createOnEnter} {color}
    />
    <div class="block mt-8 flex space-x-4">
      <BigButton action={gotoHome} text="cancel" {color}/>
      <BigButton action={requestCreateSpace} text="create" {color}/>
    </div>
  </Form>
{:else if $createSpaceStatus === 'active'}
  <Spinner {color}/>
{:else if $createSpaceStatus === 'success'}
  <Spinner {color}/>
  <div style="display: none;">{gotoSpace}</div>
{:else if $createSpaceStatus === 'failure'}
  <Box title='Space creation error' color="error">
    <p>{$createSpaceContext.error.message}</p>
    <BigButton action={gotoHome} text="go back" {color}/>
  </Box>
{/if}