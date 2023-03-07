import { b as useRuntimeConfig, _ as __nuxt_component_0 } from "./query-799a057b.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-e12d5520.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_25db26d7_lang = "";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-center" }, _attrs))} data-v-25db26d7><div class="w-4/5 md:w-2/3 mx-auto" data-v-25db26d7><div class="grid grid-cols-5" data-v-25db26d7><div class="col-span-5 p-5 md:p-20 -mb-5" data-v-25db26d7><h1 id="heading" class="pb-10 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen bg-gradient-to-tr from-gray-100 via-zinc-100 to-rose-100 text-transparent bg-clip-text select-none" data-v-25db26d7><span class="letter" data-v-25db26d7>Front</span><span class="letter" data-v-25db26d7>-</span><span class="letter" data-v-25db26d7>End </span><span class="letter" data-v-25db26d7>Developer </span><span class="letter" data-v-25db26d7>&amp; </span><span class="letter" data-v-25db26d7>Project </span><span class="letter" data-v-25db26d7>Manager</span><span class="letter" data-v-25db26d7>.</span></h1><h1 class="bg-gradient-to-tr text-white text-lg ml-auto w-full inline-block select-none" data-v-25db26d7>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/about",
        id: "link1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="transition ease-in-out border-2 border-white p-2 px-3 md:p-3 md:px-4 text-base md:text-lg mr-4 hover:bg-white hover:!text-[#131721] hover:transition-all" data-v-25db26d7${_scopeId}>Learn More</span>`);
          } else {
            return [
              createVNode("span", { class: "transition ease-in-out border-2 border-white p-2 px-3 md:p-3 md:px-4 text-base md:text-lg mr-4 hover:bg-white hover:!text-[#131721] hover:transition-all" }, "Learn More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://airtable.com/shrTD2l45wB1qa6Pb" class="group block md:inline-block mt-6 md:mt-0" id="link2" data-v-25db26d7>Let&#39;s Talk <span class="group-hover:pl-2 group-hover:transition-all text-bluegreen group-hover:text-bluegreen-light" data-v-25db26d7>→</span></a></h1></div><div class="hidden absolute bottom-0" data-v-25db26d7><a rel="me" href="https://mstdn.social/@letsbecomehuman" data-v-25db26d7>Mastodon Verification</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25db26d7"]]);
export {
  index as default
};
//# sourceMappingURL=index-e0c64a4c.js.map
