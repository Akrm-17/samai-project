
export const supabaseUrl = 'https://iuadrfljlspngmplaeyf.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YWRyZmxqbHNwbmdtcGxhZXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NjAyNTgsImV4cCI6MjA3MzQzNjI1OH0.uRSbrIMpzkQQCuwqU4zk6Tb6vXgfehkVT34PBFQtlYU'; // ضع هنا المفتاح الكامل
   const { createClient } = supabase;
export const supabaseClient = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabaseClient
    .from('schools') // ضع هنا اسم الجدول
    .select('*');

if (error) {
    console.error('Error fetching products:', error);
}
else{
    console.log(data)
}




