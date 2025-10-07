export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    // Если маршрут требует аутентификации и пользователь не авторизован
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return navigateTo('/login');
    }
});