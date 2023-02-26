import { b as useRuntimeConfig, _ as __nuxt_component_0 } from "./query-799a057b.js";
import __nuxt_component_1 from "./socials-deb6d114.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-e12d5520.js";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "@iconify/vue";
import { _ as _export_sfc } from "../server.mjs";
import "cookie-es";
import "h3";
import "ohash";
import "ufo";
import "hookable";
import "unctx";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "@headlessui/vue";
const _imports_0 = "" + __publicAssetsURL("michael_synan.jpg");
const about_vue_vue_type_style_index_0_scoped_5f154dc5_lang = "";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-start md:place-content-center bg-gradient" }, _attrs))} data-v-5f154dc5><div class="mx-auto w-11/12 sm:w-2/3 md:w-2/3 lg:1/2" data-v-5f154dc5><div class="grid grid-cols-3 gap-3 pb-0 pt-16 md:pt-8" data-v-5f154dc5><div class="about1 relative col-span-3 pb-1/1 md:col-span-1 drop-shadow-sm" data-v-5f154dc5><img class="absolute top-0 object-cover object-center w-full h-full"${ssrRenderAttr("src", _imports_0)} data-v-5f154dc5></div><div class="about2 leading-snug md:leading-normal col-span-2 p-3 md:p-6 text-lg md:text-xl align-middle sm:col-span-3 xs:col-span-3 md:col-span-2 mainborder drop-shadow-sm" data-v-5f154dc5><h1 class="pb-3 md:pb-6 text-4xl xs:text-2xl sm:text-2xl md:text-2xl" data-v-5f154dc5> Good day, y&#39;all </h1><p class="pb-3" data-v-5f154dc5> I&#39;m Michael, front-end developer and Project Manager at Kawakami. I&#39;m a long-time Linux user, philosophy nerd, and open source advocate. </p><p data-v-5f154dc5> See some of my work at `);
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
      _push(` or check out some of the links below. </p><div class="py-3 links" data-v-5f154dc5>Certificates: <a href="https://skillshop.credential.net/e5d43232-e49e-46f4-91fb-6eec91fbc730?record_view=true" data-v-5f154dc5>Google Ad Search</a> | <a href="https://skillshop.credential.net/012ab1f5-95f1-4791-815e-af1b6dd3c8ca?record_view=true" data-v-5f154dc5>Google Analytics</a></div>`);
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
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f154dc5"]]);
export {
  about as default
};
//# sourceMappingURL=about-20c6fdee.js.map
