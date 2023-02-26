import __nuxt_component_2 from "./backbutton-eee0e16f.js";
import { a as useContent } from "../server.mjs";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./query-799a057b.js";
import "cookie-es";
import "h3";
import "destr";
import "ohash";
import "ufo";
import "hookable";
import "unctx";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "@headlessui/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blogpostitems-bottom.",
  __ssrInlineRender: true,
  setup(__props) {
    useContent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_backbutton = __nuxt_component_2;
      _push(`<!--[--><div class="mt-20"><hr class="separator"></div>`);
      _push(ssrRenderComponent(_component_backbutton, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/blogpostitems-bottom..vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=blogpostitems-bottom.-7056c9ac.js.map
