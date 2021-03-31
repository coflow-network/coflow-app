<script>
  import { callOnKeystroke } from '$lib/kit/utils';
  
  import { Form, TextField, PasswordField } from '$lib/kit/forms';
  import { Box } from '$lib/kit/blocks';
  import { BigButton } from '$lib/kit/buttons';
  import { Spinner } from '$lib/kit/widgets';

  import { signupModel } from './state.js';

  let color = 'tertiary';
  let email = '';
  let password = '';

  const { 
    status: signupStatus, 
    context: signupContext, 
    send: signupSend 
  } = signupModel;

  let requestSignup = () => (
    signupSend({type: 'signupRequest', email, password})
  )

  let signupOnEnter = callOnKeystroke(requestSignup);
</script>

{#if $signupStatus === 'idle'}
  <Form title='sign up to coflow' {color}>
    <TextField 
      name="email:" placeholder="enter your email"
      bind:data={email} required=true {color}
    />
    <PasswordField
      name="password:" placeholder="enter your password"
      bind:data={password} required=true {color}
      on:keyup={signupOnEnter}
    />
    <BigButton
      action={requestSignup} text="sign up" {color}
    />
  </Form>
{:else if $signupStatus === 'signupSuccess'}
  <Box title='sign up successful' {color}>
    <p>Got it! Almost there... please check {$signupContext.user.email} for your account activation link.</p>
  </Box>
{:else if $signupStatus === 'signupFailure'}
  <Box title='sign up error' color="error">
    <p>{$signupContext.error.message}</p>
  </Box>
{:else}
  <Spinner {color}/>
{/if}