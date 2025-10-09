// Простой login endpoint
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // Базовая валидация
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email и пароль обязательны'
    })
  }

  // Здесь будет логика Supabase, но пока вернем заглушку
  // В реальном приложении здесь будет работа с базой данных

  throw createError({
    statusCode: 501,
    statusMessage: 'Login endpoint is not implemented yet'
  })
})