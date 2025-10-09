export default defineEventHandler(async (event) => {
    console.log('🔧 Health check called - SIMPLE VERSION')

    try {
        // Простейшая проверка - без Supabase
        return {
            status: 'OK',
            message: 'Basic server is working',
            timestamp: new Date().toISOString(),
            node_env: process.env.NODE_ENV
        }
    } catch (error) {
        console.error('💥 Simple health check failed:', error)
        return {
            status: 'ERROR',
            message: 'Simple check failed',
            error: error.message,
            timestamp: new Date().toISOString()
        }
    }
})