<script>
  import { session } from '$lib/feat/auth';

  import { SmallButton } from '$lib/ui/buttons';
</script>

<style>
  ul { @apply block px-2 flex justify-between items-center; }
  li { @apply block float-right; }
</style>

{#if $session.state === ('signed-out' || 'error')}
<ul>
	<li>
	  <SmallButton 
		text='sign up'
	    color='tertiary' 
		url='/signup' 
		/>
	</li>
	<li>
	  <SmallButton 
		text='sign in'
	    color='secondary' 
		url='/signin' 
		/>
	</li>
</ul>
{:else if $session.state === ('signed-in')}
<ul>
	<li><span class="text-neutral-3">{$session.data.user.email}</span></li>
	<li>
	  <SmallButton 
		text='sign out'
	    color='warning' 
		action={()=>{session.signout()}} 
		/>
	</li>
</ul>
{:else}
<p>{$session.state}</p>
{/if}