import __nuxt_component_0 from "./AboutMenu-a8e8e8cf.js";
import { b as useRuntimeConfig } from "./query-799a057b.js";
import { mergeProps, useSSRContext } from "vue";
import { u as useHead } from "./composables-e12d5520.js";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./michael_synan-092a0299.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "@headlessui/vue";
import "cookie-es";
import "hookable";
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
      const _component_AboutMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-start md:place-content-center pb-40" }, _attrs))}><div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2"><div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8"><div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm"><img class="absolute top-0 object-cover object-center w-full h-full"${ssrRenderAttr("src", _imports_0)}></div><div class="px-4 about2 leading-snug md:leading-normal col-span-2 align-middle sm:col-span-3 xs:col-span-3 md:col-span-2"><p class="pb-3 text-2g md:text-2xl"> I&#39;m Michael, a front-end developer, long-time Linux user, philosophy nerd, and open-source advocate. My Master&#39;s degree in Urban Affairs and Bachelor&#39;s degree in Psychology have helped me understand the human side of technology. </p><span class="mt-2 text-2g md:text-2xl pb-2 mb-4 inline-block w-full">Let&#39;s collaborate.</span>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=about-1ab469c1.js.map
