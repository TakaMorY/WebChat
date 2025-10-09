// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',

  ],
  runtimeConfig: {
    // Переменные, доступные только на сервере
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,

    // Переменные, доступные и на клиенте
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },


  ssr: true,

  nitro: {
    preset: 'vercel',
    devProxy: {
      // Прокси для API в dev режиме
    },
    timing: false // Отключаем timing в dev
  },

  // Оптимизации Vite для dev
  vite: {
    optimizeDeps: {
      include: ['@supabase/supabase-js']
    },
    server: {
      warmup: {
        clientFiles: [
          '/pages/index.vue',
          '/pages/login.vue',
          '/pages/register.vue'
        ]
      }
    }
  },

  // Отключаем ненужные функции в dev
  features: {
    devLogs: false
  },

  app: {
    head: {
      title: 'WebChat',
      htmlAttrs: { lang: 'ru' }
    }
  }
})