import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  console.log('🔑 Login API called')

  try {
    const body = await readBody(event)
    const { email, password } = body

    console.log('📧 Login attempt for:', email)

    // Проверка обязательных полей
    if (!email || !password) {
      console.log('❌ Missing email or password')
      throw createError({
        statusCode: 400,
        statusMessage: 'Email и пароль обязательны'
      })
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email)
      throw createError({
        statusCode: 400,
        statusMessage: 'Некорректный формат email'
      })
    }

    // Хешируем пароль для сравнения (ТАК ЖЕ КАК ПРИ РЕГИСТРАЦИИ!)
    const hashedPassword = Buffer.from(password).toString('base64')
    console.log('🔑 Password hashed for comparison')

    // Ищем пользователя в Supabase
    console.log('🔍 Searching user in Supabase...')
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    console.log('📊 Supabase response:', {
      userFound: !!user,
      error: error?.message,
      userEmail: user?.email
    })

    if (error) {
      console.log('❌ Supabase search error:', error)

      if (error.code === 'PGRST116') { // Not found
        throw createError({
          statusCode: 401,
          statusMessage: 'Неверный email или пароль'
        })
      }

      throw createError({
        statusCode: 500,
        statusMessage: `Ошибка базы данных: ${error.message}`
      })
    }

    if (!user) {
      console.log('❌ User not found for email:', email)
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    console.log('🔑 Comparing passwords...')
    console.log('   Stored hash:', user.password)
    console.log('   Input hash:', hashedPassword)

    // Проверяем пароль
    if (user.password !== hashedPassword) {
      console.log('❌ Password mismatch')
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    // Не возвращаем пароль
    const { password: _, ...userWithoutPassword } = user
    console.log('✅ Login successful for:', user.email)

    return userWithoutPassword

  } catch (error) {
    console.error('💥 Login error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Ошибка при входе'
    })
  }
})