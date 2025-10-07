import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  // Устанавливаем заголовки кэширования
  setHeader(event, 'Cache-Control', 'no-cache')

  try {
    const body = await readBody(event)
    const { email, password } = body

    // Быстрая валидация
    if (!email?.includes('@') || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Неверные данные'
      })
    }

    const hashedPassword = Buffer.from(password).toString('base64')

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !user || user.password !== hashedPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword

  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.data?.statusMessage || 'Ошибка сервера'
    })
  }
})