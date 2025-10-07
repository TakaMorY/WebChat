import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')

        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ID пользователя обязателен'
            })
        }

        // Удаляем пользователя
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', id)

        if (error) {
            throw createError({
                statusCode: 500,
                statusMessage: error.message
            })
        }

        return { success: true, message: 'Пользователь успешно удален' }

    } catch (error) {
        console.error('Delete user error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Ошибка при удалении пользователя'
        })
    }
})