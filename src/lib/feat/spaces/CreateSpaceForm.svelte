<script>
  import { afterUpdate } from 'svelte';

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
  export let close;

  let requestCreateSpace = () => {
    createSpace.request({name, blurb, parent})
  };
  let createOnEnter = callOnKeystroke(createSpace.request);

  let closeAndReset = () => {
    createSpace.reset();
    close();
  }

  const createSpaceStatus = createSpace.status;
  const createSpaceContext = createSpace.context;
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
    <BigButton action={requestCreateSpace} text="Create space" {color}/>
  </Form>
{:else if $createSpaceStatus === 'active'}
  <Spinner {color}/>
{:else if $createSpaceStatus === 'success'}
  <Box title="{name} space created!" {color}>
    <p>Your space has been succesfully created!</p>
    <BigButton action={closeAndReset} text="Go back" {color}/>
  </Box>
{:else if $createSpaceStatus === 'failure'}
  <Box title='Space creation error' color="error">
    <p>{$createSpaceContext.error.message}</p>
    <BigButton action={closeAndReset} text="Go back" {color}/>
  </Box>
{/if}