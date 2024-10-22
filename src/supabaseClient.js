import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_URL_SUPABASE;
const supabaseKEY = import.meta.env.VITE_KEY_PUBLIC_SUPABASE;

export const supabase = createClient(supabaseURL, supabaseKEY);
