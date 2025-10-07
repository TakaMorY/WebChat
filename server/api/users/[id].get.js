// БЫЛО: import { supabase } from '../../../utils/supabase'
// СТАЛО:
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

    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, secondname, created_at')
      .eq('id', id)
      .single()

    if (error || !user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Пользователь не найден'
      })
    }

    return user

  } catch (error) {
    console.error('Get user error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Ошибка при получении пользователя'
    })
  }
})