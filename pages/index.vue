<template>
    <div class="p-6">
        <h1 class="text-xl font-semibold mb-4">Test Click</h1>
        <button @click="logClick" class="bg-blue-600 text-white px-4 py-2 rounded">
            Hacé click
        </button>
    </div>
</template>

<script setup lang="ts">
const logClick = () => {
    console.log("Click detectado!")
}
console.log("Componente cargado correctamente");
</script>
