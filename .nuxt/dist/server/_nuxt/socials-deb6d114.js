import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "./query-799a057b.js";
import "cookie-es";
import "h3";
import "destr";
import "ohash";
import "ufo";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "@headlessui/vue";
const socials_vue_vue_type_style_index_0_scoped_e187fcd0_lang = "";
const _sfc_main = {
  __name: "socials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4 text-stone-200" }, _attrs))} data-v-e187fcd0><a href="https://mstdn.social/@letsbecomehuman" target="_blank" data-v-e187fcd0>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:mastodon",
        class: "inline p-1 text-stone-300 hover:text-gray-100 big-icon"
      }, null, _parent));
      _push(`</a><a href="https://github.com/letsbecomehuman" target="_blank" data-v-e187fcd0>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:github",
        class: "inline p-1 text-stone-300 hover:text-gray-100 big-icon"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_bank" data-v-e187fcd0>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:linkedin",
        class: "inline p-1 text-stone-300 hover:text-stone-100 big-icon"
      }, null, _parent));
      _push(`</a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/socials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e187fcd0"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=socials-deb6d114.js.map
