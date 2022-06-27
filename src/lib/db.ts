import { skHelper } from '@supabase/auth-helpers-sveltekit';

const { supabaseClient: _supabaseClient } = skHelper(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

const supabaseClient = _supabaseClient!!

export { supabaseClient };
