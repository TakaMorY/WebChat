import { createClient } from '@supabase/supabase-js'

export default function useSupabase() {
    const config = useRuntimeConfig()

    // Валидация конфигурации
    if (!config.supabaseUrl || !config.supabaseKey) {
        throw new Error(
            'Supabase configuration is missing. ' +
            'Please check your environment variables: SUPABASE_URL and SUPABASE_KEY'
        )
    }

    // Создаем клиент с оптимальными настройками
    const supabase = createClient(config.supabaseUrl, config.supabaseKey, {
        auth: {
            autoRefreshToken: true,
            persistSession: false,
            detectSessionInUrl: false,
            flowType: 'pkce'
        },
        global: {
            headers: {
                'X-Client-Info': 'nuxt-chat-app'
            }
        }
    })

    return supabase
}

// Экспортируем инстанс для API routes
export const supabase = useSupabase()