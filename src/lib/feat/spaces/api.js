import { supabase } from '$lib/core';

import { makeInterface, makeSub } from '$lib/kit/api';

export const makeSpacesSub = (callback, trigger='*') => {
  const sub = makeSub('spaces', callback, trigger);
  return sub;
};

export const getSpace = makeInterface(async (context, event) => {
  const { data, error } = await supabase
    .from('spaces').select()
    .filter('id', 'eq', event.id);
  if ( !error ) { return data[0]; } else { throw error; }
})

export const fetchSpaces = makeInterface(async (context, event) => {
  var {data, error} = {};
  if ( event.parent === null ) {
    var { data, error } = await supabase
      .from('spaces').select()
      .is('parent', event.parent);
  } else {
    var { data, error } = await supabase
      .from('spaces').select()
      .filter('parent', 'eq', event.parent);
  };
  if ( !error ) { return data; } else { throw error; }
});

export const createSpace = makeInterface(async (context, event) => {
   console.log('requesting with ', JSON.stringify(event))
  const { data, error } = await supabase
    .from('spaces')
    .insert([{
      name: event.name, 
      blurb: event.blurb,
      parent: event.parent
    }]);
  if ( !error ) { return data; } else { throw error; }
});