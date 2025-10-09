<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Профиль пользователя</h1>
        <p class="text-gray-600 mt-2">Управление вашей учетной записью</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Левая колонка - Аватар и основная информация -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <!-- Аватар -->
            <div class="text-center">
              <div class="relative inline-block">
                <img :src="user.avatar_url || '/default-avatar.png'" alt="Аватар"
                  class="w-32 h-32 rounded-full mx-auto border-4 border-purple-100 object-cover">
                <button @click="showAvatarModal = true"
                  class="absolute bottom-0 right-0 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <h2 class="text-xl font-semibold text-gray-900 mt-4">{{ user.name }} {{ user.secondname }}</h2>
              <p class="text-gray-600">{{ user.email }}</p>
              <p class="text-sm text-gray-500 mt-2">
                Участник с {{ new Date(user.created_at).toLocaleDateString('ru-RU') }}
              </p>
            </div>

            <!-- Статистика -->
            <div class="mt-6 space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Статус</span>
                <span class="text-green-600 font-medium">Активен</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Последний вход</span>
                <span class="text-gray-900">Сегодня</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка - Настройки -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Основная информация -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Основная информация</h3>
            <form @submit.prevent="updateProfile" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input type="text" v-model="profileForm.name"
                    class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                  <input type="text" v-model="profileForm.secondname"
                    class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" v-model="profileForm.email"
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled>
                <p class="text-sm text-gray-500 mt-1">Email нельзя изменить</p>
              </div>
              <button type="submit" :disabled="profileLoading"
                class="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">
                <span v-if="profileLoading">Сохранение...</span>
                <span v-else>Сохранить изменения</span>
              </button>
            </form>
          </div>

          <!-- Смена пароля -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Смена пароля</h3>
            <form @submit.prevent="changePassword" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Текущий пароль</label>
                <input :type="showCurrentPassword ? 'text' : 'password'" v-model="passwordForm.currentPassword"
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Новый пароль</label>
                <input :type="showNewPassword ? 'text' : 'password'" v-model="passwordForm.newPassword"
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Подтвердите новый пароль</label>
                <input :type="showConfirmPassword ? 'text' : 'password'" v-model="passwordForm.confirmPassword"
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <button type="submit" :disabled="passwordLoading"
                class="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">
                <span v-if="passwordLoading">Смена пароля...</span>
                <span v-else>Сменить пароль</span>
              </button>
            </form>
          </div>

          <!-- Опасная зона -->
          <div class="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
            <h3 class="text-lg font-semibold text-red-700 mb-4">Опасная зона</h3>
            <p class="text-gray-600 mb-4">Удаление аккаунта невозможно отменить. Все ваши данные будут безвозвратно
              удалены.</p>
            <button @click="showDeleteModal = true"
              class="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors">
              Удалить аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно смены аватара -->
    <div v-if="showAvatarModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Смена аватара</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">URL аватара</label>
            <input type="text" v-model="avatarForm.url" placeholder="https://example.com/avatar.jpg"
              class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
          </div>
          <div class="flex justify-end space-x-3">
            <button @click="showAvatarModal = false"
              class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Отмена
            </button>
            <button @click="updateAvatar" :disabled="avatarLoading"
              class="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">
              <span v-if="avatarLoading">Сохранение...</span>
              <span v-else>Сохранить</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно удаления аккаунта -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold text-red-700 mb-4">Удаление аккаунта</h3>
        <p class="text-gray-600 mb-4">Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.</p>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Введите "УДАЛИТЬ" для подтверждения
          </label>
          <input type="text" v-model="deleteConfirmation"
            class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
        </div>
        <div class="flex justify-end space-x-3">
          <button @click="showDeleteModal = false"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
            Отмена
          </button>
          <button @click="deleteAccount" :disabled="deleteConfirmation !== 'УДАЛИТЬ' || deleteLoading"
            class="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50">
            <span v-if="deleteLoading">Удаление...</span>
            <span v-else>Удалить аккаунт</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const user = ref(authStore.user);

// Состояния модальных окон
const showAvatarModal = ref(false);
const showDeleteModal = ref(false);

// Состояния загрузки
const profileLoading = ref(false);
const passwordLoading = ref(false);
const avatarLoading = ref(false);
const deleteLoading = ref(false);

// Формы
const profileForm = reactive({
  name: user.value?.name || '',
  secondname: user.value?.secondname || '',
  email: user.value?.email || ''
});

const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const avatarForm = reactive({
  url: user.value?.avatar_url || ''
});

const deleteConfirmation = ref('');

// Показать/скрыть пароли
const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

// Обновление профиля
async function updateProfile() {
  if (profileLoading.value) return;

  profileLoading.value = true;
  try {
    const updatedUser = await $fetch(`/api/users/${user.value.id}`, {
      method: 'PATCH',
      body: {
        name: profileForm.name,
        secondname: profileForm.secondname
      }
    });

    // Обновляем store
    authStore.user = updatedUser;
    user.value = updatedUser;

    alert('Профиль успешно обновлен!');
  } catch (error) {
    alert(error.data?.statusMessage || 'Ошибка при обновлении профиля');
  } finally {
    profileLoading.value = false;
  }
}

// Смена пароля
async function changePassword() {
  if (passwordLoading.value) return;

  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    alert('Новые пароли не совпадают');
    return;
  }

  if (passwordForm.newPassword.length < 6) {
    alert('Новый пароль должен содержать минимум 6 символов');
    return;
  }

  passwordLoading.value = true;
  try {
    await $fetch(`/api/users/${user.value.id}/password`, {
      method: 'PATCH',
      body: {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      }
    });

    // Очищаем форму
    passwordForm.currentPassword = '';
    passwordForm.newPassword = '';
    passwordForm.confirmPassword = '';

    alert('Пароль успешно изменен!');
  } catch (error) {
    alert(error.data?.statusMessage || 'Ошибка при смене пароля');
  } finally {
    passwordLoading.value = false;
  }
}

// Обновление аватара
async function updateAvatar() {
  if (avatarLoading.value) return;

  avatarLoading.value = true;
  try {
    const updatedUser = await $fetch(`/api/users/${user.value.id}`, {
      method: 'PATCH',
      body: {
        avatar_url: avatarForm.url
      }
    });

    // Обновляем store
    authStore.user = updatedUser;
    user.value = updatedUser;

    showAvatarModal.value = false;
    alert('Аватар успешно обновлен!');
  } catch (error) {
    alert(error.data?.statusMessage || 'Ошибка при обновлении аватара');
  } finally {
    avatarLoading.value = false;
  }
}

// Удаление аккаунта
async function deleteAccount() {
  if (deleteLoading.value) return;

  deleteLoading.value = true;
  try {
    await $fetch(`/api/users/${user.value.id}`, {
      method: 'DELETE'
    });

    // Выходим из аккаунта
    await authStore.logout();
    await navigateTo('/');

    alert('Аккаунт успешно удален');
  } catch (error) {
    alert(error.data?.statusMessage || 'Ошибка при удалении аккаунта');
  } finally {
    deleteLoading.value = false;
  }
}
</script>