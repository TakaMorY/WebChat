import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    // Инициализация только на клиенте
    initialize() {
      if (process.client) {
        try {
          const saved = localStorage.getItem('auth')
          if (saved) {
            const data = JSON.parse(saved)
            this.user = data.user
            this.isAuthenticated = data.isAuthenticated
          }
        } catch (error) {
          console.error('Auth initialization error:', error)
          this.clearAuth()
        }
      }
    },

    async login(credentials) {
      try {
        const user = await $fetch('/api/users/login', {
          method: 'POST',
          body: credentials
        })

        this.user = user
        this.isAuthenticated = true

        if (process.client) {
          localStorage.setItem('auth', JSON.stringify({
            user: user,
            isAuthenticated: true
          }))
        }

        return true
      } catch (error) {
        console.error('Login error:', error)
        throw error
      }
    },

    logout() {
      this.user = null
      this.isAuthenticated = false

      if (process.client) {
        localStorage.removeItem('auth')
        window.location.href = '/'
      }
    },

    clearAuth() {
      this.user = null
      this.isAuthenticated = false
      if (process.client) {
        localStorage.removeItem('auth')
      }
    }
  }
})