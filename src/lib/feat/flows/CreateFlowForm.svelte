<script>
  import { afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';

  import { callOnKeystroke, wait } from '$lib/kit/utils';

  import { Form, TextField } from '$lib/kit/forms';
  import { Box } from '$lib/kit/blocks';
  import { BigButton } from '$lib/kit/buttons';
  import { Spinner } from '$lib/kit/widgets';

  import { createFlow, makeFlowsSub } from './api.js';

  export let color = 'secondary';
  export let name = '';
  export let blurb = '';
  export let space = null;

  let requestCreateFlow = () => {
    createFlow.request({name, blurb, space})
  };

  const createFlowStatus = createFlow.status;
  const createFlowContext = createFlow.context;

  let createOnEnter = callOnKeystroke(createFlow.request);

  let gotoHome = () => {
    createFlow.reset();
    goto('/');
  };

  let gotoFlow = () => {
    createFlow.reset();
    goto(`/flow/${$createFlowContext.data.id}`)
  }
</script>

{#if $createFlowStatus === 'idle'}
  <Form title='Create a new flow' {color}>
    <TextField
      name="Name:" placeholder="enter the name of your flow"
      bind:data={name} on:keyup={createOnEnter} required=true {color}
    />
    <TextField
      name="Description:" placeholder="describe the purpose of your flow"
      bind:data={blurb} on:keyup={createOnEnter} {color}
    />
    <div class="block mt-8 flex space-x-4">
      <BigButton action={gotoHome} text="cancel" {color}/>
      <BigButton action={requestCreateFlow} text="create" {color}/>
    </div>
  </Form>
{:else if $createFlowStatus === 'active'}
  <Spinner {color}/>
{:else if $createFlowStatus === 'success'}
  <Spinner {color}/>
  <div style="display: none;">{gotoFlow}</div>
{:else if $createFlowStatus === 'failure'}
  <Box title='Flow creation error' color="error">
    <p>{$createFlowContext.error.message}</p>
    <BigButton action={gotoHome} text="go back" {color}/>
  </Box>
{/if}