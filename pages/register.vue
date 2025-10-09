<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Регистрация</h2>

            <form class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <input type="text"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ваше имя">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                    <input type="password"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Придумайте пароль">
                </div>

                <button type="button" class="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                    Зарегистрироваться
                </button>

                <div class="text-center">
                    <NuxtLink to="/login" class="text-purple-500 hover:text-purple-600">
                        Уже есть аккаунт? Войти
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
</script>