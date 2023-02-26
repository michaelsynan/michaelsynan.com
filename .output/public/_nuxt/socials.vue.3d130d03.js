import{W as Lt,h as tt}from"./query.9163927d.js";const k=/^[a-z0-9]+(-[a-z0-9]+)*$/,_=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!M(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!M(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!M(c,n)?null:c}return null},M=(t,e)=>t?!!((t.provider===""||t.provider.match(k))&&(e&&t.prefix===""||t.prefix.match(k))&&t.name.match(k)):!1,gt=Object.freeze({left:0,top:0,width:16,height:16}),O=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),A=Object.freeze({...gt,...O}),B=Object.freeze({...A,body:"",hidden:!1});function Ft(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function et(t,e){const n=Ft(t,e);for(const r in B)r in O?r in t&&!(r in n)&&(n[r]=O[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Ot(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function _t(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=et(r[c]||o[c],i)}return s(e),n.forEach(s),et(t,i)}function mt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Ot(t);for(const o in r){const i=r[o];i&&(e(o,_t(t,o,i)),n.push(o))}return n}const At={provider:"",aliases:{},not_found:{},...gt};function R(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function yt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!R(t,At))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(k)||typeof i.body!="string"||!R(i,B))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(k)||typeof s!="string"||!n[s]&&!r[s]||!R(i,B))return null}return e}const nt=Object.create(null);function Nt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function S(t,e){const n=nt[t]||(nt[t]=Object.create(null));return n[e]||(n[e]=Nt(t,e))}function G(t,e){return yt(e)?mt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Dt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let T=!1;function bt(t){return typeof t=="boolean"&&(T=t),T}function Rt(t){const e=typeof t=="string"?_(t,!0,T):t;if(e){const n=S(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function zt(t,e){const n=_(t,!0,T);if(!n)return!1;const r=S(n.provider,n.prefix);return Dt(r,n.name,e)}function Bt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),T&&!e&&!t.prefix){let o=!1;return yt(t)&&(t.prefix="",mt(t,(i,s)=>{s&&zt(i,s)&&(o=!0)})),o}const n=t.prefix;if(!M({provider:e,prefix:n,name:"a"}))return!1;const r=S(e,n);return!!G(r,t)}const wt=Object.freeze({width:null,height:null}),xt=Object.freeze({...wt,...O}),Qt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$t=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ot(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Qt);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=$t.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function qt(t,e){const n={...A,...t},r={...xt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(y=>{const g=[],b=y.hFlip,a=y.vFlip;let w=y.rotate;b?a?w+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):a&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let m;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:m=o.height/2+o.top,g.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:m=o.width/2+o.left,g.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}w%2===1&&(o.left!==o.top&&(m=o.left,o.left=o.top,o.top=m),o.width!==o.height&&(m=o.width,o.width=o.height,o.height=m)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?f:c,u=ot(d,l/f)):(u=s==="auto"?l:s,d=c===null?ot(u,f/l):c==="auto"?f:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString()},body:i}}const Ht=/\sid="(\S+)"/g,Vt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ut=0;function Gt(t,e=Vt){const n=[];let r;for(;r=Ht.exec(t);)n.push(r[1]);return n.length&&n.forEach(o=>{const i=typeof e=="function"?e(o):e+(Ut++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const Q=Object.create(null);function Kt(t,e){Q[t]=e}function $(t){return Q[t]||Q[""]}function K(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const W=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;C.length>0;)C.length===1||Math.random()>.5?L.push(C.shift()):L.push(C.pop());W[""]=K({resources:["https://api.iconify.design"].concat(L)});function Wt(t,e){const n=K(e);return n===null?!1:(W[t]=n,!0)}function J(t){return W[t]}const Jt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let rt=Jt();function Xt(t,e){const n=J(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function Yt(t){return t===404}const Zt=(t,e,n)=>{const r=[],o=Xt(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function te(t){if(typeof t=="string"){const e=J(t);if(e)return e.path}return"/"}const ee=(t,e,n)=>{if(!rt){n("abort",424);return}let r=te(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;rt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Yt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ne={prepare:Zt,send:ee};function oe(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=S(i,s));let u;c in f.icons?u=e.loaded:s===""||f.missing.has(c)?u=e.missing:u=e.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),e}function It(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function re(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||It([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ie=0;function se(t,e,n){const r=ie++,o=It.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ce(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?_(o,e,n):o;i&&r.push(i)}),r}var le={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function fe(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let h=t.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",f=0,u,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function g(){d&&(clearTimeout(d),d=null)}function b(){l==="pending"&&(l="aborted"),g(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function a(h,x){x&&(y=[]),typeof h=="function"&&y.push(h)}function w(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:p.length,subscribe:a,abort:b}}function m(){l="failed",y.forEach(h=>{h(void 0,u)})}function Z(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Mt(h,x,v){const P=x!=="success";switch(p=p.filter(I=>I!==h),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=v,m();return}if(P){u=v,p.length||(s.length?D():m());return}if(g(),Z(),!t.random){const I=t.resources.indexOf(h.resource);I!==-1&&I!==t.index&&(t.index=I)}l="completed",y.forEach(I=>{I(v)})}function D(){if(l!=="pending")return;g();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{g(),l==="pending"&&(Z(),m())},t.timeout);return}m();return}const x={status:"pending",resource:h,callback:(v,P)=>{Mt(x,v,P)}};p.push(x),f++,d=setTimeout(D,t.rotate),n(h,e,x.callback)}return setTimeout(D),w}function St(t){const e={...le,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const u=fe(e,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function it(){}const z=Object.create(null);function ue(t){if(!z[t]){const e=J(t);if(!e)return;const n=St(e),r={config:e,redundancy:n};z[t]=r}return z[t]}function ae(t,e,n){let r,o;if(typeof t=="string"){const i=$(t);if(!i)return n(void 0,424),it;o=i.send;const s=ue(t);s&&(r=s.redundancy)}else{const i=K(t);if(i){r=St(i);const s=t.resources?t.resources[0]:"",c=$(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),it):r.query(e,o,n)().abort}const st="iconify2",j="iconify",vt=j+"-count",ct=j+"-version",Ct=36e5,de=168;function q(t,e){try{return t.getItem(e)}catch{}}function X(t,e,n){try{return t.setItem(e,n),!0}catch{}}function lt(t,e){try{t.removeItem(e)}catch{}}function H(t,e){return X(t,vt,e.toString())}function V(t){return parseInt(q(t,vt))||0}const N={local:!0,session:!0},kt={local:new Set,session:new Set};let Y=!1;function he(t){Y=t}let E=typeof window>"u"?{}:window;function Tt(t){const e=t+"Storage";try{if(E&&E[e]&&typeof E[e].length=="number")return E[e]}catch{}N[t]=!1}function jt(t,e){const n=Tt(t);if(!n)return;const r=q(n,ct);if(r!==st){if(r){const c=V(n);for(let l=0;l<c;l++)lt(n,j+l.toString())}X(n,ct,st),H(n,0);return}const o=Math.floor(Date.now()/Ct)-de,i=c=>{const l=j+c.toString(),f=q(n,l);if(typeof f=="string"){try{const u=JSON.parse(f);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}lt(n,l)}};let s=V(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,H(n,s)):kt[t].add(c))}function Pt(){if(!Y){he(!0);for(const t in N)jt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=S(r,o);if(!G(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function pe(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in N)jt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function ge(t,e){Y||Pt();function n(r){let o;if(!N[r]||!(o=Tt(r)))return;const i=kt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=V(o),!H(o,s+1))return;const c={cached:Math.floor(Date.now()/Ct),provider:t.provider,data:e};return X(o,j+s.toString(),JSON.stringify(c))}e.lastModified&&!pe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ft(){}function me(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,re(t)}))}function ye(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=$(n)))return;i.prepare(n,r,o).forEach(c=>{ae(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=G(t,l);if(!f.length)return;const u=t.pendingIcons;u&&f.forEach(d=>{u.delete(d)}),ge(t,l)}catch(f){console.error(f)}me(t)})})}))}const be=(t,e)=>{const n=ce(t,!0,bt()),r=oe(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,ft)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:u}=l;if(u===c&&f===s)return;s=f,c=u,i.push(S(f,u));const d=o[f]||(o[f]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:u,name:d}=l,p=S(f,u),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[f][u].push(d))}),i.forEach(l=>{const{provider:f,prefix:u}=l;o[f][u].length&&ye(l,o[f][u])}),e?se(e,r,i):ft};function we(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in wt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const xe=/[\s,]+/;function Ie(t,e){e.split(xe).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Se(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function ve(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ce(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ke(t){return'url("data:image/svg+xml,'+Ce(t)+'")'}const ut={...xt,inline:!1},Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},je={display:"inline-block"},U={backgroundColor:"currentColor"},Et={backgroundColor:"transparent"},at={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},dt={webkitMask:U,mask:U,background:Et};for(const t in dt){const e=dt[t];for(const n in at)e[t+n]=at[n]}const F={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";F[t+"-flip"]=e,F[t.slice(0,1)+"-flip"]=e,F[t+"Flip"]=e});function ht(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const pt=(t,e)=>{const n=we(ut,e),r={...Te},o=e.mode||"svg",i={},s=e.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let b in e){const a=e[b];if(a!==void 0)switch(b){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[b]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&Ie(n,a);break;case"color":i.color=a;break;case"rotate":typeof a=="string"?n[b]=Se(a):typeof a=="number"&&(n[b]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete r["aria-hidden"];break;default:{const w=F[b];w?(a===!0||a==="true"||a===1)&&(n[w]=!0):ut[b]===void 0&&(r[b]=a)}}}const l=qt(t,n),f=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),o==="svg"){r.style={...i,...c},Object.assign(r,f);let b=0,a=e.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),r.innerHTML=Gt(l.body,a?()=>a+"ID"+b++:"iconifyVue"),tt("svg",r)}const{body:u,width:d,height:p}=t,y=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),g=ve(u,{...f,width:d+"",height:p+""});return r.style={...i,"--svg":ke(g),width:ht(f.width),height:ht(f.height),...je,...y?U:Et,...c},tt("span",r)};bt(!0);Kt("",ne);if(typeof document<"u"&&typeof window<"u"){Pt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Bt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Wt(n,o)||console.error(r)}catch{console.error(r)}}}}const Pe={...A,body:""},Me=Lt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=_(t,!1,!0))===null)return this.abortLoading(),null;const r=Rt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:be([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return pt(Pe,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),pt({...A,...e.data},n)}});export{Me as I};
