<template>
    <div class="min-h-screen bg-[#f7faf8] px-6 py-8 text-gray-800 space-y-6">
        <!-- Header -->
        <header class="flex items-center justify-between">
            <NuxtLink to="/dashboard" class="text-xl">←</NuxtLink>
            <h1 class="text-lg font-semibold text-center flex-grow -ml-6">Revisión Semanal</h1>
        </header>

        <!-- Resultados por marcador -->
        <section>
            <h2 class="text-lg font-semibold mb-4">Cumplimiento por marcador</h2>
            <ul class="space-y-3">
                <li class="rounded-lg p-4 bg-red-100 text-red-700">
                    Alcohol — 3 días (meta: máximo 2)
                </li>
                <li class="rounded-lg p-4 bg-green-100 text-green-700">
                    Meditación — 5 días (meta: mínimo 4)
                </li>
                <li class="rounded-lg p-4 bg-yellow-100 text-yellow-800">
                    Comidas 'malas' — 6 veces (meta: máximo 4)
                </li>
                <li class="rounded-lg p-4 bg-green-100 text-green-700">
                    Porciones extra — 1 vez (meta: máximo 2)
                </li>
            </ul>
        </section>

        <!-- Comparación con semanas anteriores -->
        <section>
            <h2 class="text-lg font-semibold mt-6 mb-2">Evolución de cumplimiento</h2>
            <ClientOnly>
                <LineChart />
            </ClientOnly>
        </section>

        <!-- Reflexión -->
        <section>
            <h2 class="text-lg font-semibold mt-6 mb-2">Reflexión</h2>
            <p class="text-sm leading-relaxed">
                Esta semana mostraste esfuerzo y consistencia en varios aspectos importantes.
                Lograste meditar incluso más de lo esperado, y mantuviste el control con las porciones extra.
                Sin embargo, el consumo de alcohol y las comidas menos saludables se mantuvieron por encima de tus
                metas.
                No se trata de culparse, sino de observar: ¿qué situaciones te llevaron a esos desvíos?
                La próxima semana puede ser una oportunidad para ajustar hábitos sin perder el avance ganado.
                Recordá que el progreso no es lineal, pero tu compromiso se nota.
            </p>
        </section>

        <!-- Botones de decisión -->
        <div class="space-y-3">
            <button @click="console.log('ajustarMetas')"
                class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg border border-gray-300 font-medium">
                Ajustar metas
            </button>
            <button @click="console.log('seguirCompromiso')"
                class="w-full bg-green-100 hover:bg-green-200 text-green-800 py-3 rounded-lg border border-green-300 font-medium">
                Seguir
            </button>
            <button @click="console.log('cancelarProyecto')"
                class="w-full bg-red-100 hover:bg-red-200 text-red-800 py-3 rounded-lg border border-red-300 font-medium">
                Cancelar proyecto
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import LineChart from '~/components/LineChart.vue'
</script>
