import{_ as n}from"./entry.c897cd52.js";import{U as o,af as f,ai as g,as as E,at as k,H as s}from"./query.9163927d.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:e}=c;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),a=r===404,i=e.statusMessage??(a?"Page Not Found":"Internal Server Error"),u=e.message||e.toString(),p=void 0,_=o(()=>n(()=>import("./error-404.44d839ba.js"),["./error-404.44d839ba.js","./query.9163927d.js","./composables.e8062d89.js","./entry.c897cd52.js","./entry.333688f6.css","./error-404.8ccf2fec.css"],import.meta.url).then(t=>t.default||t)),l=o(()=>n(()=>import("./error-500.2e2b65c7.js"),["./error-500.2e2b65c7.js","./composables.e8062d89.js","./query.9163927d.js","./entry.c897cd52.js","./entry.333688f6.css","./error-500.42b82e7a.css"],import.meta.url).then(t=>t.default||t)),m=a?_:l;return(t,d)=>(f(),g(s(m),E(k({statusCode:s(r),statusMessage:s(i),description:s(u),stack:s(p)})),null,16))}},h=P;export{h as default};