import __nuxt_component_0 from "./page-13d62290.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "vue-router";
import "defu";
import "./query-799a057b.js";
import "cookie-es";
import "h3";
import "destr";
import "ohash";
import "ufo";
import "hookable";
import "unctx";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "@headlessui/vue";
const _sfc_main = {
  __name: "post",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wholething bg-gradient flex flex-col min-h-screen prose h-max max-w-none bg-zinc-900 prose-invert" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtPage, { class: "xs:w-11/12 sm:w-11/12 md:w-2/5 p-5 md:p-10 mx-auto mt-20 prose-lg bg-zinc-900 mb-10 drop-shadow-sm" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=post-3ad03787.js.map
