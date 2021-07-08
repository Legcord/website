export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ArmCord - A Discord Client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        image:
          "https://repository-images.githubusercontent.com/313312687/3835ca80-b41e-11eb-94ab-d3c7763d812a",
        content: "A custom Discord client for Linux ARM devices!",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-social-meta",
      {
        url: "https://armcord.vercel.app/",
        title: "ArmCord - A Discord Client",
        site_name: "ArmCord",
        description:
          "ArmCord is a custom Discord client made for people who want a Discord client for Arm64 systems, or for those who just want a lighter alternative or simply want a standalone Discord client.",
        img_size: { width: "640", height: "320" },
        img: "https://armcord.vercel.app/banner.png",
        locale: "en_US",
        twitter: "@kckarnige",
        twitter_card: "summary_large_image",
        theme_color: "#7289da",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
