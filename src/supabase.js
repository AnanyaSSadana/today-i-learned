import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaywwkainwubtvrcekra.supabase.co';
const supabaseKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVheXd3a2Fpbnd1YnR2cmNla3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5Mzc5OTMsImV4cCI6MjAxMTUxMzk5M30.DFSYeY2dvwjrPqhByBsjmXHJ45-937mO87Iw_y0ifjc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
