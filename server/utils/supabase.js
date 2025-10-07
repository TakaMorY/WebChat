import { createClient } from '@supabase/supabase-js'

let supabaseInstance = null;

export function getSupabase() {
    if (!supabaseInstance) {
        const config = useRuntimeConfig();

        if (!config.supabaseUrl || !config.supabaseKey) {
            throw new Error('Missing Supabase environment variables');
        }

        supabaseInstance = createClient(
            config.supabaseUrl,
            config.supabaseKey,
            {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false
                },
                global: {
                    headers: {
                        'X-Client-Info': 'nuxt-webchat'
                    }
                },
                db: {
                    schema: 'public'
                }
            }
        );
    }

    return supabaseInstance;
}

export const supabase = getSupabase();