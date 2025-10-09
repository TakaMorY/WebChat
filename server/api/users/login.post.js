import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  console.log('🔑 Login API called')

  try {
    const body = await readBody(event)
    const { email, password } = body

    console.log('📧 Login attempt for:', email)

    // Валидация входных данных
    if (!email || !password) {
      console.log('❌ Missing credentials')
      throw createError({
        statusCode: 400,
        statusMessage: 'Email и пароль обязательны'
      })
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format')
      throw createError({
        statusCode: 400,
        statusMessage: 'Некорректный формат email'
      })
    }

    // Проверка длины пароля
    if (password.length < 6) {
      console.log('❌ Password too short')
      throw createError({
        statusCode: 400,
        statusMessage: 'Пароль должен содержать минимум 6 символов'
      })
    }

    // Ищем пользователя в базе
    console.log('🔍 Searching user in database...')
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .single()

    if (userError) {
      console.log('❌ Database error:', userError)

      if (userError.code === 'PGRST116') {
        throw createError({
          statusCode: 401,
          statusMessage: 'Пользователь с таким email не найден'
        })
      }

      throw createError({
        statusCode: 500,
        statusMessage: 'Ошибка базы данных'
      })
    }

    if (!user) {
      console.log('❌ User not found')
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    console.log('✅ User found:', user.email)

    // Проверяем пароль (используем тот же алгоритм хеширования, что и при регистрации)
    const hashedPassword = Buffer.from(password).toString('base64')
    console.log('🔑 Password verification:', {
      stored: user.password?.substring(0, 10) + '...',
      provided: hashedPassword.substring(0, 10) + '...'
    })

    if (user.password !== hashedPassword) {
      console.log('❌ Password mismatch')
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    // Обновляем время последнего входа
    const { error: updateError } = await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id)

    if (updateError) {
      console.log('⚠️ Failed to update last login:', updateError)
      // Не прерываем вход из-за этой ошибки
    }

    // Подготавливаем ответ (убираем пароль)
    const { password: _, ...userWithoutPassword } = user

    console.log('✅ Login successful for:', user.email)

    return {
      success: true,
      user: userWithoutPassword,
      message: 'Вход выполнен успешно'
    }

  } catch (error) {
    console.error('💥 Login process failed:', error)

    // Если это уже наша кастомная ошибка, пробрасываем как есть
    if (error.statusCode) {
      throw error
    }

    // Для непредвиденных ошибок
    throw createError({
      statusCode: 500,
      statusMessage: 'Внутренняя ошибка сервера. Попробуйте позже.'
    })
  }
})