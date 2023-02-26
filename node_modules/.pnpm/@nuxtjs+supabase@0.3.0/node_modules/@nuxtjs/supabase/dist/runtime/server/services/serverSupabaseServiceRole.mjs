import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#imports";
export const serverSupabaseServiceRole = (event) => {
  const { supabase: { serviceKey }, public: { supabase: { url, client: clientOptions } } } = useRuntimeConfig();
  if (!serviceKey) {
    throw new Error("Missing `SUPABASE_SERVICE_KEY` in `.env`");
  }
  if (!event.context._supabaseServiceRole) {
    const supabaseClient = createClient(url, serviceKey, clientOptions);
    event.context._supabaseServiceRole = supabaseClient;
  }
  return event.context._supabaseServiceRole;
};
