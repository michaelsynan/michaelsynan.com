import _sfc_main$1 from './AboutMenu-0ca6e5ef.mjs';
import { b as useRuntimeConfig } from './query-799a057b.mjs';
import { mergeProps, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './michael_synan-092a0299.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import '../../paths.mjs';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';

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
      const _component_AboutMenu = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient" }, _attrs))}><div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2"><div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8"><div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm"><img class="absolute top-0 object-cover object-center w-full h-full"${ssrRenderAttr("src", _imports_0)}></div><div class="px-4 about2 leading-snug md:leading-normal col-span-2 align-middle sm:col-span-3 xs:col-span-3 md:col-span-2"><p class="pb-3 text-2g md:text-2xl"> I&#39;m Michael, front-end developer, long-time Linux user, philosophy nerd, and open source advocate. My Master&#39;s in Urban Affairs and Public Policy and BA in Psychology help me to understand the human side of technology. </p><span class="mt-2 text-2g md:text-2xl pb-2 mb-4 inline-block w-full">Let&#39;s work together.</span>`);
      _push(ssrRenderComponent(_component_AboutMenu, null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=about-d37f7bc7.mjs.map
