import _sfc_main$1 from "./ContentList-f008f177.js";
import { _ as __nuxt_component_0 } from "./query-799a057b.js";
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./ContentQuery-df543c1f.js";
import "ohash";
import "destr";
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
const blogposts_vue_vue_type_style_index_0_scoped_b851b348_lang = "";
useRoute();
const _sfc_main = {
  async asyncData({ $content, params }) {
    const page = await $content("pages", params.slug).fetch();
    return { page };
  },
  setup() {
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("en", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContentList = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ContentList, mergeProps({
    path: "/blog",
    use: _ctx.$slots.default,
    where: { category: "post", status: "published" }
  }, _attrs), {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(list, (page) => {
          _push2(`<div class="p-3 md:p-4 transition-colors article-card mainborder drop-shadow-sm blogs" data-v-b851b348${_scopeId}><div class="grid grid-cols-4" data-v-b851b348${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: page._path,
            class: "no-underline col-span-3 xs:col-span-4 sm:col-span-4 md:col-span-3",
            key: _ctx.$route.path
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<h2 class="text-xl md:text-2xl" data-v-b851b348${_scopeId2}>${ssrInterpolate(page.title)}</h2>`);
              } else {
                return [
                  createVNode("h2", { class: "text-xl md:text-2xl" }, toDisplayString(page.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`<p class="publishdate col-span-1 text-right xs:col-span-4 sm:col-span-4 md:col-span-1 xs:text-left sm:text-left md:text-right" data-v-b851b348${_scopeId}>${ssrInterpolate($options.formatDate(page.createdAt))}</p></div><p class="text-base md:text-lg text-slate-200 py-1" data-v-b851b348${_scopeId}>${ssrInterpolate(page.description)}</p><div class="pt-1" data-v-b851b348${_scopeId}><!--[-->`);
          ssrRenderList(page.tag, (tag, index) => {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/tag/" + tag.replace(/\//g, "-"),
              key: index
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="p-1 !py-0.5 mr-1 no-underline transition-colors bg-bluegreen hover:bg-bluegreen-light" data-v-b851b348${_scopeId2}><p class="text-xs md:text-sm no-underline uppercase inline-block m-0" data-v-b851b348${_scopeId2}>${ssrInterpolate(tag)}</p></span>`);
                } else {
                  return [
                    createVNode("span", { class: "p-1 !py-0.5 mr-1 no-underline transition-colors bg-bluegreen hover:bg-bluegreen-light" }, [
                      createVNode("p", { class: "text-xs md:text-sm no-underline uppercase inline-block m-0" }, toDisplayString(tag), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--></div></div>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(list, (page) => {
            return openBlock(), createBlock("div", {
              key: page._path,
              class: "p-3 md:p-4 transition-colors article-card mainborder drop-shadow-sm blogs"
            }, [
              createVNode("div", { class: "grid grid-cols-4" }, [
                (openBlock(), createBlock(_component_NuxtLink, {
                  to: page._path,
                  class: "no-underline col-span-3 xs:col-span-4 sm:col-span-4 md:col-span-3",
                  key: _ctx.$route.path
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-xl md:text-2xl" }, toDisplayString(page.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])),
                createVNode("p", { class: "publishdate col-span-1 text-right xs:col-span-4 sm:col-span-4 md:col-span-1 xs:text-left sm:text-left md:text-right" }, toDisplayString($options.formatDate(page.createdAt)), 1)
              ]),
              createVNode("p", { class: "text-base md:text-lg text-slate-200 py-1" }, toDisplayString(page.description), 1),
              createVNode("div", { class: "pt-1" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(page.tag, (tag, index) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    to: "/tag/" + tag.replace(/\//g, "-"),
                    key: index
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "p-1 !py-0.5 mr-1 no-underline transition-colors bg-bluegreen hover:bg-bluegreen-light" }, [
                        createVNode("p", { class: "text-xs md:text-sm no-underline uppercase inline-block m-0" }, toDisplayString(tag), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/blogposts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogposts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b851b348"]]);
export {
  blogposts as default
};
//# sourceMappingURL=blogposts-f0286c6d.js.map
