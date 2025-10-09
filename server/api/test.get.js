export default defineEventHandler(async (event) => {
    console.log('🔧 Test endpoint called')

    return {
        status: 'OK',
        message: 'Basic API is working',
        timestamp: new Date().toISOString(),
        node_env: process.env.NODE_ENV,
        has_supabase_url: !!process.env.SUPABASE_URL,
        has_supabase_key: !!process.env.SUPABASE_KEY
    }
})