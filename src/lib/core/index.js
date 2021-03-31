import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '$lib/secrets/supabase';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);