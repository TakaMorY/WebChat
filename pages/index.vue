<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <!-- Простой хедер -->
        <header class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-bold text-purple-600">WebChat</div>
                    <div class="space-x-4">
                        <NuxtLink to="/login" class="text-gray-600 hover:text-purple-600">Вход</NuxtLink>
                        <NuxtLink to="/register"
                            class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                            Регистрация
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </header>

        <!-- Основной контент -->
        <main class="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6">
                Добро пожаловать в WebChat
            </h1>
            <p class="text-xl text-gray-600 mb-8">
                Современный мессенджер для общения с друзьями и коллегами
            </p>
            <div class="space-x-4">
                <NuxtLink to="/chat" class="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-600">
                    Начать общение
                </NuxtLink>
                <NuxtLink to="/about"
                    class="border border-purple-500 text-purple-500 px-8 py-3 rounded-lg text-lg hover:bg-purple-50">
                    Узнать больше
                </NuxtLink>
            </div>
        </main>
    </div>
</template>

<script setup>
// Пустой скрипт - никакой логики на сервере
useSeoMeta({
    title: 'WebChat - Главная',
    description: 'Современный мессенджер для общения'
})
</script>