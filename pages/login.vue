<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Вход в аккаунт</h2>

            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" v-model="form.email" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                    <input type="password" v-model="form.password" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ваш пароль">
                </div>

                <button type="submit" :disabled="loading"
                    class="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 disabled:opacity-50">
                    {{ loading ? 'Вход...' : 'Войти' }}
                </button>

                <div class="text-center">
                    <NuxtLink to="/register" class="text-purple-500 hover:text-purple-600">
                        Нет аккаунта? Зарегистрироваться
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
})

const form = reactive({
    email: '',
    password: ''
})

const loading = ref(false)

const handleLogin = async () => {
    loading.value = true
    try {
        // Временная заглушка
        alert('Функция входа временно недоступна')
    } catch (error) {
        console.error('Login error:', error)
    } finally {
        loading.value = false
    }
}
</script>