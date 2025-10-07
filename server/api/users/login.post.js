import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body

    // Проверка обязательных полей
    if (!email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email и пароль обязательны'
      })
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Некорректный формат email'
      })
    }

    // Хешируем пароль для сравнения
    const hashedPassword = Buffer.from(password).toString('base64')

    // Ищем пользователя в Supabase
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error) {
      if (error.code === 'PGRST116') { // Not found
        throw createError({
          statusCode: 401,
          statusMessage: 'Неверный email или пароль'
        })
      }
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      })
    }

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    // Проверяем пароль
    if (user.password !== hashedPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    // Не возвращаем пароль
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword

  } catch (error) {
    console.error('Login error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Ошибка при входе'
    })
  }
})