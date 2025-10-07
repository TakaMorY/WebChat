import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
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
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        navigateTo('/');
      }
    }
  }
});