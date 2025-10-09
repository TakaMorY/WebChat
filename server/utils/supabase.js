import { createClient } from '@supabase/supabase-js'

// Функция для получения supabase клиента
export const useSupabase = () => {
    const config = useRuntimeConfig()

    // Простая проверка - если нет переменных, вернем null
    if (!config.supabaseUrl || !config.supabaseKey) {
        console.error('Missing Supabase environment variables')
        return null
    }

    try {
        return createClient(config.supabaseUrl, config.supabaseKey)
    } catch (error) {
        console.error('Error creating Supabase client:', error)
        return null
    }
}

// Создаем инстанс для API routes
export const supabase = useSupabase()