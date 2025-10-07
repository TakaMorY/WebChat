import { supabase } from '~/server/utils/supabase'

// Простой кэш для тестовых запросов
let cache = null
let cacheTimestamp = 0
const CACHE_TTL = 30000 // 30 секунд

export default defineEventHandler(async (event) => {
    // Возвращаем кэшированный результат если он свежий
    if (cache && Date.now() - cacheTimestamp < CACHE_TTL) {
        return { ...cache, cached: true }
    }

    const startTime = Date.now()

    try {
        // ОЧЕНЬ простой запрос - только проверка подключения
        const { data, error, count } = await supabase
            .from('users')
            .select('id', { count: 'exact', head: true })
            .limit(1)

        const responseTime = Date.now() - startTime

        const result = {
            connected: !error,
            responseTime: `${responseTime}ms`,
            data: data || [],
            count: count || 0,
            error: error?.message
        }

        // Кэшируем результат
        cache = result
        cacheTimestamp = Date.now()

        return result
    } catch (error) {
        return {
            connected: false,
            responseTime: `${Date.now() - startTime}ms`,
            error: error.message
        }
    }
})