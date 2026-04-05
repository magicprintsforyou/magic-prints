import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration is missing. Check your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
}

// Default to empty strings for createClient if missing to avoid immediate constructor throw, 
// but the console error above will alert the developer.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
