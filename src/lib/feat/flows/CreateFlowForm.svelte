<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	import { makeRecordStore } from '$lib/base';
	import { callOnKeystroke } from '$lib/utils';
	import { Form, TextField } from '$lib/ui/forms';
	import { BigButton } from '$lib/ui/buttons';
	import { Spinner } from '$lib/ui/widgets';

	export let color = 'secondary';
	export let name = '';
	export let blurb = '';
	export let parent = 1;

	let flow = makeRecordStore('flows');

	let back = () => {
		goto(`/space/${parent}`);
	};
	let redirectTo = (newFlow) => {
		return () => {
			goto(`/flow/${newFlow.id}`);
		};
	};
	let submit = () => {
		flow.create({ name, blurb, parent });
	};
	let createOnEnter = callOnKeystroke(submit);
</script>

{#if $flow.state === 'idle'}
	<Form title="create new flow" {color}>
		<TextField
			name="Name:"
			placeholder="enter the name of your flow"
			bind:data={name}
			on:keyup={createOnEnter}
			required="true"
			{color}
		/>
		<TextField
			name="Description:"
			placeholder="describe the purpose of your flow"
			bind:data={blurb}
			on:keyup={createOnEnter}
			{color}
		/>
		<div class="block mt-8 flex flow-x-4 space-x-4">
			<BigButton action={back} text="go back" {color} />
			<BigButton action={submit} text="create flow" {color} />
		</div>
	</Form>
{:else if $flow.state === 'pending'}
	<Spinner {color} />
{:else if $flow.state === 'success'}
	<Spinner {color} action={redirectTo($flow.data)} />
{:else if $flow.state === 'error'}
	<Box title="Error" color="error">
		<p>{error.message}</p>
		<BigButton action={back} text="go back" {color} />
	</Box>
{/if}
