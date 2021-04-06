import { getSpace } from '$lib/feat/spaces/api';

export async function get({params, context}) {
	const { id } = params;

	let getSpaceQuery = getSpace.query;
	let space = await getSpaceQuery({},{id});

	console.log('Fetched space: ', JSON.stringify(space))

	return {
		body: space
	}
}

export async function put(request) {
	console.log('put', request);
}