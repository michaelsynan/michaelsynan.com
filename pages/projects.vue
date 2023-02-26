<script setup>
  import gsap from 'gsap';
  import { onMounted } from "vue";


    definePageMeta({    layout: 'default'  })
    import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid"
    import { useProjectStore } from '~/store/projectStore.js';
    const projectStore = useProjectStore();
    const projects = projectStore.getAllProjects;
    const icons = reactive({
        arrow: ArrowTopRightOnSquareIcon,
    })

  const runtimeConfig = useRuntimeConfig()
  useHead({  title: "Projects" + " | " + runtimeConfig.public.siteName,  
  meta: [    { name: 'description', content: 'Freelance front-end developer and project manager.' }  ],  
  })
  

  onMounted(() => {
  gsap.fromTo("#projects", {opacity: 0, autoAlpha: 0, y: 25},
  { opacity: 1, 
    autoAlpha: 1, 
    ease: "power2",
    duration: 1,
    y: 0
   // stagger: { // wrap advanced options in an object
   //     each: 0.2,
   //     autoAlpha: 1,
   //     from: "start",
   //     grid: "auto",
   //     repeat: 0 // Repeats immediately, not waiting for the other staggered animations to finish
 // } 
});
})

</script>

<template>
    <div class="h-full pt-16 mx-auto text-gray-200 xs:w-5/6 sm:w-3/4 md:w-2/3 w-5/6 ">
        <div id="projects" class="projects grid grid-cols-2 gap-10 xs:gap-6 sm:gap-6 md:gap-10 xs:mb-5 sm:mb-5 md:mb-0">
            <div v-for="(project, index) in projects" class="projects col-span-2 p-0 group md:col-span-1 lg:col-span-1 drop-shadow-sm mainborder projects" :key="index">
                <div>
                    <img :src="project.image" :alt="name" class="transition-all drop-shadow brightness-[.90] group-hover:brightness-100" />
                    <div class="">
                        <div class="grid w-full grid-cols-5 px-3 py-2 bg-neutral-900">
                            <div class="col-span-3 xs:col-span-5 sm:col-span-5 md:col-span-3">
                                <NuxtLink :to="project.link">
                                    <h2 class="transition-colors group-hover:text-gray-100 xs:text-lg sm:text-lg md:text-lg lg:text-lg">
                                        {{ project.name }} 
                                    </h2>
                                </NuxtLink>
                            </div>
                            <div class="col-span-2 xs:col-span-5 sm:col-span-5 md:col-span-2 text-base xs:text-left sm:text-left md:text-right text-right align-text-bottom text-zinc-500 transition-colors group-hover:text-zinc-400 inline-block text-align-middle my-auto">
                                {{ project.responsibility }} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    h2 {
        margin: 0px; padding: 0px;
    }

</style>