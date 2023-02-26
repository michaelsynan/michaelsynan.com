import __nuxt_component_0 from "./tagsearch-1b4b18fb.js";
import { h as defineStore, a as useContent } from "../server.mjs";
import { u as useContentHead } from "./head-02c183b3.js";
import { m as useRouter } from "./query-799a057b.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "./ContentList-f008f177.js";
import "./ContentQuery-df543c1f.js";
import "ohash";
import "cookie-es";
import "h3";
import "ufo";
import "hookable";
import "unctx";
import "ofetch";
import "#internal/nitro";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "@headlessui/vue";
import "./backbutton-eee0e16f.js";
import "./composables-e12d5520.js";
const useTagStore = defineStore("tagStore", {
  state: () => ({
    tags: [
      {
        id: 1,
        name: "Obsidian",
        description: "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
        featured: true
      },
      {
        id: 2,
        name: "Nuxt",
        description: "This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum."
      },
      {
        id: 3,
        name: "Content",
        description: "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
        featured: true
      },
      {
        id: 4,
        name: "Discord Price Bot",
        image: "/github.jpeg",
        placeholder: "./github_place.jpg",
        description: "I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",
        tech: ["Python"],
        link: "https://github.com",
        responsibility: "Developer"
      }
    ]
  }),
  getters: {
    getAllTags: (state) => state.tags,
    getFeaturedTags: (state) => state.tags.filter((name) => tags.Projectfeatured)
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tag]",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    useContentHead(page);
    useRouter();
    const route = useRoute();
    route.params.tag;
    const tagStore = useTagStore();
    tagStore.getAllTags;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tagsearch = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "!bg-gradient" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_tagsearch, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tag/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_tag_-56f94ff6.js.map
