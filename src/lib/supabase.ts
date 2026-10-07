import { createClient } from '@supabase/supabase-js';

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Route all Supabase traffic through our own /api/sb proxy so browsers or
// networks that block *.supabase.co can still reach the database.
const supabaseUrl =
  typeof window !== 'undefined'
    ? `${window.location.origin}/api/sb`
    : process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase configuration is missing. Check your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
}

// Default to empty strings for createClient if missing to avoid immediate constructor throw, 
// but the console error above will alert the developer.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
