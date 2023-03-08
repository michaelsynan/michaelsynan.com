import{W as m,D as v,v as P,an as I,ad as O,ag as S,ah as c,h as p,G as D,S as y,U as r,R,av as V,am as b}from"./query.677335dd.js";import{u as B}from"./asyncData.d890ceae.js";import{_ as i,e as j,b as N,f as k,h as x}from"./entry.e1fa959c.js";import"./ContentSlot.8af143d0.js";import"./blogposts.0c795c0b.js";import"./tagsearch.dcac7ea2.js";/* empty css                      */import"./socials.vue.0d8b1f20.js";import"./ContentDoc.8007e8e1.js";import"./ContentList.fff5b5cc.js";import"./ContentQuery.1e1e0b00.js";import"./ContentRenderer.5cbbea70.js";import"./ContentRendererMarkdown.cbae2d73.js";import"./DocumentDrivenEmpty.7b5a680a.js";import"./DocumentDrivenNotFound.8afb6808.js";import"./Markdown.a15f45ad.js";import"./ProseCode.13f5c9f2.js";import"./page.0b468d77.js";import{u as $}from"./composables.fe705081.js";import"./index.10963069.js";import"./backbutton.370df50f.js";import"./head.531effe7.js";import"./_commonjsHelpers.0ee3bad0.js";const M=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const a=v(null),o=P();return I(u=>{if(!o.isHydrating)return n("error",u),a.value=u,!1}),()=>{var u,_;return a.value?(u=e.error)==null?void 0:u.call(e,{error:a}):(_=e.default)==null?void 0:_.call(e)}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),C=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const a=v(!1);return O(()=>{a.value=!0}),o=>{var l;if(a.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const _=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return S(d,n,_)}}}),E=new WeakMap;function q(t){if(E.has(t))return E.get(t);const e={...t};return e.render?e.render=(n,...a)=>{if(n.mounted$){const o=t.render(n,...a);return o.children===null||typeof o.children=="string"?c(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",n.$attrs??n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,a)=>{var u;const o=v(!1);return O(()=>{o.value=!0}),Promise.resolve(((u=t.setup)==null?void 0:u.call(t,n,a))||{}).then(_=>typeof _!="function"?{..._,mounted$:o}:(...d)=>{if(o.value){const l=_(...d);return l.children===null||typeof l.children=="string"?c(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):p(l)}else return p("div",a.attrs)})},E.set(t,e),e}const H=Object.freeze(Object.defineProperty({__proto__:null,createClientOnly:q,default:C},Symbol.toStringTag,{value:"Module"})),w=m({name:"DevOnly",setup(t,e){return()=>null}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),U=m({name:"ServerPlaceholder",render(){return S("div")}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),G=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=Q({duration:t.duration,throttle:t.throttle}),a=P();return a.hook("page:start",n.start),a.hook("page:finish",n.finish),D(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function Q(t){const e=v(0),n=v(!1),a=y(()=>1e4/t.duration);let o=null,u=null;function _(){l(),e.value=0,t.throttle?u=setTimeout(()=>{n.value=!0,g()},t.throttle):(n.value=!0,g())}function d(){e.value=100,A()}function l(){clearInterval(o),clearTimeout(u),o=null,u=null}function T(L){e.value=Math.min(100,e.value+L)}function A(){l(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function g(){o=setInterval(()=>{T(a.value)},100)}return{progress:e,isLoading:n,start:_,finish:d,clear:l}}const J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),K=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,a)=>($(()=>t({...K(n),...a.attrs},a)),()=>{var o,u;return e?(u=(o=a.slots).default)==null?void 0:u.call(o):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},X=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o;const n={...t},a=(((o=e.default)==null?void 0:o.call(e))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return a&&(n.children=a),{noscript:[n]}})}),Y=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),Z=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),tt=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,o,u;return{title:((u=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:u.children)||null}})}),et=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),rt=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o,u,_;const n={...t},a=(_=(u=(o=e.default)==null?void 0:o.call(e))==null?void 0:u[0])==null?void 0:_.children;return a&&(n.children=a),{style:[n]}})}),it=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,a;return(a=(n=e.slots).default)==null?void 0:a.call(n)}}),ot=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),nt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,Base:Z,Body:nt,Head:it,Html:ot,Link:Y,Meta:et,NoScript:X,Style:rt,Title:tt},Symbol.toStringTag,{value:"Module"}));r(()=>i(()=>import("./alert.926b7955.js"),["./alert.926b7955.js","./ContentSlot.8af143d0.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./backbutton.370df50f.js"),["./backbutton.370df50f.js","./query.677335dd.js","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./blogpostitems-bottom..0df5068a.js"),["./blogpostitems-bottom..0df5068a.js","./backbutton.370df50f.js","./query.677335dd.js","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./blogpostitems.57c96644.js"),["./blogpostitems.57c96644.js","./tags.vue.629e6bc7.js","./query.677335dd.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./head.531effe7.js","./composables.fe705081.js","./publishdate.vue.c354f364.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./blogposts.0c795c0b.js"),["./blogposts.0c795c0b.js","./query.677335dd.js","./ContentList.fff5b5cc.js","./ContentQuery.1e1e0b00.js","./asyncData.d890ceae.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./index.10963069.js","./blogposts.cb501e31.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./publishdate.71b2b17c.js"),["./publishdate.71b2b17c.js","./publishdate.vue.c354f364.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./tags.96417dec.js"),["./tags.96417dec.js","./tags.vue.629e6bc7.js","./query.677335dd.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./head.531effe7.js","./composables.fe705081.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./tagsearch.dcac7ea2.js"),["./tagsearch.dcac7ea2.js","./query.677335dd.js","./backbutton.370df50f.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./ContentList.fff5b5cc.js","./ContentQuery.1e1e0b00.js","./asyncData.d890ceae.js","./index.10963069.js","./tagsearch.d2bc1ad8.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./AboutMenu.9894c935.js"),["./AboutMenu.9894c935.js","./query.677335dd.js","./index.10963069.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./AboutMenu.cc57e140.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./entry.e1fa959c.js").then(t=>t.n),["./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./socials.a36bf8fa.js"),["./socials.a36bf8fa.js","./socials.vue.0d8b1f20.js","./query.677335dd.js","./socials.816eea4f.css","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentDoc.8007e8e1.js"),["./ContentDoc.8007e8e1.js","./query.677335dd.js","./head.531effe7.js","./composables.fe705081.js","./ContentRenderer.5cbbea70.js","./ContentRendererMarkdown.cbae2d73.js","./_commonjsHelpers.0ee3bad0.js","./ContentQuery.1e1e0b00.js","./asyncData.d890ceae.js","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentList.fff5b5cc.js"),["./ContentList.fff5b5cc.js","./ContentQuery.1e1e0b00.js","./query.677335dd.js","./asyncData.d890ceae.js","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentQuery.1e1e0b00.js"),["./ContentQuery.1e1e0b00.js","./query.677335dd.js","./asyncData.d890ceae.js","./entry.e1fa959c.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentRenderer.5cbbea70.js"),["./ContentRenderer.5cbbea70.js","./ContentRendererMarkdown.cbae2d73.js","./query.677335dd.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentRendererMarkdown.cbae2d73.js"),["./ContentRendererMarkdown.cbae2d73.js","./query.677335dd.js","./_commonjsHelpers.0ee3bad0.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ContentSlot.8af143d0.js"),["./ContentSlot.8af143d0.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./DocumentDrivenEmpty.7b5a680a.js"),["./DocumentDrivenEmpty.7b5a680a.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./DocumentDrivenNotFound.8afb6808.js"),["./DocumentDrivenNotFound.8afb6808.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./Markdown.a15f45ad.js"),["./Markdown.a15f45ad.js","./ContentSlot.8af143d0.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseA.39b9930a.js"),["./ProseA.39b9930a.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseBlockquote.ae6d9234.js"),["./ProseBlockquote.ae6d9234.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseCode.13f5c9f2.js"),["./ProseCode.13f5c9f2.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseCodeInline.f9fe731a.js"),["./ProseCodeInline.f9fe731a.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseEm.0d464a85.js"),["./ProseEm.0d464a85.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH1.96a124d2.js"),["./ProseH1.96a124d2.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH2.e6316bfc.js"),["./ProseH2.e6316bfc.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH3.7fa7a571.js"),["./ProseH3.7fa7a571.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH4.cf02c38c.js"),["./ProseH4.cf02c38c.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH5.42ad1548.js"),["./ProseH5.42ad1548.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseH6.69ee3b11.js"),["./ProseH6.69ee3b11.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseHr.c02341dc.js"),["./ProseHr.c02341dc.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseImg.a2f836b7.js"),["./ProseImg.a2f836b7.js","./query.677335dd.js"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseLi.79eaf0cc.js"),["./ProseLi.79eaf0cc.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseOl.f0e10d31.js"),["./ProseOl.f0e10d31.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseP.1da2e159.js"),["./ProseP.1da2e159.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseStrong.fae0b814.js"),["./ProseStrong.fae0b814.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTable.c629b21c.js"),["./ProseTable.c629b21c.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTbody.d609f4fc.js"),["./ProseTbody.d609f4fc.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTd.406efc05.js"),["./ProseTd.406efc05.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTh.06679617.js"),["./ProseTh.06679617.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseThead.9ce2b678.js"),["./ProseThead.9ce2b678.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseTr.bda1beb2.js"),["./ProseTr.bda1beb2.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./ProseUl.eada73b8.js"),["./ProseUl.eada73b8.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./welcome.91f14cf5.js"),["./welcome.91f14cf5.js","./composables.fe705081.js","./query.677335dd.js","./entry.e1fa959c.js","./entry.d844d0d1.css","./asyncData.d890ceae.js","./ContentSlot.8af143d0.js","./blogposts.0c795c0b.js","./ContentList.fff5b5cc.js","./ContentQuery.1e1e0b00.js","./index.10963069.js","./blogposts.cb501e31.css","./tagsearch.dcac7ea2.js","./backbutton.370df50f.js","./tagsearch.d2bc1ad8.css","./socials.vue.0d8b1f20.js","./socials.816eea4f.css","./ContentDoc.8007e8e1.js","./head.531effe7.js","./ContentRenderer.5cbbea70.js","./ContentRendererMarkdown.cbae2d73.js","./_commonjsHelpers.0ee3bad0.js","./DocumentDrivenEmpty.7b5a680a.js","./DocumentDrivenNotFound.8afb6808.js","./Markdown.a15f45ad.js","./ProseCode.13f5c9f2.js","./ProseCode.e63e49c6.css","./page.0b468d77.js","./AboutMenu.cc57e140.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./entry.e1fa959c.js").then(t=>t.l),["./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./query.677335dd.js").then(t=>t.aQ),[],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>i(()=>import("./page.0b468d77.js"),["./page.0b468d77.js","./entry.e1fa959c.js","./query.677335dd.js","./entry.d844d0d1.css"],import.meta.url).then(t=>t.default||t));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));r(()=>i(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const at=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=R(t),n=y(()=>{var o;return typeof((o=e.value)==null?void 0:o.params)=="function"?e.value.params():e.value});if(!n.value&&j("dd-navigation").value){const{navigation:o}=N();return{navigation:o}}const{data:a}=await B(`content-navigation-${x(n.value)}`,()=>k(n.value));return{navigation:a}},render(t){const e=V(),{navigation:n}=t,a=_=>p(b,{to:_._path},()=>_.title),o=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(l=>l.children?p("li",null,[a(l),o(l.children,d+1)]):p("li",null,a(l)))),u=_=>o(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):u(n)}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{at as default};