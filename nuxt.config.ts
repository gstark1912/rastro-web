// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      suppressWarnings: true,
    },
    workbox: {
      navigateFallback: '/', globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    manifest: {
      name: 'Rastro',
      short_name: 'Rastro',
      description: 'Tu camino hacia una vida con intención.',
      theme_color: '#f7faf8',
      background_color: '#f7faf8',
      display: 'standalone',
      start_url: '/dashboard',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  }
})
