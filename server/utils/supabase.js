import { createClient } from '@supabase/supabase-js'

// Глобальный кэш клиента Supabase
let supabaseClient = null

export function createSupabaseClient() {
    if (supabaseClient) {
        return supabaseClient
    }

    const config = useRuntimeConfig()
    const supabaseUrl = config.supabaseUrl
    const supabaseKey = config.supabaseKey

    if (!supabaseUrl || !supabaseKey) {
        console.error('❌ Supabase: Missing environment variables')
        throw new Error('Missing Supabase environment variables')
    }

    console.log('🚀 Supabase: Creating optimized client for localhost')

    supabaseClient = createClient(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: false,      // Не сохраняем сессию
            autoRefreshToken: false,    // Не обновляем токен автоматически
            detectSessionInUrl: false   // Не проверяем URL на сессии
        },
        global: {
            headers: {
                'X-Client-Info': 'webchat-localhost'
            },
            // Оптимизация fetch для localhost
            fetch: (...args) => {
                return fetch(...args)
            }
        },
        db: {
            schema: 'public'
        }
    })

    return supabaseClient
}

// Экспортируем функцию вместо прямого экземпляра
export const supabase = createSupabaseClient()