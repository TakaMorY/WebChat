export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    // Если пользователь уже авторизован, но пытается зайти на страницы входа/регистрации
    if (authStore.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
        return navigateTo('/profile');
    }
});