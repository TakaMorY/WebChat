export default defineNuxtPlugin(async (nuxtApp) => {
    const authStore = useAuthStore();

    // Восстановление состояния из localStorage только на клиенте
    if (process.client) {
        const user = localStorage.getItem('user');
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (user && isAuthenticated) {
            authStore.user = JSON.parse(user);
            authStore.isAuthenticated = true;
        }
    }
});