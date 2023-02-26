import { b as useRuntimeConfig } from './query-799a057b.mjs';
import { mergeProps, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-center" }, _attrs))} data-v-e99d332a><div class="w-4/5 md:w-2/3 mx-auto" data-v-e99d332a><div class="grid grid-cols-5" data-v-e99d332a><div class="col-span-5 p-5 md:p-20 -mb-5" data-v-e99d332a><h1 id="heading" class="pb-10 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen bg-gradient-to-tr from-gray-100 via-zinc-100 to-rose-100 text-transparent bg-clip-text select-none" data-v-e99d332a><span class="letter" data-v-e99d332a>Front</span><span class="letter" data-v-e99d332a>-</span><span class="letter" data-v-e99d332a>End </span><span class="letter" data-v-e99d332a>Developer </span><span class="letter" data-v-e99d332a>&amp; </span><span class="letter" data-v-e99d332a>Project </span><span class="letter" data-v-e99d332a>Manager</span><span class="letter" data-v-e99d332a>.</span></h1><h1 class="group bg-gradient-to-tr from-gray-100 via-zinc-100 to-rose-100 text-transparent bg-clip-text bg-gradient-to-r text-3xl ml-auto w-full inline-block select-none" id="heading2" data-v-e99d332a><a href="https://airtable.com/shrTD2l45wB1qa6Pb" data-v-e99d332a>Let&#39;s talk <span class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light" data-v-e99d332a>\u2192</span></a></h1></div><div class="hidden absolute bottom-0" data-v-e99d332a><a rel="me" href="https://mstdn.social/@letsbecomehuman" data-v-e99d332a>Mastodon Verification</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e99d332a"]]);

export { index as default };
//# sourceMappingURL=index-b5e3d3ac.mjs.map
