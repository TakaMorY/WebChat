import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')
        const body = await readBody(event)
        const { currentPassword, newPassword } = body

        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ID пользователя обязателен'
            })
        }

        if (!currentPassword || !newPassword) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Текущий и новый пароль обязательны'
            })
        }

        if (newPassword.length < 6) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Новый пароль должен содержать минимум 6 символов'
            })
        }

        // Получаем текущего пользователя
        const { data: user, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single()

        if (fetchError || !user) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Пользователь не найден'
            })
        }

        // Проверяем текущий пароль
        const currentHashedPassword = Buffer.from(currentPassword).toString('base64')
        if (user.password !== currentHashedPassword) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Неверный текущий пароль'
            })
        }

        // Хешируем новый пароль
        const newHashedPassword = Buffer.from(newPassword).toString('base64')

        // Обновляем пароль
        const { data: updatedUser, error: updateError } = await supabase
            .from('users')
            .update({ password: newHashedPassword })
            .eq('id', id)
            .select()
            .single()

        if (updateError) {
            throw createError({
                statusCode: 500,
                statusMessage: updateError.message
            })
        }

        return { success: true, message: 'Пароль успешно изменен' }

    } catch (error) {
        console.error('Change password error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Ошибка при смене пароля'
        })
    }
})