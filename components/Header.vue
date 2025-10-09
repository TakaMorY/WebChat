<template>
    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 lg:h-20">
                <!-- Логотип -->
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex items-center space-x-3 group">
                        <div class="relative">
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                    </path>
                                </svg>
                            </div>
                            <div
                                class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse">
                            </div>
                        </div>
                        <div>
                            <span
                                class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">WebChat</span>
                            <div class="text-xs text-purple-400 font-medium">by NimbleSites</div>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Мобильное меню -->
                <div class="lg:hidden">
                    <button @click="toggleMobileMenu"
                        class="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Навигация -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <NuxtLink to="/"
                        class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                        Главная
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
                    </NuxtLink>
                    <NuxtLink to="/chat"
                        class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                        Веб-Чат
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
                    </NuxtLink>
                    <a href="#features"
                        class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                        Возможности
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#about"
                        class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                        О компании
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
                    </a>
                </nav>

                <!-- Правый блок -->
                <div v-if="!authStore.isAuthenticated" class="hidden lg:flex items-center space-x-4">
                    <div class="flex items-center space-x-4">
                        <NuxtLink to="/login" class="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                            Вход
                        </NuxtLink>
                        <NuxtLink to="/register"
                            class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-200">
                            Регистрация
                        </NuxtLink>
                    </div>
                </div>

                <!-- Блок пользователя (авторизован) -->
                <div v-if="authStore.isAuthenticated" class="hidden lg:flex items-center space-x-4">
                    <!-- Аватар и имя пользователя (кликабельные) -->
                    <NuxtLink to="/profile" class="flex items-center space-x-3 group cursor-pointer">
                        <!-- Аватар -->
                        <div class="relative">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"
                                v-if="!userAvatar">
                                {{ userInitials }}
                            </div>
                            <img v-else :src="userAvatar" alt="Аватар"
                                class="w-10 h-10 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform">
                        </div>

                        <!-- Имя пользователя -->
                        <div class="flex flex-col">
                            <span
                                class="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{{
                                userName }}</span>
                            <span class="text-xs text-gray-500">Онлайн</span>
                        </div>
                    </NuxtLink>

                    <!-- Кнопка выхода -->
                    <button @click="logout"
                        class="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2.5 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200 group">
                        <svg class="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Выйти</span>
                    </button>
                </div>
            </div>

            <!-- Мобильное меню -->
            <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-md">
                <div class="flex flex-col space-y-4">
                    <NuxtLink to="/" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                        @click="closeMobileMenu">
                        Главная
                    </NuxtLink>
                    <NuxtLink to="/chat" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                        @click="closeMobileMenu">
                        Веб-Чат
                    </NuxtLink>
                    <a href="#features" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                        @click="closeMobileMenu">
                        Возможности
                    </a>
                    <a href="#about" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                        @click="closeMobileMenu">
                        О компании
                    </a>

                    <!-- Блок пользователя в мобильном меню -->
                    <div v-if="authStore.isAuthenticated" class="pt-4 border-t border-purple-100">
                        <NuxtLink to="/profile" class="flex items-center space-x-3 mb-4 group" @click="closeMobileMenu">
                            <!-- Аватар -->
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"
                                    v-if="!userAvatar">
                                    {{ userInitials }}
                                </div>
                                <img v-else :src="userAvatar" alt="Аватар"
                                    class="w-12 h-12 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform">
                            </div>

                            <!-- Имя пользователя -->
                            <div class="flex flex-col">
                                <span
                                    class="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{{
                                    userName }}</span>
                                <span class="text-xs text-gray-500">Онлайн</span>
                            </div>
                        </NuxtLink>

                        <!-- Кнопка выхода в мобильном меню -->
                        <button @click="logout"
                            class="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200 group">
                            <svg class="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>Выйти из аккаунта</span>
                        </button>
                    </div>

                    <div v-if="!authStore.isAuthenticated"
                        class="pt-4 border-t border-purple-100 flex flex-col space-y-3">
                        <NuxtLink to="/login"
                            class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
                            @click="closeMobileMenu">
                            Вход
                        </NuxtLink>
                        <NuxtLink to="/register"
                            class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all text-center">
                            Регистрация
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

// Вычисляемые свойства для данных пользователя
const userAvatar = computed(() => authStore.user?.avatar_url || null);
const userName = computed(() => {
    if (authStore.user?.name && authStore.user?.secondname) {
        return `${authStore.user.name} ${authStore.user.secondname}`;
    }
    return authStore.user?.email || 'Пользователь';
});
const userInitials = computed(() => {
    if (authStore.user?.name && authStore.user?.secondname) {
        return `${authStore.user.name[0]}${authStore.user.secondname[0]}`.toUpperCase();
    }
    return authStore.user?.email?.[0]?.toUpperCase() || 'U';
});

const logout = () => {
    authStore.logout();
};

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};
</script>