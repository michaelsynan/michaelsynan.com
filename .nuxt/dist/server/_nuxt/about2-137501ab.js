import _sfc_main$1 from "./AboutMenu-0ca6e5ef.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AboutMenu = _sfc_main$1;
  _push(ssrRenderComponent(_component_AboutMenu, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about2 as default
};
//# sourceMappingURL=about2-137501ab.js.map
