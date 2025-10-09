import { ref, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderDynamicModel } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-rFvIby8I.mjs';
import 'pinia';

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const user = ref(authStore.user);
    const showAvatarModal = ref(false);
    const showDeleteModal = ref(false);
    const profileLoading = ref(false);
    const passwordLoading = ref(false);
    const avatarLoading = ref(false);
    const deleteLoading = ref(false);
    const profileForm = reactive({
      name: user.value?.name || "",
      secondname: user.value?.secondname || "",
      email: user.value?.email || ""
    });
    const passwordForm = reactive({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const avatarForm = reactive({
      url: user.value?.avatar_url || ""
    });
    const deleteConfirmation = ref("");
    const showCurrentPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-8" }, _attrs))}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900">Профиль пользователя</h1><p class="text-gray-600 mt-2">Управление вашей учетной записью</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1"><div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"><div class="text-center"><div class="relative inline-block"><img${ssrRenderAttr("src", unref(user).avatar_url || "/default-avatar.png")} alt="Аватар" class="w-32 h-32 rounded-full mx-auto border-4 border-purple-100 object-cover"><button class="absolute bottom-0 right-0 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button></div><h2 class="text-xl font-semibold text-gray-900 mt-4">${ssrInterpolate(unref(user).name)} ${ssrInterpolate(unref(user).secondname)}</h2><p class="text-gray-600">${ssrInterpolate(unref(user).email)}</p><p class="text-sm text-gray-500 mt-2"> Участник с ${ssrInterpolate(new Date(unref(user).created_at).toLocaleDateString("ru-RU"))}</p></div><div class="mt-6 space-y-3"><div class="flex justify-between text-sm"><span class="text-gray-600">Статус</span><span class="text-green-600 font-medium">Активен</span></div><div class="flex justify-between text-sm"><span class="text-gray-600">Последний вход</span><span class="text-gray-900">Сегодня</span></div></div></div></div><div class="lg:col-span-2 space-y-6"><div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Основная информация</h3><form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Имя</label><input type="text"${ssrRenderAttr("value", unref(profileForm).name)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label><input type="text"${ssrRenderAttr("value", unref(profileForm).secondname)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email"${ssrRenderAttr("value", unref(profileForm).email)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" disabled><p class="text-sm text-gray-500 mt-1">Email нельзя изменить</p></div><button type="submit"${ssrIncludeBooleanAttr(unref(profileLoading)) ? " disabled" : ""} class="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">`);
      if (unref(profileLoading)) {
        _push(`<span>Сохранение...</span>`);
      } else {
        _push(`<span>Сохранить изменения</span>`);
      }
      _push(`</button></form></div><div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Смена пароля</h3><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">Текущий пароль</label><input${ssrRenderAttr("type", unref(showCurrentPassword) ? "text" : "password")}${ssrRenderDynamicModel(unref(showCurrentPassword) ? "text" : "password", unref(passwordForm).currentPassword, null)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Новый пароль</label><input${ssrRenderAttr("type", unref(showNewPassword) ? "text" : "password")}${ssrRenderDynamicModel(unref(showNewPassword) ? "text" : "password", unref(passwordForm).newPassword, null)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Подтвердите новый пароль</label><input${ssrRenderAttr("type", unref(showConfirmPassword) ? "text" : "password")}${ssrRenderDynamicModel(unref(showConfirmPassword) ? "text" : "password", unref(passwordForm).confirmPassword, null)} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div><button type="submit"${ssrIncludeBooleanAttr(unref(passwordLoading)) ? " disabled" : ""} class="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">`);
      if (unref(passwordLoading)) {
        _push(`<span>Смена пароля...</span>`);
      } else {
        _push(`<span>Сменить пароль</span>`);
      }
      _push(`</button></form></div><div class="bg-white rounded-2xl shadow-sm border border-red-200 p-6"><h3 class="text-lg font-semibold text-red-700 mb-4">Опасная зона</h3><p class="text-gray-600 mb-4">Удаление аккаунта невозможно отменить. Все ваши данные будут безвозвратно удалены.</p><button class="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"> Удалить аккаунт </button></div></div></div></div>`);
      if (unref(showAvatarModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4"><h3 class="text-lg font-semibold text-gray-900 mb-4">Смена аватара</h3><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">URL аватара</label><input type="text"${ssrRenderAttr("value", unref(avatarForm).url)} placeholder="https://example.com/avatar.jpg" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"></div><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"> Отмена </button><button${ssrIncludeBooleanAttr(unref(avatarLoading)) ? " disabled" : ""} class="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50">`);
        if (unref(avatarLoading)) {
          _push(`<span>Сохранение...</span>`);
        } else {
          _push(`<span>Сохранить</span>`);
        }
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showDeleteModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4"><h3 class="text-lg font-semibold text-red-700 mb-4">Удаление аккаунта</h3><p class="text-gray-600 mb-4">Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.</p><div class="mb-4"><label class="block text-sm font-medium text-gray-700 mb-2"> Введите &quot;УДАЛИТЬ&quot; для подтверждения </label><input type="text"${ssrRenderAttr("value", unref(deleteConfirmation))} class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"></div><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"> Отмена </button><button${ssrIncludeBooleanAttr(unref(deleteConfirmation) !== "УДАЛИТЬ" || unref(deleteLoading)) ? " disabled" : ""} class="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50">`);
        if (unref(deleteLoading)) {
          _push(`<span>Удаление...</span>`);
        } else {
          _push(`<span>Удалить аккаунт</span>`);
        }
        _push(`</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-Du1di4tx.mjs.map
