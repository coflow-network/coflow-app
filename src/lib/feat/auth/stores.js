import { makeSessionStore, makeRegistrationStore } from '$lib/base';

export let session = makeSessionStore();
export let registration = makeRegistrationStore();
