<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

// Инициализируем состояние авторизации при запуске приложения
onMounted(() => {
  authStore.initialize();
});
</script>