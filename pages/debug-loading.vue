<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Debug Loading</h1>
    
    <div class="space-y-4">
      <div v-for="metric in metrics" :key="metric.name" class="p-4 border rounded">
        <h3 class="font-semibold">{{ metric.name }}</h3>
        <p>Время: {{ metric.time }}ms</p>
        <p :class="metric.status === 'good' ? 'text-green-600' : 'text-red-600'">
          {{ metric.status === 'good' ? '✅' : '❌' }} {{ metric.message }}
        </p>
      </div>
    </div>

    <button @click="runDiagnostics" class="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
      Запустить диагностику
    </button>
  </div>
</template>

<script setup>
const metrics = ref([])

async function runDiagnostics() {
  metrics.value = []

  // Тест Nuxt инициализации
  const nuxtStart = performance.now()
  metrics.value.push({
    name: 'Nuxt Initialization',
    time: performance.now() - nuxtStart,
    status: 'good',
    message: 'Клиентская инициализация'
  })

  // Тест API
  const apiStart = performance.now()
  try {
    await $fetch('/api/hello')
    metrics.value.push({
      name: 'API Response',
      time: performance.now() - apiStart,
      status: performance.now() - apiStart < 100 ? 'good' : 'slow',
      message: 'Локальный API endpoint'
    })
  } catch (e) {
    metrics.value.push({
      name: 'API Response',
      time: 'Error',
      status: 'slow',
      message: 'API недоступен'
    })
  }

  // Тест Supabase
  const supabaseStart = performance.now()
  try {
    await $fetch('/api/test-supabase')
    metrics.value.push({
      name: 'Supabase Connection',
      time: performance.now() - supabaseStart,
      status: performance.now() - supabaseStart < 500 ? 'good' : 'slow',
      message: 'Подключение к базе'
    })
  } catch (e) {
    metrics.value.push({
      name: 'Supabase Connection',
      time: 'Error',
      status: 'slow',
      message: 'Supabase недоступен'
    })
  }
}
</script>