import { supabase } from './client';

import { writable } from 'svelte/store';

export function makeRecordStore(table) {
  
  let store = writable({state: 'idle', data: null});
  
  async function createRecord(record) {
    store.update(s=>{return {...s, state: 'pending'}});
    const { data, error } = await supabase
      .from(table)
      .insert([record]);
    if ( !error ) {
        store.set({state: 'success', data: data[0]});
        return data[0];
    } else {
        store.set({state: 'error', data: error});
    };
  };
  
  async function readRecord(id) {
    store.update(s=>{return {...s, state: 'pending'}});
    const { data, error } = await supabase
      .from(table)
      .select()
      .match({id});
    if ( !error ) {
        store.set({state: 'success', data: data[0]});
        return data[0];
    } else {
        store.set({state: 'error', data: error});
    };
  };
 
  async function updateRecord(record) {
    store.update(s=>{return {...s, state: 'pending'}});
    const { data, error } = await supabase
      .from(table)
      .update(record)
      .match({id: record.id})
    if ( !error ) {
        store.set({state: 'success', data: data[0]});
        return data[0];
    } else {
        store.set({state: 'error', data: error});
    };
  };

  async function deleteRecord(record) {
    store.update(s=>{return {...s, state: 'pending'}});
    const { data, error } = await supabase
      .delete()
      .match({id: record.id})
    if ( !error ) {
        store.set({state: 'success', data: data[0]});
        return data[0];
    } else {
        store.set({state: 'error', data: error});
    };
  };

  return {
    subscribe: store.subscribe,
    create: createRecord,
    read: readRecord,
    update: updateRecord,
    delete: deleteRecord
  };
};


export function makeQueryStore(table, query, trigger="*") {

  let store = writable({state: 'idle', data: []}, ()=>{
    let sub = makeSub(fetch, trigger);
    return () => {supabase.removeSubscription(sub);}
  });
  let subscribe = store.subscribe

  function makeSub(callback, trigger='*') {
    const sub = supabase
      .from(table)
      .on(trigger, callback)
      .subscribe();
    return sub;
  };

  async function fetch() {
    store.update(s=>{return {...s, state: 'pending'}});
    const { data, error } = await supabase
      .from(table)
      .select()
      .or(query);
    if ( !error ) {
        store.set({state: 'success', data: data});
        return data;
    } else {
        store.set({state: 'error', data: error});
    };
  };

  fetch();
  
  return {
    subscribe,
    fetch
  };
}