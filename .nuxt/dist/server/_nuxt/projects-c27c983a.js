import { b as useRuntimeConfig, _ as __nuxt_component_0 } from "./query-799a057b.js";
import { openBlock, createElementBlock, createElementVNode, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { u as useHead } from "./composables-e12d5520.js";
import "destr";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { h as defineStore, _ as _export_sfc } from "../server.mjs";
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
const projects_vue_vue_type_style_index_0_scoped_1a3dea45_lang = "";
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
export {
  projects as default
};
//# sourceMappingURL=projects-c27c983a.js.map
