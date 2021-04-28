import { supabase } from './client.js';

import { writable, get } from 'svelte/store';

export const makeSessionStore = () => {
	console.log('Session store: initialized');

	const probeState = () => {
		let state, data, error;
		try {
			data = supabase.auth.session();
		} catch (e) {
			data = error = e;
		}
		state = error ? 'error' : data ? 'signed-in' : 'signed-out';
		return { state, data };
	};

	let store = writable(probeState());
	let subscribe = store.subscribe;

	supabase.auth.onAuthStateChange((event, session) => {
		console.log(`Session store: detected ${event} event`);
		store.set(probeState());
	});

	const signin = async (email, password) => {
		console.log(`Session store: signin for ${email} triggered`);
		store.set({ state: 'pending', data: null });
		let { user, error } = await supabase.auth.signIn({ email, password });
		if (error) {
			store.set({ state: 'error', data: error });
			console.error(error);
		}
	};

	const signout = async () => {
		console.log(`Session store: signout for ${get(store).data.user.email} triggered`);
		store.set({ state: 'pending', data: null });
		const { error } = await supabase.auth.signOut();
		if (error) {
			store.set({ state: 'error', data: error });
			console.error(error);
		}
	};

	const reset = () => {
		store.set({ state: 'signed-out', data: null });
	};

	return {
		subscribe,
		signin,
		signout,
		reset
	};
};

export const makeRegistrationStore = () => {
	console.log('Registration store: initialized');

	let store = writable({ state: 'idle', data: null });
	let subscribe = store.subscribe;

	const signup = async (email, password) => {
		store.set({ state: 'pending', data: null });
		let { user, error } = await supabase.auth.signUp({ email, password });
		if (!error) {
			store.set({ state: 'success', data: user });
		} else {
			store.set({ state: 'error', data: error });
		}
	};

	const reset = () => {
		store.set({ state: 'idle', data: null });
	};

	return {
		subscribe,
		signup,
		reset
	};
};
