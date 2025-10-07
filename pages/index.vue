<template>
    <div class="relative">
        <!-- Упрощенный анимированный фон -->
        <div class="fixed inset-0 -z-10 overflow-hidden">
            <!-- Упрощенные градиентные шары -->
            <div class="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full opacity-10"></div>
            <div class="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400 rounded-full opacity-10"></div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full opacity-10">
            </div>

            <!-- Упрощенная сетка -->
            <div class="absolute inset-0 bg-grid-slate-100 opacity-30"></div>
        </div>

        <!-- Герой секция -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div class="text-center">
                    <!-- Бейдж -->
                    <div
                        class="inline-flex items-center space-x-2 bg-white/80 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-200 shadow-sm">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Более 50,000 довольных пользователей</span>
                    </div>

                    <!-- Заголовок -->
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 lg:mb-8">
                        <span
                            class="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Общайтесь</span>
                        <br>
                        <span class="text-gray-900">без границ</span>
                    </h1>

                    <!-- Описание -->
                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 lg:mb-12">
                        Современная платформа для безопасного и комфортного общения с интуитивно понятным интерфейсом,
                        защищенными соединениями и молниеносной скоростью работы.
                    </p>

                    <!-- Кнопки -->
                    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12 lg:mb-16">
                        <NuxtLink to="/chat"
                            class="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-200 inline-flex items-center justify-center">
                            <span>Начать общение</span>
                            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </NuxtLink>
                        <a href="#features"
                            class="border-2 border-purple-200 text-purple-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Смотреть демо
                        </a>
                    </div>

                    <!-- Статистика -->
                    <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div class="text-center">
                            <div class="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">99.9%</div>
                            <div class="text-sm text-gray-600">Uptime</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">50K+</div>
                            <div class="text-sm text-gray-600">Пользователей</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">1M+</div>
                            <div class="text-sm text-gray-600">Сообщений в день</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Особенности -->
        <section id="features" class="relative py-20 lg:py-24 bg-white/60">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 lg:mb-20">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают WebChat?</h2>
                    <p class="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                        Инновационные функции для современного общения, которые делают ваш опыт неповторимым
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div v-for="feature in features" :key="feature.name"
                        class="bg-white/80 p-6 lg:p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 group">
                        <div
                            class="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-purple-100 text-purple-600 rounded-xl mb-4 lg:mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                            <component :is="feature.icon" class="w-6 h-6 lg:w-7 lg:h-7" />
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.name }}</h3>
                        <p class="text-gray-600 leading-relaxed text-sm lg:text-base">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- О компании -->
        <section id="about" class="relative py-20 lg:py-24 bg-gradient-to-br from-purple-50/80 to-white/80">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div class="mb-12 lg:mb-0">
                        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">О компании WebChat</h2>
                        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                            WebChat — это инновационный стартап, основанный в 2023 году с целью создания
                            самого удобного и безопасного мессенджера для современного пользователя.
                            Наша миссия — объединять людей через технологии, обеспечивая бесшемное и
                            защищенное общение.
                        </p>

                        <div class="space-y-4 lg:space-y-6 mb-8">
                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-600">Более 100,000 довольных пользователей по всему миру</p>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-600">99.9% uptime гарантия доступности сервиса</p>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-gray-600">Круглосуточная поддержка от профессиональной команды</p>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <NuxtLink to="/about"
                                class="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors text-center">
                                Узнать больше
                            </NuxtLink>
                            <button
                                class="border border-purple-200 text-purple-700 px-6 py-3 rounded-xl font-medium hover:bg-purple-50 transition-colors">
                                Связаться с нами
                            </button>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="bg-white/80 rounded-2xl shadow-xl p-2 border border-purple-100">
                            <img class="rounded-xl w-full lazyload"
                                data-src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Офис компании WebChat">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA секция -->
        <section
            class="relative py-20 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white overflow-hidden">
            <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl lg:text-4xl font-bold mb-6">Готовы начать общение?</h2>
                <p class="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                    Присоединяйтесь к тысячам пользователей, которые уже общаются с помощью WebChat
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <NuxtLink to="/register"
                        class="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center">
                        Начать бесплатно
                    </NuxtLink>
                    <NuxtLink to="/login"
                        class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center justify-center">
                        Войти в аккаунт
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Иконки в виде компонентов
const ShieldIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  `
}

const BoltIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  `
}

const DeviceIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
  `
}

const CloudIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
    </svg>
  `
}

const LockIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
    </svg>
  `
}

const GroupIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
  `
}

const features = [
    {
        name: 'Безопасность',
        description: 'End-to-end шифрование всех сообщений и защита персональных данных по международным стандартам',
        icon: ShieldIcon
    },
    {
        name: 'Скорость',
        description: 'Мгновенная доставка сообщений благодаря оптимизированной архитектуре и CDN сети',
        icon: BoltIcon
    },
    {
        name: 'Доступность',
        description: 'Работает на всех устройствах с синхронизацией между платформами в реальном времени',
        icon: DeviceIcon
    },
    {
        name: 'Облачное хранение',
        description: 'Неограниченное облачное хранилище для ваших файлов и истории сообщений',
        icon: CloudIcon
    },
    {
        name: 'Приватность',
        description: 'Расширенные настройки конфиденциальности и контроль над вашими данными',
        icon: LockIcon
    },
    {
        name: 'Групповые чаты',
        description: 'Создавайте групповые чаты до 1000 участников с расширенными возможностями модерации',
        icon: GroupIcon
    }
]

// SEO настройки
useSeoMeta({
    title: 'WebChat - Современная платформа для общения',
    description: 'WebChat - безопасный и быстрый мессенджер с end-to-end шифрованием. Общайтесь без границ с друзьями, семьей и коллегами.'
})

// Store для авторизации
const authStore = useAuthStore()

// Ленивая загрузка изображений
onMounted(() => {
    // Инициализация lazy load для изображений
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img.lazyload')

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    img.src = img.dataset.src
                    img.classList.remove('lazyload')
                    imageObserver.unobserve(img)
                }
            })
        })

        lazyImages.forEach(img => imageObserver.observe(img))
    }
})
</script>

<style>
.bg-grid-slate-100 {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

/* Оптимизация анимаций для пользователей, которые их предпочитают */
@media (prefers-reduced-motion: no-preference) {
    .group:hover {
        transition: all 0.3s ease;
    }
}

/* Отключение анимаций для пользователей, которые их не хотят */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Базовые стили для ленивой загрузки */
img.lazyload {
    opacity: 0;
    transition: opacity 0.3s;
}

img.lazyloaded {
    opacity: 1;
}
</style>