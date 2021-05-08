import { supabase } from './client.js';
import { makeConstructors } from './temp.js';
//import { makeConstructors } from 'supasvelte';

export const {
    makeSessionStore,
    makeRegistrationStore,
    makeRecordStore,
    makeQueryStore
} = makeConstructors(supabase, { log: 'verbose' });
