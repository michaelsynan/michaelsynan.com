import a from"./tagsearch.f131b4a8.js";import{k as s,b as r,c as i}from"./entry.9bfbf56a.js";import{u as n}from"./head.023e7388.js";import{W as m,a1 as c,af as p,ag as u,ak as g}from"./query.43076284.js";import"./backbutton.ed5e9451.js";import"./ContentList.67d6d1e4.js";import"./ContentQuery.da6df0fa.js";import"./asyncData.60b4d312.js";import"./index.10963069.js";import"./composables.3f782a67.js";const d=s("tagStore",{state:()=>({tags:[{id:1,name:"Obsidian",description:"Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",featured:!0},{id:2,name:"Nuxt",description:"This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum."},{id:3,name:"Content",description:"Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",featured:!0},{id:4,name:"Discord Price Bot",image:"/github.jpeg",placeholder:"./github_place.jpg",description:"I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",tech:["Python"],link:"https://github.com",responsibility:"Developer"}]}),getters:{getAllTags:e=>e.tags,getFeaturedTags:e=>e.tags.filter(t=>tags.Projectfeatured)}}),l={class:"!bg-gradient"},P=m({__name:"[tag]",setup(e){const{page:t}=r();return n(t),c(),i().params.tag,d().getAllTags,(_,b)=>{const o=a;return p(),u("main",l,[g(o)])}}});export{P as default};