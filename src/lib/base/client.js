import { createClient } from '@supabase/supabase-js';

export let env = import.meta.env;

export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_KEY);

console.log('Supabase client: initialized');
