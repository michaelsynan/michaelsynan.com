import{R as l,g as u,i as f,j as m,T as y}from"./entry.c897cd52.js";import{h as r,aD as g,W as c,v as d,S as v,X as A,M as K,ao as k,y as T,aE as _}from"./query.9163927d.js";const h=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var t;return((t=e.params[n.slice(1)])==null?void 0:t.toString())||""}),C=(e,a)=>{const n=e.route.matched.find(o=>{var i;return((i=o.components)==null?void 0:i.default)===e.Component.type}),t=a??(n==null?void 0:n.meta.key)??(n&&h(e.route,n));return typeof t=="function"?t(e.route):t},w=(e,a)=>({default:()=>e?r(g,e===!0?{}:e,a):a}),b=c({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const n=d();return()=>r(l,{name:e.name,route:e.route,...a},{default:t=>{if(!t.Component)return;const o=C(t,e.pageKey),i=n.deferHydration(),s=!!(e.transition??t.route.meta.pageTransition??u),p=s&&R([e.transition,t.route.meta.pageTransition,u,{onAfterLeave:()=>{n.callHook("page:transition:finish",t.Component)}}].filter(Boolean));return f(y,s&&p,w(e.keepalive??t.route.meta.keepalive??m,r(k,{onPending:()=>n.callHook("page:start",t.Component),onResolve:()=>{T(()=>n.callHook("page:finish",t.Component).finally(i))}},{default:()=>r(S,{key:o,routeProps:t,pageKey:o,hasTransition:s})}))).default()}})}});function x(e){return Array.isArray(e)?e:e?[e]:[]}function R(e){const a=e.map(n=>({...n,onAfterLeave:x(n.onAfterLeave)}));return _(...a)}const S=c({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,n=e.routeProps.route,t={};for(const o in e.routeProps.route)t[o]=v(()=>a===e.pageKey?e.routeProps.route[o]:n[o]);return A("_route",K(t)),()=>r(e.routeProps.Component)}});export{b as default};
