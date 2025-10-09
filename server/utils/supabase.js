import { createClient } from '@supabase/supabase-js'

// Простая функция для получения Supabase клиента
export const useSupabase = () => {
    // Только на сервере
    if (process.server) {
        const config = useRuntimeConfig()

        console.log('🔧 Creating Supabase client in utility')
        console.log('URL exists:', !!config.supabaseUrl)
        console.log('KEY exists:', !!config.supabaseKey)

        if (!config.supabaseUrl || !config.supabaseKey) {
            throw new Error('Supabase environment variables are missing')
        }

        return createClient(config.supabaseUrl, config.supabaseKey, {
            auth: { persistSession: false }
        })
    }

    // На клиенте возвращаем null или обрабатываем иначе
    return null
}

// Экспортируем готовый инстанс (осторожно - может быть проблема с контекстом)
// export const supabase = useSupabase()