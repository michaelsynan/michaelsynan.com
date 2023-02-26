import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Brew Factory",
        image: "/brewfactory.jpeg",
        placeholder: "./brewfactory_place.jpg",
        description:
          "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
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
        description:
          "This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum.",
        tech: ["Vue.js", "Nuxt", "Bootstrap.js"],
        link: "https://bigcitydogwalkers.com/",
        responsibility: "Developer"
      },
      {
        id: 3,
        name: "Kawakami",
        image: "/kawakami.png",
        placeholder: "./kawakami_place.jpg",
        description:
          "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
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
        description:
          "I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",
        tech: ["Python"],
        link: "https://github.com/letsbecomehuman/discord-price-bot",
        responsibility: "Developer"
      },

    ],
    grave: [
      {
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
