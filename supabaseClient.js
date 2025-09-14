import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const SUPABASE_URL = 'https://iuadrfljlspngmplaeyf.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YWRyZmxqbHNwbmdtcGxhZXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NjAyNTgsImV4cCI6MjA3MzQzNjI1OH0.uRSbrIMpzkQQCuwqU4zk6Tb6vXgfehkVT34PBFQtlYU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


