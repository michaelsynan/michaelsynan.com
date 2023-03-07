import { _ as __nuxt_component_0 } from "./query-799a057b.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "cookie-es";
import "h3";
import "destr";
import "ohash";
import "ufo";
import "hookable";
import "unctx";
const AboutMenu_vue_vue_type_style_index_0_lang = "";
const AboutMenu_vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "AboutMenu",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const isOpen1 = ref(false);
    ref(null);
    const isOpen2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-stone-500" }, _attrs))}><div><button class="${ssrRenderClass([{ "text-stone-200": isOpen2.value }, "px-1"])}">Get in Contact ${ssrInterpolate(isOpen2.value ? "-" : "+")}</button><span class="px-2">|</span><button class="${ssrRenderClass([{ "text-stone-200": isOpen1.value }, "px-1"])}">Certifications ${ssrInterpolate(isOpen1.value ? "-" : "+")}</button><span class="px-2">|</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects" }, {
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
      _push(`</div><div>`);
      if (isOpen2.value) {
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen2.value, "text-stone-200": isOpen2.value }, "pt-2"])}"><li><a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank">⁃ LinkedIn ↗</a></li><li><a href="https://airtable.com/shrTD2l45wB1qa6Pb" target="_blank">⁃ Message Me ↗</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen1.value) {
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen1.value, "text-stone-200": isOpen1.value }, "pt-2"])}"><li><a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" target="_blank">⁃ Google Ad Search ↗</a></li><li><a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" target="_blank">⁃ Google Analytics ↗</a></li><li><a href="https://www.coursera.org/account/accomplishments/certificate/2RSPD7AUSRZP" target="_blank">⁃ Google UX Design ↗</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=AboutMenu-0ca6e5ef.js.map
