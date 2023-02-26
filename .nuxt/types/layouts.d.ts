import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "index" | "post"
declare module "/home/mikey/git/michaelsynancom/node_modules/.pnpm/nuxt@3.1.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}