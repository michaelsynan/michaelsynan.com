import { p as publicAssetsURL } from '../../paths.mjs';
import { b as useRuntimeConfig, _ as __nuxt_component_0 } from './query-799a057b.mjs';
import __nuxt_component_1 from './socials-deb6d114.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@iconify+vue@4.0.2/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+vue@1.0.18_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+dom@1.0.18/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+ssr@1.0.18/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@headlessui+vue@1.7.7/node_modules/@headlessui/vue/dist/headlessui.esm.js';

const _imports_0 = "" + publicAssetsURL("michael_synan.jpg");
const _sfc_main = {
  __name: "about",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient" }, _attrs))} data-v-a94491c7><div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2" data-v-a94491c7><div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8" data-v-a94491c7><div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm" data-v-a94491c7><img class="absolute top-0 object-cover object-center w-full h-full"${ssrRenderAttr("src", _imports_0)} data-v-a94491c7></div><div class="about2 leading-snug md:leading-normal col-span-2 p-3 md:p-6 text-lg md:text-xl align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 mainborder drop-shadow-sm" data-v-a94491c7><h1 class="pb-3 md:pb-6 text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold" data-v-a94491c7> Good day, y&#39;all </h1><p class="pb-3" data-v-a94491c7> I&#39;m Michael, front end developer and Project Manager at Kawakami. I&#39;m a long time linux user, philosophy nerd, and opensource advocate. </p><p data-v-a94491c7> See some of my work at `);
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
      _push(` or check out some of the links below. </p>`);
      _push(ssrRenderComponent(_component_socials, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a94491c7"]]);

export { about as default };
//# sourceMappingURL=about-9f42b91d.mjs.map
