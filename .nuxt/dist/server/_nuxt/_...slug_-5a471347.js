import _sfc_main$1 from "./ContentDoc-8fda4952.js";
import _sfc_main$2 from "./ContentRenderer-58d5ca16.js";
import { a as useContent } from "../server.mjs";
import { m as useRouter } from "./query-799a057b.js";
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import "destr";
import { u as useContentHead } from "./head-02c183b3.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "ufo";
import "./ContentQuery-df543c1f.js";
import "ohash";
import "cookie-es";
import "h3";
import "hookable";
import "unctx";
import "./composables-e12d5520.js";
import "./ContentRendererMarkdown-2fa2fa69.js";
import "scule";
import "property-information";
import "html-tags";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "@headlessui/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    useRouter();
    useRoute();
    useContentHead(page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ContentDoc, { class: "bg-gradient" }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl md:text-4xl"${_scopeId}>${ssrInterpolate(doc.title)}</h1>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-2xl md:text-4xl" }, toDisplayString(doc.title), 1),
              createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Squiggle not found mate `);
          } else {
            return [
              createTextVNode(" Squiggle not found mate ")
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Document is empty</h1>`);
          } else {
            return [
              createVNode("h1", null, "Document is empty")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-5a471347.js.map
