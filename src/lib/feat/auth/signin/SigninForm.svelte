<script>
  import { callOnKeystroke } from '$lib/kit/utils';
  
  import { Form, TextField, PasswordField } from '$lib/kit/forms';
  import { Box } from '$lib/kit/blocks';
  import { BigButton } from '$lib/kit/buttons';
  import { Spinner } from '$lib/kit/widgets';

  import { signinModel } from './api.js';
  
  let color = 'secondary';
  let email = '';
  let password = '';

  const { 
    status: signinStatus, 
    context: signinContext, 
    send: signinSend 
  } = signinModel;

  let requestSignin = () => (
    signinSend({type: 'signinRequest', email, password})
  )

  let signinOnEnter = callOnKeystroke(requestSignin);
</script>

{#if $signinStatus === 'signedOut'}
  <Form title='sign in to coflow' {color}>
    <TextField
      name="email:" placeholder="enter your email"
      bind:data={email} required=true {color}
    />
    <PasswordField
      name="password:" placeholder="enter your password"
      bind:data={password} required=true {color} 
      on:keyup={signinOnEnter}
    />
    <BigButton
      action={requestSignin} text="sign in" {color}
    />
  </Form>
{:else if $signinStatus === 'signedIn'}
  <Box title='sign in succesful' {color}>
    <p>{$signinContext.user.email} signed in succesfully!</p>
  </Box>
{:else if $signinStatus === 'signinFailure'}
  <Box title='sign in error' color="error">
    <p>{$signinContext.error.message}</p>
  </Box>
{:else if $signinStatus === 'signoutFailure'}
  <Box title='sign out error' color="error">
    <p>{$signinContext.error.message}</p>
  </Box>
{:else}
  <Spinner {color}/>
{/if}