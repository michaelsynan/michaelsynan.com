import { _ as __nuxt_component_0 } from './query-799a057b.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-stone-500" }, _attrs))}><div><button class="${ssrRenderClass([{ "text-stone-200": isOpen2.value }, "px-0 md:px-1"])}">Contact ${ssrInterpolate(isOpen2.value ? "-" : "+")}</button><span class="px-2">|</span><button class="${ssrRenderClass([{ "text-stone-200": isOpen1.value }, "px-0 md:px-1"])}">Certifications ${ssrInterpolate(isOpen1.value ? "-" : "+")}</button><span class="px-2">|</span>`);
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
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen2.value, "text-stone-200": isOpen2.value }, "pt-2"])}"><li><a href="https://www.linkedin.com/in/hellomichaelsynan/" target="_blank">\u2043 LinkedIn \u2197</a></li><li><a href="https://airtable.com/shrTD2l45wB1qa6Pb" target="_blank">\u2043 Message Me \u2197</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen1.value) {
        _push(`<ul class="${ssrRenderClass([{ "opacity-0": !isOpen1.value, "text-stone-200": isOpen1.value }, "pt-2"])}"><li><a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" target="_blank">\u2043 Google Ad Search \u2197</a></li><li><a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" target="_blank">\u2043 Google Analytics \u2197</a></li><li><a href="https://www.coursera.org/account/accomplishments/certificate/2RSPD7AUSRZP" target="_blank">\u2043 Google UX Design \u2197</a></li></ul>`);
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

export { _sfc_main as default };
//# sourceMappingURL=AboutMenu-b2bdf14f.mjs.map
