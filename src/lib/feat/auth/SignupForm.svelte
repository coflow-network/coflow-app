<script>
  import { registration } from './stores.js';

  import { Form, TextField, PasswordField } from '$lib/ui/forms';
  import { Box } from '$lib/ui/blocks';
  import { BigButton } from '$lib/ui/buttons';
  import { Spinner } from '$lib/ui/widgets';
  
  import { callOnKeystroke } from '$lib/utils';

  let color = 'tertiary';
  let email = '';
  let password = '';

  let signup = ()=>{registration.signup(email, password)}
  let signupOnEnter = callOnKeystroke(signup);
</script>

{#if $registration.state === 'idle'}
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
      action={signup} text="sign up" {color}
    />
  </Form>
{:else if $registration.state === 'success'}
  <Box title='sign up succesful' {color}>
    <p>Almost there! Check {$registration.data.email} and click the confirmation link we sent you...</p>
  </Box>
{:else if $registration.state === 'pending'}
  <Spinner {color}/>
{:else if $registration.state === 'error'}
  <Box title='sign up error' color="error">
    <p>{$registration.data.message}</p>
  </Box>
{:else}
  <Box title='sign up error' color="error">
    <p>Registration in a bad state: {$registration.state}</p>
  </Box>
{/if}