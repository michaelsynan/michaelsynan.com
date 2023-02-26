import { b as useRuntimeConfig, _ as __nuxt_component_0 } from './query-799a057b.mjs';
import __nuxt_component_1 from './socials-ca94a81a.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './michael_synan-092a0299.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@iconify+vue@4.0.2/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+vue@1.0.18_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+dom@1.0.18/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+ssr@1.0.18/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@headlessui+vue@1.7.7/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import '../../paths.mjs';

const _sfc_main = {
  __name: "thank-you",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = useRuntimeConfig();
    useHead({
      title: "About | " + runtimeConfig.public.siteName,
      meta: [{ name: "description", content: "I'm into programming, jazz and chess. Check out my awesome links!" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_socials = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient" }, _attrs))} data-v-2231969a><div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2" data-v-2231969a><div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8" data-v-2231969a><div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm" data-v-2231969a><img class="absolute top-0 object-cover object-center w-full h-full"${ssrRenderAttr("src", _imports_0)} data-v-2231969a></div><div class="about2 leading-snug md:leading-normal col-span-2 p-3 md:p-6 text-lg md:text-xl align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 mainborder drop-shadow-sm" data-v-2231969a><h1 class="pb-3 md:pb-6 text-4xl xs:text-2xl sm:text-2xl md:text-2xl" data-v-2231969a> Good day, y&#39;all </h1><p class="pb-3" data-v-2231969a> I&#39;m Michael, front-end developer and Project Manager at Kawakami. I&#39;m a long-time Linux user, philosophy nerd, and open source advocate. </p><p data-v-2231969a> See some of my work at `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`/projects`);
          } else {
            return [
              createTextVNode("/projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` or check out some of the links below. </p><div class="py-3 links" data-v-2231969a>Certificates: <a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" data-v-2231969a>Google Ad Search</a> | <a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" data-v-2231969a>Google Analytics</a></div>`);
      _push(ssrRenderComponent(_component_socials, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thank-you.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thankYou = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2231969a"]]);

export { thankYou as default };
//# sourceMappingURL=thank-you-5a851898.mjs.map
