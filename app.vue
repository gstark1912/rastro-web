<script lang="ts" setup>
</script>

<style scoped>
.el-main {
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bordered {
  border-width: 1px;
  border-style: dashed;
  border-color: #475669;
}
</style>

<template>
  <meta name="theme-color" content="#f7faf8" />
  <NuxtLayout />
</template>

<script setup>
// Configuración PWA
useHead({
  link: [
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ]
})

// Auto-actualización del Service Worker
if (process.client) {
  const { $router } = useNuxtApp()
  
  // Registrar el service worker manualmente si es necesario
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('SW registered: ', registration)
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError)
      }
    })
  }
}
</script>