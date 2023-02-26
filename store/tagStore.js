import { defineStore } from "pinia";

export const useTagStore = defineStore("tagStore", {
  state: () => ({
    tags: [
      {
        id: 1,
        name: "Obsidian",
        description:
          "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
        featured: true,
      },
      {
        id: 2,
        name: "Nuxt",
        description:
          "This is a small side-business that I helped build for Dog Walking in NYC. Lorem ipsum lorem ipsum.",
      },
      {
        id: 3,
        name: "Content",
        description:
          "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
        featured: true,
      },
      {
        id: 4,
        name: "Discord Price Bot",
        image: "/github.jpeg",
        placeholder: "./github_place.jpg",
        description:
          "I built a cool discord price bot that uses the CoinGecko price feed. Lorem ipsum. Lorem ipsum.",
        tech: ["Python"],
        link: "https://github.com",
        responsibility: "Developer"
      },

    ],
  }),
  getters: {
    getAllTags: (state) => state.tags,
    getFeaturedTags: (state) =>
      state.tags.filter((name) => tags.Projectfeatured),
  },
});
