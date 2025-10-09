import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  __name: "debug-loading",
  __ssrInlineRender: true,
  setup(__props) {
    const metrics = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}><h1 class="text-2xl font-bold mb-4">Debug Loading</h1><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(metrics), (metric) => {
        _push(`<div class="p-4 border rounded"><h3 class="font-semibold">${ssrInterpolate(metric.name)}</h3><p>Время: ${ssrInterpolate(metric.time)}ms</p><p class="${ssrRenderClass(metric.status === "good" ? "text-green-600" : "text-red-600")}">${ssrInterpolate(metric.status === "good" ? "✅" : "❌")} ${ssrInterpolate(metric.message)}</p></div>`);
      });
      _push(`<!--]--></div><button class="mt-6 bg-blue-500 text-white px-4 py-2 rounded"> Запустить диагностику </button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/debug-loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=debug-loading-Cggo85N5.mjs.map
