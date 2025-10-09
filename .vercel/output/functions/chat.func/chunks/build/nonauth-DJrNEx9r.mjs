import { d as defineNuxtRouteMiddleware, u as useAuthStore, n as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';

const nonauth = defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/profile");
  }
});

export { nonauth as default };
//# sourceMappingURL=nonauth-DJrNEx9r.mjs.map
