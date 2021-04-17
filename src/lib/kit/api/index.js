import { supabase } from '$lib/core';

import { dropKey } from '$lib/kit/utils';

import { invoke, state, reduce, transition, 
  createMachine, interpret } from 'robot3';
import { writable } from 'svelte/store';

export const wrapMachine = (machine, initialContext=null) => {
	const {set: setStatus, ...status} = writable(machine.current);
	const {set: setContext, ...context} = writable(machine.context());

	const { send } = interpret(machine, service => { 
		setStatus(service.machine.current);
		setContext(service.context);
	}, initialContext);

	return { status, context, send };
};

export const makeInterface = (name, query) => {

  const interfaceName = `${name}Interface`;
  const initialContext = { data: []};

  const queryMachine = createMachine({
    idle: state(
      transition('query', 'active')
    ),
    active: invoke(query,
      transition('done', 'success',
        reduce((context, event) => ({
          ...context, data: event.data
        }))
      ),
      transition('error', 'failure',
        reduce((context, event) => ({
          ...context, error: event.error
        }))
      ),
    ),
    success: state(
      transition('query', 'active'),
      transition('reset', 'idle',
        reduce((context, event) => ({
          ...dropKey(context, 'data')
        }))
      )
    ),
    failure: state(
      transition('query', 'active'),
      transition('reset', 'idle',
        reduce((context, event) => ({
          ...dropKey(context, 'error')
        }))
      )
    ),
  }, () => initialContext);
  
  const { status, context, send } = wrapMachine(queryMachine, initialContext);

  const request = async (params) => send({type: 'query', ...params});
  const reset = async () => {send('reset');}

  return { 
    status: status, 
    context: context, 
    request: request, 
    reset: reset,
    query: query 
  };
}

export const makeSub = (table, callback, trigger='*') => {

  const sub = supabase
    .from(table)
    .on(trigger, callback)
    .subscribe();

  return sub;
};