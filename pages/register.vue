<template>
    <div
        class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <!-- Фоновые элементы -->
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
            </div>
            <div
                class="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000">
            </div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500">
            </div>
        </div>

        <div class="max-w-md w-full space-y-8">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8">
                <!-- Заголовок -->
                <div class="text-center">
                    <div class="flex justify-center mb-6">
                        <div
                            class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-2">Создать аккаунт</h2>
                    <p class="text-gray-600">Присоединяйтесь к WebChat сегодня</p>
                </div>

                <!-- Форма -->
                <form class="mt-8 space-y-6" @submit.prevent="register">
                    <div class="space-y-4">
                        <!-- Имя и Фамилия -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                                <input id="name" type="text" required
                                    class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                    placeholder="Иван" v-model="form.name">
                            </div>
                            <div>
                                <label for="secondname"
                                    class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                                <input id="secondname" type="text" required
                                    class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                    placeholder="Иванов" v-model="form.secondname">
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email адрес</label>
                            <div class="relative">
                                <input id="email" type="email" required
                                    class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors pl-11"
                                    placeholder="your@email.com" v-model="form.email">
                                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <!-- Пароль -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                            <div class="relative">
                                <input id="password" :type="showPassword ? 'text' : 'password'" required
                                    class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors pl-11 pr-11"
                                    placeholder="Минимум 6 символов" v-model="form.password">
                                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                    </path>
                                </svg>
                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                        </path>
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <p class="mt-1 text-xs text-gray-500">Пароль должен содержать минимум 6 символов</p>
                        </div>
                    </div>

                    <!-- Кнопка регистрации -->
                    <button type="submit" :disabled="loading"
                        class="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:-translate-y-0.5 duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="loading">Регистрация...</span>
                        <span v-else>Создать аккаунт</span>
                    </button>

                    <!-- Ссылка на вход -->
                    <div class="text-center">
                        <p class="text-sm text-gray-600">
                            Уже есть аккаунт?
                            <NuxtLink to="/login"
                                class="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                                Войти
                            </NuxtLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["nonauth"],
    layout: false,
});

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const loading = ref(false);

const form = reactive({
    email: '',
    password: '',
    name: '',
    secondname: ''
});

const showPassword = ref(false);

async function register() {
    if (loading.value) return;

    loading.value = true;
    try {
        const user = await authStore.register({
            email: form.email,
            password: form.password,
            name: form.name,
            secondname: form.secondname
        });

        if (user) {
            await navigateTo('/');
        }
    } catch (error) {
        alert(error.data?.statusMessage || 'Ошибка при регистрации');
    } finally {
        loading.value = false;
    }
}
</script>