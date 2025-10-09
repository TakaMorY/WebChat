import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    // Инициализация состояния из localStorage при создании store
    initialize() {
      if (process.client) {
        const savedUser = localStorage.getItem('user');
        const savedAuth = localStorage.getItem('isAuthenticated');

        if (savedUser && savedAuth === 'true') {
          try {
            this.user = JSON.parse(savedUser);
            this.isAuthenticated = true;
            console.log('🔄 Auth state restored from localStorage');
          } catch (error) {
            console.error('❌ Error parsing saved user data:', error);
            this.clearStorage();
          }
        }
      }
    },

    async login(credentials) {
      try {
        const user = await $fetch('/api/users/login', {
          method: 'POST',
          body: credentials
        });

        this.user = user;
        this.isAuthenticated = true;

        if (process.client) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isAuthenticated', 'true');
          console.log('✅ Login successful, user saved to localStorage');
        }

        return true;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    async register(userData) {
      try {
        const user = await $fetch('/api/users/registration', {
          method: 'POST',
          body: userData
        });

        this.user = user;
        this.isAuthenticated = true;

        if (process.client) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isAuthenticated', 'true');
          console.log('✅ Registration successful, user saved to localStorage');
        }

        return user;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;

      if (process.client) {
        this.clearStorage();
        console.log('✅ Logout successful, storage cleared');

        // Принудительное обновление страницы
        window.location.reload();
      }
    },

    // Функция для очистки хранилищ
    clearStorage() {
      if (process.client) {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');

        // Дополнительно очищаем sessionStorage для безопасности
        sessionStorage.clear();

        // Очищаем cookies связанные с аутентификацией
        this.clearAuthCookies();
      }
    },

    // Очистка cookies аутентификации
    clearAuthCookies() {
      if (process.client) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

          // Удаляем cookies связанные с аутентификацией
          if (name.includes('auth') || name.includes('token') || name.includes('session')) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
          }
        }
      }
    }
  }
});