import { a as useContent } from '../server.mjs';
import { defineComponent, unref, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "publishdate",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    function formatDate(date) {
      return new Date(date).toLocaleDateString("en", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="m-0 text-right text-sm md:text-lg text-zinc-500">${ssrInterpolate(formatDate(unref(page).createdAt))}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/publishdate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publishdate-e8782416.mjs.map
