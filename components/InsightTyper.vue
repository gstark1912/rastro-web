<template>
    <p class="text-sm leading-relaxed mb-6 whitespace-pre-line">
        {{ displayedText }}<span v-if="isTyping" class="animate-pulse">_</span>
    </p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    text: string
    speed?: number
}>()

const displayedText = ref('')
const index = ref(0)
const isTyping = ref(true)

onMounted(() => {
    const interval = setInterval(() => {
        if (index.value < props.text.length) {
            displayedText.value += props.text.charAt(index.value)
            index.value++
        } else {
            clearInterval(interval)
            isTyping.value = false
        }
    }, props.speed || 50)
})
</script>

<style scoped>
/* Acentuamos el parpadeo del cursor */
.animate-pulse {
    animation: pulse 1s steps(2, start) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1
    }

    50% {
        opacity: 0
    }
}
</style>
