<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	import { makeRecordStore } from '$lib/base';
	import { callOnKeystroke } from '$lib/utils';
	import { Form, TextField } from '$lib/ui/forms';
	import { BigButton } from '$lib/ui/buttons';
	import { Spinner } from '$lib/ui/widgets';

	export let color = 'primary';
	export let name = '';
	export let blurb = '';
	export let parent = 1;

	let space = makeRecordStore('spaces');

	let back = () => {
		goto(`/space/${parent}`);
	};
	let redirectTo = (newSpace) => {
		return () => {
			goto(`/space/${newSpace.id}`);
		};
	};
	let submit = () => {
		space.create({ name, blurb, parent });
	};
	let createOnEnter = callOnKeystroke(submit);
</script>

{#if $space.state === 'idle'}
	<Form title="create new space" {color}>
		<TextField
			name="Name:"
			placeholder="enter the name of your space"
			bind:data={name}
			on:keyup={createOnEnter}
			required="true"
			{color}
		/>
		<TextField
			name="Description:"
			placeholder="describe the purpose of your space"
			bind:data={blurb}
			on:keyup={createOnEnter}
			{color}
		/>
		<div class="block mt-8 flex space-x-4">
			<BigButton action={back} text="go back" {color} />
			<BigButton action={submit} text="create space" {color} />
		</div>
	</Form>
{:else if $space.state === 'pending'}
	<Spinner {color} />
{:else if $space.state === 'success'}
	<Spinner {color} action={redirectTo($space.data)} />
{:else if $space.state === 'error'}
	<Box title="Error" color="error">
		<p>{error.message}</p>
		<BigButton action={back} text="go back" {color} />
	</Box>
{/if}
