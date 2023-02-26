import { mergeProps, unref, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@iconify+vue@4.0.2/node_modules/@iconify/vue/dist/iconify.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import './query-799a057b.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+vue@1.0.18_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+dom@1.0.18/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+ssr@1.0.18/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@headlessui+vue@1.7.7/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';

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

export { __nuxt_component_1 as default };
//# sourceMappingURL=socials-deb6d114.mjs.map
