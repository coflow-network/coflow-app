import { getFlow } from '$lib/feat/flows/api';

export async function get({params, context}) {
	const { id } = params;

	let getFlowQuery = getFlow.query;
	let flow = await getFlowQuery({},{id});

	console.log('Fetched flow: ', JSON.stringify(flow))

	return {
		body: flow
	}
}

export async function put(request) {
	console.log('put', request);
}