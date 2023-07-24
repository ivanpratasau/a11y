// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: '/a11y/'
  },
  content: {
    highlight: {
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    },
    markdown: {

      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true
        },

        // Disable remark-gfm
        'remark-gfm': false,

        // Add remark-oembed
        'remark-oembed': {
          // Options
        }
      },

      // Array syntax can be used to add plugins
      rehypePlugins: [
        'rehype-figure'
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
