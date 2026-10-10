const { createClient } = require('@supabase/supabase-js');

// These connect to the .env file we set up earlier
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);