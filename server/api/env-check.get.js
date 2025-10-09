export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    // Безопасная проверка - не показываем полные ключи
    return {
        hasSupabaseUrl: !!config.supabaseUrl,
        hasSupabaseKey: !!config.supabaseKey,
        supabaseUrlLength: config.supabaseUrl?.length || 0,
        supabaseKeyLength: config.supabaseKey?.length || 0,
        supabaseUrlPrefix: config.supabaseUrl ? config.supabaseUrl.substring(0, 25) + '...' : 'missing',
        supabaseKeyPrefix: config.supabaseKey ? config.supabaseKey.substring(0, 10) + '...' : 'missing',
        nodeEnv: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    }
})