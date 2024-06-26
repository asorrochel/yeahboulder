// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  ssr: true,

  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "",
    },
    {
      path: "~/components",
      extensions: [".vue"],
      prefix: "",
    },
    {
      path: "~/components/shared",
      extensions: [".vue"],
      prefix: "",
    },
  ],
});
