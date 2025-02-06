
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wygxkvwjpzdlklnmebeq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5Z3hrdndqcHpkbGtsbm1lYmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MzMyMTAsImV4cCI6MjA1NDMwOTIxMH0.iAxYVC6zr1L5RsknFGj24PtsW9NdQD4AmToQMY9WhLk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
