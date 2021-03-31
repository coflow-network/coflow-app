<script>
  import { signinModel } from '$lib/feat/auth';
  import { SmallButton } from '$lib/kit/buttons';

  const { 
    status: signinStatus, 
    context: signinContext, 
    send: signinSend 
  } = signinModel;

  let requestSignout = ()=>(signinSend('signoutRequest'));
</script>

<style>
  ul { @apply block px-2 flex justify-between items-center; }
  li { @apply block float-right; }
</style>

{#if $signinStatus === ('signedOut' || 'signinFailure')}
<ul>
	<li>
	  <SmallButton 
		text='sign up'
	    color='tertiary' 
		action={()=>(window.location.href='signup')} 
		/>
	</li>
	<li>
	  <SmallButton 
		text='sign in'
	    color='secondary' 
		action={()=>(window.location.href='signin')} 
		/>
	</li>
</ul>
{:else if $signinStatus === ('signedIn' || 'signoutFailure')}
<ul>
	<li>{$signinContext.user.email}</li>
	<li>
	  <SmallButton 
		text='sign out'
	    color='warning' 
		action={requestSignout} 
		/>
	</li>
</ul>
{:else}
<p>{$signinStatus}</p>
{/if}