export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    return {
        supabaseUrl: config.supabaseUrl ? '✅ Set' : '❌ Missing',
        supabaseKey: config.supabaseKey ? '✅ Set' : '❌ Missing',
        timestamp: new Date().toISOString()
    }
})