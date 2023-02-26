import { b as useRuntimeConfig } from "./query-799a057b.js";
import { mergeProps, useSSRContext } from "vue";
import { u as useHead } from "./composables-e12d5520.js";
import "destr";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_8263b490_lang = "";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col flex-grow text-white place-content-center" }, _attrs))} data-v-8263b490><div class="w-4/5 md:w-2/3 mx-auto" data-v-8263b490><div class="grid grid-cols-5" data-v-8263b490><div class="col-span-5 p-5 md:p-20 -mb-5" data-v-8263b490><h1 id="heading" class="pb-24 tracking-wide text-8xl font-display xs:text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-h-screen" data-v-8263b490><span class="letter" data-v-8263b490>Front</span><span class="letter" data-v-8263b490>-</span><span class="letter" data-v-8263b490>End </span><span class="letter" data-v-8263b490>Developer </span><span class="letter" data-v-8263b490>&amp; </span><span class="letter" data-v-8263b490>Project </span><span class="letter" data-v-8263b490>Manager</span><span class="letter" data-v-8263b490>.</span></h1></div><div class="hidden absolute bottom-0" data-v-8263b490><a rel="me" href="https://mstdn.social/@letsbecomehuman" data-v-8263b490>Mastodon Verification</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8263b490"]]);
export {
  index as default
};
//# sourceMappingURL=index-0d797cb3.js.map
