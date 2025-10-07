import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { email, password, name, secondname } = body

        // Проверка обязательных полей
        if (!email || !password || !name || !secondname) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Все поля обязательны для заполнения'
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

        // Проверка пароля
        if (password.length < 6) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Пароль должен содержать минимум 6 символов'
            })
        }

        // Хеширование пароля
        const hashedPassword = Buffer.from(password).toString('base64')

        // Создание пользователя в Supabase
        const { data: user, error } = await supabase
            .from('users')
            .insert([
                {
                    email,
                    password: hashedPassword,
                    name,
                    secondname
                }
            ])
            .select()
            .single()

        if (error) {
            if (error.code === '23505') { // unique violation
                throw createError({
                    statusCode: 400,
                    statusMessage: 'Пользователь с таким email уже существует'
                })
            }
            throw createError({
                statusCode: 500,
                statusMessage: error.message
            })
        }

        // Не возвращаем пароль
        const { password: _, ...userWithoutPassword } = user
        return userWithoutPassword

    } catch (error) {
        console.error('Registration error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Ошибка при регистрации'
        })
    }
})