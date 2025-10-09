<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Инициализируем состояние аутентификации при запуске приложения
onMounted(() => {
  if (process.client) {
    authStore.initialize()
  }
})
</script>