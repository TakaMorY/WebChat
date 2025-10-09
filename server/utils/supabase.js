import { createClient } from '@supabase/supabase-js'

export default function useSupabase() {
    const config = useRuntimeConfig()

    console.log('🔧 Initializing Supabase client...')
    console.log('📋 Config check:', {
        hasUrl: !!config.supabaseUrl,
        hasKey: !!config.supabaseKey,
        urlLength: config.supabaseUrl?.length,
        keyLength: config.supabaseKey?.length
    })

    // Проверяем наличие обязательных переменных
    if (!config.supabaseUrl || !config.supabaseKey) {
        console.error('❌ Missing Supabase environment variables')
        throw new Error('Supabase URL and Key are required')
    }

    const supabase = createClient(
        config.supabaseUrl,
        config.supabaseKey,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
                detectSessionInUrl: false
            }
        }
    )

    console.log('✅ Supabase client created')
    return supabase
}

// Экспортируем инстанс для использования в API routes
export const supabase = useSupabase()