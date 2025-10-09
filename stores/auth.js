import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    lastAuthCheck: null
  }),

  getters: {
    // Полное имя пользователя
    fullName: (state) => {
      if (!state.user) return ''
      if (state.user.name && state.user.secondname) {
        return `${state.user.name} ${state.user.secondname}`
      }
      return state.user.email || 'Пользователь'
    },

    // Инициалы для аватара
    initials: (state) => {
      if (!state.user) return 'U'
      if (state.user.name && state.user.secondname) {
        return `${state.user.name[0]}${state.user.secondname[0]}`.toUpperCase()
      }
      return state.user.email?.[0]?.toUpperCase() || 'U'
    },

    // URL аватара
    avatarUrl: (state) => state.user?.avatar_url || null
  },

  actions: {
    /**
     * Инициализация состояния аутентификации из localStorage
     */
    initialize() {
      if (process.client && !this.isLoading) {
        this.isLoading = true

        try {
          const authData = localStorage.getItem('authData')

          if (authData) {
            const { user, isAuthenticated, timestamp } = JSON.parse(authData)

            // Проверяем, не устарели ли данные (24 часа)
            const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000

            if (!isExpired && user && isAuthenticated) {
              this.user = user
              this.isAuthenticated = isAuthenticated
              this.lastAuthCheck = timestamp
              console.log('🔄 Auth state restored from localStorage')
            } else {
              console.log('🔄 Auth data expired or invalid, clearing...')
              this.clearAuthData()
            }
          }
        } catch (error) {
          console.error('❌ Error initializing auth:', error)
          this.clearAuthData()
        } finally {
          this.isLoading = false
        }
      }
    },

    /**
     * Вход в систему
     */
    async login(credentials) {
      if (this.isLoading) {
        throw new Error('Авторизация уже выполняется')
      }

      this.isLoading = true

      try {
        const response = await $fetch('/api/users/login', {
          method: 'POST',
          body: credentials,
          timeout: 10000 // 10 секунд таймаут
        })

        if (response.success && response.user) {
          this.user = response.user
          this.isAuthenticated = true
          this.lastAuthCheck = Date.now()

          // Сохраняем в localStorage
          if (process.client) {
            localStorage.setItem('authData', JSON.stringify({
              user: response.user,
              isAuthenticated: true,
              timestamp: this.lastAuthCheck
            }))
          }

          console.log('✅ Login successful in store')
          return true
        } else {
          throw new Error(response.message || 'Ошибка при входе')
        }
      } catch (error) {
        console.error('❌ Login failed in store:', error)

        // Очищаем данные при ошибке
        this.clearAuthData()

        // Пробрасываем понятную ошибку
        if (error.data?.statusMessage) {
          throw new Error(error.data.statusMessage)
        } else if (error.message) {
          throw new Error(error.message)
        } else {
          throw new Error('Ошибка подключения к серверу')
        }
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Выход из системы
     */
    async logout() {
      this.isLoading = true

      try {
        // Очищаем состояние
        this.user = null
        this.isAuthenticated = false
        this.lastAuthCheck = null

        // Очищаем хранилища
        if (process.client) {
          localStorage.removeItem('authData')
          sessionStorage.clear()

          // Очищаем cookies аутентификации
          this.clearAuthCookies()
        }

        console.log('✅ Logout successful')

        // Принудительно обновляем страницу для сброса состояния
        if (process.client) {
          window.location.href = '/'
        }

      } catch (error) {
        console.error('❌ Logout error:', error)
        // Даже при ошибке очищаем состояние
        this.clearAuthData()

        if (process.client) {
          window.location.href = '/'
        }
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Очистка cookies аутентификации
     */
    clearAuthCookies() {
      if (process.client) {
        const cookies = document.cookie.split(';')
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf('=')
          const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()

          if (name.includes('auth') || name.includes('token') || name.includes('session')) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`
          }
        }
      }
    },

    /**
     * Полная очистка данных аутентификации
     */
    clearAuthData() {
      this.user = null
      this.isAuthenticated = false
      this.lastAuthCheck = null

      if (process.client) {
        localStorage.removeItem('authData')
        this.clearAuthCookies()
      }
    },

    /**
     * Обновление данных пользователя
     */
    updateUser(userData) {
      if (this.user) {
        this.user = { ...this.user, ...userData }

        // Обновляем localStorage
        if (process.client && this.isAuthenticated) {
          const authData = localStorage.getItem('authData')
          if (authData) {
            const data = JSON.parse(authData)
            data.user = { ...data.user, ...userData }
            localStorage.setItem('authData', JSON.stringify(data))
          }
        }
      }
    }
  }
})