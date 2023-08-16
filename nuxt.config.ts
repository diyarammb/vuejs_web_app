// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  app: {
    head: {
      title: "EtechFlow",
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
