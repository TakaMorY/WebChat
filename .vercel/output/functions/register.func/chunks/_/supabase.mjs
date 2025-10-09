import { a as useRuntimeConfig } from './nitro.mjs';
import { createClient } from '@supabase/supabase-js';

let supabaseClient = null;
function createSupabaseClient() {
  if (supabaseClient) {
    return supabaseClient;
  }
  const config = useRuntimeConfig();
  const supabaseUrl = config.supabaseUrl;
  const supabaseKey = config.supabaseKey;
  if (!supabaseUrl || !supabaseKey) {
    console.error("\u274C Supabase: Missing environment variables");
    throw new Error("Missing Supabase environment variables");
  }
  console.log("\u{1F680} Supabase: Creating optimized client for localhost");
  supabaseClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      // Не сохраняем сессию
      autoRefreshToken: false,
      // Не обновляем токен автоматически
      detectSessionInUrl: false
      // Не проверяем URL на сессии
    },
    global: {
      headers: {
        "X-Client-Info": "webchat-localhost"
      },
      // Оптимизация fetch для localhost
      fetch: (...args) => {
        return fetch(...args);
      }
    },
    db: {
      schema: "public"
    }
  });
  return supabaseClient;
}
const supabase = createSupabaseClient();

export { supabase as s };
//# sourceMappingURL=supabase.mjs.map
