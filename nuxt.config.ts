export default defineNuxtConfig({
  target: 'static',
  runtimeConfig: {
    public: {    
      siteName: 'Michael Synan'} 
    },
  app: { //  layoutTransition: { name: 'page', mode: 'out-in' },
        //  pageTransition: { name: 'page', mode: 'out-in' },
          head: {    meta: [      
            { name: 'title', content: 'THIS IS THE SITEWIDE TITLE' }    
          ]}
        },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content',
            '@pinia/nuxt',

            ],
  content: {    
    documentDriven: true,
  },
  postcss: {
    plugins: {
    tailwindcss: {},
    autoprefixer: {},
}
},
build: {
  transpile: ['@heroicons/vue']
}

})
