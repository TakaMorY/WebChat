export default defineEventHandler(async (event) => {
    const startTime = Date.now()

    // Проверяем базовое здоровье приложения
    const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        responseTime: 0
    }

    health.responseTime = Date.now() - startTime
    return health
})