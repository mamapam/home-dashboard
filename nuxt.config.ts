// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
  runtimeConfig: {
    weatherApiKey: '',
    latitude: '',
    longitude: '',
    public: {
      camera1: '',
      camera2: '',
      camera3: ''
    }
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
        indent: 2,
        commaDangle: 'never',
        braceStyle: 'allman'
      }
    }
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  tailwindcss: {
    cssPath: '~assets/css/tailwind.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            body: ['Inter']
          },
          colors: {
            'dark-100': '#121212',
            'dark-200': '#282828',
            'primary-500': '#94a3b8',
            'mixed-600': '#908d96'
          },
          fontSize: {
            '3.5xl': '32px'
          },
          gridTemplateRows: {
            16: 'repeat(16, minmax(0, 1fr));'
          }
        }
      }
    }
  }
});
