import { b as useRuntimeConfig, _ as __nuxt_component_0 } from './query-799a057b.mjs';
import { reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { u as useHead } from './composables-e12d5520.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { h as defineStore, _ as _export_sfc } from '../server.mjs';
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

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",
      "clip-rule": "evenodd"
    })
  ]);
}
const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Brew Factory",
        image: "/brewfactory.jpeg",
        placeholder: "./brewfactory_place.jpg",
        description: "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
        tech: ["Shopify"],
        link: "https://brewfactory.io/",
        featured: true,
        responsibility: "Project Manager & Developer"
      },
      {
        id: 2,
        name: "Big City Dog Walkers",
        image: "/bigcitydogwalkers.png",
        plaeholder: "./bigcitydogwalkers_place.jpg",
        description: "This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum.",
        tech: ["Vue.js", "Nuxt", "Bootstrap.js"],
        link: "https://bigcitydogwalkers.com/",
        responsibility: "Developer"
      },
      {
        id: 3,
        name: "Kawakami",
        image: "/kawakami.png",
        placeholder: "./kawakami_place.jpg",
        description: "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://kawakami.io/",
        featured: true,
        responsibility: "Project Manager"
      },
      {
        id: 4,
        name: "Discord Price Bot",
        image: "/github.jpeg",
        placeholder: "./github_place.jpg",
        description: "I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",
        tech: ["Python"],
        link: "https://github.com/letsbecomehuman/discord-price-bot",
        responsibility: "Developer"
      }
    ],
    grave: [
      {}
    ]
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) => state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave
  }
});
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projectStore = useProjectStore();
    const projects2 = projectStore.getAllProjects;
    reactive({
      arrow: render
    });
    const runtimeConfig = useRuntimeConfig();
    useHead({
      title: "Projects | " + runtimeConfig.public.siteName,
      meta: [{ name: "description", content: "Freelance front-end developer and project manager." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full pt-16 mx-auto text-gray-200 xs:w-5/6 sm:w-3/4 md:w-2/3 w-5/6" }, _attrs))} data-v-1a3dea45><div id="projects" class="projects grid grid-cols-2 gap-10 xs:gap-6 sm:gap-6 md:gap-10 xs:mb-5 sm:mb-5 md:mb-0" data-v-1a3dea45><!--[-->`);
      ssrRenderList(unref(projects2), (project, index) => {
        _push(`<div class="projects col-span-2 p-0 group md:col-span-1 lg:col-span-1 drop-shadow-sm mainborder projects" data-v-1a3dea45><div data-v-1a3dea45><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", _ctx.name)} class="transition-all drop-shadow brightness-[.90] group-hover:brightness-100" data-v-1a3dea45><div class="" data-v-1a3dea45><div class="grid w-full grid-cols-5 px-3 py-2 bg-neutral-900" data-v-1a3dea45><div class="col-span-3 xs:col-span-5 sm:col-span-5 md:col-span-3" data-v-1a3dea45>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: project.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="transition-colors group-hover:text-gray-100 xs:text-lg sm:text-lg md:text-lg lg:text-lg" data-v-1a3dea45${_scopeId}>${ssrInterpolate(project.name)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "transition-colors group-hover:text-gray-100 xs:text-lg sm:text-lg md:text-lg lg:text-lg" }, toDisplayString(project.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="col-span-2 xs:col-span-5 sm:col-span-5 md:col-span-2 text-base xs:text-left sm:text-left md:text-right text-right align-text-bottom text-zinc-500 transition-colors group-hover:text-zinc-400 inline-block text-align-middle my-auto" data-v-1a3dea45>${ssrInterpolate(project.responsibility)}</div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a3dea45"]]);

export { projects as default };
//# sourceMappingURL=projects-c27c983a.mjs.map
