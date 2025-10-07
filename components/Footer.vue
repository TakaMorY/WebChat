<template>
    <footer class="bg-white/80 backdrop-blur-sm border-t border-purple-100">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <!-- О компании -->
                <div class="lg:col-span-2">
                    <div class="flex items-center space-x-3 mb-6">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <span
                                class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">WebChat</span>
                            <div class="text-xs text-purple-400 font-medium">by TechSolutions</div>
                        </div>
                    </div>
                    <p class="text-gray-600 max-w-md leading-relaxed text-sm lg:text-base">
                        Современная платформа для безопасного и комфортного общения.
                        Объединяем людей через технологии, обеспечивая бесшовное и защищенное общение.
                    </p>
                    <div class="mt-6 flex space-x-4">
                        <a href="#"
                            class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                </path>
                            </svg>
                        </a>
                        <a href="#"
                            class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#"
                            class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Продукт -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Продукт</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/chat" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                Веб-Чат</NuxtLink>
                        </li>
                        <li><a href="#features"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Функции</a></li>
                        <li><a href="#pricing"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Тарифы</a></li>
                        <li><a href="#"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Документация</a>
                        </li>
                    </ul>
                </div>

                <!-- Компания -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Компания</h3>
                    <ul class="space-y-3">
                        <li><a href="#about" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">О
                                нас</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Блог</a>
                        </li>
                        <li><a href="#"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Карьера</a></li>
                        <li><a href="#"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Контакты</a></li>
                    </ul>
                </div>

                <!-- Поддержка -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Поддержка</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/login" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                Вход</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/register"
                                class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Регистрация
                            </NuxtLink>
                        </li>
                        <li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Помощь</a>
                        </li>
                        <li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Статус
                                системы</a></li>
                    </ul>
                </div>
            </div>

            <div
                class="mt-8 lg:mt-12 pt-8 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center">
                <p class="text-sm text-gray-500 text-center md:text-left">&copy; 2024 WebChat by TechSolutions. Все
                    права защищены.</p>
                <div class="mt-4 md:mt-0 flex space-x-6">
                    <a href="#"
                        class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Конфиденциальность</a>
                    <a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Условия</a>
                    <a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Cookie</a>
                </div>
            </div>
        </div>
    </footer>
</template>