<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Профиль пользователя</h1>
        <p class="text-gray-600 mt-2">Управляйте вашей учетной записью и настройками</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Боковая панель -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <div class="text-center">
              <div class="relative inline-block">
                <img class="w-24 h-24 rounded-2xl object-cover border-4 border-purple-100"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Профиль">
                <div class="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <h2 class="mt-4 text-xl font-bold text-gray-900">Алексей Петров</h2>
              <p class="text-purple-600">Senior Developer</p>
              <div class="mt-2 flex items-center justify-center text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-sm">Москва, Россия</span>
              </div>
            </div>

            <nav class="mt-8 space-y-2">
              <a href="#" class="flex items-center px-4 py-3 text-purple-600 bg-purple-50 rounded-xl font-medium">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Общая информация
              </a>
              <a href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Настройки аккаунта
              </a>
              <a href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                  </path>
                </svg>
                Уведомления
              </a>
              <a href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                  </path>
                </svg>
                Безопасность
              </a>
            </nav>
          </div>
        </div>

        <!-- Основной контент -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Общая информация -->
          <div class="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Общая информация</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                <input type="text" value="Алексей"
                  class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                <input type="text" value="Петров"
                  class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" value="alexey.petrov@example.com"
                  class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input type="tel" value="+7 (999) 123-45-67"
                  class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">О себе</label>
                <textarea rows="3"
                  class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">Senior разработчик с 8-летним опытом работы в веб-разработке. Специализируюсь на современных JavaScript фреймворках.</textarea>
              </div>
            </div>
            <div class="mt-6 flex justify-end">
              <button
                class="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors">
                Сохранить изменения
              </button>
            </div>
          </div>

          <!-- Статистика -->
          <div class="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Статистика аккаунта</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="text-center p-4 bg-purple-50 rounded-xl">
                <div class="text-2xl font-bold text-purple-600">1,247</div>
                <div class="text-sm text-gray-600">Всего сообщений</div>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-xl">
                <div class="text-2xl font-bold text-purple-600">12</div>
                <div class="text-sm text-gray-600">Активные чаты</div>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-xl">
                <div class="text-2xl font-bold text-purple-600">156</div>
                <div class="text-sm text-gray-600">Контакты</div>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-xl">
                <div class="text-2xl font-bold text-green-500">Online</div>
                <div class="text-sm text-gray-600">Статус</div>
              </div>
            </div>
          </div>

          <!-- Действия -->
          <div class="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Действия с аккаунтом</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                class="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-purple-50 transition-colors text-gray-700">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
                Экспорт данных
              </button>
              <button
                class="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-purple-50 transition-colors text-gray-700">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                  </path>
                </svg>
                Сменить пароль
              </button>
              <button
                class="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-purple-50 transition-colors text-gray-700">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>
                Справка
              </button>
              <button
                class="flex items-center justify-center p-4 border border-red-300 rounded-xl hover:bg-red-50 transition-colors text-red-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                  </path>
                </svg>
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Мой профиль - WebChat',
  description: 'Управление профилем пользователя WebChat'
})
</script>