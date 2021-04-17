import { supabase } from '$lib/core';

import { makeInterface, makeSub } from '$lib/kit/api';

export const makeFlowsSub = (callback, trigger='*') => {
  const sub = makeSub('flows', callback, trigger);
  return sub;
};

export const getFlow = makeInterface('getFlow',
  async (context, event) => {
    const { data, error } = await supabase
      .from('flows').select()
      .filter('id', 'eq', event.id);
    if ( !error ) { return data[0]; } else { throw error; }
  }
);

export const fetchFlows = makeInterface('fetchFlows',
  async (context, event) => {
    var {data, error} = {};
    if ( event.space === null ) {
      var { data, error } = await supabase
        .from('flows').select()
        .is('space', event.space);
    } else {
      var { data, error } = await supabase
        .from('flows').select()
        .filter('space', 'eq', event.space);
    };
    if ( !error ) { return data; } else { throw error; }
  }
);

export const createFlow = makeInterface('createFlow', 
  async (context, event) => {
    console.log('Creating flow: ', event)
    const { data, error } = await supabase
      .from('flows')
      .insert([{
        name: event.name, 
        blurb: event.blurb,
        space: event.space
      }]);
    if ( !error ) { return data[0]; } else { throw error; }
  }
);