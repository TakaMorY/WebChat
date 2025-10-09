export default defineEventHandler(async (event) => {
    console.log('🔧 Health check called')

    try {
        // Проверяем наличие переменных окружения
        const config = useRuntimeConfig()

        const envCheck = {
            supabaseUrl: !!config.supabaseUrl,
            supabaseKey: !!config.supabaseKey,
            publicSupabaseUrl: !!config.public.supabaseUrl,
            publicSupabaseKey: !!config.public.supabaseKey
        }

        console.log('📋 Environment check:', envCheck)

        // Если нет переменных окружения, возвращаем ошибку
        if (!config.supabaseUrl || !config.supabaseKey) {
            return {
                status: 'ERROR',
                message: 'Missing Supabase environment variables',
                envCheck,
                timestamp: new Date().toISOString()
            }
        }

        // Пытаемся импортировать Supabase
        let supabase;
        try {
            const supabaseModule = await import('~/server/utils/supabase.js')
            supabase = supabaseModule.supabase
            console.log('✅ Supabase module loaded')
        } catch (importError) {
            console.error('❌ Supabase import error:', importError)
            return {
                status: 'ERROR',
                message: 'Failed to import Supabase module',
                error: importError.message,
                envCheck,
                timestamp: new Date().toISOString()
            }
        }

        // Пытаемся выполнить простой запрос
        try {
            const { data, error } = await supabase
                .from('users')
                .select('id')
                .limit(1)

            if (error) {
                console.error('❌ Supabase query error:', error)
                return {
                    status: 'ERROR',
                    message: 'Supabase query failed',
                    error: error.message,
                    envCheck,
                    timestamp: new Date().toISOString()
                }
            }

            console.log('✅ Health check passed')
            return {
                status: 'OK',
                message: 'All systems operational',
                database: 'Connected',
                envCheck,
                timestamp: new Date().toISOString()
            }
        } catch (queryError) {
            console.error('❌ Supabase connection error:', queryError)
            return {
                status: 'ERROR',
                message: 'Supabase connection failed',
                error: queryError.message,
                envCheck,
                timestamp: new Date().toISOString()
            }
        }

    } catch (error) {
        console.error('💥 Health check fatal error:', error)
        return {
            status: 'ERROR',
            message: 'Health check failed completely',
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        }
    }
})