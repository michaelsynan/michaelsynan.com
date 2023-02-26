import _sfc_main$1 from "./tags-0a9b3350.js";
import _sfc_main$2 from "./publishdate-e8782416.js";
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
import "./head-02c183b3.js";
import "./composables-e12d5520.js";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "@headlessui/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blogpostitems",
  __ssrInlineRender: true,
  setup(__props) {
    useContent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tags = _sfc_main$1;
      const _component_publishdate = _sfc_main$2;
      _push(`<!--[--><hr class="separator"><div class="grid grid-cols-6 pb-5"><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_tags, null, null, _parent));
      _push(`</div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_publishdate, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/blogpostitems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=blogpostitems-785e7413.js.map
