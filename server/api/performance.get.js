export default defineEventHandler(async (event) => {
    const startTime = Date.now();

    // Тест сервера
    const serverTime = Date.now() - startTime;

    // Тест Supabase
    const dbStart = Date.now();
    try {
        const { supabase } = await import('../../utils/supabase.js');
        const { data, error } = await supabase
            .from('users')
            .select('count', { count: 'exact', head: true });
        const dbTime = Date.now() - dbStart;

        return {
            serverResponse: `${serverTime}ms`,
            databaseResponse: `${dbTime}ms`,
            totalTime: `${Date.now() - startTime}ms`,
            status: 'healthy'
        };
    } catch (error) {
        return {
            serverResponse: `${serverTime}ms`,
            databaseResponse: 'error',
            error: error.message,
            totalTime: `${Date.now() - startTime}ms`,
            status: 'error'
        };
    }
});