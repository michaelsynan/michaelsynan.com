import __nuxt_component_0 from './tagsearch-1b4b18fb.mjs';
import { h as defineStore, a as useContent } from '../server.mjs';
import { u as useContentHead } from './head-02c183b3.mjs';
import { m as useRouter } from './query-799a057b.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import './ContentList-f008f177.mjs';
import './ContentQuery-df543c1f.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/h3@1.1.0/node_modules/h3/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ufo@1.0.1/node_modules/ufo/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/unctx@2.1.1/node_modules/unctx/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/ofetch@1.0.0/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+vue@1.0.18_vue@3.2.45/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+dom@1.0.18/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@unhead+ssr@1.0.18/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/@headlessui+vue@1.7.7/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../../nitro/config.mjs';
import 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import './backbutton-eee0e16f.mjs';
import './composables-e12d5520.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=_tag_-56f94ff6.mjs.map
