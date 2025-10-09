export default defineEventHandler(async (event) => {
    try {
        const { supabase } = await import('~/server/utils/supabase')

        // Простой запрос для проверки подключения
        const { data, error } = await supabase
            .from('users')
            .select('count')
            .limit(1)

        if (error) {
            throw createError({
                statusCode: 500,
                statusMessage: `Database error: ${error.message}`
            })
        }

        return {
            status: 'OK',
            timestamp: new Date().toISOString(),
            database: 'Connected'
        }
    } catch (error) {
        console.error('Health check failed:', error)
        throw createError({
            statusCode: 500,
            statusMessage: `Health check failed: ${error.message}`
        })
    }
})