import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const startTime = Date.now()

  try {
    const body = await readBody(event)
    const { email, password } = body

    console.log(`🔐 Login attempt for: ${email}`)

    // Быстрая валидация
    if (!email?.includes('@') || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Неверные данные'
      })
    }

    const hashedPassword = Buffer.from(password).toString('base64')

    // Оптимизированный запрос - только нужные поля
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, secondname, password, avatar_url, created_at')
      .eq('email', email)
      .single()

    const queryTime = Date.now() - startTime
    console.log(`⚡ Supabase query time: ${queryTime}ms`)

    if (error || !user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    if (user.password !== hashedPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Неверный email или пароль'
      })
    }

    // Не возвращаем пароль
    const { password: _, ...userWithoutPassword } = user

    console.log(`✅ Login successful in ${Date.now() - startTime}ms`)
    return userWithoutPassword

  } catch (error) {
    console.error(`❌ Login failed in ${Date.now() - startTime}ms:`, error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.data?.statusMessage || 'Ошибка сервера'
    })
  }
})