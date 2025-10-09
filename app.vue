<!-- <template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()


onMounted(() => {
  if (process.client) {
    authStore.initialize()
  }
})
</script> -->


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

