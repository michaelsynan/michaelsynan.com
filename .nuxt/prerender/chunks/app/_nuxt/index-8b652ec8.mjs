import { b as useRuntimeConfig, _ as __nuxt_component_0 } from './query-799a057b.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+vue@1.0.18_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+dom@1.0.18/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+ssr@1.0.18/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@headlessui+vue@1.7.7/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = useRuntimeConfig();
    useHead({
      title: runtimeConfig.public.siteName,
      meta: [
        { name: "description", content: "Hi! I'm a front-end developer with a background in digital marketing, project management, and UI/UX design." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-center" }, _attrs))} data-v-dd054029><div class="w-4/5 md:w-2/3 mx-auto" data-v-dd054029><div class="grid grid-cols-5" data-v-dd054029><div class="col-span-5 p-5 md:p-20 -mb-5" data-v-dd054029><h1 id="heading" class="pb-10 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen text-stone-100 select-none" data-v-dd054029><span class="letter" data-v-dd054029>Front</span><span class="letter" data-v-dd054029>-</span><span class="letter" data-v-dd054029>End </span><span class="letter" data-v-dd054029>Developer </span><span class="letter" data-v-dd054029>&amp; </span><span class="letter" data-v-dd054029>Project </span><span class="letter" data-v-dd054029>Manager</span><span class="letter" data-v-dd054029>.</span></h1><h1 class="text-white text-lg ml-auto w-full inline-block select-none" data-v-dd054029>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/about",
        id: "link1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="transition ease-in-out border-2 border-white p-2 px-3 md:p-3 md:px-4 text-base md:text-lg mr-4 hover:bg-white hover:!text-[#131721] hover:transition-all" data-v-dd054029${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", { class: "transition ease-in-out border-2 border-white p-2 px-3 md:p-3 md:px-4 text-base md:text-lg mr-4 hover:bg-white hover:!text-[#131721] hover:transition-all" }, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://airtable.com/shrTD2l45wB1qa6Pb" class="group block md:inline-block mt-6 md:mt-0" id="link2" data-v-dd054029>Let&#39;s Talk <span class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light" data-v-dd054029>\u2192</span></a></h1></div><div class="hidden absolute bottom-0" data-v-dd054029><a rel="me" href="https://mstdn.social/@letsbecomehuman" data-v-dd054029>Mastodon Verification</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd054029"]]);

export { index as default };
//# sourceMappingURL=index-8b652ec8.mjs.map
