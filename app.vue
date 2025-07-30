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
</script>