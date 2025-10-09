import { mergeProps, computed, ref, withCtx, createVNode, createBlock, openBlock, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CCMCp305.mjs';
import { u as useAuthStore } from './auth-rFvIby8I.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'deep-pick-omit';

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const userAvatar = computed(() => authStore.user?.avatar_url || null);
    const userName = computed(() => {
      if (authStore.user?.name && authStore.user?.secondname) {
        return `${authStore.user.name} ${authStore.user.secondname}`;
      }
      return authStore.user?.email || "Пользователь";
    });
    const userInitials = computed(() => {
      if (authStore.user?.name && authStore.user?.secondname) {
        return `${authStore.user.name[0]}${authStore.user.secondname[0]}`.toUpperCase();
      }
      return authStore.user?.email?.[0]?.toUpperCase() || "U";
    });
    const mobileMenuOpen = ref(false);
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-100 shadow-sm" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16 lg:h-20"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"${_scopeId}><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"${_scopeId}></path></svg></div><div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"${_scopeId}></div></div><div${_scopeId}><span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"${_scopeId}>WebChat</span><div class="text-xs text-purple-400 font-medium"${_scopeId}>by NimbleSites</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300" }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-6 h-6 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" })
              ]),
              createVNode("div", null, [
                createVNode("span", { class: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" }, "WebChat"),
                createVNode("div", { class: "text-xs text-purple-400 font-medium" }, "by NimbleSites")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:hidden"><button class="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div><nav class="hidden lg:flex items-center space-x-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Главная <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" Главная "),
              createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Веб-Чат <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" Веб-Чат "),
              createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#features" class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"> Возможности <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span></a><a href="#about" class="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"> О компании <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span></a></nav>`);
      if (!unref(authStore).isAuthenticated) {
        _push(`<div class="hidden lg:flex items-center space-x-4"><div class="flex items-center space-x-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "text-gray-700 hover:text-purple-600 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вход `);
            } else {
              return [
                createTextVNode(" Вход ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Регистрация `);
            } else {
              return [
                createTextVNode(" Регистрация ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authStore).isAuthenticated) {
        _push(`<div class="hidden lg:flex items-center space-x-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/profile",
          class: "flex items-center space-x-3 group cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative"${_scopeId}>`);
              if (!unref(userAvatar)) {
                _push2(`<div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"${_scopeId}>${ssrInterpolate(unref(userInitials))}</div>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", unref(userAvatar))} alt="Аватар" class="w-10 h-10 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform"${_scopeId}>`);
              }
              _push2(`</div><div class="flex flex-col"${_scopeId}><span class="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors"${_scopeId}>${ssrInterpolate(unref(userName))}</span><span class="text-xs text-gray-500"${_scopeId}>Онлайн</span></div>`);
            } else {
              return [
                createVNode("div", { class: "relative" }, [
                  !unref(userAvatar) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"
                  }, toDisplayString(unref(userInitials)), 1)) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: unref(userAvatar),
                    alt: "Аватар",
                    class: "w-10 h-10 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform"
                  }, null, 8, ["src"]))
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors" }, toDisplayString(unref(userName)), 1),
                  createVNode("span", { class: "text-xs text-gray-500" }, "Онлайн")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2.5 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200 group"><svg class="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg><span>Выйти</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="lg:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-md"><div class="flex flex-col space-y-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Главная `);
            } else {
              return [
                createTextVNode(" Главная ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/chat",
          class: "text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Веб-Чат `);
            } else {
              return [
                createTextVNode(" Веб-Чат ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="#features" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"> Возможности </a><a href="#about" class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"> О компании </a>`);
        if (unref(authStore).isAuthenticated) {
          _push(`<div class="pt-4 border-t border-purple-100">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/profile",
            class: "flex items-center space-x-3 mb-4 group",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative"${_scopeId}>`);
                if (!unref(userAvatar)) {
                  _push2(`<div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"${_scopeId}>${ssrInterpolate(unref(userInitials))}</div>`);
                } else {
                  _push2(`<img${ssrRenderAttr("src", unref(userAvatar))} alt="Аватар" class="w-12 h-12 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform"${_scopeId}>`);
                }
                _push2(`</div><div class="flex flex-col"${_scopeId}><span class="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors"${_scopeId}>${ssrInterpolate(unref(userName))}</span><span class="text-xs text-gray-500"${_scopeId}>Онлайн</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    !unref(userAvatar) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform"
                    }, toDisplayString(unref(userInitials)), 1)) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: unref(userAvatar),
                      alt: "Аватар",
                      class: "w-12 h-12 rounded-full object-cover border-2 border-purple-200 group-hover:scale-105 transition-transform"
                    }, null, 8, ["src"]))
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("span", { class: "text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors" }, toDisplayString(unref(userName)), 1),
                    createVNode("span", { class: "text-xs text-gray-500" }, "Онлайн")
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button class="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200 group"><svg class="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg><span>Выйти из аккаунта</span></button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(authStore).isAuthenticated) {
          _push(`<div class="pt-4 border-t border-purple-100 flex flex-col space-y-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/login",
            class: "text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Вход `);
              } else {
                return [
                  createTextVNode(" Вход ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/register",
            class: "bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all text-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Регистрация `);
              } else {
                return [
                  createTextVNode(" Регистрация ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white/80 backdrop-blur-sm border-t border-purple-100" }, _attrs))}><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"><div class="lg:col-span-2"><div class="flex items-center space-x-3 mb-6"><div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><div><span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">WebChat</span><div class="text-xs text-purple-400 font-medium">by TechSolutions</div></div></div><p class="text-gray-600 max-w-md leading-relaxed text-sm lg:text-base"> Современная платформа для безопасного и комфортного общения. Объединяем людей через технологии, обеспечивая бесшовное и защищенное общение. </p><div class="mt-6 flex space-x-4"><a href="#" class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a href="#" class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-400 hover:text-purple-600 transition-colors transform hover:-translate-y-0.5 duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path></svg></a></div></div><div><h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Продукт</h3><ul class="space-y-3"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/chat",
    class: "text-gray-600 hover:text-purple-600 transition-colors text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Веб-Чат`);
      } else {
        return [
          createTextVNode(" Веб-Чат")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#features" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Функции</a></li><li><a href="#pricing" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Тарифы</a></li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Документация</a></li></ul></div><div><h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Компания</h3><ul class="space-y-3"><li><a href="#about" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">О нас</a></li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Блог</a></li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Карьера</a></li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Контакты</a></li></ul></div><div><h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 lg:mb-6">Поддержка</h3><ul class="space-y-3"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "text-gray-600 hover:text-purple-600 transition-colors text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Вход`);
      } else {
        return [
          createTextVNode(" Вход")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/register",
    class: "text-gray-600 hover:text-purple-600 transition-colors text-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Регистрация `);
      } else {
        return [
          createTextVNode("Регистрация ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Помощь</a></li><li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors text-sm">Статус системы</a></li></ul></div></div><div class="mt-8 lg:mt-12 pt-8 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center"><p class="text-sm text-gray-500 text-center md:text-left">© 2024 WebChat by TechSolutions. Все права защищены.</p><div class="mt-4 md:mt-0 flex space-x-6"><a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Конфиденциальность</a><a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Условия</a><a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-sm">Cookie</a></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C90URCxe.mjs.map
