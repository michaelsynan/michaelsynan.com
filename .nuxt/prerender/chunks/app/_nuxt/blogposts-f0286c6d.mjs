import _sfc_main$1 from './ContentList-f008f177.mjs';
import { _ as __nuxt_component_0 } from './query-799a057b.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/index.mjs';
import { useRoute } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.45/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/mikey/git/michaelsynancom/node_modules/.pnpm/vue@3.2.45/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

export { blogposts as default };
//# sourceMappingURL=blogposts-f0286c6d.mjs.map
