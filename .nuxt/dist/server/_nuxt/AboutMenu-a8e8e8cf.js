import { _ as __nuxt_component_0$1 } from "./query-799a057b.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const AboutMenu_vue_vue_type_style_index_0_scoped_0cd97ee1_lang = "";
const _sfc_main = {
  __name: "AboutMenu",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const isOpen1 = ref(false);
    ref(null);
    const isOpen2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-stone-500 overflow-auto absolute" }, _attrs))} data-v-0cd97ee1><div class="text-bluegreen-light opacity-50 font-mono text-sm" data-v-0cd97ee1>menu <span class="translate-y-1 -translate-x-2 inline-block" data-v-0cd97ee1>⤵</span></div><div data-v-0cd97ee1><button class="${ssrRenderClass([{ "text-stone-200": isOpen2.value }, "hover:text-stone-200 transition ease-in-out"])}" data-v-0cd97ee1>Contact <span class="font-mono" data-v-0cd97ee1>${ssrInterpolate(isOpen2.value ? "-" : "+")}</span></button><span class="px-2.5" data-v-0cd97ee1>|</span><button class="${ssrRenderClass([{ "text-stone-200": isOpen1.value }, "hover:text-stone-200 transition ease-in-out"])}" data-v-0cd97ee1>Certifications <span class="font-mono" data-v-0cd97ee1>${ssrInterpolate(isOpen1.value ? "-" : "+")}</span></button><span class="px-2.5" data-v-0cd97ee1>|</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/projects",
        class: "hover:text-stone-200 transition ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav data-v-0cd97ee1><div id="aboutmenu" data-v-0cd97ee1>`);
      if (isOpen2.value) {
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen2.value, "text-stone-200": isOpen2.value }, "pt-2"])}" data-v-0cd97ee1><li data-v-0cd97ee1><a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank" class="hover:text-bluegreen-light" data-v-0cd97ee1>LinkedIn ↗</a></li><li data-v-0cd97ee1><a href="https://airtable.com/shrTD2l45wB1qa6Pb" target="_blank" class="hover:text-bluegreen-light" data-v-0cd97ee1>Message Me ↗</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen1.value) {
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen1.value, "text-stone-200": isOpen1.value }, "pt-2"])}" data-v-0cd97ee1><li data-v-0cd97ee1><a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" target="_blank" class="hover:text-bluegreen-light" data-v-0cd97ee1>Google Ad Search ↗</a></li><li data-v-0cd97ee1><a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" target="_blank" class="hover:text-bluegreen-light" data-v-0cd97ee1>Google Analytics ↗</a></li><li data-v-0cd97ee1><a href="https://www.coursera.org/account/accomplishments/certificate/2RSPD7AUSRZP" target="_blank" class="hover:text-bluegreen-light" data-v-0cd97ee1>Google UX Design ↗</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cd97ee1"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=AboutMenu-a8e8e8cf.js.map
