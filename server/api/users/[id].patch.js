import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')
        const body = await readBody(event)

        if (!id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ID пользователя обязателен'
            })
        }

        // Обновляем только разрешенные поля
        const allowedFields = ['name', 'secondname', 'avatar_url']
        const updateData = {}

        allowedFields.forEach(field => {
            if (body[field] !== undefined) {
                updateData[field] = body[field]
            }
        })

        // Если нет полей для обновления
        if (Object.keys(updateData).length === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Нет данных для обновления'
            })
        }

        const { data: user, error } = await supabase
            .from('users')
            .update(updateData)
            .eq('id', id)
            .select()
            .single()

        if (error) {
            throw createError({
                statusCode: 500,
                statusMessage: error.message
            })
        }

        if (!user) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Пользователь не найден'
            })
        }

        // Не возвращаем пароль
        const { password: _, ...userWithoutPassword } = user
        return userWithoutPassword

    } catch (error) {
        console.error('Update user error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Ошибка при обновлении пользователя'
        })
    }
})