<template>
    <ContentList v-slot="{ list }" path="/blog" :use="$slots.default" :where="{ tag: { $contains: searchedtag }, status: 'published' }">
      <h1 class="text-3xl md:text-4xl">
        Tag Search: {{ searchedtag }} 
      </h1>
      <div v-for="article in list" :key="article._path" class="p-3 md:p-4 transition-colors article-card mainborder drop-shadow-sm blogs">
        <div class="grid grid-cols-4">
          <NuxtLink :to="article._path" class="no-underline col-span-3 xs:col-span-4 sm:col-span-4 md:col-span-3" :key="$route.path" >   
            <h2 class="text-xl md:text-2xl">
              {{ article.title }}
            </h2>
          </NuxtLink>
          <span class="publishdate col-span-1 text-right xs:col-span-4 sm:col-span-4 md:col-span-1 xs:text-left sm:text-left md:text-right"> 
            {{ formatDate(article.createdAt) }}
          </span>
        </div>
        <p class="text-base md:text-lg text-slate-200 py-1">
          {{ article.description }}
        </p>
        <div class="pt-1">
          <NuxtLink :to="'/tag' + '/' + tag.replace(/\//g, '-')" v-for="(tag, index) in article.tag" :key="index">
            <span class="p-1 !py-0.5 mr-1 no-underline transition-colors bg-bluegreen hover:bg-bluegreen-light">
                <p class="text-xs md:text-sm no-underline uppercase inline-block m-0">{{ tag }}</p>
            </span> 
        </NuxtLink>
        </div>
      </div>
      <div class="mb-20 ">
        <backbutton /> 
      </div>
    </ContentList>
</template>

<script>
  import gsap from 'gsap';
  import { onMounted } from "vue";
  import { useRoute } from 'vue-router'
  const route = useRoute()

  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    },
 
    setup(){
      onMounted(() => {
      gsap.fromTo(".blogs", {y: 25, opacity: 0, autoAlpha: 0}, {
   duration: .5,
    y: 0,
    opacity: 1,
    ease: "power2",
    autoAlpha: 1
 });
 
})
      const route = useRoute()
      const searchedtag = route.params.tag.replace(/\-/g, '/')
      return { searchedtag }

    },

    methods: {
      formatDate(date) {
        // format the date to be displayed in a readable format
        return new Date(date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      },
    },
  }
  
</script>

<style scoped>

  /** update tag search section */
  h2 {
    margin: 0px !important;
    padding: 0px 0px 5px 0px !important;
  }

  p { 
    /* padding: 0px 0px; */
    margin: 0px !important;
  }
  
</style>