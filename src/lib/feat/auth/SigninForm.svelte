<script>
	import { session } from './stores.js';

	import { supabase } from '$lib/base/client.js';

	import { Form, TextField, PasswordField } from '$lib/ui/forms';
	import { Box } from '$lib/ui/blocks';
	import { BigButton } from '$lib/ui/buttons';
	import { Spinner } from '$lib/ui/widgets';

	import { callOnKeystroke } from '$lib/utils';

	let color = 'secondary';
	let email = '';
	let password = '';

	let signin = () => {
		session.signin(email, password);
	};
	let signinOnEnter = callOnKeystroke(signin);
</script>

{#if $session.state === 'signed-out'}
	<Form title="sign in to coflow" {color}>
		<TextField
			name="email:"
			placeholder="enter your email"
			bind:data={email}
			required="true"
			{color}
		/>
		<PasswordField
			name="password:"
			placeholder="enter your password"
			bind:data={password}
			required="true"
			{color}
			on:keyup={signinOnEnter}
		/>
		<BigButton action={signin} text="sign in" {color} />
	</Form>
{:else if $session.state === 'signed-in'}
	<Box title="sign in succesful" {color}>
		<p>{$session.data.user.email} signed in succesfully!</p>
	</Box>
{:else if $session.state === 'pending'}
	<Spinner {color} />
{:else if $session.state === 'error'}
	<Box title="sign in error" color="error">
		<p>{$session.data.message}</p>
	</Box>
{:else}
	<Box title="sign in error" color="error">
		<p>Session in a bad state: {$session.state}</p>
	</Box>
{/if}
